import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Quiz = () => {

    const navigate = useNavigate();
    const [list, setList] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://192.249.18.147:80/quiz/${id}`)
        .then((resp) => setList({ ...resp.data[0] }));
    }, [id]);

    // console.log(list);
    // console.log(list.quiz);
    // console.log(list.answer);

    const wordList = (list.quiz || ``).split(`\n`);
    const ansList = (list.answer || ``).split(`\n`);
    // type undefined 해결하는법

    // console.log(wordList);
    // console.log(ansList);

    const fourWordList = [];

    // fourWordList.push({word: '고슴', ans: '도치' });

    // 반복문 다시써야할듯
    for(var i = 0; i<wordList.length; i++) {
        fourWordList.push({word: wordList[i], ans: ansList[i]});
    }
    // console.log(fourWordList);
    
    fourWordList.push({word: '끝'});



    // const fourWordList = [
    //     {word: '고슴', ans: '도치' },
    //     {word: '비트', ans: '코인' },
    //     {word: '스파', ans: '게티' },
    //     {word: '궁칼', ans: '국수' },
    //     {word: '끝'}
    // ]

    const [count, setCount] = useState(0);
    const countUntil = (fourWordList.length-1)*2;
    const [buttonText, setButtonText] = useState('정답 보기');



    const seeNext = (e) => {
        if(count+1 == countUntil){
            setCount(countUntil)
            setButtonText('나가기')
        } else if (count+1 > countUntil){
            navigate("/");
            window.location.reload();
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