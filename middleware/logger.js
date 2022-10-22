const logger = (req, res, next) => {
  const d = new Date();
  const day = d.getDay();
  const Hour = d.getHours();

  if (day > 0 && day < 6 && Hour > 9 && Hour < 17) {
    next();
  } else {
    res.send("CLOSED");
  }
};
module.exports = logger;
