import React from "react";
import { useSelector } from "react-redux";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";


const AlertNotification = () => {
  const { errorMessage, resultMessage } = useSelector((state) => state.general);
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{errorMessage}</AlertTitle>
      <AlertDescription>{resultMessage}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
};

export default AlertNotification;
