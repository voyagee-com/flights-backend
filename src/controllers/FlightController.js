const amadeus = require('../amadeusAPI')

module.exports = {
  async index(request, response) {

    const { originLocationCode, destinationLocationCode, departureDate, returnDate, adults } = request.query

    let flights = [];
    await amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults
    }).then(function(response){
      flights = response.data;
    })
    .catch(function(responseError){
      flights = responseError.description;
    });

    return response.json(flights)
  }

  // async create(request, response) {
  //   const { name, email, whatsapp, city, uf } = request.body
  //   const id = crypto.randomBytes(4).toString('HEX');

  //   await connection('ongs').insert({ id, name, email, whatsapp, city, uf })

  //   return response.json({ id });
  // }
}
