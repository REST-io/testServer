import express from "express";
import * as appService from "./app.service.js";

const appController = express.Router();

appController.post("/", appService.executeDeploymentScripts);

export default appController;
