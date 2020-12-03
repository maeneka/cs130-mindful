var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  
app.listen(port);
let client = require('./db');
const { reset } = require('nodemon');

console.log('Mindful RESTful API server started on: ' + port);
client.connect('mongodb://localhost:27017/', function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.');
        process.exit(1);
    }// else {
    //     app.listen(3000, function () {
    //         console.log('Listening on port 3000...');
    //     });
    //}
});


// get list of users
app.get('/list', function (req, res) {
    let collection = client.db('mindfuldb').collection('users');
    collection.find().toArray(function (err, docs) {
        // res.render('users', {BlogServer: docs});
        console.log(docs)
        // res.render('list_users', {users: docs})
        res.send(docs)
    });
  });

 // get a particular user
app.get('/getUser', function(req, res) {
    collection = client.db('mindfuldb').collection('users');
    collection.find({email: req.query.email}).toArray().then((docs) => {
        var JSON_docs = JSON.stringify(docs)
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON_docs);
      });
});

// add new user to our 

// body requires email, first name, last name, limits (json), mode, timeout_pref, counter
// http://localhost:3000/newUser?email=josephinebruin2@ucla.edu&limits={"facebook":30, "reddit": 20, "twitter":50}&mode=study&timeout_pref=1000&counter={ "facebook":30}&first_name=josephine&last_name=bruin
app.post('/newUser', function(req, res) {
    collection = client.db('mindfuldb').collection('users');
    
    collection.findOne({email: req.query.email}, 
        function(err, user) 
            { if (user) { console.log("user exists");
            res.send({message: "error. user already exists"});
        } 
                else { console.log("user doesn't exist") }
            }
    );

    limits_json = JSON.parse(req.query.limits);
    counter_json = JSON.parse(req.query.counter);

    collection.insertOne({
        email: req.query.email,
        first_name: req.query.first_name, 
        last_name: req.query.last_name, 
        limits: limits_json,// {"facebook": 30, "reddit": 40, "twitter":30},
        mode: req.query.mode,
        timeout_pref: req.query.timeout_pref,
        counter: counter_json// { "facebook": 10,  "reddit": 5, "twitter": 0
    }).then((docs) => {
        var JSON_docs = JSON.stringify(docs)
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON_docs);
      });
});

// update limits
// query params -- email, limits
// sample: http://localhost:3000/updateLimits?email=joebruin@ucla.edu&limits={"facebook": 50,"reddit": 40,"twitter": 30}

app.post('/updateLimits', function(req, res) {
    collection = client.db('mindfuldb').collection('users');
    var myquery = { email: req.query.email };
    var newvalues = { $set: {limits: JSON.parse(req.query.limits)}};
    collection.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    })
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({message: 'document updated'});
})

// update counter
// query params -- email, counter -- HAVE TO UPDATE THE WHOLE COUNTER JSON
// sample: http://localhost:3000/updateCounter?email=joebruin@ucla.edu&limits={"facebook": 50,"reddit": 40,"twitter": 30}
app.post('/updateCounter', function(req, res) {
    collection = client.db('mindfuldb').collection('users');
    var myquery = { email: req.query.email };
    var newvalues = { $set: {counter: JSON.parse(req.query.limits)}};
    collection.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    })
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({message: 'document updated'});
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
   
  // store this: sudo mongod --dbpath /System/Volumes/Data/data/db
  // https://stackoverflow.com/questions/51997372/get-this-error-to-start-the-mongo-db-failed-to-set-up-listener-socketexceptio
