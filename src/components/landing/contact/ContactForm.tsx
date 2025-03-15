import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_i5g46cg', // EmailJS Service ID
        'template_pkl5ocv', // EmailJS Template ID
        {
          from_name: data.name,
          to_name: 'Tingo Team', // recipient name
          reply_to: data.email,
          message: data.message,
        },
        'QKqQaTRMhD0Ept52a' // EmailJS Public Key
      );

      setSubmitted(true); 
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue sending your message. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-[585px] mx-auto p-6 font-Manrope">
      <div className="bg-[#FBFBFB] rounded-2xl p-10 border border-[#3C3C4399]/60 shadow-md">
        <h2 className="text-[40px] font-medium text-center mb-8">Get in Touch</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[16px] font-medium text-[#3C3C4399]/60 block">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="eg. John Doe"
              className={`w-full p-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-[#3C3C43]/60'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[14px]">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[16px] font-medium text-[#3C3C4399]/60 block">
              E-mail Address
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email address',
                },
              })}
              placeholder="eg. John.Doe@example.com"
              className={`w-full p-3 rounded-lg border px-4 ${
                errors.email ? 'border-red-500' : 'border-[#3C3C43]/60'
              }`}
            />
            {errors.email && <p className="text-red-500 text-[14px]">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[16px] font-medium text-[#3C3C4399]/60 block">
              Message
            </label>
            <textarea
              id="message"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
              placeholder="Type Message Here"
              rows={6}
              className={`w-full p-3 px-4 rounded-lg border min-h-[293px] max-h-[293px] ${
                errors.message ? 'border-red-500' : 'border-[#3C3C43]/60'
              }`}
            />
            {errors.message && <p className="text-red-500 text-[14px]">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-secondary hover:bg-fade-white text-white border hover:border-secondary hover:text-secondary py-3 rounded-lg transition-colors duration-300 ease-in ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] md:w-[400px]">
            <h3 className="text-[24px] font-semibold mb-4">Message Sent!</h3>
            <p className="text-gray-700 mb-6">
              Thank you for reaching out! We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
