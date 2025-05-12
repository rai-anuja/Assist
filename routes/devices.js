const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

router.get('/', async (req, res) => res.json(await Device.find()));
router.post('/', async (req, res) => {
  const device = new Device(req.body);
  await device.save();
  res.json(device);
});
router.put('/:id/toggle', async (req, res) => {
  const device = await Device.findById(req.params.id);
  device.isOn = !device.isOn;
  await device.save();
  res.json(device);
});

module.exports = router;
