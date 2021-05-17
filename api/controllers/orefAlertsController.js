'use strict';
const rp = require('request-promise');

exports.last_day = function(req, res) {

    var options = {
        uri: 'https://www.oref.org.il//Shared/Ajax/GetAlarmsHistory.aspx?lang=he&mode=1',
        headers: {
            'User-Agent': 'https://www.oref.org.il/',
            'Referer': 'https://www.oref.org.il//12481-he/Pakar.aspx',
            'X-Requested-With': 'XMLHttpRequest'
        },
        json: true // Automatically parses the JSON string in the response
    };

    console.log('Oref Arerts for last day');

    var newObj = {
        "lastDay": ""
    }

    rp(options)
        .then(function(json) {

            if (json) {
                newObj.lastDay = json;
            }

            res.json(newObj);
        })
        .catch(function (error) {
            console.error(error);
            res.json(newObj);
        });
};


exports.current = function(req, res) {

    var options = {
        uri: 'https://www.oref.org.il/WarningMessages/alert/alerts.json',
        //uri: 'https://c08a9a84-f804-4840-8e58-3ba592e18e79.mock.pstmn.io/redalert',  // Mock
        headers: {
            'User-Agent': 'https://www.oref.org.il/',
            'Referer': 'https://www.oref.org.il//12481-he/Pakar.aspx',
            'X-Requested-With': 'XMLHttpRequest'
        },
        json: true // Automatically parses the JSON string in the response
    };

    console.log('Oref Arerts currently');

    var newObj = {
            "alert": "false",
            "current": {
                "data": "",
                "id": "",
                "title": ""
            }
        }

    rp(options)
        .then(function(json) {

            if (json) {
                newObj.alert = "true";
                newObj.current = json;
            }

            res.json(newObj);
        })
        .catch(function (error) {
            console.error(error);
            res.json(newObj);
        });

};
