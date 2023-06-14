import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

const Services = () => {
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
        <InnerHero title="Services" />
        <title>Our Services | DSM Exteriors</title>
        <meta
          name="description"
          content="Explore our comprehensive services at DSM Exteriors. From siding and aluminum installations to gutter and railing/column solutions, we provide expert craftsmanship and exceptional results. Enhance your property with our reliable and professional services."
        />
        <Container>
          <Row>
            <Col lg="12">
              <h2>Supply/Install of Siding/Aluminum</h2>
              <p>
                DSM Exteriors is a leading provider of top-quality siding and aluminum solutions, offering comprehensive
                supply and installation services. With a commitment to excellence and customer satisfaction, DSM
                Exteriors delivers unmatched expertise in transforming residential and commercial exteriors. Whether
                you're looking to enhance the aesthetics, durability, or energy efficiency of your property, their
                skilled team of professionals is dedicated to meeting your unique needs. From a wide range of premium
                siding materials to expertly crafted aluminum installations, DSM Exteriors ensures exceptional
                craftsmanship, attention to detail, and reliable results. Trust DSM Exteriors to elevate the beauty and
                functionality of your property with their superior siding and aluminum supply/install services.
              </p>
              <h2>Gutter Installation</h2>
              <p>
                DSM Exteriors is a trusted name in the industry when it comes to gutter installation services. With
                their expertise and commitment to excellence, they offer comprehensive solutions to meet all your gutter
                needs. Whether you require gutter installation for a residential or commercial property, DSM Exteriors
                has a team of highly skilled professionals who will deliver exceptional results. They understand the
                importance of properly functioning gutters in protecting your property from water damage and maintaining
                its structural integrity. DSM Exteriors provides a wide selection of gutter options, including different
                materials, styles, and colors, ensuring that you find the perfect fit for your property's aesthetic and
                functional requirements. With their attention to detail, precision installation techniques, and durable
                materials, DSM Exteriors guarantees reliable and long-lasting gutter installations that will effectively
                channel rainwater away from your property. Trust DSM Exteriors to enhance the protection and value of
                your property with their top-notch gutter installation services.
              </p>
              <h2>Railing/Column Install</h2>
              <p>
                DSM Exteriors excels in railing and column installations, providing elegant and durable solutions for
                residential and commercial spaces. With a focus on impeccable craftsmanship and attention to detail,
                their skilled team delivers customized options to match your design preferences. DSM Exteriors offers a
                wide range of materials and styles, ensuring long-lasting beauty and structural integrity. From initial
                consultation to final installation, they provide clear communication and expert guidance, completing
                projects on time and to your satisfaction. Trust DSM Exteriors to enhance your property with their
                exceptional railing and column installation services.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
