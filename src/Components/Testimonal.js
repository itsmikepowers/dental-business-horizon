import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, HStack, Heading, VStack, useBreakpointValue } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ testimonial }) => {
  const boxSize = useBreakpointValue({ base: "250px", md: "400px" });
  const height = useBreakpointValue({ base: "350px", md: "500px" });
  const headerSize = useBreakpointValue({ base: "3xl", md: "4xl" });
  const quoteSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const authorSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Box 
        minW={boxSize}
        h={height}
        borderWidth="5px" 
        borderColor="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
    >
      <Box p={4}>
        <VStack spacing={4}>
          <HStack spacing={2}>
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
          </HStack>
          <Text fontSize={headerSize} fontWeight="bold">{testimonial.header}</Text>
          <Text fontSize={quoteSize} wordWrap="break-word" fontFamily="Open Sans, sans-serif">{testimonial.quote}</Text> 
          <Text fontSize={authorSize} color="gray.600" fontWeight="semibold" wordWrap="break-word">{`- ${testimonial.author}`}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

const TestimonialsCarousel = () => {
  const companyName = useSelector(state => state.companyName);

  const testimonials = [
    { 
      header: "Life Changing!",
      quote: `This dental treatment at ${companyName} changed my smile forever! Highly recommended.`,
      author: "John Doe"
    },
    {
      header: "Excellent Support",
      quote: `Outstanding dental care and advice at ${companyName}. Five stars!`,
      author: "Jane Smith"
    },
    {
      header: "Wonderful Experience",
      quote: "One of the best dental visits I've had in a long time.",
      author: "Robert Brown" 
    },
    {
      header: "Quick & Efficient",
      quote: "Quick appointment scheduling and excellent dental support.",
      author: "Alice White"
    },
    {
      header: "Affordable Quality",
      quote: "Affordable dental services with top-notch quality.",
      author: "Tom Green"
    },
    {
      header: "Will Visit Again",
      quote: `I will definitely visit ${companyName} again!`,
      author: "Lucy Adams"
    },
    {
      header: "Best in the Business",
      quote: `${companyName} has the most professional and caring team. My go-to place for dental needs.`,
      author: "Mike Johnson"
    },
    {
      header: "Painless Procedures",
      quote: "I was nervous at first, but the procedure was surprisingly painless. Kudos to the team!",
      author: "Emily Turner"
    }
  ];

  const carouselRef = useRef(null);
  const headerSize = useBreakpointValue({ base: "40px", md: "60px" });

  useEffect(() => {
    const carousel = carouselRef.current;
    let requestId = null;

    const scrollCarousel = () => {
      if (carousel) {
        carousel.scrollLeft += 1;
        
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
        
        requestId = requestAnimationFrame(scrollCarousel);
      }
    };

    requestId = requestAnimationFrame(scrollCarousel);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <Box w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={5} w="100%">
        <Heading as="h3" size="lg" fontSize={headerSize}>Our Patients Love Us!</Heading>
        <Box 
          ref={carouselRef}
          overflow="hidden"
          w="100%"
          flexGrow={1}
        >
          <HStack spacing={5} py={5}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Testimonial 
                key={index}
                testimonial={testimonial}
              />
            ))}
          </HStack>
        </Box>
      </VStack>
    </Box>  
  );
};

export default TestimonialsCarousel;
