import React from 'react';
import { 
  Box, 
  Input, 
  Button
} from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';

const TaskInput: React.FC = () => {
  const inputBg = { _light: 'gray.50', _dark: 'bg.main' };
  const focusBg = { _light: 'white', _dark: 'bg.main' };
  const textColor = { _light: 'gray.900', _dark: 'white' };

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
            bg="primary.500"
            color="white"
            fontSize="sm"
            fontWeight="bold"
            px="4"
            py="2"
            rounded="lg"
            _hover={{ bg: 'primary.600' }}
            _active={{ transform: 'scale(0.95)' }}
            transition="all 0.1s"
          >
            Add Task
          </Button>
        }
      >
        <Input
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

export default TaskInput;
