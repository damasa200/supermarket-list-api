const express = require("express");
const ListItem = require('../models/ListItems');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/list_items", async (req, res) => {
  try {
    const items = await ListItem.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/list_items", async (req, res) => {
  try {
    const { name, quantity, checked } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({
        error: 'Nome é obrigatório e deve conter ao menos 3 caracteres',
      });
    }

    if (!quantity || typeof quantity !== 'number') {
      return res.status(400).json({
        error: 'A quantidade é obrigatória e precisa ser um número',
      });
    }

    const newItem = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
    });

    return res.json(newItem);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.delete("/list_items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ListItemDeleted = await ListItem.findByIdAndDelete(id);
    return res.json(ListItemDeleted);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.put("/list_items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ListItemUpdated = await ListItem.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        quantity: req.body.quantity,
        checked: req.body.checked,
      },
      { new: true }
    );
    return res.json(ListItemUpdated);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;

