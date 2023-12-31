"use client";
import React, { Suspense, useRef } from "react";
import {
  AnimatePresence,
  isValidMotionProp,
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { Box, Spacer, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import { wrap } from "@motionone/utils";
import { Noto_Serif_Old_Uyghur } from "next/font/google";
import dynamic from "next/dynamic";
import Image from "next/image";

const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});

export const FramerBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  // shouldForwardProp: isValidMotionProp,
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function ParallaxText({ children, baseVelocity = 100 }: any) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  console.log("Animation frame working ");
  // @ts-ignore
  useAnimationFrame((t, delta): any => {
    console.log("Animation frame working 01");

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    // @ts-ignore
    let time = t;
    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */

    console.log("Animation frame working 02");
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  console.log("Animation frame working over");
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box className="parallax">
      <AnimatePresence>
        <FramerBox  key="modal" className="scroller" style={{ x }}>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
          <Text className={NotoFonts.className}>{children} </Text>
        </FramerBox>
      </AnimatePresence>
    </Box>
  );
}

function ScrollAnimation() {
  return (
    <Box w={"full"} py="6" overflow={"hidden"}>
      
      <ParallaxText baseVelocity={-1}>| Benifexim.Com
</ParallaxText>
<Spacer mt="5"/>
      <ParallaxText baseVelocity={-1}>VEGETABLES | CLOTHING | PHARMACEUTICALS |</ParallaxText>
    </Box>
  );
}

export default ScrollAnimation;
