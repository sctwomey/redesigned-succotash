const { User } = require('../models');

const userdata = [
    {
        username: 'Mike',
        email: 'mike@email.com',
        password: 'password'
    },
    {
        username: 'Caren',
        email: 'mcaren@email.com',
        password: 'password'
    },
    {
        username: 'suysan',
        email: 'suysan@email.com',
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;