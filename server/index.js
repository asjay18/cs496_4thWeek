const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mxtec7",
    database: "test",
    port: 3306
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/all", (req, res) => {
    db.query("SELECT * FROM user", (error, result) => {
        console.log(result);
        res.json(result);
    });
})

app.get("/api/login", (req, res) => {
    const { email, password } = req.body;
    const sqlGet = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(sqlGet, [email, password], (error, result) => {
        console.log(email);
        console.log(password);
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            if(result.length > 0) {
                console.log("로그인 성공");
                res.send(result);
            } else {
                console.log("로그인 실패");
                res.send(result);
            }
        }
    });
});

app.post("/api/signup",  (req, res) => {
    const {nickname, email, password} = req.body;
    const sqlValid = "SELECT * FROM user WHERE email = ?";
    const sqlInsert = "INSERT INTO user (nickname, email, password) VALUES (?, ?, ?)";
    db.query(sqlValid, email, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            if(result.length > 0) {
                console.log(result);
                console.log("중복된 이메일이 존재합니다");
                res.send("중복된 이메일이 존재합니다");
            } else {
                db.query(sqlInsert, [nickname, email, password], (errorI, resultI) => {
                    if (errorI) {
                        console.log(errorI);
                    } else {
                        console.log("회원가입 성공");
                        res.send("회원가입 성공");
                    }
                });
            }
        }
    })
});

app.post("/write/quiz", (req, res) => {
    //const {title, writerId, quiz, answer} = {title: "한국영화초성퀴즈", writerId: 28, quiz: "ㄱㅅㅊ\nㅇㅋㅌㄷㅁㄱ", answer:"기생충\n웰컴투동막골"};
    const {title, writerId, quiz, answer, type} = req.body;
    const sqlQuiz = "INSERT INTO board (title, writerId, quiz, answer, type) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlQuiz, [title, writerId, quiz, answer, type], (error, result) => {
        if(error) {
            console.log(error)
        } else {
            console.log(result);
        }
    })
})

app.get("/list/:type", (req, res) => {
    const sqlGet = "SELECT * FROM board WHERE type = ?";
    const { type } = req.params;
    db.query(sqlGet, type, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
            console.log(result);
        }
    })
})

app.get("/quiz/:id", (req, res) => {
    const sqlGet = "SELECT * FROM board WHERE idBoard = ?"
    const { id } = req.params;
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
            console.log(result);
        }
    })
})

app.get("/view/:id", (req, res) => {
    const sqlGet = "SELECT (quiz, answer) FROM board WHERE idBoard = ?"
    const { id } = req.params;
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
        }
    })
})

// app.delete("/api/remove/:id",  (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = "DELETE FROM user WHERE id = ?";
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})