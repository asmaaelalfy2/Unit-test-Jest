function admin(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).send('forbedin resource');
  }
  next();
}
module.exports = admin;
