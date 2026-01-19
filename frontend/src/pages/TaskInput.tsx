import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button,
  Input
} from '@chakra-ui/react';
import { useColorModeValue } from '../components/ui/color-mode';
import { InputGroup } from '../components/ui/input-group';
import Sidebar from '../components/Sidebar';
import Inbox from './Inbox';
import Today from './Today';
import Upcoming from './Upcoming';
import Completed from './Completed';
import Trash from './Trash';
import { taskService } from '../services/taskService';
import type { Task, TaskRequest } from '../types/task';

const HeroHeader: React.FC<{ page: string }> = ({ page }) => {
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
          {page === 'Today' ? "Today's Tasks" : `${page} Tasks`}
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

interface TaskInputProps {
  onTaskCreated: (task: Task) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onTaskCreated }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputBg = { _light: 'gray.50', _dark: 'bg.main' };
  const focusBg = { _light: 'white', _dark: 'bg.main' };
  const textColor = { _light: 'gray.900', _dark: 'white' };

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return;

    setIsLoading(true);
    try {
      const newTaskRequest: TaskRequest = {
        title: taskTitle,
        priority: 'Medium',
        routine: false,
      };
      
      const createdTask = await taskService.createTask(newTaskRequest);
      setTaskTitle('');
      onTaskCreated(createdTask);
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please make sure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Box px="8" py="6">
      <InputGroup 
        w="full"
        startElement={
          <Box 
            as="span" 
            className="material-symbols-outlined" 
            color="primary.500" 
            fontSize="2xl"
          >
            add
          </Box>
        }
        endElement={
          <Button
            onClick={handleAddTask}
            disabled={!taskTitle.trim() || isLoading}
            bg="primary.500"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            px="4"
            py="2"
            rounded="lg"
            _hover={{ bg: 'primary.600' }}
            _active={{ transform: 'scale(0.95)' }}
            _disabled={{ opacity: 0.5, cursor: 'not-allowed' }}
            transition="all 0.1s"
          >
            {isLoading ? 'Adding...' : 'Add Task'}
          </Button>
        }
      >
        <Input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          bg={inputBg}
          border="none"
          rounded="xl"
          fontSize="lg"
          py="8"
          color={textColor}
          _placeholder={{ color: 'gray.400' }}
          _focus={{
            ring: "2px",
            ringColor: "rgba(62, 129, 142, 0.2)",
            bg: focusBg,
            boxShadow: "none"
          }}
          transition="all 0.2s"
          boxShadow="inset 0 2px 4px rgba(0,0,0,0.02)"
        />
      </InputGroup>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Today');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const bg = 'bg.main';
  const cardBg = 'card';
  const cardBorderColor = { _light: 'gray.200', _dark: 'gray.700' };

  // Charger les tâches au montage du composant
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoadingTasks(true);
    try {
      const allTasks = await taskService.getAllTasks();
      setTasks(allTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setIsLoadingTasks(false);
    }
  };

  const handleTaskCreated = (newTask: Task) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Inbox': return <Inbox tasks={tasks} />;
      case 'Today': return <Today tasks={tasks} />;
      case 'Upcoming': return <Upcoming tasks={tasks} />;
      case 'Completed': return <Completed tasks={tasks} />;
      case 'Trash': return <Trash />;
      default: return <Today tasks={tasks} />;
    }
  };

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
        flexDirection="column" alignItems="center">
        <Flex w="full" display={{ base: 'flex', md: 'none' }} justify="space-between" align="center" mb="6">
          <Heading size="md" fontWeight="bold" color={useColorModeValue('gray.900', 'white')}>
            TaskMaster
          </Heading>
          <Button variant="ghost" color="gray.500">
            <span className="material-symbols-outlined">menu</span>
          </Button>
        </Flex>
        <Box w="full" maxW="900px" bg={cardBg} rounded="2xl" shadow="sm" border="1px solid" borderColor={cardBorderColor} display="flex" flexDirection="column" minH="80vh" overflow="hidden">
          <HeroHeader page={currentPage} />
          <TaskInput onTaskCreated={handleTaskCreated} />
          {isLoadingTasks ? (
            <Box px="8" py="6">
              <Text color="gray.400">Loading tasks...</Text>
            </Box>
          ) : (
            renderPage()
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;