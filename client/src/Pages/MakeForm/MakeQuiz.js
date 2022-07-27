import React from "react";
import { useState } from "react";
import { Stepper,Step,StepLabel } from '@mui/material';
import imageCompression from "browser-image-compression";
import axios from "axios";

function MakeQuiz(){
    const initialValues = { type: "people", title: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const [imageState, setImageState] = useState('사진을 업로드해주세요');
    const [formImages, setFormImages] = useState([]);

    const steps = ['Step 1', 'Step 2'];
    const stepAction = ['다음으로 가기', '제출하기'];
    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    let fileList
    const handleImages = (e) => {
        fileList = e.target.files
        console.log(e.target.files)
        setFormImages(fileList)
        console.log(fileList)
        setImageState(`업로드할 사진 수: 총 ${fileList.length}개`)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('here')
        if(activeStep === 0){
            console.log('go to next');
            console.log(formValues);
            console.log(formImages);
            //image server에 넣기
            
            const form = new FormData()
            form.append('files', formImages[0]);
            console.log(formImages[0])
            form.append('userId', 11);
            // console.log(formImages.length);
            // Array.from(formImages).forEach((item)=>{
            //     form.append('files', item);
            // });
            axios.post("http://192.249.18.147:80/new/quiz",form,{
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(()=>{}).catch((err)=>{
                console.log(err);
            })
            console.log('submit');
            
            setActiveStep(activeStep+1);
        }
        else if (activeStep === 1){
            
        }
        else{

        }
    }

    return(
        <div className="makePage">
            <Stepper className="stepper" activeStep={activeStep}>
                {steps.map((step)=>{
                    return (<Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>);
                })}
            </Stepper>
            {activeStep === 0 &&
                <form className="quizForm" onSubmit={handleSubmit}>
                    {/* <label>퀴즈종류</label>
                    <select value={formValues.type} name="type" onChange={handleChange}>
                        <option value="people">인물퀴즈</option>
                        <option value="music">음악퀴즈</option>
                    </select>
                    <label>퀴즈제목</label> */}
                    <input 
                        id="title"
                        type="text" 
                        name="title" 
                        placeholder="퀴즈제목" 
                        value={formValues.title} 
                        onChange={handleChange}
                    />
                    <label>사진 올리기 (최대 20개)</label>
                    <div className="inputFiles">
                        <label className="input-file-button" htmlFor="input-file">파일 선택</label>
                        <p>{imageState}</p>
                        {/* ^처음에는 null, 사진 업로드하면 갯수... 아님 파일 이름들..? */}
                    </div>
                    <input 
                        id="input-file"
                        type="file"
                        name="images"
                        multiple
                        onChange={handleImages}
                        style={{display:"none"}}
                    />
                    <button type="submit">{stepAction[activeStep]}</button>
                </form>
            }
            {activeStep===1 &&
                <form>
                    <p>리스트</p>
                    {(formImages!=null) ? Array.from(formImages).map((item)=>{
                        return (
                        <div className="imageList" key={item.name}>
                            <div>{item.name}</div>
                            <input type="text" placeholder="정답"></input>
                            <div></div>
                            <img src={`${item}`}/>
                        </div>)
                    })
                    :null}
                    <button type="submit">{stepAction[activeStep]}</button>
                </form>
            }
            
        </div>
    )
}

export default MakeQuiz;