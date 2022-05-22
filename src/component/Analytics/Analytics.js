import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Analytics.css'

const Analytics = () => {
    const [user] = useAuthState(auth);
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/marks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMarks(data));
    }, [marks]);

    let sum = 0;
    let allScores = marks.map(m => parseFloat(m.percentage));
    const highest = Math.max(...allScores);
    for (const number of allScores) {
        sum += number;
    }
    const average = (sum / allScores.length).toFixed(2);


    return (
        <div className='analytics m-3 p-5 shadow rounded'>
            <div className='info w-75 mx-auto text-center mb-3'>
                <h3>Hello, <span className='text-info'>{user.displayName}</span></h3>
                <h5>You have participated in <span className='text-warning'>{marks.length}</span> exams</h5>
                <h5>Your Highest score is <span className='text-success'>{highest ? highest : '0'}%</span></h5>
                <h5>Your Average score is <span className='text-primary'>{average ? average : '0'}%</span></h5>
            </div>
            <hr />
            <h3 className='text-center mb-4'>Statistics</h3>
            <div className='chart d-flex justify-content-around mx-auto'>
                <MyAreaChart></MyAreaChart>
                <MyLineChart></MyLineChart>
            </div>
        </div>
    );
};

export default Analytics;