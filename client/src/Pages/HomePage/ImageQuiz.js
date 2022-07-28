import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const ImageQuiz = () => {
    const navigate = useNavigate();
    const [list, setList] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://192.249.18.147:80/quiz/${id}`)
        .then((resp) => setList({ ...resp.data[0] }));
    }, [id]);

    const imgList = (list.quiz || ``).split(`\n`);
    console.log(imgList);
    const ansList = (list.answer || ``).split(`\n`);

    // type undefined 해결하는법
    const fourWordList = [];

    // 반복문 다시써야할듯
    for(var i = 0; i<imgList.length; i++) {
        console.log(`http://192.249.18.147:80/imageQuiz/${imgList[i]}`)
        fourWordList.push({img: `http://192.249.18.147:80/imageQuiz/${imgList[i]}`, ans: ansList[i]});
    }
    fourWordList.push({ans: '끝'});

    const [count, setCount] = useState(0);
    const countUntil = (fourWordList.length-1)*2;
    const [buttonText, setButtonText] = useState('정답 보기');

    const seeNext = (e) => {
        if(count+1 === countUntil){
            setCount(countUntil)
            setButtonText('나가기')
        } else if (count+1 > countUntil){
            navigate("/");
            window.location.reload();
        }
        else{
            if(count%2 === 0) setButtonText('다음으로')
            else setButtonText('정답 보기')
            setCount(count+1)
        }
    }

    return (
        <div className="quizPage">
            <div className="quizAnswer">
                {(count%2===0 && count < countUntil)?
                    <img src={fourWordList[parseInt(count/2)].img}></img>:
                    <h1>{fourWordList[parseInt(count/2)].ans}</h1>
                }
            </div>
            <button onClick={seeNext}>{buttonText}</button>
        </div>
    )

}



export default ImageQuiz;