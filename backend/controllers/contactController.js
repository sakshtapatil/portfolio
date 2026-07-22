const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const contact = new Contact(req.body);

    await contact.save();

    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};