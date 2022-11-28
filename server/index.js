const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Owner = require('./models/Owner');

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());


const createAdmin = async () => {
    await Owner.create({
        username: 'admin',
        password: 'password'
    });
    if (admin) console.log("admin created successfully \n"+admin);
}

// createAdmin();

app.post('/api/login', async (req, res) => {

    const { username, password } = req.body;
    
    try {
        const owner = await Owner.findOne({ username }) ;
        
        if (!owner) return res.status(404).json({ message: "Bad request" });
        
        if (owner.password !== password ) return res.status(400).json({ message: "Invalid password" });

        res.status(200).json({ access: true });
       
    } catch (err) {
        return res.json(500).json({ message: err.message})
    }
});

mongoose.connect('mongodb+srv://idriss:idriss@cluster0.4yfg9.mongodb.net/AdminDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
        app.listen(PORT, () => console.log("Connected to DB, SERVER IS up! 😎"));
    })
    .catch((err) => {
        console.log(err.message);
    });