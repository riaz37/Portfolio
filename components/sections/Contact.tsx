import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setIsSubmitted(false);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        formdata: formDataToSend,
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Add your Web3Forms access key here
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      setErrors({ form: 'There was an error submitting the form. Please try again.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-card text-card-foreground rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-primary">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.form && <p className="text-red-600 text-center">{errors.form}</p>}
        <div>
          <label htmlFor="name" className="block text-secondary-foreground mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:ring-primary focus:border-primary"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-secondary-foreground mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:ring-primary focus:border-primary"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-secondary-foreground mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-input border border-border text-foreground focus:ring-primary focus:border-primary"
            rows={5}
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-shadow shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Thank you!' : 'Send Message'}
        </button>
      </form>
      {isSubmitted && (
        <p className="mt-4 text-center text-green-600">Your message has been sent. We&apos;ll be in touch soon!</p>
      )}
    </div>
  );
};

export default ContactForm;
