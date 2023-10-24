const { User } = require('../models');

const userdata = [
    {
        name: 'Mike',
        email: 'mike@email.com',
        password: 'password'
    },
    {
        name: 'Caren',
        email: 'mcaren@email.com',
        password: 'password'
    },
    {
        name: 'suysan',
        email: 'suysan@email.com',
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;