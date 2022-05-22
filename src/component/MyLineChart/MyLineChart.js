
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, BarChart, Bar } from 'recharts';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAreaChart = () => {
    const [user] = useAuthState(auth);
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/marks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMarks(data));
    }, []);
    return (
        <div>
            <BarChart width={350} height={300} data={marks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='category' />
                <YAxis />
                <Tooltip />
                <Legend></Legend>
                <Bar type="monotone" dataKey="percentage" stackId="1" stroke="#8884d8" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default MyAreaChart;