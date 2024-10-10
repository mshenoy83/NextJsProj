// components/UserModal.tsx
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';

const UserModal = ({ isOpen, onClose, onSave }: any) => {
    const [username, setUsername] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    const handleSubmit = () => {
        onSave(username, jobTitle);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Enter Your Details</ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter username"
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Job Title</FormLabel>
                        <Input
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            placeholder="Enter job title"
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={handleSubmit}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default UserModal;
