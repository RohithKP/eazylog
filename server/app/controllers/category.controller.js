const Categories = require('../models/category.model').Categories;
//Simple version, without validation or sanitation
exports.create = function (req, res, next) {
    let category = new Categories(
        {
            name: req.body.name
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
    if(req.params.id){
        Categories.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, category) {
            if (err) return next(err);
            res.send(category ? 'Category udpated.': 'No Category by that Id');
        });
    }else{
        Categories.findOneAndUpdate(req.params, req.body, {upsert:false}, function(err, doc){
            if (err) return res.send(500, { error: err });
            return next("succesfully saved");
        });
    }
};

exports.delete = function (req, res, next) {
    Categories.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.getAll = function (req, res, next) {
    Categories.find({}, function (err, categories) {
        if (err) return next(err);
        res.send(categories);
    })
};