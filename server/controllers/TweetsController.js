const Tweet = require("../models").Tweet;

module.exports = {
    create(req, res) {
        return Tweet.create(req.body)
            .then(tweet => res.status(201).send(tweet))
            .catch(error => res.status(400).send(error));
    },

    list(req,res) {
        return Tweet.findAll().then(tweets=> res.status(200).send(tweets));
    },

    retrieve(req, res) {
        return Tweet.findById(req.params.id).then(tweet => {
            if (!tweet ) {
                return res.status(404).send({message: 'Tweet not found'});
            }
            return res.status(200).send(tweet)
        });
    },

    update(req, res) {
        return Tweet.findById(req.params.id).then(tweet => {
            if (!tweet ) {
                return res.status(404).send({message: 'Tweet not found'});
            }
            return tweet.update({text:req.body.text})
                .then(()=> res.status(200).send(tweet))
                .catch( error=> res.status(400).send(error))
                ;
        });
    },

    delete(req, res) {
        return Tweet.findById(req.params.id).then(tweet => {
            if (!tweet ) {
                return res.status(404).send({message: 'Tweet not found'});
            }
            return tweet.destroy()
                .then(()=> res.status(200).send({message:"Tweet deleted"}))
                .catch( error=> res.status(400).send(error));
        });
    }
};