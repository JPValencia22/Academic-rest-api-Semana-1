/** computerDto */
const computerDto = require("../../model/dto/computer.dto");

//** Helpers */
const notHelper = require("../helpers/notifications.helpers");

exports.createComputer = (req, res, next) => {
  let computer = {
    id: req.body.id,
    brand: req.body.brand,
    os: req.body.os,
    reference: req.body.reference,
    memory: req.body.memory,
    storage: req.body.storage,
    color: req.body.color,
    generation: req.body.generation,
  };

  computerDto.create(computer, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.updateComputer = (req, res, next) => {
  let computer = {
    id: req.body.id,
    brand: req.body.brand,
    os: req.body.os,
    reference: req.body.reference,
    memory: req.body.memory,
    storage: req.body.storage,
    color: req.body.color,
    generation: req.body.generation,
  };
  computerDto.update({ _brand: req.body.brand }, computer, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(201).json({
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  computerDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.getById = (req, res, next) => {
  computerDto.getById({ id: req.params.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(200).json({
      info: data,
    });
  });
};

exports.deleteComputer = (req, res) => {
  computerDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(204).json();
  });
};
