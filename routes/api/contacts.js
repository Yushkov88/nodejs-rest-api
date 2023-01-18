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

const {
  authenticate,
  validationBody,
  isValidId,
} = require("../../middlewares");

const { addSchema, updateFavoriteSchema } = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, controllerWrapper(listContacts));

router.get("/:id", authenticate, isValidId, controllerWrapper(getContactById));

router.post(
  "/",
  authenticate,
  validationBody(addSchema),
  controllerWrapper(addContact)
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  controllerWrapper(removeContact)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validationBody(addSchema),
  controllerWrapper(updateContact)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validationBody(updateFavoriteSchema),
  controllerWrapper(updateStatusContact)
);

module.exports = router;
