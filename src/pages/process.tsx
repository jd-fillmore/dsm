import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

const Process = () => {
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
        <InnerHero title="Our Process" />
        <title>Our Process | DSM Exteriors</title>
        <meta
          name="description"
          content="Discover the seamless and efficient process of DSM Exteriors. From initial consultation to professional installation, we ensure a hassle-free experience for siding, aluminum, gutter, and railing/column projects. Trust our expertise and enjoy a smooth journey."
        />
        <Container>
          <Row>
            <Col lg="12">
              <p>
                At DSM Exteriors, we pride ourselves on providing a seamless and efficient process for all our services,
                including siding/aluminum, gutter, and railing/column installations. Here is an overview of how we
                ensure a successful and hassle-free experience for our valued clients:
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h2>1. Initial Consultation</h2>
              <p>
                We begin by scheduling an initial consultation where our expert team will discuss your project
                requirements, design preferences, and budget. We take the time to understand your unique needs and
                provide professional recommendations tailored to your specific goals.
              </p>
            </Col>
            <Col lg="6">
              <h2>2. Detailed Proposal</h2>
              <p>
                Based on the information gathered during the consultation, we will prepare a detailed proposal outlining
                the scope of work, materials to be used, estimated timeline, and transparent pricing. We believe in
                transparency and aim to provide a comprehensive understanding of the project from start to finish.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h2>3. Material Selection</h2>
              <p>
                For siding, aluminum, gutter, and railing/column installations, we offer an extensive range of
                high-quality materials, styles, and colors to suit your preferences. Our experienced team will guide you
                through the selection process, ensuring you make informed choices that align with your vision and
                functional requirements.
              </p>
            </Col>
            <Col lg="6">
              <h2>4. Professional Installation</h2>
              <p>
                Once all the details are confirmed, our skilled installation team will begin the process. With years of
                expertise and attention to detail, they will handle every aspect of the installation with precision and
                care. Rest assured, we only work with trained professionals who prioritize quality workmanship and
                ensure that each project is completed to the highest standards.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <h2>5. Timely Completion</h2>
              <p>
                We understand the importance of completing projects within the agreed-upon timeline. Our team strives to
                work efficiently without compromising on quality, ensuring that your siding/aluminum, gutter, or
                railing/column installation is finished in a timely manner. We will keep you informed about the progress
                throughout the process, providing peace of mind.
              </p>
            </Col>
            <Col lg="6">
              <h2>6. Final Inspection</h2>
              <p>
                Once the installation is complete, we conduct a thorough final inspection to ensure that everything
                meets our stringent quality standards. We pay attention to the smallest details to ensure a flawless
                finish and address any concerns you may have.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p>
                Choose DSM Exteriors for your siding/aluminum, gutter, and railing/column installation needs, and
                experience a streamlined process from start to finish. We are dedicated to delivering exceptional
                results that exceed your expectations, backed by our commitment to quality, professionalism, and
                customer satisfaction.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Process;
