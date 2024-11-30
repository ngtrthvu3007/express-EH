import { EVENT_MESSAGES } from "../constants/messages/event.messages.js";
import EventServices from "../services/event.services.js";

export const createEventController = async (req, res) => {
  const result = await EventServices.create(req.body);
  console.log(result);
  return res.json({
    message: EVENT_MESSAGES.create_event_success,
    result,
  });
};

export const updateEventController = async (req, res) => {
  const user = req.body;
  const result = await EventServices.update(user);
  return res.json({
    message: EVENT_MESSAGES.update_event_success,
    result,
  });
};

export const getEventController = async (req, res) => {
  const result = await EventServices.get();
  return res.json({
    message: EVENT_MESSAGES.get_event_success,
    result,
  });
};
