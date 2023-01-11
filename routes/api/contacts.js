const express = require("express");

const ctrl = require("../../controllers");

const { controllerWrapper } = require("../../helpers");

const { validationBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.contacts.listContacts));

router.get("/:id", isValidId, controllerWrapper(ctrl.contacts.getContactById));

router.post(
  "/",
  validationBody(schemas.addSchema),
  controllerWrapper(ctrl.contacts.addContact)
);

router.delete(
  "/:id",
  isValidId,
  controllerWrapper(ctrl.contacts.removeContact)
);

router.put(
  "/:id",
  isValidId,
  validationBody(schemas.addSchema),
  controllerWrapper(ctrl.contacts.updateContact)
);

router.patch(
  "/:id/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  controllerWrapper(ctrl.contacts.updateStatusContact)
);

module.exports = router;
