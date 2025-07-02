import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const toast = useToast();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must be a Gmail address"
      )
      .required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters"),
  });

  return (
    <Box maxW="600px" mx="auto" mt={12} p={6} borderRadius="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={8}>
        Contact Us
      </Heading>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("Form submitted:", values);
          actions.resetForm();
          toast({
            title: "Message sent.",
            description: "We will get back to you soon!",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormControl mb={4} isInvalid={errors.name && touched.name}>
              <FormLabel>Name</FormLabel>
              <Field as={Input} name="name" placeholder="Enter your name" />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl mb={4} isInvalid={errors.email && touched.email}>
              <FormLabel>Email</FormLabel>
              <Field
                as={Input}
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl mb={6} isInvalid={errors.message && touched.message}>
              <FormLabel>Message</FormLabel>
              <Field
                as={Textarea}
                name="message"
                placeholder="Enter your message"
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              borderRadius="full"
              display="block"
              mx="auto"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
