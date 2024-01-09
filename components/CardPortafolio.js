import React from "react";
import { useTranslation } from "react-i18next";
import { Figma, Github, World } from "../icons/icons";
import Image from "next/image";

const CardPortafolio = ({ project, f }) => {
  const [t] = useTranslation("global");
  return (
    <div className=" my-4 mx-4 cardMaxWPorta rounded-2xl">
      <div className="imgCardPorta ">
        <div className="slider">
          <ul>
            {project.img.map((imagen) => (
              <li>
                <Image
                  loading="lazy"
                  width={300}
                  height={200}
                  className="imgP"
                  src={imagen}
                  alt={project.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="infoCardPorta text-center">
        <p>{project.name.toUpperCase()}</p>
        <div className="my-3 flex justify-around">
          {project.url ? (
            <div className="logoPorta">
              <a href={project.url} target="_blanck">
                <World />
              </a>
            </div>
          ) : null}
          {project.github ? (
            <div className="logoPorta">
              <a href={project.github} target="_blanck">
                <Github />
              </a>
            </div>
          ) : null}
          {project.figma ? (
            <div className="logoPorta">
              <a href={project.figma} target="_blanck">
                <Figma />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="mx-1">{project.technology}</p>
        <p
          className="underline desc"
          onClick={() => {
            f(project);
          }}
        >
          {t("portafolio.description")}
        </p>
      </div>
    </div>
  );
};

export default CardPortafolio;
