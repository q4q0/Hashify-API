const generalService = require("../services/general.service");

const getMethods = (req, res, next) => {
  try {
    const methods = generalService.getMethods();
    res.status(200).json({
      success: true,
      methods: methods,
    });
  } catch (err) {
    throw new Error(`something went wrong`);
  }
};

module.exports = {
  getMethods,
};
