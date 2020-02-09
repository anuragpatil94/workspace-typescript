import "reflect-metadata";

import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler, NextFunction, Request, Response } from "express";

function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Invalid Request: Missing Property ${key}`);
        return;
      }
    }
    next();
  };
}

/**
 * Controller - iterate through all the properties of the class's prototype
 * And check to see if they have any metadata information associated with them
 * if yes, then it will take that metadata and associate it with express router
 *
 *
 * * FOR ANY CONTROLLER TARGET IS CONSTRUCTOR FUNCTION
 */
export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    /**
     * For each function/property we are checking for path and method metadata
     * which we defined and then assign the http method for the path and its
     * routeHandler which is the function it is currently looking at.
     */
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; //LoginController.getLogin
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      // Reflect.getMetadata returns a any type which creates an issue because
      // we want router to only take crud functions like get post
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
