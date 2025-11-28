import { useState } from "react";
import Container from "../components/container.jsx";
import ContactForm from "../components/contact-form.jsx";

function SubmissionSuccess() {
  return (
    <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded text-green-800 max-w-md">
      <h3 className="font-semibold mb-1">Danke für deine Nachricht!</h3>
    </div>
  );
}


export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSuccess() {
    setIsSubmitted(true);
  }
  return (
    <main className="font-poppins text-sky-900 bg-white min-h-screen w-full pt-[70px] md:pt-[85px]">
      <Container>
        {!isSubmitted ? (
          <ContactForm onSubmitSuccess={handleSuccess} />
        ) : (
          <SubmissionSuccess />
        )}
      </Container>
    </main>


  );
}