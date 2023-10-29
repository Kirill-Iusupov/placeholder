import React from 'react';
import { useDispatch } from 'react-redux';
import { setLimit } from '../store/slices/limitSlice';

const PerPageFilter = () => {
    
    const dispatch = useDispatch()

    const btnClass= "border border-[2px] rounded-[25%] px-[3px] mx-[5px]"

    const setLimitHendler = (e) =>{
        dispatch(setLimit(+e.target.innerText))
        e.preventDefault()
    }

    return (
        <>
            <button onClick={setLimitHendler} className={btnClass}>10</button>
            <button onClick={setLimitHendler} className={btnClass}>20</button>
            <button onClick={setLimitHendler} className={btnClass}>50</button>
            <button onClick={setLimitHendler} className={btnClass}>100</button>
        </>
    );
}

export default PerPageFilter;
