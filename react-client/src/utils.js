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

  createEvent: function(data) {
    $.ajax({
      url: 'api/events',
      method: 'POST',
      data: data,
      success: function() {
        console.log('Event has been posted! -> utils.createEvent')
      }
    });
  },

  getEventsByUser: function(cb) {

    $.ajax({
      url: '/api/events/user',
      method: 'GET',
      success: function(data) {
        cb(data);
      }
    });
  }

}