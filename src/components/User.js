import React from 'react'

function User(props) {
    return (
        <div className='homeUser'>
            <img src={props.img} alt={props.username} className="img-fluid rounded-circle " />
        </div>
    )
}

export default User
