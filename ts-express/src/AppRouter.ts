// This is created so that we don't have to create multiple instances of Router.
// For example in express or in controllers

import express from "express";
/**
 * This will make is a singleton class. so that we are only working with one router
 */
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }
    return AppRouter.instance;
  }
}
