const Event = require('../models/Event');

// Create an event
exports.createEvent = async (req, res) => {
  const { title, description, date, location, maxAttendees } = req.body;
  try {
    const newEvent = new Event({
      title, description, date, location, maxAttendees, creator: req.user.id
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create event' });
  }
};

// View all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ error: 'Failed to retrieve events' });
  }
};
