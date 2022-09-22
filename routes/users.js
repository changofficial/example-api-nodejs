import express from 'express';
const router = express.Router();

const users = [
    {
        name: "John",
        lastname: "Doe",
        age: 25
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 20
    }
]
//all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`user with the username ${user.name} added to the database!`);
});

export default router;
