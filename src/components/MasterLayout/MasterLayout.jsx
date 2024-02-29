import React from 'react';
import Footer from '../common/Footer';
import HeaderTwo from '../common/HeaderTwo';
import TopHeader from '../common/TopHeader';

const MasterLayout = ({children}) => {
    return (
        <div>
            <TopHeader/>
            <HeaderTwo/>
            {children}
            <Footer/>
        </div>
    );
};

export default MasterLayout;