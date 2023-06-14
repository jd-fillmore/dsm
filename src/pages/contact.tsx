import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvonekpg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
        <InnerHero title="Contact Us" />
        <title>Contact Us | DSM Exteriors</title>
        <meta
          name="description"
          content="Get in touch with DSM Exteriors today. Our friendly and knowledgeable team is here to assist you with any questions, inquiries, or project discussions. Reach out to us via phone, email, or by filling out the convenient form. Let us help you transform your property with our exceptional services."
        />
        <Container>
          <Row>
            <Col lg="12">
              <p>
                We would love to hear from you! If you have any questions, inquiries, or would like to discuss your
                project, please feel free to reach out to us. Our friendly and knowledgeable team at DSM Exteriors is
                here to assist you. Contact us today via phone, email, or by filling out the convenient form below, and
                we will get back to you promptly. Let us help you transform your property with our top-notch siding,
                aluminum, gutter, and railing/column installation services.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <input id="name" type="text" name="name" placeholder="Name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                {/* Email */}
                <input id="email" type="email" name="email" placeholder="E-mail Address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {/* Phone */}
                <input id="phone" type="tel" name="phone" placeholder="Phone" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                {/* Msg */}
                <textarea id="message" name="message" placeholder="Message" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
