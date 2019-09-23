import React from 'react';

function WelcomePage() {
    return (
        <div className='welcome'>
            <header className='welcomeHeader'>
                <h1>Welcome to the Ultimate Fan Site</h1>
                <img className='welcomeImg' src='"https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick' />
            </header>
        </div>
    );
}
export default WelcomePage
