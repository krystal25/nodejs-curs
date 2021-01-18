"use strict"

const User = require('../models/users');

module.exports = {
    mid1: mid1,
    mid2: mid2,
    isAdmin: isAdmin,
    createUser: createUser,
    getUsers: getUsers,
    getUserById: getUserById,
    deleteUserById: deleteUserById
}

const admin = true;

function mid1(req,res,next) {
    console.log('x');
    next();
}

function mid2(req,res,next) {
    console.log('y');
    next();
}

function isAdmin(req, res, next) {
    console.log(req.body);
    if (admin) {
        console.log('y');
        return next();
    }
    console.log('z');
    return res.json({text: 'not authorized'});

}

function createUser(req, res, next) {
    const user = new User(req.body);
    user.save(function(err,result) {
        if (err) {
            err.statusCode= 501;
            return next(err);
        }
        return res.json(result);
    });
}

function getUserById(req, res, next) {
    const { userId } = req.params;
    User.findById({_id: userId}, function (err,result) {
            if (err) {
                return next(err);
            }
            req.resources.users = result;
            return next();
    })
}


function getUsers(req, res, next) {
    User.find(function (err,result) {
        if (err) {
            console.log('err',err);
            return res.status(404).json(err);
        }
        req.resources.users = result;
        return next();
    })
}

function deleteUserById(req, res, next) {
    const { userId } = req.params;
    User.deleteOne({_id: userId}, function (err,result) {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
}
