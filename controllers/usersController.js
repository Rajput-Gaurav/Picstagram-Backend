// Controller for users login and register:

// import user model:
const User =require('../models/User');

// Login Method:
// take username, and password from body:
exports.login =(req, res) => {
    const {username, password} = req.body;

    User.findOne({ username})
    .then(user => {
        if(user){
            if(user.isValidPassword(password)){
                res.json(user.genUserObj())
            }else{
                res.status(401).json({
                    msg: 'Invalid Credentials.'
                })
            }
        }else{
            res.status(400).json({
                msg: 'User not found.'
            })
        }
    })
    .catch(() => {
        res.status(500).json({
            msg: 'Something went wrong.'
        })
    })
}

// register method:
exports.register =(req,res) => {
    const {name, email, username, password} = req.body;
    
    // create user instance:
    const user =new User();

    user.name =name;
    user.email =email;
    user.username =username;

    // call the generatePasswordHash() method:
    user.generatePasswordHash(password);

    // return all the data:
    user.save()

    .then(data => {res.json(data.genUserObj())
    })
    .catch()
}
