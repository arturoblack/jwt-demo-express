const HeroModel = require('../models/hero.model');

exports.list = async function(req, res) {
    const name = req.query.name;
    const nickname = req.query.nickname;
    let query = {};
    if (name) {
        //query = {name: {$regex: q, $options: "$i"}};
        query.name = {$regex: name, $options: "$i"};
    }
    if (nickname) {
        query.nickname = {$regex: nickname, $options: "$i"};
    }
    console.log('QUERY>>>>', query);
    const heros = await HeroModel.find(query).exec();
    res.json(heros);
};

exports.get = async function(req, res) {
    const id = req.params.id;
    const hero = await HeroModel.findById(id).exec();
    res.json(hero);
};

exports.create = async function(req, res) {
    const newHero = new HeroModel(req.body);
    await newHero.save();
    res.json(newHero);
};

exports.update = async function(req, res) {
    const id = req.params.id;
    await HeroModel.findByIdAndUpdate(id, req.body).exec();

    res.json({ok: 'ok'});
};

exports.remove = async function(req, res) {
    const id = req.params.id;
    await HeroModel.findByIdAndRemove(id).exec();
    res.json({ok: 'ok'});
};