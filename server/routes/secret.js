const express = require('express');
const crypto = require('crypto');
const router = express.Router();

// Generate and return a secret key
router.get('/generateSecretKey', (req, res) => {
    const secretKey = crypto.randomBytes(32).toString('hex');
    res.json({ secretKey });
});

module.exports = router;
