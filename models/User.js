// import bcrypt for encrypting password:
const bcrypt =require('bcryptjs');
// create a Schema for Users:
const mongoose =require('mongoose');
const jwt =require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true},
    username: {type: String, required: true},
    passwordHash: {type: String, required: true},
    active: {type: Boolean, default: true} 
},
{timestamps: true}
)

// create a static method too check token is valid or not:
UserSchema.statics.isValidToken = function (token) {
    
    try {
      const payload = jwt.verify(token, 'abcd1234')
      console.log(payload)
      return payload
    } catch (e) {
      return false
    }
  }

// create a method for Encrypt the Password:
UserSchema.methods.generatePasswordHash = function (password) {

    // generate salt:
    const salt =bcrypt.genSaltSync(10)
    // encrypt password:
    this.passwordHash = bcrypt.hashSync(password, salt);
}

// Compare the Password:
UserSchema.methods.isValidPassword = function(password){
    return bcrypt.compareSync(password, this.passwordHash)
}

// create a method for token:
UserSchema.methods.genToken = function () {
    const payload = {
        name: this.name,
        email: this.email
    }
    return jwt.sign(payload, 'abcd1234')
}

// return only some data:
UserSchema.methods.genUserObj =function () {
    return{
        name: this.name,
        email: this.email,
        token: this.genToken()
    }
}

module.exports = mongoose.model('User', UserSchema);