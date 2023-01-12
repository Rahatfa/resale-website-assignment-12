// import React, { useEffect, useState } from 'react';

// const Samsungs = () => {
//     const [samsungs, setSamsungs] = useState([]);
//     useEffect(() =>{
//         fetch('samsung.json')
//         .then(res => res.json())
//         .then(data => setSamsungs(data))
//     }, [])
//     return (
//         <div>
//             <div>
//                 <div className='grid mt-5 ml-6 gap-9 grid-cols-1 lg:grid-cols-2'>
//                 {
//                     samsungs.map(samsung => 
//                     <div className="card w-96 bg-base-100 shadow-xl">
//                         <figure className="px-10 pt-10">
//                           <img src={samsung.img} alt="name" className="rounded-xl" />
//                         </figure>
//                         <div className="card-body items-center text-center">
//                           <h2 className="card-title">{samsung.brand}</h2>
//                           <p>Model:{samsung.model}</p>
//                           <p>Original{samsung.orginalPrice}</p>
//                           <p>Resale{samsung.resalePrice}</p>
//                           <p>Years Of Use:{samsung.yearsOfUse}</p>
//                           <p>Posted Date:{samsung.postedDate}</p>
//                           <p>Seller Name:{samsung.sellerName}</p>
//                           <div className="card-actions">
//                             <button className="btn btn-primary">Book Item</button>
//                           </div>
//                         </div>
//                     </div>)
//                 }
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Samsungs;