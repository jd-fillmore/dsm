import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface AboutProps {
  title: string;
  text: string;
  image: string;
}

const About: React.FC<AboutProps> = ({ title, text, image }) => {
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
            <Col lg="6">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image className="img-fluid" src={image} width={644} height={320} alt="About" />
              </motion.div>
            </Col>
            <Col lg="6">
              <motion.h2
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {title}
              </motion.h2>
              <hr />
              <motion.p
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {text}
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
