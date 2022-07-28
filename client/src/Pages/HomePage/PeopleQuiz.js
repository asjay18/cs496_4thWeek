import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function PeopleQuiz(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://192.249.18.147:80/list/인물");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        
        <div>
            
            <h1>인물 퀴즈</h1>

            
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
                                <Link to={'/imageQuiz/${item.id}'}>
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

            {(sessionStorage.getItem("token") === 'null') ? 
            <Link to="/login">
                <button type="button" id="makequiz">퀴즈 만들기</button>
            </Link> : 
            <Link to="/make">
                <button type="button" id="makequiz">퀴즈 만들기</button>
            </Link>}

        </div>
    )
}

export default PeopleQuiz;