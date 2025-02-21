import React from "react";
import Webcam from "react-webcam";

const WebcamNavigation = ({ videoConstraints }) => {
  const videoConstraintsFront = {
    facingMode: "user",
  };
  const videoConstraintsBack = {
    facingMode: { exact: "environment" },
  };

  const videocam =
    videoConstraints === "Front" ? videoConstraintsFront : videoConstraintsBack;
  return (
    <div className="flex w-full h-full justify-center items-center absolute rounded-md">
      <div className="flex w-full h-full">
        <Webcam
          className=" rounded-md w-full h-full object-cover"
          videoConstraints={videocam}
        />
      </div>
    </div>
  );
};

export default WebcamNavigation;
