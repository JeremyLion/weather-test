import React from "react";
import Sunrise from "../assets/images/sunrise.svg";
import Sunset from "../assets/images/sunset.svg";

interface SunriseSunsetProps {
  ipData: any;
  data: any;
}

/**
 * The SunriseSunset component displays the sunrise and sunset times for a given location.
 * @param {SunriseSunsetProps} props - The component props.
 * @returns {JSX.Element} - The component JSX.
 */
const SunriseSunset = (props: SunriseSunsetProps) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="text-center">
          <img src={Sunrise} alt="Sunrise" />
          <div className="lead mt-4">Sunrise Time:</div>
          <div className="lead">{props?.data?.sunrise}</div>
        </div>
      </div>
      <div className="col-6">
        <div className="text-center">
          <img src={Sunset} alt="Sunset" />
          <div className="lead mt-4">Sunset Time:</div>
          <div className="lead">{props?.data?.sunset}</div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
