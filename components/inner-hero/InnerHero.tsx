import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./inner-hero.module.scss";

interface InnerHeroProps {
  title: string;
}

export const InnerHero: React.FC<InnerHeroProps> = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div ref={ref}>
        <section className={`${styles["inner-hero"]}`}>
          <Container>
            <Row>
              <Col lg="12">
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
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};
