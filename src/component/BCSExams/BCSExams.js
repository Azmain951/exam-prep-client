import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BCSExams.css'

const BCSExams = () => {
    const num = [43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30];
    const [bcs, setBcs] = useState(num);
    return (
        <div className='mb-5'>
            <h2 className='text-center mt-5'>BSC Exam Questions</h2>
            <hr className='mx-4' />
            <div className="model-test-container row px-5">
                {
                    bcs.map(b => <>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="bcs-test-card card border-0 shadow">
                                <Link to={`/exams/BCS Questions/${b}`}>
                                    <div className="card-body">
                                        <h5 className="text-center card-title">{b}th BCS Exam</h5>
                                    </div>
                                </Link>
                            </div>
                        </div >
                    </>)
                }
            </div>
        </div>
    );
};

export default BCSExams;