use('ecommerce');

// Update the price of the "Wireless Mouse" product to 899 using $set operator
db.products.updateOne(
    {name : "Wireless Mouse"},
    {$set : {price : 899}}
)

// Increase the stock of all products in the "Electronics" category by 10 using $inc operator
db.products.updateMany(
    {category : "Electronics"},
    {$inc : {stock : 10}}
)

// Add a new tag "new" to the "Wireless Mouse" product using $push operator
// tag is a field that contains an array of strings representing the tags associated with the product
db.products.updateOne(
    {name : "Wireless Mouse"},
    {$push : {tags : "new"}}
)

//  Add multiple tags "sale" and "popular" to the "Wireless Mouse" product using $each operator

db.products.updateOne(
    {name : "Wireless Mouse"},
    {$push : {tags : {$each : ["sale", "popular"]}}}
)


