use mindfuldb;

db.createCollection("users")
db.users.createIndex( { "email": 1 }, { unique: true } )
db.users.insertOne({email: "joebruin@ucla.edu", first_name: "joe", last_name: "bruin", 
    limits: {"facebook": 30, "reddit": 40, "twitter":30},
    mode: "study",
    timeout_pref: 100,
    counter: {
        "facebook": 10,
        "reddit": 5,
        "twitter": 0
    }
})

// db.users.insertMany([
//     {email}
// ])