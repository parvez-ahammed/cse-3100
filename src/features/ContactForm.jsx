import {Formik, Form, Field , ErrorMessage} from "formik";
import toast from "react-hot-toast";
import { contactSchema } from "../schemas/ContactValidation";

export default function ContactForm(){
    return(
        <div className="max-w-2xl mx-auto px-4 py-8 bg-white/70 backdrop-blur rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Contact Us
            </h2>

            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={contactSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form submitted:", values);
                    toast.success("🎉 Your message has been sent!");
                    resetForm();
                }}
            >
                {({ isSubmitting}) => (
                    <Form className="space-y-6">
                        {/* NAME */}
                        <div>
                            <label htmlFor="name" className="block text-grey-700 font-medium mb-1">
                                Name
                            </label>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-grey-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-600 text-sm mt-1"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                Email
                            </label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-600 text-sm mt-1"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                                Message
                            </label>
                            <Field
                                name="message"
                                as="textarea"
                                placeholder="Enter your message"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none"
                            />
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-red-600 text-sm mt-1"
                            />
                        </div>

                        {/* Submit button*/}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}