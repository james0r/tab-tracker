const {User} = require('../models')
const config = require('../config/config')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status(500).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Invalid login information'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while trying to login.'
            })
        }
    }
}