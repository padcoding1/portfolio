import { HashRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-flashWhite">
        <div>
          <div className="z-100">
          <Navbar />
          </div>
          <div className="relative">
          <Hero />
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
  );
};

export default App;
