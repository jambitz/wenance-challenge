import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  const { text, color, action, icon, loadingText, isLoading, ml } = props;
  return (
    <Button
      colorScheme={color}
      mr="4"
      onClick={action}
      leftIcon={icon}
      loadingText={loadingText}
      isLoading={isLoading}
      ml={ml}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
