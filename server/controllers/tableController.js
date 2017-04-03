var app = require('../index.js');
var db = app.get('db');

module.exports = {
  read: function(req, res, next) {
    db.tables.read_all_tables([],
    function(erer, results) {
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
    db.tables.create_table([req.body.idea],
    function(err, table) {
      if(err) {
        console.error(err);
        return res.send(err);
      } else {
        res.send(results);
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
    db.tables.delete_table([req.params.productId], function(err, results) {
      
    })
  }
}
