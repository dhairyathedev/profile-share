import React from 'react'

function User(props) {
    return (
        <div className='homeUser'>
            <img src={props.img} alt={props.name} className="img-fluid rounded-circle" title={props.name}/>
        </div>
    )
}

export default User
