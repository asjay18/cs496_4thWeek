import React from "react";
import { useState } from "react";
import { Stepper,Step,StepLabel } from '@mui/material';

const people= [
  { firstName: "John", lastName: "Smith" },
  { firstName: "Bill", lastName: "Jones" },
  { firstName: "Roger", lastName: "Moore" }
];
const People= ({ i, name }) => (
  <div>
    {i} {name}
  </div>
);
// function MakeQuiz() {
//   return (
//     <div>
//       {people.map((p, i) => (
//         <People {...p} key={i} />
//       ))}
//     </div>
//   );
// }

function MakeQuiz(){
    const initialValues = { type: "people", title: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const [imageState, setImageState] = useState('사진을 업로드해주세요');
    const [formImages, setFormImages] = useState({});

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
        setFormImages({...fileList})
        setImageState(`업로드할 사진 수: 총 ${fileList.length}개`)
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('here')
        if(activeStep === 0){
            console.log('go to next');
            console.log(formValues);
            console.log(formImages);
            setActiveStep(activeStep+1);
        }
        else{
            console.log('submit');
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
                    <label>퀴즈종류</label>
                    <select value={formValues.type} name="type" onChange={handleChange}>
                        <option value="people">인물퀴즈</option>
                        <option value="music">음악퀴즈</option>
                    </select>
                    <label>퀴즈제목</label>
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
                <div>
                {(formImages!=null)?Array.from(formImages).forEach((item) => (
                    <People {...item.name} key={item.type} />
                )):<></>}
                </div>
            }
            
        </div>
    )
}

export default MakeQuiz;