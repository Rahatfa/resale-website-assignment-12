import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import BookingItem from './BookingItem/BookingItem';

const CategoriesDetails = () => {
    const navigation = useNavigation();
    const item = useLoaderData();
    const [selectedItem, setSelectedItem] = useState(null)
    if(navigation.state === "loading"){
      return <Spinner></Spinner>
    }
    return (
        <div >
            <div className='ml-5'>
                <div className='grid mt-5 gap-9 grid-cols-1 lg:grid-cols-2'>
                {
                    item.map(category => 
                        <div className="card w-80 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                              <img src={category.img} alt="name" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{category.name}</h2>
                              <p>{category.model}</p>
                              <p>Collection Location: {category.location}</p> 
                              <p>Orginal Price: {category.orginalPrice}</p>
                              <p>Resale Price:{category.resalePrice}</p>
                              <p>Year Of Uses: {category.yearsOfUse}</p>
                              <p>Date of Posting:  {category.postedDate}</p>
                              <p>Seller Name: {category.sellerName}</p>
                              <div className="card-actions">
                                {/* <button className="btn btn-primary">Book Item</button> */}
                                <label 
                                htmlFor="booking-item" 
                                className="btn btn-primary"
                                onClick= {()=>setSelectedItem(category)}
                                >Book Item</label>
                              </div>
                            </div>
                        </div>)
                }
                </div>
                {
                  selectedItem &&
                  <BookingItem
                  selectedItem={selectedItem}
                ></BookingItem>
                }
            </div>
            
        </div>
    );
};

export default CategoriesDetails;