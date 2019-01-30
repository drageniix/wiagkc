import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadHome } from '../redux/actions/home';

import Loading from '../components/containers/Loading';
import Header from '../components/HomePage/Header';
import Caricom from '../components/HomePage/Caricom';
import About from '../components/HomePage/About';
import BoardMembers from '../components/HomePage/BoardMembers';
import Activities from '../components/HomePage/Activities';
import Calendar from '../components/HomePage/Calendar';
import Membership from '../components/HomePage/Membership';
import Photos from '../components/HomePage/Photos';
import NextMeeting from '../components/HomePage/NextMeeting';

class HomePage extends Component {
    static propTypes = {
        loaded: PropTypes.bool,
        loadHome: PropTypes.func
    };

    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.loaded && !prevState.loaded) {
            return { loaded: true };
        } else if (!nextProps.loaded) {
            nextProps.loadHome();
        }
        return null;
    }

    render() {
        return (
            (this.state.loaded && (
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
            )) || <Loading />
        );
    }
}

const mapStateToProps = state => ({
    loaded: state.home.loaded
});

const mapDispatchToProps = {
    loadHome
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
