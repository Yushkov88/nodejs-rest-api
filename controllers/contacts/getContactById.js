const { Contact } = require("../../models");
const RequestError = require("../../helpers/RequestError");

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const contact = await Contact.findById(id, "-createdAt -updatedAt");
  console.log(contact);
  if (!contact) {
    throw new RequestError(404, "Not found");
  }
};

module.exports = getContactById;
