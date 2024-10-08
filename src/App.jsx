import React from 'react';
import { HashRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  SocialMediaWindow,
  Tech,
  Projects,
} from './components';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher'; // Import ThemeSwitcher

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="relative z-0 bg-flashWhite">
          <div>
            <div className="z-50">
              <Navbar />
            </div>
            <div className="z-50">
              <SocialMediaWindow />
            </div>
            <div className="relative">
              <Hero />
            </div>
            <div className="z-50 fixed top-4 right-4"> {/* Position the ThemeSwitcher */}
              <ThemeSwitcher />
            </div>
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat mb-20 md:mt-24">
            <About />
          </div>

          <div className="bg-tech bg-cover bg-center bg-no-repeat px-5 pb-10 h-[135vh]">
            <Tech />
          </div>

          <div className="bg-projects bg-cover bg-center bg-no-repeat px-5 pb-10 pt-14">
            <Projects />
          </div>

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div>
          <div className="relative z-0 mb-0 md:mt-16 md:pt-16">
            <Contact />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;