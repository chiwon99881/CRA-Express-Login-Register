const express = require('express');
const db = require('../database/db');
const mysql = require('mysql');

const connection = mysql.createConnection(db);
connection.connect(err => {
    if(err) return err;
});

const router = express.Router();

router.post('/loginprocess',(req,res) => {
    let post = req.body;
    let email = post.email;
    let password = post.password;
    const CHECK_USER = `SELECT * FROM user WHERE email='${email}' and password='${password}'`;
    connection.query(CHECK_USER,(err,results) => {
        if(err) return err;
        else if(results[0] === undefined) {
            res.redirect('http://localhost:3000/login');
        } else {
            req.session.isLogged = true;
            req.session.name = email;
            req.session.save(err => {
                if(err) return err;
                else {
                    res.redirect('http://localhost:3000/');
                }
            });
        }
    });
});

router.get('/logout',(req,res) => {
    req.session.destroy(err => {
        if(err) return err;
        else {
        res.redirect('http://localhost:3000/');
        }
    })
})

router.post('/register',(req,res) => {
    console.log(req.body);
    let post = req.body;
    let email = post.email;
    let password = post.password;
    console.log(email,password);
    const INSERT_USER = `INSERT INTO user (email,password) VALUES ('${email}','${password}')`;
    connection.query(INSERT_USER,(err,results) => {
        if(err) return err;
        else {
            res.redirect('http://localhost:3000/');
        }
    })
});

router.get('/islogged',(req,res) => {
    const CHECK_LOGGED = `SELECT * FROM sessions`
    connection.query(CHECK_LOGGED,(err,results) => {
        if(err) return err
        else if(results[0] === undefined) {
            res.json({isLogged:false})
        }else if(results[0] !== undefined) {
            res.json({isLogged :JSON.parse(results[0].data).isLogged})
        }
    })
});

module.exports = router;