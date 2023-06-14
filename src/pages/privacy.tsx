import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

const Privacy = () => {
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
        <InnerHero title="Privacy Policy" />
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <section>
                  <h2>1. Introduction</h2>
                  <p>
                    DSM Exteriors ("we," "us," or "our") is committed to protecting the privacy and personal information
                    of our website visitors ("users," "you," or "your"). This Privacy Policy outlines how we collect,
                    use, disclose, and protect the information we gather through our website.
                  </p>
                </section>

                <section>
                  <h2>2. Information We Collect</h2>
                  <p>
                    <strong>a. Personal Information:</strong> When you visit our website, we may collect certain
                    personal information, such as your name, email address, phone number, and any other information
                    voluntarily provided by you through contact forms or when submitting inquiries.
                  </p>
                  <p>
                    <strong>b. Non-Personal Information:</strong> We may also collect non-personal information
                    automatically as you interact with our website. This may include your IP address, browser type,
                    operating system, referring URLs, pages visited, and other similar data.
                  </p>
                </section>

                <section>
                  <h2>3. Use of Information</h2>
                  <p>
                    <strong>a. Personal Information:</strong> We may use the personal information you provide to respond
                    to your inquiries, provide requested services, send promotional materials, improve our website, and
                    communicate with you about our products, services, and offers.
                  </p>
                  <p>
                    <strong>b. Non-Personal Information:</strong> Non-personal information may be used for analyzing
                    trends, administering the website, tracking user movements, and gathering demographic information
                    for aggregate use.
                  </p>
                </section>

                <section>
                  <h2>4. Information Sharing</h2>
                  <p>
                    <strong>a. </strong>We may share personal information with our trusted partners, service providers,
                    and contractors who assist us in operating our website and delivering our services. However, we will
                    only disclose personal information to these third parties when necessary and in compliance with
                    applicable laws.
                  </p>
                  <p>
                    <strong>b. </strong>We may also disclose personal information in response to lawful requests by
                    public authorities, such as to meet national security or law enforcement requirements.
                  </p>
                </section>

                <section>
                  <h2>5. Data Security</h2>
                  <p>
                    We take reasonable measures to protect the information collected on our website from unauthorized
                    access, loss, disclosure, alteration, or destruction. However, please note that no method of
                    transmission or storage is 100% secure, and we cannot guarantee the absolute security of your data.
                  </p>
                </section>

                <section>
                  <h2>6. Third-Party Websites</h2>
                  <p>
                    Our website may contain links to third-party websites or services. We are not responsible for the
                    privacy practices or the content of these third-party sites. We encourage you to review the privacy
                    policies of any websites you visit.
                  </p>
                </section>

                <section>
                  <h2>7. Children's Privacy</h2>
                  <p>
                    Our website is not intended for individuals under the age of 13. We do not knowingly collect
                    personal information from children. If you are a parent or guardian and believe that your child has
                    provided us with personal information, please contact us, and we will promptly delete such
                    information from our records.
                  </p>
                </section>

                <section>
                  <h2>8. Updates to this Privacy Policy</h2>
                  <p>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be
                    effective immediately upon posting the updated policy on our website. It is your responsibility to
                    review this Privacy Policy periodically for any updates.
                  </p>
                </section>

                <section>
                  <h2>9. Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of
                    your personal information, please contact us using the following information:
                  </p>
                  <address>[Insert contact details]</address>
                </section>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Privacy;
