import Container from "../UI/Container";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { contact } from "../../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <Container>
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Work Together
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss an opportunity?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid gap-6">
            {contact.map((item) => (
              <ContactCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}