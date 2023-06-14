import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

import styles from "./home-portfolio.module.scss";

interface TitleTextButtonProps {
  title: string;
  text: string;
  btnLink: string;
  btnText: string;
}

const TitleTextButton: React.FC<TitleTextButtonProps> = ({ title, text, btnLink, btnText }) => {
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
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <hr />
      <motion.p
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {text}
      </motion.p>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link className={`btn btn-primary ${styles["btn"]}`} href={btnLink}>
          {btnText}
        </Link>
      </motion.div>
    </>
  );
};

export default TitleTextButton;
