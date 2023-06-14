import AliceCarousel from "react-alice-carousel";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

import "../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss";

import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p7 from "../img/p7.jpg";
import p8 from "../img/p8.jpg";
import p9 from "../img/p3.jpg";
import p10 from "../img/p4.jpg";
import p11 from "../img/p5.jpg";
import p12 from "../img/p6.jpg";
import p13 from "../img/p7.jpg";
import p14 from "../img/p8.jpg";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <Image alt="image 1" src={p1} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 2" src={p2} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 3" src={p3} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 4" src={p4} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 5" src={p5} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 6" src={p6} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 7" src={p7} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 8" src={p8} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 9" src={p9} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 10" src={p10} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 11" src={p11} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 12" src={p12} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 13" src={p13} onDragStart={handleDragStart} role="presentation" />,
  <Image alt="image 14" src={p14} onDragStart={handleDragStart} role="presentation" />,
];

const Portfolio = () => {
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
        <InnerHero title="Portfolio" />
        <title>Portfolio | DSM Exteriors</title>
        <meta
          name="description"
          content="Browse through our impressive portfolio showcasing the excellence of DSM Exteriors. Witness the transformation of residential and commercial properties with our top-quality siding, aluminum, gutter, and railing/column installations. Get inspired for your next project."
        />
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AliceCarousel mouseTracking items={items} />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
