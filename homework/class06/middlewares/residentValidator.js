const validateBody = async (req, res, next) => {
  const body = req.body;
  
  if (body.name === undefined || body.hasCar === undefined || body.isBoomer=== undefined) {
    return res.status(400).json('Missing required field!');
  }

  return next();  
};
  
  module.exports = validateBody;