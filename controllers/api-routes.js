// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");
var express = require("express");
var mysql = require("mysql");
var app = express();
// =============================================================

// Routes
// =============================================================
module.exports = function(app) {

  // Get all donations
  app.get("/donations", function(req, res) {
    db.Donations.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a donation
  app.post("/api/newdonations", function(req, res) {

      // Take the request...
      var d = rec.body;

    console.log("Donations Data:");
    console.log(d);

   
    Donations.create({
      business:d.business,
      food:d.food,
      quantity_avalaible:d.quantity_avalaible,
      address:d.address,
      lastCall:d.lastCall,
      pickupDate:d.lastCall,
      donorText:d.donorText,
      created_at:d.created_at,
      updated_at:d.updated_at,
      category:d.category,
      allergen:d.allergen
      
    }).then(function(results) {
      // `results` here would be the newly created donations
      res.end();
    });

  });

};