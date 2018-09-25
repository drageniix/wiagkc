import React from "react"
import ReactDOM from "react-dom"
import LazyLoad from 'react-lazyload'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import Header from './components/Header'
import Footer from './components/Footer'
import Caricom from './components/Caricom'
import About from './components/About'
import BoardMembers from './components/BoardMembers'
import Activities from './components/Activities'
import Calendar from './components/Calendar'
import Membership from './components/Membership'
import Navigation from './components/Navigation'
import Photos from './components/Photos'
import NextMeeting from "./components/NextMeeting";

const images = require.context('./generated', true, /\.(jpg|png|svg|gif)$/)
images.keys().forEach(image => images(image))

const store = configureStore()
const App = () => (
    <Provider store={store}>
        <div>
            <Navigation />
            <Header />
            <NextMeeting />
            <section className="flex-content">
                <LazyLoad><About /></LazyLoad>
                <LazyLoad><Caricom /></LazyLoad>
                <LazyLoad><Activities /></LazyLoad>
                <LazyLoad><Calendar /></LazyLoad>
                <LazyLoad><Membership /></LazyLoad>
                <LazyLoad><Photos /></LazyLoad>
                <LazyLoad><BoardMembers /></LazyLoad>
            </section>
            <Footer />
        </div>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById("content"))