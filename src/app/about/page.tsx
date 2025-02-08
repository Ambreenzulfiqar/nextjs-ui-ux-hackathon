
import React from 'react'
import AboutUs from '../components/aboutus'
import ProblemsSection from '../components/ProblemsSection'
import StatsSection from '../components/StateSection'
import Video from '../components/video'
import Company from '../components/company'
import Team from '../components/team'
import Work from '../components/work'


const about = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <AboutUs/>
    <ProblemsSection/>
    <StatsSection/>
    <Video/>
    <Team/>
    <Company/>
    <Work/>
    </div>
  )
}

export default about