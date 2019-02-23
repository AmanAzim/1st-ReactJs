import React from 'react';

const withClass2=(WarppedCopmonent, className)=>{
    return (props)=> ( <div className={className}>
                           <WarppedCopmonent {...props}/>
                       </div> );
};

export default withClass2;
