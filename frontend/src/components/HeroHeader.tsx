import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const HeroHeader: React.FC = () => {
  const dateColor = 'gray.500';
  const headingColor = { _light: 'gray.900', _dark: 'white' };
  const progressBg = { _light: 'gray.100', _dark: 'gray.700' };

  return (
    <Box p="8" pb="4">
      <Text color={dateColor} fontSize="sm" fontWeight="semibold" mb="1">
        Wednesday, October 25th
      </Text>
      <Flex justify="space-between" align="flex-end">
        <Heading 
          as="h2" 
          fontSize={{ base: '3xl', md: '4xl' }} 
          fontWeight="bold" 
          color={headingColor} 
          letterSpacing="tight"
        >
          Today's Tasks
        </Heading>
        <Box textAlign="right" display={{ base: 'none', sm: 'block' }}>
          <Text fontSize="sm" color="gray.400" fontWeight="medium">
            3/12 Completed
          </Text>
          <Box w="32" h="1.5" bg={progressBg} rounded="full" mt="2" overflow="hidden">
            <Box h="full" bg="primary.500" w="25%" rounded="full" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroHeader;
