const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw new RequestError(400, "missing field favorite");
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
