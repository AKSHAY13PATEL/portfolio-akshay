import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import Navbar from "../components/Navbar";
import { MdMail } from "react-icons/md";
import { useState } from "react";
import Notification from "../components/Notification";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      // Send form data to the backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form Data", formData);
      setShowNotification(true);
      setNotificationText("Message Sent Successfully!");
    } catch (error) {
      console.error("Error Submitting Form", error);
      setShowNotification(true);
      setNotificationText("Error Submitting Form!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-[1215px] flex-col gap-5 px-4">
      <Navbar />
      <div className="card-wrapper mb-2 mt-24 flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center bg-background-default text-primary">
          {/* Hero Section */}
          <h1 className="mb-4 text-4xl font-bold">
            Let's Build Something Amazing Together!
          </h1>
          <p className="mb-8 text-lg text-secondary">
            I'd love to hear from you! Whether it's a project, a job
            opportunity, or just a chat.
          </p>

          {/* Contact Form */}
          <form
            className="w-full max-w-md rounded-xl bg-darkgray p-6 shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 w-full rounded-md bg-slate-100 p-2 text-black"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 w-full rounded-md bg-slate-100 p-2 text-black"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 h-32 w-full rounded-md bg-slate-100 p-2 text-black"
              onChange={handleChange}
              name="message"
              value={formData.message}
            ></textarea>
            <button
              type="submit"
              className={`flex w-full items-center justify-center gap-4 rounded-md bg-highlight py-2 text-white transition hover:bg-opacity-80 ${
                isSubmitting && "cursor-not-allowed bg-opacity-60"
              }`}
            >
              {isSubmitting ? "Sending ..." : "Send Message"}
              {isSubmitting && (
                <AiOutlineLoading3Quarters className="size-4 animate-spin" />
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/AKSHAY13PATEL"
              target="_blank"
              className="flex items-center gap-1 hover:text-highlight"
            >
              GitHub <TiSocialGithubCircular className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-patel-917888135/"
              target="_blank"
              className="flex items-center gap-1 hover:text-highlight"
            >
              LinkedIn <TiSocialLinkedinCircular className="size-6" />
            </a>
            <a
              href="mailto:yourname@example.com"
              className="flex items-center gap-1 hover:text-highlight"
            >
              Email <MdMail className="size-6" />
            </a>
          </div>
        </div>
      </div>

      {showNotification && (
        <Notification
          text={notificationText}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  );
};

export default ContactPage;
