"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 py-12 text-center shadow-lg">
        <span className="text-5xl">✅</span>
        <h3 className="mt-4 font-display text-2xl font-bold text-golf-green">
          Message Sent!
        </h3>
        <p className="mt-2 text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "general",
              message: "",
            });
          }}
          className="btn-primary mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h3 className="font-display text-xl font-bold text-golf-green">
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-golf-fairway focus:ring-2 focus:ring-golf-fairway/20"
            placeholder="John Doe"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-golf-fairway focus:ring-2 focus:ring-golf-fairway/20"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-golf-fairway focus:ring-2 focus:ring-golf-fairway/20"
              placeholder="(555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-golf-fairway focus:ring-2 focus:ring-golf-fairway/20"
          >
            <option value="general">General Inquiry</option>
            <option value="membership">Membership</option>
            <option value="tee-time">Tee Time Booking</option>
            <option value="events">Events & Tournaments</option>
            <option value="lessons">Golf Lessons</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-golf-fairway focus:ring-2 focus:ring-golf-fairway/20"
            placeholder="How can we help you?"
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
