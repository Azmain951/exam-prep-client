import React from 'react';

const Book = ({ book }) => {
    const { id, name, img, price } = book;
    return (
        <div className="col-md-3 mb-4 col-sm-4">
            <div className="card shadow border-0" style={{ width: '100%' }}>
                <img src={img} className="card-img-top w-100 mx-auto mt-3 p-4" alt="..." />
                <div className="card-body">
                    <h6 className=" text-center card-title">{name}</h6>

                </div>
                <div className="mx-auto">
                    <button className="btn btn-warning mb-3">৳ {price}</button>
                </div>
            </div>
        </div>
    );
};

export default Book;