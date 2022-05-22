import React from 'react';
import toast from 'react-hot-toast';

const Answer = ({ question }) => {
    const { _id, questionText, category, bcsNo, answerOptions } = question;
    const answer = answerOptions?.find(answer => (answer?.isCorrect === 'true' || answer?.isCorrect === true));
    const handleDelete = (id) => {
        const agree = window.confirm('Are you sure you want to delete?');

        if (agree) {
            fetch(`https://desolate-wildwood-64014.herokuapp.com/questions/${id}`, {
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
            <th><>{bcsNo ? `${bcsNo}th` : ''} {category}</></th>
            <td>{questionText}</td>
            <td>{answer.answerText}</td>
        </tr>
    );
};

export default Answer;