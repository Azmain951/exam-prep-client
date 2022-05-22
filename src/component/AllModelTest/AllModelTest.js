import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AllTest from '../AllTest/AllTest';

const AllModelTest = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('https://desolate-wildwood-64014.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setTests(data));
    }, []);

    return (
        <div className='mb-5'>
            <h2 className='text-center mt-5'>Practice Model Test</h2>
            <hr className='mx-4' />
            <div className="model-test-container row px-5">
                {
                    tests.map(test => <AllTest key={test._id} test={test}></AllTest>)
                }
            </div>

            <h2 className='text-center mt-5'>Bank Job Questions</h2>
            <hr className='mx-4' />
            <div className="model-test-container row px-5">
                {
                    tests.map(test => <AllTest key={test.id} test={test}></AllTest>)
                }
            </div>
        </div>
    );
};

export default AllModelTest;