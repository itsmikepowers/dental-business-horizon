import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Link, HStack, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Location = () => {
    const locationPhonePairs = useSelector((state) => state.locationPhonePairs);
    const firstPair = locationPhonePairs[0];
    const embedUrl = useSelector((state) => state.embed);

    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [leftSlide, setLeftSlide] = useState(false);
    const [mapFade, setMapFade] = useState(false);

    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const boxWidth = useBreakpointValue({ base: "100%", md: "1200px" });
    const boxHeight = useBreakpointValue({ base: "auto", md: "60vh" });
    const iframeMargin = useBreakpointValue({ base: "10px 0", md: "0" });

    useEffect(() => {
        if (inView) {
            setLeftSlide(true);
            setTimeout(() => {
                setMapFade(true);
            }, 500);
        }
    }, [inView]);

    return (
        <Box
            backgroundColor="gray.200"
            width="100vw"
            height={boxHeight}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            ref={inViewRef}
        >
            <Box
                width={boxWidth}
                height={boxHeight}
                backgroundColor="transparent"
                display="flex"
                flexDirection={flexDirection}
            >
                <Box
                    width={{ base: "100%", md: "30%" }}
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    paddingLeft="16px"
                    transform={leftSlide ? 'translateX(0)' : 'translateX(-100%)'}
                    transition="transform 0.5s ease-in-out"
                >
                    <Heading marginBottom="10px" fontSize="48px">
                        Visit us at our office!
                    </Heading>
                    <Box 
                        width="100px" 
                        height="4px" 
                        backgroundColor="blue.500" 
                        marginBottom="3"
                    />
                    <Text fontSize="xl" marginBottom="15px" fontFamily="Open Sans, sans-serif">
                        Come give us a visit in person and experience our friendly environment.
                    </Text>
                    <HStack spacing="5" align="center" marginBottom="5">
                        <Box as={FaMapMarkerAlt} color="blue.500" fontSize="24px" />
                        <Link href={firstPair.mapsLink} isExternal fontSize="2xl" fontWeight="bold">
                            {firstPair.location}
                        </Link>
                    </HStack>
                    <HStack spacing="5" align="center">
                        <Box as={FaPhoneAlt} color="blue.500" fontSize="24px" />
                        <Link href={`tel:${firstPair.phone}`} fontSize="2xl" fontWeight="bold">
                            {firstPair.phone}
                        </Link>
                    </HStack>
                </Box>
                <Box
                    width={{ base: "100%", md: "70%" }}
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity={mapFade ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                >
                    <Box 
                        width="80%" 
                        height="80%" 
                        borderRadius="20px" 
                        overflow="hidden"
                        margin={iframeMargin}
                    >
                        <iframe
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Google Maps Location"
                        ></iframe>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Location;
