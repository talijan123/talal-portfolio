import { motion } from "framer-motion";
import Container from "../UI/Container";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { contact } from "../../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-28

        bg-slate-50
        dark:bg-slate-950

        text-slate-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Container>

        {/* Section Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-20"
        >
          <p
            className="
              uppercase
              tracking-[5px]
              font-bold
              text-blue-500
            "
          >
            Contact
          </p>

          <h2
            className="
              mt-5

              text-4xl
              md:text-5xl

              font-black

              text-slate-900
              dark:text-white

              transition-colors
              duration-300
            "
          >
            Let's Build Something Amazing
          </h2>

          <p
            className="
              mt-6

              max-w-3xl
              mx-auto

              text-lg
              leading-8

              text-slate-600
              dark:text-slate-400

              transition-colors
              duration-300
            "
          >
            Have a project in mind, a freelance opportunity,
            or just want to say hello? Feel free to reach out.
            I'd love to discuss how we can work together.
          </p>
        </motion.div>

        {/* Contact Grid */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-start
          "
        >
          {/* Contact Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
            }}
            className="space-y-6"
          >
            {contact.map((item, index) => (
              <ContactCard
                key={item.id}
                item={item}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: .15,
            }}
          >
            <ContactForm />
          </motion.div>

        </div>

      </Container>
    </section>
  );
}