import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const Question = ({ question }) => {
    const [user] = useAuthState(auth);
    const { _id, questionText, category, bcsNo, answerOptions } = question;
    const answer = answerOptions?.find(answer => (answer?.isCorrect === 'true' || answer?.isCorrect === true));
    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure you want to delete?');

        if (agree) {
            fetch(`https://desolate-wildwood-64014.herokuapp.com/questions/${id}?email=${user.email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Item removed successfully');
                })
        }
    }

    return (
        <tr>
            <th><>{category}</></th>
            <td>{questionText}</td>
            <td>{answer?.answerText}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default Question;


