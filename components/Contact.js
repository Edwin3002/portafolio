import React from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "../icons/icons";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Contact = () => {
  const [t] = useTranslation("global");

  return (
    <div id="contact" className="mx-auto w-full">
      <div className="mx-auto w-3/4">
        <h2 className="font-bold text-3xl lg:text-4xl">{t("contact.title")}</h2>
        <p className="my-6 text-xl lg:text-2xl">{t("contact.p1")}</p>
        <ContactLinks />
      </div>
      <footer className="text-center py-6 px-10">
        Copyright © 2024. @<a href="#home">Edwin -</a>
        {t("contact.rights")}
      </footer>
    </div>
  );
};

export default Contact;

export const ContactLinks = ({
  className = "my-16 flex justify-between lg:justify-around",
}) => {
  const { query } = useRouter();

  const copyMail = () => {
    copy("edwin.dev3002@gmail.com");
    let text = query.language === "en" ? "Copied email" : "Mail copiado";
    toast.success(text, {
      position: "bottom-center",
    });
  };

  return (
    <div className={className}>
      <div className="card">
        <a
          href="https://www.linkedin.com/in/edwin-vargas-ayala"
          target="_blanck"
        >
          <div className="logo">
            <Linkedin />
          </div>
          <div className="logoName">Linkedin</div>
        </a>
      </div>
      <div className="card">
        <a href="https://github.com/Edwin3002" target="_blanck">
          <div className="logo">
            <Github />
          </div>
          <div className="logoName">Github</div>
        </a>
      </div>
      <div className="card">
        <button onClick={copyMail}>
          {/* <a href="mailto:edwin.dev3002@gmail.com" target="_blanck"> */}
          <div className="logo">
            <Mail />
          </div>
          <div className="logoName">Mail</div>
        </button>
        {/* </a> */}
      </div>
    </div>
  );
};
