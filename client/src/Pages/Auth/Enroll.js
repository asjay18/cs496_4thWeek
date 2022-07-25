import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Enroll(){
    const initialValues = { nickname: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const navigate = useNavigate();
    const handleEnroll = async (e) => {
        e.preventDefault();
        if(Object.keys(validate(formValues)).length === 0){
            //form의 validation 통과
            console.log(formValues)
            try {
                axios.post("http://localhost:5000/api/signup", {
                    nickname: formValues.nickname,
                    email: formValues.email,
                    password: formValues.password
                }).then(function (response) {
                    
                    if(response.data === "회원가입 성공") {
                        navigate("/");
                        window.location.reload();
                    } else {
                        
                    }
                    
                    
                }).catch(err => {
                    console.log(err);
                });
            } catch (err) {
                console.log(err);
            }
        }
        else{
            setFormErrors(validate(formValues));
        }
    }

    const validate = (values) => {
        const errors = {};
        //email validation
        const regexE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //password validation: Minimum eight chars, at least one letter&number&specialChar
        const regexP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
        if (!values.nickname) {
            errors.nickname = "닉네임을 입력해주세요";
        } else if (values.nickname.length<2) {
            errors.nickname = "두 자 이상의 닉네임을 입력해주세요";
        }
        if (!values.email) {
            errors.email = "이메일을 입력해주세요";
        } else if (!regexE.test(values.email)) {
            errors.email = "올바른 형식의 이메일 주소가 아닙니다";
        }
        if (!values.password) {
            errors.password = "비밀번호를 입력해주세요";
        } else if (!regexP.test(values.password)) {
            errors.password = "8자리 이상의 영어와 숫자, 특수문자 조합의 비밀번호를 입력해주세요";
        }
        return errors;
    };
    
    return(
        <div className="authPage">
            <form className="authForm" onSubmit={handleEnroll}>
                <h2>회원가입</h2>
                <div className="field">
                    <input
                        type="text"
                        name="nickname"
                        placeholder="닉네임"
                        value={formValues.nickname}
                        onChange={handleChange}
                    />
                    <p>{formErrors.nickname}</p>
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="email"
                        placeholder="이메일"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <p>{formErrors.email}</p>
                </div>
                <div className="field">
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <p>{formErrors.password}</p>
                </div>
                <button type="submit" id="submit">회원가입</button>
            </form>
        </div>
    )
}

export default Enroll;