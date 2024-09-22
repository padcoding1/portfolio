import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { languages, othertech } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center">

        <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 mt-1">
          {languages.map((language) => (
            <div className="w-32 h-32" key={language.name}>
              <BallCanvas icon={language.icon} />
              <h3 className="text-taupe text-[14px] font-bold text-center">
                {language.name}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-y-8 gap-x-5 mt-14">
          {othertech.map((tech) => (
            <div className="w-32 h-32" key={tech.name}>
              <BallCanvas icon={tech.icon} />
              <h3 className="text-taupe text-[14px] font-bold text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
