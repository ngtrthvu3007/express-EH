import dotenv from "dotenv";
import Event from "../models/Event.model.js";
dotenv.config();

const create = async (event_params) => {
  const new_event = await Event.create(event_params);
  console.log("new_event: ", new_event);
  return new_event;
};

const update = async (event_id) => {
  const event = await Event.findById(event_id);
  return event;
};

const get = async () => {
  const events = await Event.find();
  return events;
};

export default {
  create,
  update,
  get,
};
