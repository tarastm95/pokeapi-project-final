import React from 'react';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const ErrorLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <p>
                Something went wrong...:)
            </p>
            <FooterComponent/>
        </div>
    );
};

export default ErrorLayout;
