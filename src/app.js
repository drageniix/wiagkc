import React from "react"
import ReactDOM from "react-dom"
import LazyLoad from 'react-lazyload'

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

import data from './generated/data/data/.json'
import './styles/index.scss'

importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}

console.log(data)

const App = () => (
    <div>
        <Navigation data={data.marginals} />
        <Header data={data.marginals}/>
        <main className="flex-content">
            <LazyLoad><About data={data.about} /></LazyLoad>
            <LazyLoad><Caricom data={data.caricom} /></LazyLoad>
            <LazyLoad><Activities data={data.activities} /></LazyLoad>
            <LazyLoad><Calendar data={data.calendar} /></LazyLoad>
            <LazyLoad><Membership data={data.membership} /></LazyLoad>
            <LazyLoad><Photos data={data.photos}/></LazyLoad>
            <LazyLoad><BoardMembers data={data.boardMembers} /></LazyLoad>
        </main>
        <Footer data={data.marginals}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("content"))