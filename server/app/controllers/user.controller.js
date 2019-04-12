const User = require('../models/user.model');

exports.create = function (req, res, next) {
    let user = new User(req.body);
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('user Created successfully')
    })
};


exports.details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.update = function (req, res, next) {
    if(req.params.id){
        User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
            if (err) return next(err);
            res.send(user ? 'User udpated.': 'No User by that Id');
        });
    }else{
        User.findOneAndUpdate(req.params, req.body, {upsert:false}, function(err, doc){
            if (err) return res.send(500, { error: err });
            return next("succesfully saved");
        });
    }
};

exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.getAll = function (req, res, next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(categories);
    })
};