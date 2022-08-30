const { ObjectId } = require("mongodb");

module.exports = async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    await next();
  } else {
    // res.status = 422;
    // body = "Invalid ObjectId";
    res.status(422).json("Invalid ObjectId")
  }
};