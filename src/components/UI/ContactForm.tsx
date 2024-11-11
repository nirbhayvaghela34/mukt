import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from 'lucide-react';
import emailConfig from '../../config/emailConfig.ts';

const ContactForm: React.FC = () => {
  // Define the type of the form reference
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        emailConfig.emailJsServiceId,
        emailConfig.emailJsTemplateId,
        form.current,
        emailConfig.emailJsPublicKey
      ).then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
    }
  };

  return (
    <form ref={form} className="space-y-6" onSubmit={sendEmail}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <input
        type="text"
        name="service"
        placeholder="Service"
        className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        className="w-full px-4 py-3 bg-gray-900 text-white resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      ></textarea>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
