const sequelize = require("../models/index").sequelize;
const Sequelize = require("../models/index").Sequelize
const UserModel = require("../models/User");

const User = UserModel(sequelize, Sequelize);

module.exports = {
    create(req,res) {
        return User.create(req.body)
            .then(user =>res.status(201).send({message:"User created successfully"}))
            .catch(error => res.status(400).send(error));
    }
};