import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function SongQuiz(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/list");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        
        <div>
            <h1>초성 퀴즈</h1>
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
                                <td>{item.title}</td>
                                <td>
                                    
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SongQuiz;