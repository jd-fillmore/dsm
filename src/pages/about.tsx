import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";
import Image from "next/image";

import image from "../../public/about.jpeg";

const About = () => {
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
        <InnerHero title="About DSM Exteriors" />
        <title>About DSM Exteriors | DSM Exteriors</title>
        <meta
          name="description"
          content="Discover the expertise and commitment of DSM Exteriors. Learn about our top-quality siding, aluminum, gutter, and railing/column installation services. Trust us to elevate the beauty and functionality of your property."
        />
        <Container>
          <Row>
            <Col lg="6">
              <Image className="img-fluid" src={image} width={644} height={320} alt="About" />
            </Col>
            <Col lg="6">
              <p>
                At DSM Exteriors, a family-run business with over 25 years of experience, we are driven by a passion for
                elevating houses into captivating masterpieces through our unrivaled expertise in siding, aluminum,
                gutter, railing, and column installations. Serving the Halton, Hamilton, Niagara, and Waterloo regions,
                our team of dedicated craftsmen is committed to delivering excellence, seamlessly blending premium
                materials, meticulous installation techniques, and meticulous attention to detail. Experience the
                awe-inspiring transformation of your home's exterior, fortified against the elements, all while
                receiving unparalleled service and remarkable results. Trust DSM Exteriors, your trusted companion for
                all your exterior construction endeavors!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
