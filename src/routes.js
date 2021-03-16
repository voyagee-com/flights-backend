const express = require('express');

const FlightController = require('./controllers/FlightController')
const HotelController = require('./controllers/HotelController')
// const OngController = require('./controllers/OngController');
// const IncidentController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController');
// const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/flights', FlightController.index);
routes.get('/hotels', HotelController.index);

/** Routes of Ongs */
// routes.get('/ongs', OngController.index);
// routes.post('/ongs', OngController.create);

/** Routes of Incidents */
// routes.get('/incidents', IncidentController.index);
// routes.post('/incidents', IncidentController.create);
// routes.delete('/incidents/:id', IncidentController.delete);

/** Routes from Profiles */
// routes.get('/profile', ProfileController.index);

/** Routes of Session (Login) */
// routes.post('/sessions', SessionController.create)


module.exports = routes
