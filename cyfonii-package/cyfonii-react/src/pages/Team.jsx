import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer/Footer';

import Team2 from '../components/team/Team2';
import dataTeam from '../assets/fake-data/dataTeam';
import Create from '../components/create/Create';
import Services from '../components/project/Services';


function Team(props) {
    return (
        <div className='page-team wrapper'>

            {/* <PageTitle title='' /> */}

            {/* <Team2 data={dataTeam} /> */}

            <Services></Services>
            {/* <Create /> */}

            <Footer />
            
        </div>
    );
}

export default Team;