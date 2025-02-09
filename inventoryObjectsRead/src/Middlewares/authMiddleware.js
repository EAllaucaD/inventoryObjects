const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const { getUserRole } = require('../controllers/inventoryController');

dotenv.config();

async function authorize(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const role = await getUserRole(decoded.idVolunteer);

        if (!['admin', 'manager'].includes(role)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        req.user = { idVolunteer: decoded.idVolunteer, role };
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = { authorize };