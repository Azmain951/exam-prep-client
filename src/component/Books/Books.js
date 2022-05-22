import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from '../Book/Book';
import { FiArrowRight } from 'react-icons/fi';


const Books = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://desolate-wildwood-64014.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleBooks = e => {
        navigate('/books');
    }

    return (
        <div className='p-4'>
            <h3 className="fw-bold mt-5 text-center mx-2 mb-4">Books for Preparation
                <hr />
            </h3>
            <div className="row">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleBooks} className='btn btn-manage border-0 rounded-pill mt-4 px-5 py-2'>See All Books <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default Books;