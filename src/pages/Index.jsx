import { Container, Text, VStack, Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "We are looking for a skilled software engineer to join our team.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    description: "Seeking an experienced product manager to lead our product team.",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Designify",
    location: "Remote",
    description: "A creative UX designer needed for a fast-growing startup.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Job Listings</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {jobListings.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading as="h2" size="md">{job.title}</Heading>
                <Text fontSize="sm" color="gray.500">{job.company} - {job.location}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;