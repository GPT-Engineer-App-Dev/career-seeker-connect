import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, description, applicationLink };
    const existingJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    localStorage.setItem("jobListings", JSON.stringify([...existingJobs, newJob]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="2xl">Post a Job</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Job Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="company" isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Job Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="applicationLink" isRequired>
          <FormLabel>Application Link</FormLabel>
          <Input value={applicationLink} onChange={(e) => setApplicationLink(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Post Job</Button>
      </VStack>
    </Container>
  );
};

export default PostJob;