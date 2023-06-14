import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row className="d-flex">
            <Col lg="6">
              <p>Address goes here | P: 289 936 0708 | E: matejkozul23@gmail.com</p>
              <p className={styles.siteLink}>
                <a href="https://infused.agency">Niagara web design</a> by Infused Agency
              </p>
            </Col>
            <Col lg="6" className="d-flex justify-content-end">
              <p>
                Copyright &copy; {new Date().getFullYear()} DSM Exteriors | <Link href="/privacy">Privacy Policy</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
