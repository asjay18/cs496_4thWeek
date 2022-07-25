import React from "react";
import {Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar(){
    return (
        <div className="nav">
            <CustomLink to="/">
                <h3>Recreation</h3>
            </CustomLink>
            {/* <ul className="navUl">
                <CustomLink to="/">홈</CustomLink>
                <CustomLink to="/likedPage">좋아요한 퀴즈</CustomLink>
                <CustomLink to="/madePage">내가 만든 퀴즈</CustomLink>
            </ul> */}
            <Link className="loginButton" to="/login">로그인</Link>
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