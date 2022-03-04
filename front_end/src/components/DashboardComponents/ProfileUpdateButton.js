import React from 'react';

function ProfileUpdateButton({ currentComponent, handleComponentChange }) {
    return (
    <div>

            <a
                href="#ProfileUpdate"
                onClick={() => handleComponentChange('ProfileUpdate')}
                className={currentComponent === 'Profile' ? 'nav-link active' : 'nav-link'}
            >
                PROFILE
            </a>
    
    </div>
    )
    }

export default ProfileUpdateButton;