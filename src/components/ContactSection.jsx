import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "./hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message, I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to new opportunities and collaborations.
        </p>
        <div className="flex justify-center">
  <div className="space-y-8 max-w-md w-full text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center justify-center space-x-4">
               
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:iamjohangalvan@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    iamjohangalvan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
              
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+18494992804"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (849) 499-2804
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
               
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Santo Domingo, Dominican Republic
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/johangalvan/"
                >
                  <Linkedin />
                </a>
                <a target="_blank" href="https://github.com/iamjohangalvan">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
  );
};
