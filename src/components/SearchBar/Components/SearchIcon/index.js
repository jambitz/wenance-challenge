import React from "react";
import { useSelector } from "react-redux";
import { Button, Spinner } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { colors } from "../../../../utils/colors";

const SearchBarIcon = (props) => {
  const { action, value } = props;
  const { isSearchLoading } = useSelector((state) => state.general);
  return (
    <>
      {isSearchLoading ? (
        <Spinner
          thickness="2px"
          speed="0.62s"
          emptyColor={colors.gray2}
          color={colors.blue}
          size="md"
        />
      ) : "" === value ? (
        <SearchIcon color={colors.gray2} />
      ) : (
        <Button
          h="1.8rem"
          size="sm"
          onClick={() => action()}
          alignContent="center"
        >
          <>x</>
        </Button>
      )}
    </>
  );
};

export default SearchBarIcon;
