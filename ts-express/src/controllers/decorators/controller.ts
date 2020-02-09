import "reflect-metadata";
import { Router } from "express";
/**
 * Controller - iterate through all the properties of the class's prototype
 * And check to see if they have any metadata information associated with them
 * if yes, then it will take that metadata and associate it with express router
 */
export const router = Router();

export function controller(routePrefix: string) {
  return function(target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; //LoginController.getLogin
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
