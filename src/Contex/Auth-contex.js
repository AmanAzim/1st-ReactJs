import React from 'react'

const authContext=React.createContext({
    authenticated:false,
    Login:()=>{}
});

export default authContext;
