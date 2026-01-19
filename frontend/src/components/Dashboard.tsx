import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Button
} from '@chakra-ui/react';
import { useColorModeValue } from './ui/color-mode';
import { Tag } from './ui/tag';
import Sidebar from './Sidebar';
import HeroHeader from './HeroHeader';
import TaskInput from './TaskInput';
import TaskItem from '../pages/TaskItem';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  const bg = 'bg.main';
  const cardBg = 'card';
  const cardBorderColor = { _light: 'gray.200', _dark: 'gray.700' };
  const sectionTitleColor = 'gray.400';

  return (
    <Flex w="full" h="100dvh" bg={bg} overflow="hidden" fontFamily="display">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Box 
        as="main" 
        flex="1" 
        h="full" 
        minH="0"
        overflowY="auto" 
        position="relative" 
        zIndex={10} 
        p={{ base: '4', sm: '6', lg: '10' }} 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
      >
        <Flex w="full" display={{ base: 'flex', md: 'none' }} justify="space-between" align="center" mb="6">
          <Heading size="md" fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>
            TaskMaster
          </Heading>
          <Button variant="ghost" color="gray.500">
            <span className="material-symbols-outlined">menu</span>
          </Button>
        </Flex>
        <Box w="full" maxW="900px" bg={cardBg} rounded="2xl" shadow="sm" border="1px solid" borderColor={cardBorderColor} display="flex" flexDirection="column" minH="80vh" overflow="hidden">
          <HeroHeader />
          <TaskInput />
          <Box flex="1" overflowY="auto" px="8" pb="8">
            <Box mb="8">
              <HStack gap="2" mb="4">
                <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
                  High Priority
                </Text>
                <Tag size="sm" rounded="md" bg={{ _light: 'red.100', _dark: 'rgba(254, 178, 178, 0.1)' }} color={{ _light: 'red.600', _dark: 'red.400' }} fontSize="10px">
                  2
                </Tag>
              </HStack>
              <VStack align="stretch" gap="2">
                <TaskItem title="Review Q3 Financial Reports" priority="High" time="2:00 PM" />
                <TaskItem title="Finalize deck for investor meeting" priority="High"/>
              </VStack>
            </Box>
            <Box mb="8">
              <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider" mb="4">
                Routine
              </Text>
              <VStack align="stretch" gap="2">
                <TaskItem title="Email marketing team about assets" priority="Medium" isRoutine/>
                <TaskItem title="Buy coffee beans" priority="Low" category="Personal" isRoutine />
              </VStack>
            </Box>
            <Box 
              mt="12" 
              p="8" border="2px dashed" borderColor={useColorModeValue('gray.200', 'gray.700')} rounded="2xl" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" opacity="0.6"  _hover={{ opacity: 1 }} transition="opacity 0.2s">
              <Box bg={useColorModeValue('gray.50', 'gray.800')} p="4" rounded="full" mb="4">
                <Box as="span" className="material-symbols-outlined" color="primary.500" fontSize="3xl">lightbulb</Box>
              </Box>
              <Text color={useColorModeValue('gray.900', 'white')} fontWeight="medium" mb="1">
                Cleared for takeoff?
              </Text>
              <Text fontSize="sm" color="gray.500">
                You have no more tasks scheduled for today. Time to relax or plan ahead.
              </Text>
              <Button variant="ghost" mt="4" color="primary.500" fontSize="sm" fontWeight="bold" px="0" _hover={{ textDecoration: 'underline', bg: 'transparent' }}>
                View Upcoming Tasks
              </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Flex>
);
};

export default Dashboard;
