import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';

const Upcoming: React.FC = () => {
  const sectionTitleColor = 'gray.400';

  return (
    <Box flex="1" overflowY="auto" px="8" pb="8">
      <Box mb="8">
        <HStack gap="2" mb="4">
          <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
            Tomorrow
          </Text>
        </HStack>
        <VStack align="stretch" gap="2">
          <TaskItem title="Client presentation" priority="High" time="10:00 AM" />
          <TaskItem title="Prepare weekly report" priority="Medium" />
        </VStack>
      </Box>
      <Box mb="8">
        <HStack gap="2" mb="4">
          <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
            Next Week
          </Text>
        </HStack>
        <VStack align="stretch" gap="2">
          <TaskItem title="Product roadmap review" priority="High" />
          <TaskItem title="Team building event" priority="Low" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Upcoming;