import React from "react";
import { useState } from "react";

function MakeFourWordQuiz(){
    let initialValues = [];
    for(var i=0; i<15; i++){
        initialValues.push({ index:i, que: "", ans: "" });
    }
    const [quizValues, setQuizValues] = useState(initialValues);
    let copy
    const handleChange = (e) => {
        const { name, value } = e.target;
        copy = quizValues
        if(name.startsWith('que')) copy[parseInt(name.slice(4))].que= value
        else copy[parseInt(name.slice(4))].ans= value
        setQuizValues({ ...copy });
    };

    const handleSubmit = () => {
        console.log(quizValues)
    };

    return(
        <div className="makePage">
            <h1>네글자 퀴즈 만들기</h1>
            <form className="quizForm1" onSubmit={handleSubmit}>
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
                <button type="submit" id="submit">제출하기</button>
            </form>
        </div>
    )
}

export default MakeFourWordQuiz;