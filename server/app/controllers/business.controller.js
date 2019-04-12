const Business = require('../models/category.model').Business;
const category_controller = require('../controllers/category.controller');
//Simple version, without validation or sanitation
exports.create = function (req, res, next) {
    let business = new Business(
        {
            ...req.body,
            ...{
                openingHours: JSON.parse(req.body.openingHours)
            }
        }
    );
    business.save(function (err, resObj) {
        if (err) {
            return next(err);
        }
        resObj.collection.countDocuments({'category': resObj.category},(err, count) => {
            if (err) {
                res.send(err);
                return;
            }
            category_controller.update({
                params:{'name': resObj.category},
                body: {
                    count
                }
            }, res, next);
        });
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

exports.getTopLocations =  function (req, res, next) {
    Business.distinct('locationName', function (err, locations) {
        if (err) return next(err);
        res.send(locations);
    })
};