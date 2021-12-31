import React from 'react'
import Users from '../data/UsersData'
import User from './User'

function HomeUsers() {
    return (
        <div className='mt-4'>
            {
                Users.map((data, i) =>
                    <a key={i} href={"/"+data.name} rel="noopener noreferrer">
                        <User img={data.img} name={data.name} />
                    </a>
                )
            }
        </div>
    )
}

export default HomeUsers
