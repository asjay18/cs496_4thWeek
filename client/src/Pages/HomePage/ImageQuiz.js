const http = require('http');
const express = require('express');
const cors = require('cors');
const mysql= require('mysql');
const bodyParser = require("body-parser");
// const fileUpload = require('express-fileupload');
// const morgan = require('morgan');
// const _ = require('lodash');
// const fs = require('fs');
// const path = require('path');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'abc',
    password : 'abc123',
    database : 'week4'
});

const app = express();
app.use(express.json());

const corsOptions = {
  origin: true,
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}))

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

app.listen(80, () => {
    console.log('Server started at port 80');
});

app.get('/', (req, res)=> {
    connection.query('INSERT INTO `board` (`bid`,`title`,`writeruid`, `quiz`, `answer`, `type`) VALUES (DEFAULT, "신서유기", 1, "신서\n선사", "유기\n시대", "네글자");', (err, results, fields)=>{
        res.statusCode=200;
        res.send(results);
    })
})

//auth - 안 씀 (현재)
app.get('/auth/login', (req, res)=>{
    console.log(req.query) 
})

//user
app.get('/user/getall', (req, res)=>{
    connection.query('SELECT * FROM users', (err, results, fields)=>{
        if(err) throw err;
        res.statusCode = 200;
        res.send(results);
    })
})

app.get('/user/insert', (req, res)=>{
    connection.query(
        `INSERT INTO users (uid,nickname,email,password) VALUES (
        DEFAULT, '${req.query.nickname}', '${req.query.email}', '${req.query.password}')`,
        (err, results, fields)=>{
            if(err) throw err;
            res.statusCode = 200;
            res.send(results);
        }
    )
})




app.get("/write/quiz", (req, res) => {
    console.log(req.params);
    const sqlQuiz = "INSERT INTO board (bid, title, writeruid, quiz, answer, type) VALUES (default, ?, ?, ?, ?, ?)";
    connection.query(sqlQuiz, [req.query.title, req.query.writeruid, req.query.quiz, req.query.answer, req.query.type], (error, result) => {
        if(error) {
            console.log(error)
        } else {
            console.log(result);
        }
    })
})

app.get("/list/:type", (req, res) => {
    const sqlGet = "SELECT * FROM board WHERE type = ?";
    connection.query(sqlGet, req.params.type, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
            console.log(result);
        }
    })
})

app.get("/list/my/:writeruid", (req, res) => {
    const sqlGet = "SELECT * FROM board WHERE writeruid = ?";
    connection.query(sqlGet, req.params.writeruid, (error, result) => {
        console.log(req.params);
        if (error) {
            console.log(error);
        } else {
            res.json(result);
            console.log(result);
        }
    })
})

app.get("/quiz/:id", (req, res) => {
    const sqlGet = "SELECT * FROM board WHERE bid = ?"
    connection.query(sqlGet, req.params.id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
            console.log(result);
        }
    })
})

app.get("/view/:id", (req, res) => {
    const sqlGet = "SELECT (quiz, answer) FROM board WHERE bid = ?"
    connection.query(sqlGet, req.params.id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
        }
    })
})

app.post("/new/quiz", (req, res) => {
    console.log(1231)
    var jsonString = '';
    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        console.log(jsonString);
    });
    res.sendStatus(200);
    // console.log(req.files);
    // console.log(req.body.data.files);
    //console.log(req.params.type);
    // connection.query(sqlQuiz, [req.query.title, req.query.writeruid, req.query.quiz, req.query.answer, req.query.type], (error, result) => {
    //     if(error) {
    //         console.log(error)
    //     } else {
    //         console.log(result);
    //     }
    // })
})

app.get("/imageQuiz/:imageid", (req, res)=>{
    var filepath = `quizImages/${req.params.imageid}.jpg`;
    console.log(filepath);
    res.sendFile(filepath, {root: process.cwd()});
})