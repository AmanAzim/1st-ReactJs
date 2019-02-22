import React from 'react';

const WithClass=props=>(
        <div className={props.ClassCss}>{props.children}</div>
);

export default WithClass;
