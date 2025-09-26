const express = require("express");
const multer = require("multer");
const helpermulter = require("../../helpers/storagemulter");
const upload = multer({ storage: helpermulter() }); //đường dẫn lưu vào
const router = express.Router();
const controllerProduct = require("../../controllers/admin/product.controller");
const validate = require("../../validates/admin/product");
router.get("/", controllerProduct.index);
router.patch("/editstatus/:status/:id", controllerProduct.edit);
router.patch("/changemulti", controllerProduct.changemulti);
router.delete("/delete/:id", controllerProduct.deleteone);
router.get("/create", controllerProduct.create_get);
router.post(
  "/create",
  upload.single("images"),
  validate.createpost,
  controllerProduct.create_post
);

router.get("/edit/:id", controllerProduct.editoneproduct);
router.patch("/edit/:id", controllerProduct.editoneproduct_post);
router.get("/detail/:id",controllerProduct.detailproduct);

module.exports = router;