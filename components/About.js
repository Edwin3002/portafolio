import React, { useState } from "react";
import { techSkills } from "../data/skills";
import CardSkill from "./CardSkill";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download } from "../icons/icons";

const About = () => {
  const [teskill] = useState(techSkills);
  const [t] = useTranslation("global");

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.0]);

  return (
    <div id="about" className="mt-8 lg:mt-0">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex w-full lg:w-1/2">
          <div className="w-4/5 m-auto">
            <h2 className="font-bold text-3xl lg:text-4xl">
              {t("about.title")}
            </h2>
            {/* <h3 className="text-2xl lg:text-3xl font-bold">
              {t("about.subTitle")}
            </h3> */}
            <p className="my-6 text-lg lg:text-xl text-justify">
              {t("about.p1")}
              <br />
              {t("about.p2")}
            </p>
            {/* <a
              href={t("about.urlCv")}
              target="_black"
              download="Edwin Vargas Ayala"
            >
              <button className="btnCv rounded-lg px-4 py-1 flex items-center justify-around">
                <div className=" mr-4">
                  <Download />
                </div>
                <p>{t("about.cv")}</p>
              </button>
            </a> */}
          </div>
        </div>
        <div className="my-16 w-full lg:w-1/2">
          <div className="my-auto w-4/5 mx-auto p-1 ">
            <h2 className="flex font-bold  text-3xl lg:text-4xl">
              {t("skills.title")}
            </h2>
            <div className="flex w-full flex-wrap  justify-between">
              {teskill.map((ski) => (
                <motion.div key={ski.id} style={{ scale }}>
                  <motion.div
                    style={{
                      scaleY: scrollYProgress,
                    }}
                  />
                  <CardSkill data={ski} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
