import React from 'react';

function ProfileButton({ currentComponent, handleComponentChange }) {
    return (
    <div>

            <button href="#profile" className={currentComponent === 'Profile' ? 'btn btn-dark active mt-4' : 'btn btn-dark mt-4'} onClick={() => handleComponentChange('Profile')}
            >
              
                View Profile
            </button>

    
    </div>
    )
    }

export default ProfileButton;



