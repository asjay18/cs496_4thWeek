import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';

function Home(){
    return(
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
    )
}

export default Home;