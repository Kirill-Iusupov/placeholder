import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EditingInfo from './EditingInfo';
import NotEditingInfo from './NotEditingInfo';
import { fetchPosts } from '../store/slices/postsSlice';
import { useDispatch } from 'react-redux';


const Card = ( {details} ) => {
   
    const [user, setUser] = useState()
    const [comments, setComments] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    const fetchUser = async (id) =>  {
        const res =  await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {data} = res
        setUser(data)
    }

    // const fetchComments = async (id) => {
    //     const res =  await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    //     const {data} = res
    //     setComments(data)
    // } 

    useEffect(()=>{
        fetchUser(details.userId)
        // fetchComments(details.id)
    },[])

    const editingHandler = () =>{
        setIsEditing(!isEditing)
    }

    const deleteHandler = async (id, e) =>{
        e.preventDefault()
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res)
    }

    return (
        <>
            <div className='border w-[350px] text-center m-[10px] p-[10px]'>
                {!isEditing ? 
                    <NotEditingInfo details={details} user={user} />
                :
                    <EditingInfo details={details} user={user} />
                }
                <button className='border border-[2px] bg-[blue] text-[white] rounded-[10px] p-[5px] mt-[10px]' 
                        onClick={editingHandler}>
                    Редактировать
                </button>
                <button onClick={(e)=>deleteHandler(details.id,e)}>Удалить</button>

                

                {/* {comments ? <div>
                    {comments.map(comment=>
                    <div key ={comment.id} className={"border border-[red]"}>
                        <p>Name:{comment.name}</p> 
                        <p>E-Mail:{comment.email}</p> 
                        <p>Name:{comment.body}</p> 
                    </div>
                )}  
                </div>:null } */}
            </div>
        </>
    );
}

export default Card;
