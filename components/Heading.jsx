import React from 'react';

function Heading({title}) {
    return <div className="heading-block">
        <h1 className="text-8xl font-poppins font-bold uppercase">{title}</h1>
    </div>;
}

export default Heading;
