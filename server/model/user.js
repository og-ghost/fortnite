<<<<<<< HEAD
=======
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true,
            min: 1,
            max: 50
        },
        last: {
            type: String,
            required: true,
            min: 1,
            max: 50
        },
        username: {
            type: String,
            required: true,
            min: 6,
            unique: true
        }

    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,
    },
    date: {
        type: String,
        default: Date.now()
    },
    balance: {
        btc: {type: Number, default: 0.00},
        bch:{type: Number, default: 0.00},
        eth: {type: Number, default: 0.00}
    },
    status: {
        emailVerified: {type: Boolean, default: false},
    },
    ipAddress: {
        regIp : String,
        lastIp: String
    },
    referer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User  
    }

});
userSchema.methods.genAuthToken = function(){
    const token = jwt.sign({ _id: this._id}, config.get('jwtPrivateKey'));
    return token;
}
const User = mongoose.model('User', userSchema);

function validate(user){
    const schema = {
        first: Joi.string().min(3).max(30).required(),
        last: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }),
        password: Joi.string().min(6).regex(/^[a-zA-Z0-9]{3,30}$/)

    };
    return Joi.validate(user, schema);
};

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validate;
>>>>>>> f00291067870a474a76c0632eeaa0717edf96336
