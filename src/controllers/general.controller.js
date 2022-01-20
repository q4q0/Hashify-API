const generalService = require("../services/general.service");

const getMethods = async (req, res, next) => {
  try {
    const methods = await generalService.getMethods();
    res.status(200).json({
      success: true,
      methods: methods,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

const createMethod = async (req, res, next) => {
  try {
    const createMethod = await generalService.createMethod(req, res, next);
    console.log(createMethod);
    res.status(201).json({
      success: true,
      methods: createMethod,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

module.exports = {
  getMethods,
  createMethod,
};
