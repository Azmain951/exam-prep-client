import React from 'react';

const Mark = ({ mark }) => {
    const { user, score, total, category, bcsNo, percentage } = mark;
    return (
        <tr>
            <th><>{user}</></th>
            <td>{bcsNo ? `${bcsNo}th` : ''} {category}</td>
            <td>{score} out of {total}</td>
            <td>{percentage}%</td>
        </tr>
    );
};

export default Mark;