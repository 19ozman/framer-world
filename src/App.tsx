import { motion, useTransform, useViewportScroll } from "framer-motion";
import "./App.css";
import parasun from "./assets/redsun.webp";

function App() {
  const lineOne = "A new ";
  const lineTwo = "classic";
  const lineThree = "SCROLL DOWN";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { scrollY } = useViewportScroll();

  const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);
  const scaleRightZero = useTransform(scrollY, [0, 200], [0, 1]);
  const scaleRightTwo = useTransform(scrollY, [0, 500], [0, 2]);
  const scaleRightThree = useTransform(scrollY, [300, 0], [0, 1]);
  const yRight = useTransform(scrollY, [0, 500], ["0vh", "100vh"]);
  const yRightTwo = useTransform(scrollY, [0, 500], ["0vh", "190vh"]);

  const xRight = useTransform(scrollY, [0, 1500], ["-300vw", "-58vw"]);

  const xLeft = useTransform(scrollY, [0, 650], ["0vw", "56.5vw"]);
  const xLeftTwo = useTransform(scrollY, [0, 500], ["-100%", "0vw"]);
  const scaleLeft = useTransform(scrollY, [0, 100], [1, 0]);

  const xOut = useTransform(scrollY, [900, 0], ["-300%", "0vw"]);
  const xOutTwo = useTransform(scrollY, [0, 900], ["0%", "100vh"]);
  const xOutThree = useTransform(scrollY, [0, 100], ["0", "200vw"]);

  const scaleMin = useTransform(scrollY, [0, 50], [1, 0]);
  const scaleMinTwo = useTransform(scrollY, [0, 200], [1, 0]);

  const scroller = {
    animate: { scale: [1, 0], rotate: 360 },
    transition: { type: "spring", bounce: 0.1, delay: 0.1 },
  };

  return (
    <div
      className="main-wrap"
      style={{
        width: "100vw",
        height: "300vh",
        position: "relative",

        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <motion.div
        className="filler"
        style={{
          width: "15vw",
          height: "100vh",

          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          y: scaleRight,
          x: xOutTwo,
          scale: scaleMin,
        }}
      ></motion.div>
      <motion.div
        className="info-box"
        style={{
          width: "70vw",
          y: scaleRightThree,
          x: scaleLeft,
          scale: scaleRightThree,
          display: "flex",

          justifyContent: "center",
        }}
      >
        {/* <span className="classic" style={{ width: "50vw" }}>
          a new classic
        </span> */}
        <motion.span
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ width: "50vw" }}
        >
          {lineOne.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          {lineTwo.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.span>
      </motion.div>

      <motion.div
        className="right-so"
        style={{
          width: "15vw",
          height: "100vh",

          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          // y: scaleRightZero,
          x: xOutThree,
          // scale: scaleMinTwo,
        }}
      >
        <motion.span
          className="scroll-info"
          style={{ padding: "1rem" }}
          animate={{ scale: [0, 1], rotate: 360 }}
          transition={{ type: "spring", bounce: 0.1, delay: 1.5 }}
        >
          scroll down
        </motion.span>
      </motion.div>

      <motion.div
        className="child-one"
        style={{
          height: "100%",
          width: "100vw",
          x: xLeftTwo,
          y: scaleRight,
          backgroundImage: `url(${parasun})`,

          position: "absolute",
        }}
      >
        <motion.div
          className="child"
          style={{
            scale: scaleRightTwo,
            y: yRight,
            x: xLeft,
          }}
        >
          <span className="dot-world">lowitz DOT world</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="para-cnt"
        style={{
          borderBottom: "3px solid var(--signal)",
          position: "absolute",
          x: xRight,
          y: yRightTwo,
        }}
      >
        <span
          className="para-one"
          style={{ padding: "1rem", color: "var(--black)" }}
        >
          I've done some shit.
        </span>
      </motion.div>
    </div>
  );
}

export default App;
