// This is created so that we don't have to create multiple instances of Router.
// For example in express or in controllers

import { Router } from "express";
/**
 * This will make is a singleton class. so that we are only working with one router
 */
export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }
    return AppRouter.instance;
  }
}
