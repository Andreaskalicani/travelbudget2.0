import React, {useState} from 'react';
import './Card.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Card3 ({ name,job,about}) {
   
    return (
        <div className='Card'>
            <div className= 'upper-container'>
                <div className= 'img-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya-Oq_1bFmRFwTsIZLGGwqw8Car70C3lK4A&usqp=CAU" alt='' height='100px' width='100px' />
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> { about } </p>
                <button>Visit profile</button>
                <div className='social-container'>
                <a href=''
                    className= 'linkedin Social'>
                        
                        <LinkedInIcon />
                        </a>

                    <a href=''
                    className= 'github Social'>
                        <GitHubIcon />

                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card3;