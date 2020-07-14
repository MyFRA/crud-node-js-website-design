const express = require('express');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const tableName = "`users`";

const User = function (member) {
    this.nama = member.nama,
    this.email = member.email,
    this.username = member.username,
    this.password = member.password,
    this.created_at = member.created_at,
    this.updated_at = member.updated_at
}

User.getAll = function(result) {
    db.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err) {
            console.log(`error: `, err);
            result(null, err);
            return;
        }

        console.log('users: ', res);
        result(null, res);
    });
}

User.checkForLogin = function([email, password], result) {
    db.query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`, (err, res) => {
        if(res.length) {
            if(bcrypt.compareSync(password, res[0].password)) {
                result(null, res[0]);
                return;
            } else {
                result('password yang anda masukan salah', err);
                return;
            }
        };
        result('email tidak ditemukan', err);
        return;
    });
}

module.exports = User;