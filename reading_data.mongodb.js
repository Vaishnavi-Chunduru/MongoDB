// Switching to the database
use('ecommerce')

// Finds all the documents in the contacts collection
db.contacts.find()

// Finds the first document in the contacts collection
db.contacts.findOne({ name: "Alice" })

// filtering the data based on some condition
db.contacts.find({ name: "Alice" }) 
db.products.find({category:"Electronics"})

// filtering using comparison operators
db.products.find({price : {$gte : 1000, $lte: 50000}})
db.products.find({ratings : {$ne : 4.5}})
db.contacts.find({name : {$ne : "Alice"}})

// filtering using logical operators
db.products.find({$or : [{category : "Electronics"},{stock : {$lt :50}}]})
db.orders.find({$and : [{status : "Delivered"},{total : {$gte : 1000, $lte : 4000}}]})
db.contacts.find({phone : {$not : {$regex : /^210/}}})

// Projection: selecting specific fields to return
db.products.find({}, {name : 1, price : 1, _id : 0})
db.orders.find({user:"John Doe"}, {products : 1})

// Sorting and limiting results
db.products.find().sort({price : -1}).limit(2)
db.products.find().sort({price : -1}).skip(1).limit(2)

// counting documents
db.products.countDocuments()
db.contacts.countDocuments({name : "Alice"})

 // Finding the data with the $in operator
db.products.find({ category: { $in: ["Electronics", "Clothing"] } })

// Finding the data with the $nin operator
db.products.find({ category: { $nin: ["Electronics", "Clothing"] } }) 