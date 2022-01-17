import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/slices/characters/charactersSlice";
import CharacterBox from "./components/CharacterBox";
import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { CircularProgress, SlideFade } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import AlertNotification from "../../components/AlertNotification";
import { toggleSearchLoading } from "../../store/slices/general/generalSlice";
import { colors } from "../../utils/colors";

const Home = () => {
  const { characters } = useSelector((state) => state.characters);
  const { isLoading } = useSelector((state) => state.general);
  const { isFailed } = useSelector((state) => state.general);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const setSearchValueDelayed = (value) => {
    dispatch(toggleSearchLoading());
    setTimeout(() => {
      dispatch(toggleSearchLoading());
    }, 300);
    setSearchValue(value);
  };

  const getFilteredCharacters = () => {
    return characters.filter((character) => {
      if ("" === searchValue.trim()) {
        return character;
      } else if (
        character.name
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase().trim())
      ) {
        return character;
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Container minW="60%" centerContent>
      <Box color={colors.blue} fontSize="32" margin="5">
        Challenge Wenance
        <Box as="span" color={colors.gray3} fontSize="15" margin="5px">
          Frontend
        </Box>
      </Box>
      <SearchBar
        placeHolder="Escriba para comenzar a filtrar por nombre"
        action={(e) => setSearchValueDelayed(e.target.value)}
        clearAction={() => setSearchValue(" ")}
        value={searchValue}
      />
      {isLoading ? (
        <Flex mt="45px">
          <Center>
            <CircularProgress
              isIndeterminate
              color={colors.green}
              size="110px"
            />
          </Center>
        </Flex>
      ) : isFailed ? (
        <AlertNotification />
      ) : (
        <Box margin="5px" width="100%">
          {getFilteredCharacters(characters).length === 0 &&
          searchValue !== "" ? (
            <Container
              color={colors.red}
              fontSize="32"
              marginTop="35px"
              centerContent
            >
              No se encontraron resultados.
            </Container>
          ) : (
            getFilteredCharacters(characters).map((character, i) => (
              <SlideFade in={!isLoading}>
                <CharacterBox
                  key={i}
                  name={character.name}
                  height={character.height}
                  gender={character.gender}
                />
              </SlideFade>
            ))
          )}
        </Box>
      )}
    </Container>
  );
};

export default Home;
