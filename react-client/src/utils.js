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

  createVendor: function(data) {
    $.ajax({
      url:'/api/vendors',
      method: 'POST',
      data: data,
      success: function() {
        console.log(data);
        console.log('Vendor info has been posted! -> utils.createVendor') 
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
  },

  getVendorsById: function(id, cb) {
    console.log('got vendors');
    $.ajax({
      url: `/api/vendors/${id}`,
      method: 'GET',
      success: function(data) {
        console.log(data);
        cb(data);
      }
    });
  },  

  getUserId: function(cb) {
    $.ajax({
      url: '/api/user',
      method: 'GET',
      success: function(data) {
        cb(data);
      }
    })
  }

  
}