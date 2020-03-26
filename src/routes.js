const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const router = express.Router();

// router.get('/ongs', async (request, response) => {
//     const ongs = await connection('ongs').select('*');
//     return response.json(ongs);
// });

router.post('/sessions', SessionController.create);

router.get('/ongs', OngController.index);
router.post('/ongs', OngController.create);

router.get('/profile', ProfileController.index);

router.post('/incidents', IncidentController.create);
router.get('/incidents', IncidentController.index);
router.delete('/incidents/:id', IncidentController.delete);

module.exports = router;

