import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('catagories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div>
                <h1>Categories</h1>
            </div>
            <div>
                <h3>catagories:{categories.length}</h3>
                {

                }
            </div>
        </div>
    );
};

export default Categories;