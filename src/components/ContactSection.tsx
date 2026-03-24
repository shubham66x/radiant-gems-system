import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience the <span className="text-gradient-gold">Radha Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Showroom Address",
                lines: ["Chaura Bazar, Near Ghumar Mandi", "Ludhiana, Punjab 141008"],
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+91 98765 43210", "+91 01612 345678"],
              },
              {
                icon: Clock,
                title: "Showroom Timings",
                lines: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: 11:00 AM – 6:00 PM"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@radhajewellers.com"],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="font-body text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-lg overflow-hidden shadow-elegant h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.5!2d75.857!3d30.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzM2LjAiTiA3NcKwNTEnMjUuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Radha Jewellers Ludhiana Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
