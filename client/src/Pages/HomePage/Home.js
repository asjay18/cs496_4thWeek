import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

function Home(){
    return(
        <div>
            <div className="quizesTab">
                <Link to="/fourWordQuiz">
                    <div className="type" id="fourWordQuiz">
                        <h4>네글자 퀴즈</h4>
                        <div>image of 00,00</div>
                    </div>
                </Link>
                <Link to="/chosungQuiz">
                    <div className="type" id="chosungQuiz">
                        <h4>초성 퀴즈</h4>
                        <div>image ㄱㄴㄷㄹ</div>
                    </div>
                </Link>
                <Link to="/noneSenseQuiz">
                    <div className="type" id="noneSenseQuiz">
                        <h4>넌센스 퀴즈</h4>
                        <div>image of nonesense</div>
                    </div>
                </Link>
            </div>
            <div className="quizesTab">
                <Link to="/peopleQuiz">
                    <div className="type" id="peopleQuiz">
                        <h4>속담 퀴즈</h4>
                        <div>image of person</div>
                    </div>
                </Link>
                <Link to="/quoteQuiz">
                    <div className="type" id="quoteQuiz">
                        <h4>명대사 퀴즈</h4>
                        <div>image of 명대사</div>
                    </div>
                </Link>
                <Link to="/jurumarble">
                    <div className="type" id="jurumarble">
                        <h4>몸으로 말해요</h4>
                        <div>image of boardgame</div>
                    </div>
                </Link>
            </div>
            <div className="quizesTab">
                <Link to="/peopleQuiz">
                    <div className="type" id="peopleQuiz">
                        <h4>인물 퀴즈</h4>
                        <div>image of person</div>
                    </div>
                </Link>
                <Link to="/songQuiz">
                    <div className="type" id="songQuiz">
                        <h4>음악 퀴즈</h4>
                        <div>image of song</div>
                    </div>
                </Link>
                <Link to="/jurumarble">
                    <div className="type" id="jurumarble">
                        <h4>주루마블</h4>
                        <div>image of boardgame</div>
                    </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Home;