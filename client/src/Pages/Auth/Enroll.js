import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { toast } from "react-toastify";

function Enroll(){
    const initialValues = { nickname: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const navigate = useNavigate();
    let userExist, user;
    const handleEnroll = async (e) => {
        e.preventDefault();
        if(Object.keys(validate(formValues)).length === 0){
            //form의 validation 통과
            try {
                //로그인 시도
                userExist=false;
                axios.get("http://192.249.18.147:80/user/getall").then(response=>{
                    console.log(response.data);
                    for(var i=0; i<response.data.length; i++){
                        user = response.data[i];
                        if(user.email === formValues.email){
                            userExist=true;
                            break;
                        }
                    }
                    if(userExist === false){
                        console.log(`no such user, you can sign up`)
                        axios.get("http://192.249.18.147:80/user/insert", {params:{
                            nickname: formValues.nickname,
                            email: formValues.email,
                            password: formValues.password
                        }}).then(()=>{
                            //toast.success("계정 생성 완료");
                            navigate("/login");
                            window.location.reload();
                        }
                        ).catch(err=>{
                            console.log(`db에 유저 넣기 실패!!`);
                            console.log(err);
                        })
                    }
                    else{
                        console.log(`there exists a user who uses the same email`)
                        //toast.error("이미 가입된 이메일");
                        setFormErrors(validate(formValues).email==='이미 가입된 이메일')
                    }
                }
                ).catch(err => {
                    console.log(err);
                })
            } catch (err) {
                console.log('알 수 없는 이유로 회원가입에 실패했습니다.');
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