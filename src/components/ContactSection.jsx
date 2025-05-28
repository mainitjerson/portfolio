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
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative bg-secondary/30"
      >
        <RevealOnScroll>
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
              Get In<span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <div className="relative">
                <input
                  className="w-full bg-white/10 border border-black/10 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base text-primary transition focus:outline-none focus:border-primary focus:bg-primary/5"
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
                  className="w-full bg-white/10 border border-black/10 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base text-primary transition focus:outline-none focus:border-primary focus:bg-primary/5"
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
                  className="w-full bg-white/10 border border-black/10 rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base text-primary transition focus:outline-none focus:border-primary focus:bg-primary/5 resize-none"
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
                className="w-full px-6 py-2.5 sm:py-3 rounded-lg overflow-hidden bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 text-sm sm:text-base font-medium"
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
