import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    // host: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User", // Reference to the User model for the event organizer
    //   required: [true, "Organizer is required"],
    // },
    location: {
      type: String, // Physical location or "Online"
      required: [true, "Event location is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after start date",
      },
    },
    isOnline: {
      type: Boolean,
      default: false, // False means it's a physical event by default
    },
    url: {
      type: String, // URL for online events (e.g., Zoom link)
      validate: {
        validator: function (value) {
          return this.isOnline ? /^https?:\/\/.+$/.test(value) : true;
        },
        message: "A valid URL is required for online events",
      },
    },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model for attendees
      },
    ],
    // status: {
    //   type: String,
    //   enum: ["Scheduled", "Ongoing", "Completed", "Cancelled"],
    //   default: "Scheduled",
    // },
    categories: [
      {
        type: String, // Tags or categories like "Workshop", "Conference", "Meetup"
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
