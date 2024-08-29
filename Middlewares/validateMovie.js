module.exports = function (req, res, next) {
  if (!req.body.title || !req.body.year) {
    return res.status(400).json({
      status: "fail",
      message: "Mandatory Fields are missing in the payload",
    });
  }
  next();
};
