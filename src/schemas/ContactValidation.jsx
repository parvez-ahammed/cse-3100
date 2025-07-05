import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    message: Yup.string().required("Message is required"),
});