import React from 'react'
import Banner from '../layouts/Banner';
import Discover from '../layouts/Discover';
import Guide from '../layouts/Guide';
import Build from '../layouts/Build';
import Featured from '../layouts/Featured';
import Faq from '../layouts/Faq';
import Bussiness from '../layouts/Bussiness';
import Contact from '../layouts/Contact';

export default function page() {
  return (
    <>
    <Banner/>
    <Discover/>
    <Guide/>
    <Build/>
    <Featured/>
    <Faq/>
    <Bussiness/>
    <Contact/>
    </>
  )
}
