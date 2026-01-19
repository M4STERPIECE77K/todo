import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import { Tag } from '../components/ui/tag';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

interface InboxProps {
  tasks: Task[];
}

const Inbox: React.FC<InboxProps> = ({ tasks }) => {
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
          {tasks.length > 0 ? (
            tasks.map(task => (
              <TaskItem 
                key={task.id}
                title={task.title} 
                priority={task.priority} 
                category={task.category}
                isRoutine={task.routine}
              />
            ))
          ) : (
            <Text color="gray.400" fontSize="sm">No tasks yet. Create one above!</Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Inbox;