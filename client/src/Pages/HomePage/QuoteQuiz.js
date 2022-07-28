import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function QuoteQuiz(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://192.249.18.147:80/list/명대사");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div>
            <h1>명대사 퀴즈</h1>

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
                                <th>{index+1}</th>
                                <td><Link to={`/view/${item.bid}`}>
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

            {(sessionStorage.getItem("token") === 'null') ? 
            <Link to="/login">
                <button type="button" id="makequiz">퀴즈 만들기</button>
            </Link> : 
            <Link to="/make/명대사">
                <button type="button" id="makequiz">퀴즈 만들기</button>
            </Link>}

        </div>
        
    )
}

export default QuoteQuiz;