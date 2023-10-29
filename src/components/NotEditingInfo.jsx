import React from 'react';

const NotEditingInfo = ( {details, user} ) => {
    return (
        <>
            <h2>ID:{details.id}</h2>
            <p>Title: {details.title}</p>
            {user && <p>Author: {user.name}</p>}
            <p>{details.body}</p>
        </>
    );
}

export default NotEditingInfo;
