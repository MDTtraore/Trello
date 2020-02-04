const { Service } = require('feathers-nedb');
const uuid = require('uuid-random');

exports.Card = class Card extends Service {
  create (data, params) {

    ///generating a uniq id
    const ref = uuid();

    //complete the initialisation by adding missing information
    const cardData = {
      ...data,
      members: [],
      ref,
    };

    return super.create(cardData, params);

  }
  
};
