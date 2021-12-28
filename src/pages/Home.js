import React from 'react'
import { NavBar } from '../component/NavBar';
import { SignUp } from '../component/SignUp';

export const Home = () => {
    return (
        <div>
            <NavBar />
            <p>hello home</p>
            <SignUp />
        </div>
    );
}
