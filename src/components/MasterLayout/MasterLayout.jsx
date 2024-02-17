import React from 'react';
import Footer from '../common/Footer';
import HeaderTwo from '../common/HeaderTwo';

const MasterLayout = ({children}) => {
    return (
        <div>
            <HeaderTwo/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;