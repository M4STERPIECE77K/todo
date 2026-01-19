import React from 'react';
import { Box, VStack, Text, HStack } from '@chakra-ui/react';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

interface UpcomingProps {
  tasks: Task[];
}

const Upcoming: React.FC<UpcomingProps> = ({ tasks }) => {
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
          {tasks.length > 0 ? (
            tasks.slice(0, 4).map(task => (
              <TaskItem 
                key={task.id}
                title={task.title} 
                priority={task.priority} 
                category={task.category}
                isRoutine={task.routine}
              />
            ))
          ) : (
            <Text color="gray.400" fontSize="sm">No upcoming tasks</Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Upcoming;