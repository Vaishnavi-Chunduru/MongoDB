use('ecommerce');

// Delete the contact document where the name is "Alice"
db.contacts.deleteOne({name : "Alice"})

// Delete all the orders which are delivered
db.orders.deleteMany({status : "Delivered"})

// db.collections_name.deleteMany({}) - deletes all the documents in the collection
