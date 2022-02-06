import React from 'react';

function Heading({title}) {
    return <div className="heading-block">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold uppercase">{title}</h1>
    </div>;
}

export default Heading;
