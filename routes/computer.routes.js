const controller = require("../controller/logic/computer.controller");

module.exports = (app) => {
  app.get("/computer", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/computer/byid/:id", (req, res, next) => {
    console.log("gettins computer by id");
    controller.getById(req, res, next);
  });

  app.post("/computer", (req, res, next) => {
    controller.createComputer(req, res, next);
  });

  app.put("/computer", (req, res, next) => {
    controller.updateComputer(req, res, next);
  });
  app.delete("/computer", (req, res, next) => {
    controller.deleteComputer(req, res, next);
  });
};