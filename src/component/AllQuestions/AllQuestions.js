import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AllQuestions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/questions`)
            .then(res => res.json())
            .then(data => setQuestions(data));
    }, [questions])

    return (
        <div className='m-3 p-3 shadow rounded'>
            <h2 className='text-center'>All Questions</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Exam Name</th>
                        <th scope="col">Question</th>
                        <th scope='col'>Answer</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map(question => <Question key={question._id} question={question}></Question>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllQuestions;