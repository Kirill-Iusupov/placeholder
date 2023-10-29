import React, { useState } from 'react';
import {Input} from "antd"

const {TextArea} = Input

const EditingInfo = ({details, user}) => {

    const [text, setText] = useState({
        name: user.name,
        title: details.title,
        body: details.body
    })

    const [body,setBody] = useState(details.body)
    const [title,setTitle] = useState(details.title)
    const [name, setName] = useState(user.name)


    return (
        <>
            <h2>ID:{details.id}</h2>
            <p>Title: <TextArea className='text-[red]' value={title} autoSize onChange={(e)=>{
                setTitle(e.target.value)
            }} /> </p>
            {user &&  <p>Author: <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }} /> </p>}
            <TextArea value={body} autoSize onChange={(e)=>{
                setBody(e.target.value)
            }}/>
        </>
    );
}

export default EditingInfo;
