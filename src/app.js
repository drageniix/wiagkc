import React from "react"
import ReactDOM from "react-dom"

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

import data from './generated/data.json'
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
            <About data={data.about} />
            <Caricom data={data.caricom} />
            <Activities data={data.activities} />
            <Calendar data={data.calendar} />
            <Membership data={data.membership} />
            <Photos data={data.photos}/>
            <BoardMembers data={data.boardMembers} />
        </main>
        <Footer data={data.marginals}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("content"))