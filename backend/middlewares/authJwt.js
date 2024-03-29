const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const db = require('../models')
const User = db.User
const Role = db.Role

const verifyToken = (req, res, next) => {
	const token = req.session.token
	if (!token) {
		return res.status(403).send({ message: 'No token provided' })
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(403).send({ message: 'Unauthorized!' })
		}
		req.userId = decoded.id
		next()
	})
}

const isAdmin = (req, res, next) => {
	User.findById(req.userId).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err })
			return
		}

		Role.find(
			{
				_id: { $in: user.roles }
			},
			(err, roles) => {
				if (err) {
					res.status(500).send({ message: err })
				}

				for (let i = 0; i < roles.length; i++) {
					if (roles[i].name === 'admin') {
						next()
						return
					}

					res.status(403).send({ message: 'Requires Admin Role!' })
				}
			}
		)
	})
}

const isModerator = (req, res, next) => {
	User.findById(req.userId).exec((err, user) => {
		if (err) {
			res.status(500).send({ message: err })
			return
		}

		Role.find(
			{
				_id: { $in: user.roles }
			},
			(err, roles) => {
				if (err) {
					res.status(500).send({ message: err })
				}

				for (let i = 0; i < roles.length; i++) {
					if (roles[i].name === 'moderator') {
						next()
						return
					}

					res.status(403).send({ message: 'Requires Moderator Role!' })
				}
			}
		)
	})
}

const authJwt = {
	verifyToken,
	isModerator,
	isAdmin
}

module.exports = authJwt