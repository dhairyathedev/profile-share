import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube, faFacebook, faDev, faCodepen, faStackOverflow, faInstagram, faHackerNews, faGitlab } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Users from '../../data/UsersData';
import '../../styles/Profile.css';
function Profile() {
    const {username} = useParams();
    const name = Users.find(user => user.name === username).displayName;
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
                setIcon(icon => [...icon, faGithub]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "twitter":
                setIcon(icon => [...icon, faTwitter]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "youtube":
                setIcon(icon => [...icon, faYoutube]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "facebook":
                setIcon(icon => [...icon, faFacebook]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "dev":
                setIcon(icon => [...icon, faDev]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "codepen":
                setIcon(icon => [...icon, faCodepen]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "stackoverflow":
                setIcon(icon => [...icon, faStackOverflow]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "instagram":
                setIcon(icon => [...icon, faInstagram]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "hackernews":
                setIcon(icon => [...icon, faHackerNews]);
                setList(prevList => [...prevList, social[i].url])
                break;
            case "gitlab":
                setIcon(icon => [...icon, faGitlab]);
                setList(prevList => [...prevList, social[i].url])
                break;
            default:
                console.log('No Socials found')
        }
    }
}, [social])
    return (
        <div className="p-container">
            <center>
            <img src={avatar} alt={name} className='img-fluid rounded-circle avatar' />
            <h1 className="p-title">{name}</h1>
            <div className="p-bio">{bio}</div>
            <div className='social-links'>
            {icon.map((icon, index) => {
                return <a href={list[index]} target="_blank" rel="noopener noreferrer" key={index} className="p-icon-link"><FontAwesomeIcon icon={icon} className="p-icon"/></a>
            })}
            </div>
            </center>
        </div>
    )
}

export default Profile
