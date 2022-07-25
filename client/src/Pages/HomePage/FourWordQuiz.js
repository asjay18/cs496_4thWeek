import React from "react";
import { useState } from "react";

function FourWordQuiz() {
    const fourWordList = [
        {word: '고슴', ans: '도치' },
        {word: '집에', ans: '갈래' },
        {word: '놀고', ans: '싶어' },
        {word: '궁칼', ans: '국수' },
        {word: '끝'}
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

export default FourWordQuiz;