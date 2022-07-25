import React from "react";
import { useNavigate } from "react-router-dom";
import './Page.css'

function MadePage(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="topBar">
                <button type="button" onClick={()=>{
                    navigate("/make");
                    window.location.reload();
                }}>새로 만들기</button>
                <button type="button" onClick={()=>{
                    navigate("/make/fourwords");
                    window.location.reload();
                }}>네글자 퀴즈 만들기</button>
            </div>
            <h1>Made Quizes</h1>
        </div>
    )
}

export default MadePage;