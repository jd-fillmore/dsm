import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import styles from "./home-services.module.scss";

interface ServicesProps {
  title: string;
  imageOne: string;
  titleOne: string;
  imageTwo: string;
  titleTwo: string;
  imageThree: string;
  titleThree: string;
  paraOne: string;
  paraTwo: string;
}

const Services: React.FC<ServicesProps> = ({
  title,
  imageOne,
  titleOne,
  imageTwo,
  titleTwo,
  imageThree,
  titleThree,
  paraOne,
  paraTwo,
}) => {
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
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h2>
              <hr />
            </Col>
          </Row>
          <section className={styles.icons}>
            <Row className="text-center">
              <Col lg="4">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Image className="img-fluid" src={imageOne} width={100} height={100} alt="Icon One" />
                  <h4>{titleOne}</h4>
                </motion.div>
              </Col>
              <Col lg="4">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Image className="img-fluid" src={imageTwo} width={100} height={100} alt="Icon Two" />
                  <h4>{titleTwo}</h4>
                </motion.div>
              </Col>
              <Col lg="4">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Image className="img-fluid" src={imageThree} width={100} height={100} alt="Icon Three" />
                  <h4>{titleThree}</h4>
                </motion.div>
              </Col>
            </Row>
          </section>
          <Row>
            <Col lg="6">
              <motion.p
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {paraOne}
              </motion.p>
            </Col>
            <Col lg="6">
              <motion.p
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {paraTwo}
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
