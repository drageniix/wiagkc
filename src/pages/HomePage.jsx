import React from 'react';

import Header from '../components/HomePage/Header';
import Caricom from '../components/HomePage/Caricom';
import About from '../components/HomePage/About';
import BoardMembers from '../components/HomePage/BoardMembers';
import Activities from '../components/HomePage/Activities';
import Calendar from '../components/HomePage/Calendar';
import Membership from '../components/HomePage/Membership';
import Photos from '../components/HomePage/Photos';
import NextMeeting from '../components/HomePage/NextMeeting';

export const HomePage = () => (
    <div>
        <Header />
        <NextMeeting />
        <section className="flex-content">
            <About />
            <Caricom />
            <Activities />
            <Calendar />
            <Membership />
            <Photos />
            <BoardMembers />
        </section>
    </div>
);

export default HomePage;
