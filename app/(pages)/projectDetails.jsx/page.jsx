import React from 'react'
import Banner from '../Components/project-details/Banner'
import Overview from '../Components/project-details/Overview'
import Projectgalary from '../Components/project-details/Projectgalary'
import RelatedProjects from '../Components/project-details/RelatedProjects'

const Page = () => {
  return (
    <>
    <Banner/>
    <Overview/>
    <Projectgalary/>
    <RelatedProjects/>
    </>
  )
}

export default Page