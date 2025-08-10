// File: components/contact.tsx

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin, Mail, Phone, Send, Loader2, AlertTriangle, Download } from "lucide-react";
import jsPDF from "jspdf";

// --- NEW: Animated Checkmark Component ---
const AnimatedCheckCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-500"
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      strokeDasharray="283"
      strokeDashoffset="283"
      initial={{ strokeDashoffset: 283 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
    />
    <motion.polyline
      points="22 4 12 14.01 9 11.01"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
    />
  </svg>
);


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Contact Form Submission", 105, 25, { align: 'center' });

    // Add divider line
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);

    // Add submission details
    doc.setFontSize(14);
    doc.text("Thank you for your submission!", 105, 45, { align: 'center' });
    doc.text("Here are the details you provided:", 105, 55, { align: 'center' });

    // Add form data
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);

    let yPosition = 75;

    doc.text(`Name: ${formData.name}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Email: ${formData.email}`, 20, yPosition);
    yPosition += 10;
    doc.text(`Phone: ${formData.phone || 'Not provided'}`, 20, yPosition);
    yPosition += 10;

    // Handle multiline message
    const splitMessage = doc.splitTextToSize(formData.message, 170);
    doc.text("Message:", 20, yPosition);
    yPosition += 10;
    doc.text(splitMessage, 20, yPosition);

    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Generated from contact form submission", 105, 280, { align: 'center' });

    // Save the PDF
    doc.save(`contact_submission_${formData.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "39466fad-2aee-483f-85f0-6ea95e705674", // Your access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        generatePDF(); // Generate and download PDF
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
      setShowError(errorMessage);
      setTimeout(() => setShowError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: "Location", details: "Monroe, Louisiana, USA" },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: "Email", details: "abhi.amgain567@gmail.com" },
    { icon: <Phone className="h-6 w-6 text-primary" />, title: "Phone", details: "+1 (318) 123-4567" }, // Example number
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
  };
  return (
    <section id="contact" className="relative w-full bg-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="h-full rounded-2xl border border-border bg-background/50 p-8 shadow-xl backdrop-blur-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full rounded-2xl border border-border bg-background/50 p-8 shadow-xl backdrop-blur-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-lg z-20"
                      >
                        <AnimatedCheckCircle />
                        <h3 className="text-2xl font-bold text-center text-foreground mt-4">Thank You!</h3>
                        <p className="text-center text-muted-foreground mt-2">Your message has been sent successfully. I'll be in touch soon.</p>
                        <p className="text-center text-muted-foreground mt-1">A PDF copy of your submission has been downloaded.</p>
                        <Button
                          onClick={generatePDF}
                          variant="outline"
                          className="mt-4"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download Again
                        </Button>
                      </motion.div>
                    )}
                    {showError && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-lg z-20">
                        <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
                        <h3 className="text-2xl font-bold text-center text-foreground">Error</h3>
                        <p className="text-center text-muted-foreground mt-2">{showError}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    animate={{ filter: showSuccess ? 'blur(10px)' : 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-background/50" />
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="bg-background/50" />
                    </div>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (Optional)" className="bg-background/50" />
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="bg-background/50" />
                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary font-semibold text-primary-foreground transition-all hover:brightness-110" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}