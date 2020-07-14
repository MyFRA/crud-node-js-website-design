const express = require('express');
const Router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcryptjs');


Router.use((req, res, next) => {
    if(req.session.loggedIn) {
        res.redirect('/');
    } else {
        next();
    }
});

Router.get('/', (req, res) => {
    res.render('auth/register', { title: 'Express' });
});

Router.post('/', (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password_confirmation = req.body.password_confirmation;

    let sql = `INSERT INTO users (nama, email, username, password) VALUES('${nama}', '${email}', '${username}', '${bcrypt.hashSync(password, 10)}')`;
    db.query(sql);

    req.flash('success', 'it work');
    res.redirect('/user/login');
});



module.exports = Router;