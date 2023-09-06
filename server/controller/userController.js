const User = require("../models/suprestore");

exports.homepage = async (req, res, next) => {
    const List = await User.find({});
    res.status(200).json(List);
};