import React, { useEffect, useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-black-400 hover:text-sky-400'>Reviews</h2>
            <div className='grid mt-5 gap-9 grid-cols-1 lg:grid-cols-2'>
                {
                    reviews.map(review => <div className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <p>{review.feedback}</p>
                            <div className="flex items-center">
                                <div className="avatar mr-4">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg"> {review.name}</h4>
                                </div>
                            </div>
                        </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;