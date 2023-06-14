import { motion, useInView, useAnimation } from "framer-motion";
import { Container } from "react-bootstrap";
import Link from "next/link";

import styles from "../hero/Hero.module.scss";

interface HeroProps {
  title: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className={styles.box}>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h1>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
                <Link className="btn btn-primary" href={primaryBtnLink}>
                  {primaryBtnText}
                </Link>
                <Link className={`btn btn-secondary ${styles["btn-secondary"]}`} href={secondaryBtnLink}>
                  {secondaryBtnText}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
