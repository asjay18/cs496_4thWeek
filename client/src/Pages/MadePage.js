import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './Page.css';

function MadePage(){
    const [data, setData] = useState([]);

    console.log(sessionStorage.getItem("token"));
    const loadData = async () => {
        const response = await axios.get(`http://192.249.18.147:80/list/my/${sessionStorage.getItem("token")}`);
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);


    return(
        
        <div>
            
            <h1>내가 만든 퀴즈</h1>
            
            <table>
                <thead>
                    <tr>
                        <th width="15%">No.</th>
                        <th width="85%">퀴즈 제목</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/quiz/${item.bid}`}>
                                    {item.title}
                                </Link></td>
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

export default MadePage;