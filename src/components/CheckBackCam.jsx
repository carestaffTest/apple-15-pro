import { useState, useEffect } from "react";

const CheckBackCam = () => {
  const [hasBackCamera, setHasBackCamera] = useState(null);

  useEffect(() => {
    const checkBackCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const backCameraExists = devices.some(
          (device) =>
            device.kind === "videoinput" &&
            device.label.toLowerCase().includes("back")
        );
        setHasBackCamera(backCameraExists);
      } catch (error) {
        setHasBackCamera(false);
      }
    };

    checkBackCamera();
  }, []);

  return hasBackCamera;
};

export default CheckBackCam;
