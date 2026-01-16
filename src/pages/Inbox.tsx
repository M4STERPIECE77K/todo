import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';

const Inbox: React.FC = () => {
  const sectionTitleColor = 'gray.400';

  return (
    <Box flex="1" overflowY="auto" px="8" pb="8">
      <Box mb="8">
        <HStack gap="2" mb="4">
          <Text fontSize="xs" fontWeight="bold" color={sectionTitleColor} textTransform="uppercase" letterSpacing="wider">
            All Tasks
          </Text>
          <Tag size="sm" rounded="md" bg={{ _light: 'blue.100', _dark: 'rgba(144, 205, 244, 0.1)' }} color={{ _light: 'blue.600', _dark: 'blue.400' }} fontSize="10px">
            4
          </Tag>
        </HStack>
        <VStack align="stretch" gap="2">
          <TaskItem title="Design new landing page" priority="High" />
          <TaskItem title="Update documentation" priority="Medium" />
          <TaskItem title="Meeting with team" priority="Low" time="11:00 AM" />
          <TaskItem title="Review pull requests" priority="High" />
        </VStack>
      </Box>
    </Box>
  );
};

export default Inbox;