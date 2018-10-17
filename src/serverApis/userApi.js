const express = require('express')
const Sequelize = require('sequelize')
const Sequel = require('../dataAccess/da')
const router = express.Router()



const User = Sequel.define('user', {
    userName: Sequelize.STRING,
    imgUrl: Sequelize.STRING
})
const Parent = Sequel.define('parent', {})
const Op = Sequelize.Op


User.belongsToMany(User, {through: Parent, as: "ParentId"})



// User.sync()
// Parent.sync()
// Sequel.drop()
// User.create({userName: 'Hunter', imgUrl: 'hunter.com'})
// User.create({userName: 'Jerry', imgUrl: 'jerry.com'})
// User.create({userName: 'Marianne', imgUrl: 'marianne.com'})
// User.create({userName: 'Bret', imgUrl: 'https://picsum.photos/200/?random'})

// User.findById(16).then(user1 => {
//     // console.log(user1)
//     User.findById(10).then(user2 => {
//         user1.addParentId(user2)
//     })
// })

router.get('/findUsers', (req,res) => {
    User.findAll({
        attributes: ['userName']
    }).then(users => {
        res.send(users)
    })
})

router.get('/searchUser/:user', (req, res) => {
    User.find({
        attributes: ['id'],
        where: {userName: req.params.user}
    }).then(user => Parent.findAll({
        attributes: ['userId', 'ParentIdId'],
        where: {ParentIdId: user.id}
    })
     ).then( parents => res.send(parents))
})

module.exports = router