const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header) return res.status(401).json({ error: 'Not authorized' });

        const token = header.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Not authorized' })

        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) return res.status(401).json({ error: 'Not authorized' });
            req.body.userId = payload.id;
            next();
        });
    } catch (err) {
        res.status(401).json({ error: 'Not authorized' });
    }
}

module.exports = auth;