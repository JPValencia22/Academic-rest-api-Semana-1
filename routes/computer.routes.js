const controller = require("../controller/logic/computer.controller");

module.exports = (app) => {
  app.get("/computer", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/computer/byreference:reference", (req, res, next) => {
    console.log("gettins computer by reference");
    controller.getByReference(req, res, next);
  });

  app.post("/computer", (req, res, next) => {
    controller.save(req, res, next);
  });

  app.put("/computer", (req, res, next) => {
    controller.updateComputer(req, res, next);
  });
  app.delete("/computer", (req, res, next) => {
    controller.deleteComputer(req, res, next);
  });
};
