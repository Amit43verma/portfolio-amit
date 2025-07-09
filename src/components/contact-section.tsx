"use client"

import { siteConfig, socialLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { sectionVariants, itemVariants } from "@/lib/animations"
import { useState } from "react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("Message sent successfully!")
        setForm({ name: "", email: "", message: "" })
      } else {
        const data = await res.json()
        setStatus(data.error || "Failed to send message.")
      }
    } catch (err) {
      setStatus("Failed to send message. Please try again later.")
    }
    setSubmitting(false)
  }

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-background to-secondary/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="mb-8 text-3xl font-bold tracking-tight text-primary sm:text-4xl" variants={itemVariants}>
          Let&apos;s Connect!
        </motion.h2>
        <motion.p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground" variants={itemVariants}>
          I&apos;m currently seeking new opportunities and would love to hear from you. Whether you have a question, a
          project idea, or just want to say hi, feel free to reach out!
        </motion.p>

        <motion.form
          className="mx-auto max-w-lg flex flex-col gap-4 bg-background/80 rounded-lg p-6 shadow-lg"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <Button type="submit" size="lg" disabled={submitting} className="mt-2">
            {submitting ? "Sending..." : "Send Message"}
          </Button>
          {status && <p className="text-green-600 mt-2">{status}</p>}
        </motion.form>

        <motion.div className="flex flex-wrap justify-center gap-4 mt-8" variants={itemVariants}>
          <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-primary/40"
            >
              <socialLinks.linkedin.icon className="h-5 w-5" />
              LinkedIn Profile
            </Button>
          </Link>
          <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-primary/40"
            >
              <socialLinks.github.icon className="h-5 w-5" />
              GitHub Profile
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
