import React from 'react';

const About = ({match}) => {
    return (
        <div>
            {match.params.username} About
        </div>
    );
};

export default About;