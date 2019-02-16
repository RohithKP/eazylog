const Categories = require('../models/category.model');

//Simple version, without validation or sanitation
exports.create = function (req, res, next) {
    let category = new Categories(
        {
            name: req.body.name,
            detailUrl: req.body.detailUrl
        }
    );
    category.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('category Created successfully')
    })
};


exports.details = function (req, res, next) {
    Categories.findById(req.params.id, function (err, category) {
        if (err) return next(err);
        res.send(category);
    })
};

exports.update = function (req, res, next) {
    Categories.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, category) {
        if (err) return next(err);
        res.send('Category udpated.');
    });
};

exports.delete = function (req, res, next) {
    Categories.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};