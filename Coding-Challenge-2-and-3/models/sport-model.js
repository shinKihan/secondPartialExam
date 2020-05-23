const mongoose = require( 'mongoose' );
const uuid = require('uuid')

/* Your code goes here */
const sportsSchema = mongoose.Schema({
  id: {
    type: String
  },

  name: {
    type: String
  },

  num_players: {
    type: Number
  }
})

const sportCollection = mongoose.model('sports', sportSchema);

const sports = {
  deleteSport: function(id) {
    filter = {
      id:id
    }
    return sportCollection
    .deleteOne(filter)
    .then(value => {
      if(value.n>0) {
        return true
      } else {
        return false
      }
    })
  }
}

module.exports = {
    sports
};