const { GifModel } = require('../models/gif.js');

const gifController = {
    getAll: async (req, res) => {
        try {
            const gifs = await GifModel.find()
            res.status(200).send({
                status: true,
                msg: "We find songs",
                data: gifs
            })
            
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: "We have problems while fetching the data",
                data: error
            })
        }

    },
    createGif: async (req, res) => {
        const {name, url, category, username}= req.body
        console.log(username)
        const gif = await GifModel.create({
            name: name,
            url: url,
            category: category,
            username: username
        });

        try {
            const newGif = await gif.save();
            res.status(201).json(newGif);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = { gifController };