"use client"
import { useState, FormEvent, ChangeEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react"
import Image from "next/image"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "39466fad-2aee-483f-85f0-6ea95e705674",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        // Hide the success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Monroe, Louisiana, USA",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "abhi.amgain567@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 *********",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column (contact info) remains unchanged */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 p-3 bg-primary/10 text-primary rounded-full">{info.icon}</div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/contact_logo.png"
                    alt="Contact Globe"
                    width={600}       // Set width as per your query parameter
                    height={400}      // Set height as per your query parameter
                    className="w-full h-full object-contain"  // Remove w-full h-full when using explicit dimensions
                    quality={100}     // Optional: adjust image quality (1-100)
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column (form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Form fields remain unchanged */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Your Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success message popup */}
                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 rounded-lg"
                      >
                        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-center">
                          Message Received!
                        </h3>
                        <p className="text-center mb-6">
                          Thanks for reaching out. I've received your contact request and will get back to you shortly.
                        </p>
                        <Button
                          onClick={() => setShowSuccess(false)}
                          className="bg-primary hover:bg-primary/90 text-white"
                        >
                          Close
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}