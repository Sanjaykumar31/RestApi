function middleware(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body)
      next()
    }
    catch (err) {
      res.status(422).json({ message: err.message })
    }
  }
}

module.exports = middleware