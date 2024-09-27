import React from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoGraphql,
  BiLogoTypescript,
  BiLogoSass,
  BiLogoAngular,
  BiLogoFlutter,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiTailwindcss } from "react-icons/si";

export const JavascriptIcon = () => (
  <BiLogoJavascript style={{ color: "yellow" }} skill="javascript" />
);
export const ReactIcon = () => (
  <BiLogoAngular style={{ color: "deepskyblue" }} skill="react" />
);
export const SassIcon = () => (
  <BiLogoSass style={{ color: "#cc6699" }} skill="sass" />
);
export const NextjsIcon = () => (
  <TbBrandNextjs style={{ color: "cornsilk" }} skill="nextjs" />
);
export const TailwindCssIcon = () => (
  <SiTailwindcss style={{ color: "skyblue" }} skill="tailwindcss" />
);
export const NodejsIcon = () => (
  <BiLogoNodejs style={{ color: "greenyellow" }} skill="nodejs" />
);
export const ExpressIcon = () => (
  <SiExpress style={{ color: "yellow" }} skill="expressjs" />
);
export const MongodbIcon = () => (
  <BiLogoMongodb style={{ color: "green" }} skill="mongodb" />
);
export const TypescriptIcon = () => (
  <BiLogoTypescript style={{ color: "#007acc" }} skill="typescript" />
);
export const GraphqlIcon = () => (
  <BiLogoFlutter style={{ color: "blue" }} skill="graphql" />
);
