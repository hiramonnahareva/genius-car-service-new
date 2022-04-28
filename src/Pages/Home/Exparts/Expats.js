import React from 'react';
import Expart from '../Expart/Expart';
import image1 from '../../../images/experts/expert-1.jpg' ;
import image2 from '../../../images/experts/expert-2.jpg';
import image3 from '../../../images/experts/expert-3.jpg';
import image4 from '../../../images/experts/expert-4.jpg';
import image5 from '../../../images/experts/expert-5.jpg';
// import image6 from '../../images/experts/expert-6.png';

const Expats = () => {
    const Exparts = [
        {id: 1, name: 'will Smith', img: image1},
        {id: 2, name: 'jon Smith', img: image2},
        {id: 3, name: 'wilton klean', img: image3},
        {id: 4, name: 'will job', img: image4},
        {id: 5, name:'stim ko', img: image5}
    ]
    return (
        <div className='container'>
            <h2 className = 'text-primary my-4 text-center'>Our exparts</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {
                Exparts.map (expart => <Expart key={expart.id} expart= {expart}></Expart>) 
            }
        </div>
        </div>
    );
};

export default Expats;