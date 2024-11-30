import { Router } from "express";
import { createEventController, getEventController, updateEventController } from "../controllers/event.controllers.js";
import wrapError from "../utils/wrapError.js";

const eventRouter = Router();

eventRouter.post("/create", wrapError(createEventController));
eventRouter.post("/update", wrapError(updateEventController));
eventRouter.get("/get", wrapError(getEventController));

export default eventRouter;
