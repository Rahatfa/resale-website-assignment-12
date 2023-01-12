import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://mobile-world-server.vercel.app/catagories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            {/* <div>
                <h1>Categories</h1>
            </div> */}
            <div>
                <div className='grid mt-5 gap-9 grid-cols-1 lg:grid-cols-2'>
                {
                    categories.map(category => 
                    <div className="card w-40 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img src={category.img} alt="name" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{category.name}</h2>
                          <p>{category.slogan}</p>
                          <div className="card-actions">
                            <button className="btn btn-primary"><Link to={`/Categories/${category.name}`}>Explore</Link></button>
                          </div>
                        </div>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Categories;