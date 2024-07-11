/* eslint-disable no-unused-vars */
import React from 'react';
import NavbarComponent from './Components/NavbarComponent';
import Content from './Components/ContentComponent';
import AboutComponent from './Components/AboutComponent';
import TechnologyComponent from './Components/TechnologyComponent';
import ExperienceComponent from './Components/ExperienceComponent';
import Projects from './Components/ProjectsComponent';
import Contact from './Components/ContactComponent';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        <div className="container mx-auto px-8 py-4">
          <NavbarComponent />
          <Content/>
          <AboutComponent />
          <TechnologyComponent/>
          <ExperienceComponent/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
