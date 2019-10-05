var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Invoice.findAll({
      include: [db.Employer]
    }).then(function(dbInvoices) {
      res.render("index", {
        msg: "Welcome!",
        invoices: dbInvoices
      });
    });
  });

  app.get("/employers", function(req, res) {
    db.Employer.findAll({}).then(function(dbEmployer) {
      res.render("employers", {
        employer: dbEmployer
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/timer", function(req, res) {
    res.render("timer");
  });

  app.get("/sendReminder", function (req, res) {
    db.Employer.findAll({}).then(function (dbEmployer) {
      res.render("sendReminder", {
        employer: dbEmployer
      });
    });
  });


  app.get("/invoice", function (req, res) {
    db.Employer.findAll({}).then(function (dbEmployer) {
      res.render("invoice", {
        employerObj: JSON.stringify(dbEmployer),
        employer: dbEmployer
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
