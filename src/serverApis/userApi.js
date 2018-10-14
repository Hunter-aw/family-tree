// import {user} from './'
// const {User} =  require('../dataAccess/userModel')
const Sequelize = require('sequelize')
const Sequel = new Sequelize('mysql://sql7260497:nIkXBNLxQm@sql7.freesqldatabase.com:3306/sql7260497')


const User = Sequel.define('user', {
    userName: Sequelize.STRING,
    imgUrl: Sequelize.STRING
})
const Parent = Sequel.define('parent', {})


User.belongsToMany(User, {through: Parent, as: "ParentId"})


// User.sync()
// Parent.sync()
// Sequel.drop()
// User.create({userName: 'Hunter', imgUrl: 'hunter.com'})
// User.create({userName: 'Jerry', imgUrl: 'jerry.com'})
// User.create({userName: 'Marianne', imgUrl: 'marianne.com'})
// User.create({userName: 'Hannah', imgUrl: 'hannah.com'})

User.findById(3).then(user1 => {
    // console.log(user1)
    User.findById(4).then(user2 => {
        user1.addParentId(user2)
    })
})