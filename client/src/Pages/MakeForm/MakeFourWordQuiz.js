import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MakeFourWordQuiz(){
    let initialValues = [];
    for(var i=0; i<15; i++){
        initialValues.push({ index:i, que: "", ans: "" });
    }


    const [quizValues, setQuizValues] = useState(initialValues);
    let copy


    const initialTitle = { title: "" };
    const [state, setTitle] = useState(initialTitle);
    const {title} = state;
    const handleTitleChange = (e) => {
        const {name, value} = e.target;
        setTitle({...state, [name]: value});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        copy = quizValues
        if(name.startsWith('que')) copy[parseInt(name.slice(4))].que= value
        else copy[parseInt(name.slice(4))].ans= value
        setQuizValues({ ...copy });

    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        var words = ``;
        var answers = ``;

        for(var i=0; i<15; i++) {
            if(quizValues[i].que !== '' && quizValues[i].ans !== '') {
                words = words + quizValues[i].que + `\n`;
                answers = answers + quizValues[i].ans + `\n`;
            }
        }
        // console.log(words.slice(0, -1));
        // console.log(answers.slice(0, -1));
        
        axios.post("http://localhost:5000/write/quiz", {
            title: title,
            writerId: 29,
            quiz: words.slice(0, -1),
            answer: answers.slice(0, -1),
            type: '네글자'
        }).then(function (response) {

        }).catch(err => {
            console.log(err);
        });
        // console.log(title)
        // console.log(quizValues)

        navigate("/fourWordQuiz");
        window.location.reload();
        e.preventDefault();
    };

    return(
        <div className="makePage">
            <h1>네글자 퀴즈 만들기</h1>
            
            <form className="quizForm1" onSubmit={handleSubmit}>
                <input
                    type="title"
                    id="title"
                    name="title"
                    placeholder="퀴즈 제목을 입력해주세요"
                    value={title}
                    onChange={handleTitleChange}
                />
                {initialValues.map((item)=>{
                    return (
                        <div className="quizInputField">
                            <p>{(item.index+1).toString().length >= 2 ? (item.index+1).toString() : '0'+(item.index+1).toString()}</p>
                            <input
                                type="text"
                                name={`que?${item.index}`}
                                value={quizValues[item.index].que}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name={`ans?${item.index}`}
                                value={quizValues[item.index].ans}
                                onChange={handleChange}
                            />
                        </div>
                    )
                })}
                <button type="submit" id="submit">만들기</button>
            </form>
        </div>
    )
}

export default MakeFourWordQuiz;