import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Mark from '../Mark/Mark';
import './UserProfile.css'

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch(`https://desolate-wildwood-64014.herokuapp.com/marks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMarks(data));
    }, []);

    return (
        <div className='user'>
            <div className='user-info d-flex justify-content-around rounded-pill mx-4 m-3 shadow p-4 text-center'>
                <div>
                    <p>Name</p>
                    <h4>{user.displayName}</h4>
                </div>
                <div>
                    <p>Email Address</p>
                    <h4>{user.email}</h4>
                </div>
            </div>
            <div className='all-result m-3 p-3 shadow rounded'>
                <h3 className='text-center mb-3'>Attended Exams</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Exam</th>
                            <th scope='col'>Score</th>
                            <th scope="col">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            marks.map(mark => <Mark key={mark._id} mark={mark}></Mark>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserProfile;