import React from 'react';
import Banner from '../Banner/Banner';
import Expats from '../Exparts/Expats';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Expats></Expats>
        </div>
    );
};

export default Home;