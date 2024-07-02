const express = require('express');
const router = express.Router();
const IpAddress = require('../models/IpAddress');

router.get('/fito', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const newIp = new IpAddress({ ip });

    try {
        await newIp.save();
        res.send('IP capturada');
    } catch (err) {
        res.status(500).send('Error al capturar la IP');
    }
});

module.exports = router;
