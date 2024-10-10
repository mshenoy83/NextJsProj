// pages/information.tsx
import { useQuery } from '@apollo/client';
import { GET_MEDIA } from '../graphql/queries';
import { useState } from 'react';
import client from '../apollo-client';
import { Box, Image, Text, Button, Grid } from '@chakra-ui/react';

const InformationPage = () => {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(GET_MEDIA, {
        variables: { page, perPage: 10 },
        client,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    const handleNextPage = () => {
        if (data.Page.pageInfo.hasNextPage) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <Box p={6}>
            <Text fontSize="2xl" mb={6}>
                Media List (Page {data.Page.pageInfo.currentPage})
            </Text>
            <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap={6}>
                {data.Page.media.map((media: any) => (
                    <Box key={media.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                        <Image src={media.coverImage.large} alt={media.title.romaji} />
                        <Box p={4}>
                            <Text fontSize="xl">{media.title.romaji}</Text>
                        </Box>
                    </Box>
                ))}
            </Grid>

            <Box mt={6} display="flex" justifyContent="space-between">
                <Button onClick={handlePrevPage} isDisabled={page === 1}>
                    Previous
                </Button>
                <Button onClick={handleNextPage} isDisabled={!data.Page.pageInfo.hasNextPage}>
                    Next
                </Button>
            </Box>
        </Box>
    );
};

export default InformationPage;

