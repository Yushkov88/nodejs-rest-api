const express = require("express");

const { validationBody } = require("../../middlewares");

const schemas = require("../../schemas");

const router = express.Router();

const RequestError = require("../../helpers/RequestError");
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../../models/contacts");

router.get("/", async (req, res, next) => {
  const result = await listContacts();
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const contact = await getContactById(id);
  if (!contact) {
    throw new RequestError(404, "Not found");
  }
  res.status(200).json(contact);
});

router.post(
  "/",
  validationBody(schemas.contacts.add),
  async (req, res, next) => {
    res.status(201).json(await addContact(req.body));
  }
);

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);
  if (!result) {
    next(new RequestError(404, "Not found"));
  }
  res.json(result);
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) {
    throw new RequestError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
});

module.exports = router;
