import "reflect-metadata";

import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

/**
 * Controller - iterate through all the properties of the class's prototype
 * And check to see if they have any metadata information associated with them
 * if yes, then it will take that metadata and associate it with express router
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
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
