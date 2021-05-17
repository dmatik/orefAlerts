'use strict';

module.exports = function(app) {
  var orefAlerts = require('../controllers/orefAlertsController');

    // orefAlerts Routes
    app.route('/last_day')
        .get(orefAlerts.last_day)

    app.route('/current')
    .get(orefAlerts.current)

};