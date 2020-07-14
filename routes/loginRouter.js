const express = require('express');
const app = express();
const Route = express.Router();
const User = require('../model/User');


Route.use((req, res, next) => {
    if(req.session.loggedIn) {
        console.log(Auth);
        res.redirect('/');
    } else {
        next();
    }
});

Route.get('/', (req, res) => {
    User.getAll((err, data) => {
        res.render('auth/login');
    })
});

Route.post('/', (req, res) => {
    User.checkForLogin([req.body.email, req.body.password], (err, data) => {
        if(!err) {
            req.session.loggedIn = true;
            Auth = req.session;
            Auth.check = true;
            Auth.id = data.id;
            Auth.nama = data.nama;
            Auth.email = data.email;
            Auth.password = data.password;
            res.redirect('/');
        } else {
            res.redirect('/user/login');
        }
    });
});


module.exports = Route;