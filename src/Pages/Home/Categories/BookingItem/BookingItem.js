import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingItem = ({selectedItem}) => {
    const {name, model, resalePrice} = selectedItem;
    const {user} = useContext(AuthContext);
    
    
    return (
        <>
            <input type="checkbox" id="booking-item" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative">
                    <label htmlFor="booking-item" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-2 mt-3'>
                        <input type="text" disabled value={model} className="input input-bordered" readOnly/>
                        <input type="text" disabled value={resalePrice} className="input input-bordered" readOnly/>
                        <input type="text" disabled value={user?.email} className="input input-bordered" readOnly />
                        <input type="text" disabled value={user?.displayName} className="input input-bordered" />
                        <input type="text" placeholder="Meeting location" className="input input-bordered" />
                        <input type="number" placeholder="Your mobile number" className="input" />
                        <br />
                        <input className='btn btn-active w-full max-w-xs' type="submit" value="submit" />
                    </form>
                  </div>
                </div>  
        </>

    );
};

export default BookingItem;  