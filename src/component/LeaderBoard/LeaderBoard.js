import React, { useEffect, useState } from 'react';
import Mark from '../Mark/Mark';
import './LeaderBoard.css'

const LeaderBoard = () => {
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        fetch('https://desolate-wildwood-64014.herokuapp.com/marks')
            .then(res => res.json())
            .then(data => setMarks(data));
    }, [marks]);

    return (
        <div className='all-result m-3 p-3 shadow rounded'>
            <h2 className='text-center'>Leader Board</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Exam</th>
                        <th scope='col'>Score</th>
                        <th scope="col">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marks.slice(0, 10).map(mark => <Mark key={mark._id} mark={mark}></Mark>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LeaderBoard;