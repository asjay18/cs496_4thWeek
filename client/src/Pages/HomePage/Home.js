import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

function Home(){
    return(
        <div>
            <div className="quizesTab">
                <Link to="/fourWordQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>네글자 퀴즈</h4>
                        <img src="/images/fourwordImage.png"></img>
                        {/* <div>image of 00,00</div> */}
                    </div>
                </Link>
                <Link to="/chosungQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>초성 퀴즈</h4>
                        <img src="/images/chosungImage.png"></img>
                    </div>
                </Link>
                <Link to="/sokdamQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>속담 퀴즈</h4>
                        <img src="/images/sokdamImage.jpeg"></img>
                    </div>
                </Link>
            </div>
            <div className="quizesTab">
                <Link to="/peopleQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>인물 퀴즈</h4>
                        <img src="/images/peopleImage.png"></img>
                    </div>
                </Link>
                <Link to="/songQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>음악 퀴즈</h4>
                        <img src="/images/songImage.jpg"></img>
                    </div>
                </Link>
                <Link to="/quoteQuiz">
                    <div className="type" id="buttonQuiz">
                        <h4>명대사 퀴즈</h4>
                        <img src="/images/quoteImage.jpg"></img>
                    </div>
                </Link>
            </div>
            <div className="quizesTab">
                <Link to="/jurumarble">
                    <div className="type" id="buttonQuiz">
                        <h4>수도 퀴즈</h4>
                        <img src="/images/sudoImage.jpg"></img>
                    </div>
                </Link>
                <Link to="/jurumarble">
                    <div className="type" id="buttonQuiz">
                        <h4>몸으로 말해요</h4>
                        <img src="/images/bodyImage.jpg"></img>
                    </div>
                </Link>
                <Link to="/jurumarble">
                    <div className="type" id="buttonQuiz">
                        <h4>주루마블</h4>
                        <img src="/images/juruImage.jpg"></img>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Home;