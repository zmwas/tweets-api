const Tweet = require("../models").User;

module.exports = {
    create(req,res) {
        return User.create(req.body).then(user=>res.status(201).send({message:"User created successfully"}));
    }
};