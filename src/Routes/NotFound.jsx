import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 | Not Found</h1>
            <button 
                data-testid="back" 
                onClick={handleBackClick}
                style={{ padding: '10px 20px', fontSize: '16px' }}
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
