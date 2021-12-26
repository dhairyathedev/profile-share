import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Users from '../../data/UsersData';
function Profile() {
    const {username} = useParams();
    const name = Users.find(user => user.name === username).name;
    const bio = Users.find(user => user.name === username).bio;
    const avatar = Users.find(user => user.name === username).img;
    const social = Users.find(user => user.name === username).social;
    const [icon, setIcon] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
    for (let i = 0; i < social.length; i++) {
        console.log(social[i])
        switch(social[i].name) {
            case "github":
                console.log('Github');
                console.log(social[i].url); 
                setList(prevList => [...prevList, social[i].url])
                break;
            case "twitter":
                console.log('Twitter');
                setList(prevList => [...prevList, social[i].url])
                break;
            case "youtube":
                console.log('Youtube');
                setList(prevList => [...prevList, social[i].url])
                break;
            default:
                console.log('No Socials found')
        }
    }
    console.log(social)
}, [social])
    return (
        <div>
            <img src={avatar} alt={name} className='img-fluid rounded-circle' />
            <h1>{name}</h1>
            <p>{bio}</p>
            <FontAwesomeIcon icon={faGithub} />
            <div className='social-links'>
            {list.map((link) => 
            <div key={link.url}>
                <a href={link} target='_blank' rel='noopener noreferrer' key={link.id}>
                    {link}
                </a>
                <br />
                </div>
            )}
            </div>
        </div>
    )
}

export default Profile
