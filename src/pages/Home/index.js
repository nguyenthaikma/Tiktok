import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTest } from '../../redux/actions/testActions';

export default function Home() {
    const dispatch = useDispatch();

    const test = useSelector((state) => state.testReducer.test);



    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        dispatch(addTest(value))
    }

    return (
        <div>
            {test.map((item, index) => {
                return <b key={index}>{item}</b>
            })}

            <input type="text" onChange={handleChange} />
            <button onClick={() => {
                handleClick()
            }}>Add</button>
        </div>
    )
}
