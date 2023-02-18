const controller = require("../controller/logic/brand.controller");

module.exports = (app) => {
  app.get("/brand", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/brand/byname:name", (req, res, next) => {
    console.log("gettins brand by name");
    controller.getByName(req, res, next);
  });

  app.post("/brand", (req, res, next) => {
    controller.save(req, res, next);
  });

  app.put("/brand", (req, res, next) => {
    controller.updateBrand(req, res, next);
  });
  app.delete("/brand", (req, res, next) => {
    controller.deleteBrand(req, res, next);
  });
};
