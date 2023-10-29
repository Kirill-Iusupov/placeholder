import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className='w-[1200px] mx-auto text-center'>
            {children}
        </div>
    );
}

export default Wrapper;
