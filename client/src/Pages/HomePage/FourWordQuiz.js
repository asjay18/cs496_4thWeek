import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function FourWordQuiz() {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/list/네글자");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    


    return(
        
        <div>
            
            <h1>네글자 퀴즈</h1>

            <Link to="/makeQuiz">
                <button>퀴즈 만들기</button>
            </Link>
            
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr>
                                <th>{index+1}</th>
                                <Link to={`/quiz/${item.idBoard}`}>
                                <td>{item.title}</td>
                                </Link>
                                {/* <td>
                                    <Link to={'/view/${item.id}'}>
                                    <button>View</button>
                                    </Link>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FourWordQuiz;