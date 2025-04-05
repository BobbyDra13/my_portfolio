import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">📬 Contact</h2>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5" />
        <a
          href="mailto:manaschandra07@gmail.com"
          className="underline text-blue-400">
          manaschandra07@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <span>+91 9949804777</span>
      </div>
      <div className="flex items-center gap-2">
        <Github className="w-5 h-5" />
        <a
          href="https://github.com/BobbyDra13"
          className="underline text-blue-400"
          target="_blank"
          rel="noreferrer">
          GitHub Profile
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Linkedin className="w-5 h-5" />
        <a
          href="https://www.linkedin.com/in/manas-chandra-3b3a9923a/"
          className="underline text-blue-400"
          target="_blank"
          rel="noreferrer">
          LinkedIn Profile
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
