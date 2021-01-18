"use strict";

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const helperCtrl = require('../helpers');

router.get('/users',
  /*  userCtrl.mid1,
    userCtrl.mid2,
    userCtrl.isAdmin,*/
    userCtrl.getUsers,
    helperCtrl.responseToJson('users')
);

router.get('/users/:userId',
    userCtrl.getUserById,
    helperCtrl.responseToJson('users')
);

router.delete('/users/:userId',
    userCtrl.deleteUserById
);

router.post('/users',
  /*  userCtrl.mid1,
    function(req,res, next) {
        console.log('1');
        return res.json({text : 'hello post'});
    },*/
    userCtrl.createUser
);

/*
router.post('/users', function(req,res, next) {
    console.log('2');
    return res.json({text : 'hello post'});
});*/

router.put('/users',
    userCtrl.isAdmin,
    function(req, res, next) {
        console.log(req.body);
        return res.json({text : 'hello put'});
    });

module.exports = router;
