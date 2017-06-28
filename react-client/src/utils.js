import $ from 'jquery';

module.exports = {

  getEvents: function(cb) {

    $.ajax({
      url: '/api/events',
      method: 'GET',
      success: function(data) {
        cb(data);
      }
    });

  },

  createEvent: function(data, cb) {
    $.ajax({
      url: 'api/events',
      method: 'POST',
      data: data,
      success: function() {
        console.log('Event has been posted! -> utils.createEvent')
        cb();
      }
    })
  }

}