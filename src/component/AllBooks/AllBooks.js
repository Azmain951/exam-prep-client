import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from '../Book/Book';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://desolate-wildwood-64014.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);



    return (
        <div className='p-4'>
            <h3 className="fw-bold mt-4 text-center mx-2 mb-4">Books for Preparation
                <hr />
            </h3>
            <div className="row">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default AllBooks;