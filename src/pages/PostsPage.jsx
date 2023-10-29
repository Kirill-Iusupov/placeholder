import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from "../store/slices/postsSlice" 


import Wrapper from "../components/Wrapper"
import Card from '../components/Card';
import { Pagination } from 'antd';
import PerPageFilter from '../components/PerPageFilter';

const PostsPage = () => {

    const [page, setPage] = useState(1)

    const dispatch = useDispatch()

    const {isLoading, posts, error, total} = useSelector((state)=>state.postsSlice)
    const {limit} = useSelector((state)=> state.limitSlice)

    useEffect(()=>{
        dispatch(fetchPosts({limit,page}))
    }, [dispatch, limit, page, total])

    

    const pageHendler = (page) => {
        setPage(page)
    }

    console.log(total);
    return (
        <Wrapper>
            {isLoading ? <h1>Loading...</h1> 
            : 
            error !="" ? <h1>Ошибка: {error}</h1>
            :
                <>
                    <PerPageFilter />
                    <div className='flex justify-around flex-wrap'>
                        {posts.map(post => <Card key = {post.id} details={post} />)} 
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        current={page}
                        pageSize={limit}
                        total={total}
                        onChange={pageHendler}
                        showSizeChanger={false}
                        hideOnSinglePage={true}
                    />
                </>
            }
        </Wrapper>
    );
}

export default PostsPage;
