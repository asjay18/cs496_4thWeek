import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function NoneSenseQuiz(){
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://192.249.18.147:80/list/넌센스");
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div>
            <h1>넌센스 퀴즈</h1>
            <h1>COMING SOON</h1>
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

export default NoneSenseQuiz;