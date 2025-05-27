import RevealOnScroll from "./RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./ui/Toast";
import { useToast } from "../lib/utils";

function ContactSection() {
  const formRef = useRef();
  const { toast, dismiss, toasts } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS when component mounts
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      console.log(formData.email);

      console.log("Email sent successfully:", result.text);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "success",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <ToastProvider>
      <section id="contact" className="py-24 px-24 relative bg-secondary/30">
        <RevealOnScroll>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl mb:text-4xl font-bold text-center mb-4">
              Get In<span className="text-primary"> Touch</span>
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  className="w-full bg-white/10 border border-black/10 rounded px-4 py-3 text-primary transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  type="text"
                  name="from_name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="relative">
                <input
                  className="w-full bg-white/10 border border-black/10 rounded px-4 py-3 text-primary transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  className="w-full bg-white/10 border border-black/10 rounded px-4 py-3 text-primary transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg overflow-hidden bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>

      <ToastViewport>
        {toasts.map(({ id, title, description, variant }) => (
          <Toast key={id} variant={variant}>
            <div className="grid gap-1">
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{description}</ToastDescription>
            </div>
            <ToastClose onClick={() => dismiss(id)} />
          </Toast>
        ))}
      </ToastViewport>
    </ToastProvider>
  );
}

export default ContactSection;
