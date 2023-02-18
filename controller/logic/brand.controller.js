/** Dto*/

const brandDto = require("../../model/dto/brand.dto");
const computerDto = require("../../model/dto/computer.dto");

//** Helpers */
const notHelper = require("../helpers/notifications.helpers");

exports.createbrand = (req, res, next) => {
  let brand = {
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    brandsValue: req.body.brandsValue,
  };
  brandDto.create(brand, (err, data) => {
    if (err) {
      return res.status(400).json({
        // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
        //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
        error: err,
      });
    }
    let computer = {
      brand: req.body.brand,
      Os: req.body.Os,
      reference: req.body.reference,
      memory: req.body.memory,
      storage: req.body.storage,
      color: req.body.color,
    };
    computerDto.save(computer, (err, computer) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      notHelper.sendSMS(brand.reference);

      res.status(201).json({
        info: data,
      });
    });
  });
};

exports.updatebrand = (req, res, next) => {
  let brand = {
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
    brandsValue: req.body.brandsValue,
  };
  brandDto.updatebrand({ _id: req.body.id }, std, brand, (err, data) => {
    if (err) {
      return res.status(400).json({
        // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
        //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
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
        // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
        //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
        error: err,
      });
    }

    res.status(200).json({
      info: data,
    });
  });
};

exports.getByName = (req, res, next) => {
  brandDto.getByName({ name: req.params.name }, (err, data) => {
    if (err) {
      return res.status(400).json({
        // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
        //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
        error: err,
      });
    }

    res.status(200).json({
      info: data,
    });
  });
};

exports.deletebrand = () => {
  brandDto.delete({ id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
        //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
        error: err,
      });
    }

    res.status(204).json({
      info: data,
    });
  });
};
