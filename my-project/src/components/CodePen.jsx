import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CodePen = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end start"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -800, -1200]
  );
  const translateX1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 800, 1000]);

  return (
      <div className=" sticky top-[40vh]" ref={ref}>
        <div className="wrapper relative overflow-hidden">
          <div className="img-wrapper w-64 mx-auto h-32">
            {/* cap */}
            <motion.img
              // style={{ x: translateX }}
              style={{ x: translateX, transition: "all .3s ease-out" }}
              src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c81317bb78f130f5aaa4789_pen-1-1%403x.png"
              alt=""
              className="absolute w-56 z-10"
            />
            {/* cover */}
            <motion.img
              style={{ x: translateX1,  transition: "all .3s ease-out"  }}
              src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c8057df4f71c1e19f5e15a6_pen-1-2%403x.png"
              alt=""
              className="absolute w-[44rem]"
            />
          </div>
        </div>
      </div>
  );
};

export default CodePen;

