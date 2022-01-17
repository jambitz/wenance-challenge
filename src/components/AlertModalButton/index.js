import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import CustomButton from "../CustomButton";

function AlertModalButton(props) {
  const {
    action,
    title,
    modalText,
    buttonColor,
    buttonText,
    buttonIcon,
    loadingActionText,
  } = props;
  const { isDeleting } = useSelector((state) => state.general);
  const { isFailed } = useSelector((state) => state.general);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();

  useEffect(() => {
    !isDeleting && onClose();
    !isFailed &&
      isOpen &&
      isDeleting &&
      toast({
        title: "Personaje Eliminado",
        description: "El personaje seleccionado ya no forma parte de la lista",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
  }, [isDeleting]);

  return (
    <>
      <CustomButton
        color={buttonColor}
        text={buttonText}
        icon={buttonIcon}
        action={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{modalText}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <CustomButton
                color={buttonColor}
                text={buttonText}
                action={action}
                ml={3}
                isLoading={isDeleting}
                loadingText={loadingActionText}
              />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertModalButton;
