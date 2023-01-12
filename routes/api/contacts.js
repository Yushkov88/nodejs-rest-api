const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");

const { controllerWrapper } = require("../../helpers");

const { validationBody, isValidId } = require("../../middlewares");

const { addSchema, updateFavoriteSchema } = require("../../models/contacts");

const router = express.Router();

router.get("/", controllerWrapper(listContacts));

router.get("/:id", isValidId, controllerWrapper(getContactById));

router.post("/", validationBody(addSchema), controllerWrapper(addContact));

router.delete("/:id", isValidId, controllerWrapper(removeContact));

router.put(
  "/:id",
  isValidId,
  validationBody(addSchema),
  controllerWrapper(updateContact)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validationBody(updateFavoriteSchema),
  controllerWrapper(updateStatusContact)
);

module.exports = router;
