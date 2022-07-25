import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
    const [list, setList] = useState({});

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/quiz/${id}`)
        .then((resp) => setList({ ...resp.data[0] }));
    }, [id]);

    // console.log(list.quiz);
    // console.log(list.answer);


    // let quizs = list.quiz.split("\n");
    // let answers = list.answer.split("\n");

    // var fourWordList = [];
    // for(var i = 0; i<quizs.length; i++) {
    //     fourWordList.append({word: quizs[i], ans: answers[i]});
    // }

    
    // fourWordList.append({word: '끝'});



    const fourWordList = [
        {word: '고슴', ans: '도치' },
        {word: '비트', ans: '코인' },
        {word: '스파', ans: '게티' },
        {word: '궁칼', ans: '국수' },
        //{word: '끝'}
    ]

    const [count, setCount] = useState(0);
    const countUntil = (fourWordList.length-1)*2;
    const [buttonText, setButtonText] = useState('정답 보기');



    const seeNext = (e) => {
        if(count+1 >= countUntil){
            setCount(countUntil)
            setButtonText('나가기')
        }
        else{
            if(count%2===0) setButtonText('다음으로')
            else setButtonText('정답 보기')
            setCount(count+1)
        }
    }

    return (
        <div className="quizPage">
            <div className="quizAnswer">
                <h1>{
                    (count%2===0)?
                    fourWordList[parseInt(count/2)].word:
                    fourWordList[parseInt(count/2)].ans
                }</h1>
            </div>
            <button onClick={seeNext}>{buttonText}</button>
        </div>
    )
}



export default Quiz;