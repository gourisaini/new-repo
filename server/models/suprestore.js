const mongoose = require("mongoose");

const superstore = new mongoose.Schema({
    RowID: Number,
    OrderID: String,
    Order_Date: String,
    Ship_Date: String,
    Ship_Mode: String,
    CustomerID: String,
    Customer_Name: String,
    Segment: String,
    Country: String,
    City: String,
    State: String,
    Postal_Code: Number,
    Region: String,
    ProductID: String,
    Category: String,
    Product_Name: String,
    Sales: Number,
    Quantity: Number,
    Discount: Number,
    Profit: Number,
},
    { timestamps: true }
);

const User = mongoose.model("user", superstore);
module.exports = User;