import { React, useState, useEffect } from 'react';

function Splash({ children }) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1800)
    }, [])
    return !loading ? children : <div>
        {/* Loader */}
        <div className="h-screen w-full flex items-center justify-center">
            <span className="loader"></span>
        </div>
    </div>;
}

export default Splash;
