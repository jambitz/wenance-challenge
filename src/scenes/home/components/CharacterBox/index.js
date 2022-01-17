import React from "react";
import { useDispatch } from "react-redux";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { emulateServerDeleteRequest } from "../../../../store/slices/characters/charactersSlice";
import AlertModalButton from "../../../../components/AlertModalButton";
import { colors } from "../../../../utils/colors";

const CharacterBox = (props) => {
  const dispatch = useDispatch();
  const { name, height, gender } = props;

  return (
    <Box
      margin="20px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ transition: "boxShadow 0.3s ease", boxShadow: "2xl" }}
    >
      <Box p="6">
        <Flex
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          fontSize="23"
        >
          {name}
          <Spacer />
          <Box>
            <AlertModalButton
              title="Eliminar Personaje"
              modalText={`Esta Seguro que desea eliminar al personaje ${name}?`}
              buttonColor="red"
              buttonText="Eliminar"
              buttonIcon={<DeleteIcon />}
              action={() => dispatch(emulateServerDeleteRequest(name))}
              loadingActionText="Eliminando"
            />
          </Box>
        </Flex>

        <Box mt="2" fontSize="18">
          Height:
          <Box as="span" color={colors.gray4} fontSize="16" margin="5px">
            {height}
          </Box>
        </Box>
        <Box fontSize="18">
          Gender:
          <Box as="span" color={colors.gray4} fontSize="16" margin="5px">
            {gender}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterBox;
