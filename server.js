const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const list = require('./models/list');


const app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var port = process.env.API_PORT || 3001;

var db = 'checklistr'
mongoose.connect('mongodb://localhost/' + db)
    .then(
        () => {console.log('Connected to DB '+db);
            }, //Successful Connection
        err => {console.log(err);
            } //Error
    );

// app.use(function (req, res, next) {
//     res.setHeader('Access - Control - Allow - Origin', '*');
//     res.setHeader('Access - Control - Allow - Credentials', 'true');
//     res.setHeader('Access - Control - Allow - Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
//     res.setHeader('Access - Control - Allow - Headers', 'Access - Control - Allow - Headers, Origin, Accept, X - Requested - With, Content - Type, Access - Control - Request - Method, Access - Control - Request - Headers');

//     //and remove cacheing so we get the most recent comments
//     res.setHeader('Cache - Control', 'no - cache');
//     next();
// });

app.use('/api', router);

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!' });
});




// Get all lists
router.route('/lists').get((req, res) => {
    list.find(function(err, lists) {
        if (err) {
            res.send(err);
        } else {
            res.json(lists);
        };
    });
});

// Add new list
router.route('/lists/new').post(function(req, res) {
        var test = new List();
        test.name = req.body.name;
        test.description = req.body.description;
        test.items = [];
        test.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                console.log('Saved');
                
            }
        })
    });


// Get Individual list by name
router.route('/list/:name').get((req, res) => {
    list.findOne({'name': req.params.name}, function(err, list){
        if (err) {
            res.send(err);
        } else {
            res.json(list);
        };
    });
});

// Add item to a list

router.route('/list/:name/newitem').post((req, res) => {
    list.findOneAndUpdate({'name': req.params.name}, {$push: {"items": {title: req.body.title, note: req.body.note, done: false}}}, function(err, model){
        if (err) {
            res.send(err);
        } else {
            console.log('Item added');
            
        };
        
    })
})

// TODO Create Delete functions
// TODO Create Update functions
app.listen(port, () => {
    console.log('Server started on port ' + port);

});