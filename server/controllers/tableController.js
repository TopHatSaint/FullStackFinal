var app = require('../index.js');
var db = app.get('db');

module.exports = {


  read: function(req, res, next) {
    db.tables.read_all_tables([],
    function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send(results);
      }
    })
  },
  findTable: function(req, res, next) {
    db.tables.read_table([req.params.id],
      function(err, results){
        if (err){
          console.log(err);
          return res.send(err);
        }
        return res.status(200).send(results);
      })
    },
  create: function(req, res, next) {
    console.log(req.body),

    db.tables.create_table([req.body.title, req.body.idea],
    function(err, results) {
      if(err) {
        console.error(err);
        return res.status(500).send(err);
      } else {
        return res.status(200).send(results);
      }
    });
  },
  update: function(req, res, next) {
    db.tables.update_tables([req.body.idea],
        function(err, results) {
          if(err) {
            console.error(err);
            return res.send(err);
          } else {
            res.send(results);
          }
        });
  },
  delete: function(req, res, next) {
    db.tables.delete_table([req.params.id], function(err, results) {
      if(err){
        console.error(err);
        return res.send(err);
      }
      // if (results.length === 0){
      //   return res.status(404).send("Here Not Found");
      // }
      return  res.send(results);
    });
  }
}
