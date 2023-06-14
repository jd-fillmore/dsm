import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
import TitleTextButton from "../../components/titleTextbutton/TitleTextButton";
import Services from "../../components/services/Services";
import About from "../../components/about/About";

import styles from "../../components/titleTextbutton/home-portfolio.module.scss";
import stylesServices from "../../components/services/home-services.module.scss";
import stylesAbout from "../../components/about/home-about.module.scss";

import portOne from "../../public/portfolio-1.jpeg";
import portTwo from "../../public/portfolio-2.jpeg";
import iconOne from "../../public/iconOne.png";
import iconTwo from "../../public/iconTwo.png";
import iconThree from "../../public/iconThree.png";
import about from "../../public/about.jpeg";

export default function Home() {
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
      <Head>
        <title>DSM Exteriors</title>
        <meta
          name="description"
          content="Discover the artistry of DSM Exteriors through our captivating portfolio. Witness the stunning transformations achieved in siding, gutter installations, and railing and column designs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Transform Your Exterior with Expert Craftsmanship and Unparalleled Elegance"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="View Portfolio"
        secondaryBtnLink="/portfolio"
      />
      <section className={styles.homePortfolio}>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <TitleTextButton
                title="Our Portfolio of Work"
                text="Discover the artistry of DSM Exteriors through our captivating portfolio. Witness the stunning transformations achieved in siding, gutter installations, and railing and column designs. Let our work speak for itself as you explore our portfolio and envision the possibilities for your own exterior project."
                btnText="View Full Portfolio"
                btnLink="/portfolio"
              />
            </Col>
          </Row>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Row>
              <Col lg="6">
                <Image className="img-fluid" src={portOne} width={640} height={382} alt="Portfolio One" />
              </Col>
              <Col lg="6">
                <Image
                  className={`img-fluid ${styles.picTwo}`}
                  src={portTwo}
                  width={640}
                  height={382}
                  alt="Portfolio Two"
                />
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
      <section className={`${stylesServices["home-services"]}`}>
        <Services
          title="Our Services"
          imageOne={iconOne.src}
          titleOne="Supply/Install of Siding/Aluminum"
          imageTwo={iconTwo.src}
          titleTwo="Gutter Installation"
          imageThree={iconThree.src}
          titleThree="Railing/Column Install"
          paraOne="Welcome to DSM Exteriors, your premier destination for exceptional exterior construction services. With a strong focus on quality and craftsmanship, we specialize in the supply and installation of siding and aluminum, gutter installations, and railing and column installations. Our team of skilled professionals brings years of experience and expertise to every project, ensuring top-notch results that exceed your expectations."
          paraTwo="Whether you're looking to transform the look of your home, enhance its functionality, or improve its overall value, DSM Exteriors is here to bring your vision to life. With our dedication to quality workmanship, premium materials, and unparalleled customer service, we take pride in delivering exceptional results that stand the test of time. Contact us today and let us help you achieve the exterior of your dreams."
        />
      </section>
      <section className={`${stylesAbout["home-about"]}`}>
        <About
          title="About DSM Exterior"
          text="At DSM Exteriors, a family-run business with over 25 years of experience, we are driven by a passion for elevating houses into captivating masterpieces through our unrivaled expertise in siding, aluminum, gutter, railing, and column installations. Serving the Halton, Hamilton, Niagara, and Waterloo regions, our team of dedicated craftsmen is committed to delivering excellence, seamlessly blending premium materials, meticulous installation techniques, and meticulous attention to detail. Experience the awe-inspiring transformation of your home's exterior, fortified against the elements, all while receiving unparalleled service and remarkable results. Trust DSM Exteriors, your trusted companion for all your exterior construction endeavors!"
          image={about.src}
        />
      </section>
    </>
  );
}
