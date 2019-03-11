const Business = require('../models/category.model').Business;

//Simple version, without validation or sanitation
exports.create = function (req, res, next) {
    let business = new Business(
        {
            ...req.body
        }
    );
    business.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('business Created successfully')
    })
};


exports.details = function (req, res, next) {
    Business.findById(req.params.id, function (err, business) {
        if (err) return next(err);
        res.send(business);
    })
};

exports.update = function (req, res, next) {
    Business.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, business) {
        if (err) return next(err);
        res.send('business udpated.');
    });
};

exports.delete = function (req, res, next) {
    Business.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.getAll = function (req, res, next) {
    Business.find(req.query, function (err, business) {
        if (err) return next(err);
        res.send(business);
    })
};