import React from 'react'
import Users from '../data/UsersData'
import User from './User'

function HomeUsers() {
    return (
        <div className='mt-4'>
            {
                Users.map((data) => <a href={data.github} target="_blank" rel="noopener noreferrer"><User key={data.id} img={data.img}/></a>)
            }
        </div>
    )
}

export default HomeUsers
