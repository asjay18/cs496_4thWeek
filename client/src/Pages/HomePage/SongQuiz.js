import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function SongQuiz(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/list/음악");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        
        <div>
            
            <h1>음악 퀴즈</h1>

            {/* <Link to="/makeChosungQuiz">
                <button>make quiz</button>
            </Link> */}
            
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
                                <Link to={'/view/${item.id}'}>
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

export default SongQuiz;