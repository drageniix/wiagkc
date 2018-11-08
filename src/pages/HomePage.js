import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Caricom from '../components/Caricom';
import About from '../components/About';
import BoardMembers from '../components/BoardMembers';
import Activities from '../components/Activities';
import Calendar from '../components/Calendar';
import Membership from '../components/Membership';
import Navigation from '../components/Navigation';
import Photos from '../components/Photos';
import NextMeeting from '../components/NextMeeting';
import Modal from '../components/containers/Modal';

export const HomePage = () => (
    <div>
        <Modal />
        <Navigation />
        <Header />
        <NextMeeting />
        <section className="flex-content">
            <LazyLoad>
                <About />
            </LazyLoad>
            <LazyLoad>
                <Caricom />
            </LazyLoad>
            <LazyLoad>
                <Activities />
            </LazyLoad>
            <LazyLoad>
                <Calendar />
            </LazyLoad>
            <LazyLoad>
                <Membership />
            </LazyLoad>
            <LazyLoad>
                <Photos />
            </LazyLoad>
            <LazyLoad>
                <BoardMembers />
            </LazyLoad>
        </section>
        <Footer />
    </div>
);

export default HomePage;
