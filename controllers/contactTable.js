import Contact from "../models/contactdata.js";

export const getAllData = async (req, res) => {
  try {
    const reservations = await Contact.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const savingContactUs = async (req, res) => {
  try {
    console.log(req.body);
    const reservation = new Contact(req.body);
    console.log(reservation);
    await reservation.save();

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: "Could not create reservation " });
  }
};
