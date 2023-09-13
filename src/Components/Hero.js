import React, { useState, useRef, useEffect } from 'react';
import { Box, Heading, Text, Button, useMediaQuery } from '@chakra-ui/react';
import hero1Video from '../Assets/hero1.mp4';
import hero2Video from '../Assets/hero2.mp4';
import hero3Video from '../Assets/hero3.mp4';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1
  });

  const videoRef = useRef(null);

  const videos = [hero1Video, hero2Video, hero3Video];

  const companyName = useSelector((state) => state.companyName);
  const slogan = useSelector((state) => state.slogan);
  const renderedSlogan = slogan.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== slogan.length - 1 && <br />}
    </React.Fragment>
  ));

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  const textSize = isLargerThan800 ? "3xl" : isLargerThan500 ? "2xl" : "xl";
  const headingSize = isLargerThan800 ? "80px" : isLargerThan500 ? "60px" : "40px";
  const buttonSize = {
    height: isLargerThan800 ? "4rem" : isLargerThan500 ? "3rem" : "2.5rem",
    width: isLargerThan800 ? "10rem" : isLargerThan500 ? "8rem" : "6rem",
    fontSize: isLargerThan800 ? "2xl" : isLargerThan500 ? "xl" : "lg"
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      const video = videoRef.current;
      if (video && (video.duration - video.currentTime) <= 0.5 && !fade) {
        setFade(true);
      }
    }

    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [fade]);

  const fadeOut = () => {
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setFade(false);
    }, 500);
  }

  return (
    <Box
      ref={ref}
      as="section"
      height="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bg="rgba(0, 0, 0, 0.4)"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={fadeOut}
        style={{
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}
        src={videos[currentVideoIndex]}
      />

      <Box
        textAlign="center"
        opacity={inView ? 1 : 0}
        transform={inView ? 'translateY(0)' : 'translateY(50px)'}
        transition="opacity 3s ease-out, transform 1s ease-out"
      >
        <Text color="white" fontSize={textSize}>
          Welcome to {companyName}
        </Text>

        <Heading color="white" fontSize={headingSize}>
          {renderedSlogan}
        </Heading>

        <Button
          height={buttonSize.height}
          width={buttonSize.width}
          mt="5"
          backgroundColor="transparent"
          border="5px solid white"
          color="white"
          fontSize={buttonSize.fontSize}
          borderRadius={0}
          _hover={{ transform: "scale(1.07)" }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
