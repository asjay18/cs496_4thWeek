import React, {useState, useEffect} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import axios from "axios";

const initialState = {
    title: "",
    writerId: "",
    quiz: "",
    answer: "",
};

const MakeChosungQuiz = () => {
    const [state, setState] = useState(initialState);
    const {title, quiz, answer} = state;

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !quiz || !answer) {
            // 항목을 채워주세용
            // 칸이 비었어용
        } else {
            axios.post("http://localhost:5000/write/quiz", {
                title,
                writerId,
                quiz,
                answer
            }).then(() => {
                setState({title: "", quiz: "", answer: ""});
            })
            //.catch((err) => );
            // 성공!메시지
            setTimeout(() => history.push("/songQuiz"), 500);
        }
    };

    const handleInputChange = (e) => {
        const {title, value} = e.target;
        setState({ ...state, [name]: value});
    };

    return (
        <div style={{marginTop: "100px"}}>
            <form
            style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
            }}
            onSubmit={handleSubmit}>
            <label htmlFor="title">제목</label>
            <input
            type="title"
            id="title"
            name="title"
            placeholder="제목입력해주세용"
            value={title}
            onChange={handleInputChange}
            />
            <label htmlFor="quiz">문제</label>
            <input
            type="quiz"
            id="quiz"
            name="quiz"
            placeholder="문제내주세용"
            value={quiz}
            onChange={handleInputChange}
            />
            <label htmlFor="answer">정답</label>
            <input
            type="answer"
            id="answer"
            name="answer"
            placeholder="정답도적어주세용"
            value={answer}
            onChange={handleInputChange}
            />
            <input type="submit" value="글작성"/>
            <Link to="/songQuiz">
                <input type="button" value="뒤로가기"/>
            </Link>
            </form>
        </div>
        
    )
}

export default MakeChosungQuiz;