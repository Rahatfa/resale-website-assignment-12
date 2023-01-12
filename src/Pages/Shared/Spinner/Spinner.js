import React from 'react';
import { Dna } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className='fw-bolder font-white'>
            <div>Loading....</div>
            <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            
        </div>
    );
};

export default Spinner;