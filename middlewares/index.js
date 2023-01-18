const validationBody = require("./validationBody");
const isValidId = require("./isValidId");
const addSchema = require("./validationJoi");
const updateFavoriteSchema = require("./validationJoi");
const phoneRegexp = require("./validationJoi");
const authenticate = require("./authenticate");

module.exports = {
  validationBody,
  isValidId,
  addSchema,
  updateFavoriteSchema,
  phoneRegexp,
  authenticate,
};
