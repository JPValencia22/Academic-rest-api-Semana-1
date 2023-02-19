/**  brandDto  */

const brandDto = require("../../model/dto/brand.dto");

//** Helpers */
const notHelper = require("../helpers/notifications.helpers");

exports.createBrand = (req, res, next) => {
  let brand = {
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    brandsValue: req.body.brandsValue,
  };

  brandDto.create(brand, (err, data) => {
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
//

exports.updateBrand = (req, res, next) => {
  let brand = {
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    brandsValue: req.body.brandsValue,
  };
  brandDto.update({ _id: req.body.id }, brand, (err, data) => {
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
  brandDto.getAll({}, (err, data) => {
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

exports.getByName = (req, res, next) => {
  brandDto.getByName({ _name: req.params.name }, (err, data) => {
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

exports.deleteBrand = (req, res) => {
  brandDto.delete({ _name: req.body.name }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.status(204).json();
  });
};
