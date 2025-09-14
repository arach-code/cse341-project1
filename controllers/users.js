const { param } = require('../../routes');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = (req, res) => {
  res.send("All users endpoint working");
    };

const getSingle = async (req, res) => {
    const userId = new ObjectId(req,param.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    })
};

module.exports = { getAllUsers };