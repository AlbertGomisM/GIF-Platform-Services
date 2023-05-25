const { UserModel } = require('../models/user.js');

const userController = {
    createUser: async (req, res) => {
        const { email, password } = req.params
        const gif = await UserModel.create({
            email: email,
            password
        });

        try {
            const newGif = await gif.save();
            res.status(201).json(newGif);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const user = await UserModel.find()
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: error,
            });
        }
    }, getByemail: async (req, res) => {
        const { email } = req.params;

        try {
            const user = await UserModel
                .findOne({ email: email })
            if (!user) {
                res.status(404).send({
                    status: false,
                })
                return
            }

            res.status(200).send({
                status: true,
                data: user
            })
        } catch (error) {
            res.status(500).send({
                status: false,
                msg: error
            })
        }
    }
}

module.exports = { userController };