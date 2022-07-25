import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';

function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if(Object.keys(validate(formValues)).length === 0){
            //form의 validation 통과
            console.log(formValues)
            try {
                //로그인 시도
                //된다면 (참고 사이트: https://www.youtube.com/watch?v=T5dIjye4b-I (12분))
                navigate("/");
                window.location.reload();
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

    return (
        <div className="authPage">
            <form className="authForm" onSubmit={handleLogin}>
                <h2>로그인</h2>
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
                <button type="submit" id="submit">로그인</button>
                <button type="button" id="enroll" onClick={()=>{
                    navigate("/enroll");
                    window.location.reload();
                }}>회원가입</button>
            </form>
        </div>
    )
}

export default Login