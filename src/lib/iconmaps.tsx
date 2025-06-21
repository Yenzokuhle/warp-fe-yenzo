import React from "react";
import {
  FaSun,
  FaMoon,
  FaCloudSun,
  FaCloud,
  FaCloudRain,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaSnowflake,
} from "react-icons/fa";
import { IoThunderstorm } from "react-icons/io5";
import { RiMistFill } from "react-icons/ri";
import { BsCloudsFill } from "react-icons/bs";

export function getWeatherIcon(
  code: string,
  props: { size?: number; className?: string } = { size: 64, className: "text-purple-400" }
): React.ReactNode {
  switch (code) {
    case "01d": return <FaSun {...props} />;
    case "01n": return <FaMoon {...props} />;
    case "02d":
    case "02n": return <FaCloudSun {...props} />;
    case "03d":
    case "03n": return <FaCloud {...props} />;
    case "04d":
    case "04n": return <BsCloudsFill {...props} />;
    case "09d":
    case "09n": return <FaCloudRain {...props} />;
    case "10d": return <FaCloudSunRain {...props} />;
    case "10n": return <FaCloudShowersHeavy {...props} />;
    case "11d":
    case "11n": return <IoThunderstorm {...props} />;
    case "13d":
    case "13n": return <FaSnowflake {...props} />;
    case "50d":
    case "50n": return <RiMistFill {...props} />;
    default: return <FaSun {...props} />;
  }
} 