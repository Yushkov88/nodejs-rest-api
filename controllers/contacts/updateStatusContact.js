const { Contact } = require("../../models");
const RequestError = require("../../helpers/RequestError");

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
