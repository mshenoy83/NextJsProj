// pages/index.tsx
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import UserModal from '../components/UserModal';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [username, setUsername] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const router = useRouter();

    const handleSaveUserDetails = (user: string, job: string) => {
        setUsername(user);
        setJobTitle(job);
        localStorage.setItem('username', user);
        localStorage.setItem('jobTitle', job);
        setIsModalOpen(false);
    };

    const goToInformationPage = () => {
        router.push('/information');
    };

    return (
        <>
            <UserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveUserDetails}
            />
            <h1>Welcome {username ? `${username}` : 'Guest'}!</h1>
            <Button onClick={goToInformationPage} mt={4}>
                Go to Information Page
            </Button>
        </>
    );
};

export default HomePage;
