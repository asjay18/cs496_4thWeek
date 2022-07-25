import React from "react";
import { useState } from "react";

function MakeFourWordQuiz(){
    let initialValues = [];
    for(var i=0; i<15; i++){
        initialValues.push({ que: "", ans: "" });
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
        <div>
            <h1>Make FourWord Quizes</h1>
            <form className="quizForm" onSubmit={handleSubmit}>
                <h2>초성퀴즈 만들기</h2>
                <div className="field">
                    <input
                        type="text"
                        name="que?0"
                        value={quizValues[0].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?0"
                        value={quizValues[0].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?1"
                        value={quizValues[1].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?1"
                        value={quizValues[1].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?2"
                        value={quizValues[2].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?2"
                        value={quizValues[2].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?3"
                        value={quizValues[3].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?3"
                        value={quizValues[3].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?4"
                        value={quizValues[4].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?4"
                        value={quizValues[4].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?5"
                        value={quizValues[5].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?5"
                        value={quizValues[5].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?6"
                        value={quizValues[6].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?6"
                        value={quizValues[6].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?7"
                        value={quizValues[7].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?7"
                        value={quizValues[7].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?8"
                        value={quizValues[8].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?8"
                        value={quizValues[8].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?9"
                        value={quizValues[9].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?9"
                        value={quizValues[9].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?10"
                        value={quizValues[10].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?10"
                        value={quizValues[10].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?11"
                        value={quizValues[11].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?11"
                        value={quizValues[11].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?12"
                        value={quizValues[12].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?12"
                        value={quizValues[12].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?13"
                        value={quizValues[13].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?13"
                        value={quizValues[13].ans}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="que?14"
                        value={quizValues[14].que}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="ans?14"
                        value={quizValues[14].ans}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" id="submit">로그인</button>
            </form>
        </div>
    )
}

export default MakeFourWordQuiz;