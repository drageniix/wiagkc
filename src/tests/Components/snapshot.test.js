import React from 'react'
import { About } from '../../components/About'
import { Activities } from '../../components/Activities'
import { BoardMembers } from '../../components/BoardMembers'
import { Calendar } from '../../components/Calendar'
import { Caricom, CaricomModal } from '../../components/Caricom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Membership } from '../../components/Membership'
import { Navigation } from '../../components/Navigation'
import { NextMeeting } from '../../components/NextMeeting'
import { Photos } from '../../components/Photos'


test('Marginals', () => {
    const wrapperFooter = shallow(
        <Footer data={data.marginals} />
    )
    expect(wrapperFooter).toMatchSnapshot()


    const wrapperHeader = shallow(
        <Header data={data.marginals} />
    )
    expect(wrapperHeader).toMatchSnapshot()

    const wrapperNavigation = shallow(
        <Navigation data={data.marginals} />
    )
    expect(wrapperNavigation).toMatchSnapshot()
})

test('About', () => {
    const wrapper = shallow(
        <About data={data.about} />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Caricom', () => {
    const wrapper = shallow(
        <Caricom data={data.caricom} />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Activities', () => {
    const wrapper = shallow(
        <Activities data={data.activities} />
    )
    expect(wrapper).toMatchSnapshot()
})


test('Calendar', () => {
    const wrapperCalendar = shallow(
        <Calendar data={data.calendar} />
    )
    expect(wrapperCalendar).toMatchSnapshot()

    const wrapperNext = shallow(
        <NextMeeting data={data.calendar} />
    )
    expect(wrapperNext).toMatchSnapshot()

})

test('Membership', () => {
    const wrapper = shallow(
        <Membership data={data.membership} />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Photos', () => {
    const wrapper = shallow(
        <Photos data={data.photos} />
    )
    expect(wrapper).toMatchSnapshot()
})

test('BoardMembers', () => {
    const wrapper = shallow(
        <BoardMembers data={data.boardMembers} />
    )
    expect(wrapper).toMatchSnapshot()
})