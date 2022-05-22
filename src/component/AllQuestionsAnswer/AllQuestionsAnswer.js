import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';

const AllQuestionsAnswer = () => {
    const { name, id } = useParams({});

    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/question?category=${name}${id ? `&no=${id}` : ''}`)
            .then(res => res.json())
            .then(data => setQuestions(data));
    }, [questions])
    return (
        <div className='m-3 p-3 shadow rounded'>
            <h2 className='text-center'>All Questions Answer({id ? `${id}th` : ''} {name})</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Exam Name</th>
                        <th scope="col">Question</th>
                        <th scope='col'>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map(question => <Answer key={question._id} question={question}></Answer>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllQuestionsAnswer;