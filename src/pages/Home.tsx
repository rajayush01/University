import AboutSection from '@/components/home/AboutSection'
import AcademicPrograms from '@/components/home/AcademicPrograms'
import CampusLife from '@/components/home/CampusLife'
import CTASection from '@/components/home/CTASection'
import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Upcomingevents from '@/components/home/UpcomingEvents'
import React from 'react'

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <AboutSection />
      <AcademicPrograms />
      <CampusLife />
      <Upcomingevents/>
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home
