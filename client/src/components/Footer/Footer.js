import React from 'react';
import SOCIAL_PROFILES from '../../data/socials';

import './Footer.css';

const SocialProfile = (props) => {
    const { link, image } = props.socialProfile;
    return (
        <span>
            <a href={link}>
                <img src={image} alt='Social profile' style={{ width: 35, height: 35, margin: 10 }} />
            </a>
        </span>

    )
}

const Footer = () => {
    return (
        <div className="Footer">
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                ))
            }
        </div>
    )
}

export default Footer;