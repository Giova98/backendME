import User from '../models/user.model.js'

export const register = async (req, res) => {
    const {email, password, username} = req.body
   
    try {
        const newUser = User({
            username,
            email,
            password
        });
        await newUser.save();
        res.send('registrando');
    } catch (error) {
        console.log(error.errmsg);
        res.status(500).send({error:error.errmsg})
    }
    

};

//el estado 200 es cuando esta todo bien
//el estado 300 es informacion de redireccion
//el estado 400 es para informar alguna falla o error
//el estado 500 es para informar el error del servidor

export const login = (req, res) => res.send("login");