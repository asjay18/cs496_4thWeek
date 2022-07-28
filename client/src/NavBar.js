import React, { useEffect, useState } from "react";
import {Link, useMatch, useResolvedPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate();
    const [loginVal, setLoginVal] = useState('null');

    const awaitForLoginCheck = async ()=>{
        const isLogined = await sessionStorage.getItem("token");
        if(isLogined === 'null' || isLogined === null){
            setLoginVal('null');
        }
        else{
            setLoginVal('true');
        }
    }
    
    useEffect(()=>{
        awaitForLoginCheck();
    },[]);

    return (
            <div className="nav">
                <CustomLink to="/">
                    <h3>Recreation</h3>
                </CustomLink>
                {(loginVal === 'null')?
                <Link className="loginButton" to="/login">로그인</Link>
                :<>
                    <ul className="navUl">
                        <CustomLink to="/madePage">내가 만든 퀴즈</CustomLink>
                    </ul>
                    <button type="button" id="loginbtn" onClick={()=>{
                        sessionStorage.setItem("token", null);
                        console.log(sessionStorage.getItem("token"));
                        navigate("/");
                        window.location.reload();
                    }}>로그아웃</button>
                </>
                }
            </div>
        )    
}

// active한 페이지를 찾기 위해서 (출처: https://www.youtube.com/watch?v=SLfhMt5OUPI)
function CustomLink({to, children, ...props}){
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname})
    return(
        <li className={isActive?"active":""} {...props}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar;