import React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import SearchBarIcon from "./Components/SearchIcon";

const SearchBar = (props) => {
  const { placeHolder, action, clearAction, value } = props;
  return (
    <Container centerContent marginBottom="15px">
      <InputGroup>
        <InputRightElement
          // width='4.5rem'
          children={<SearchBarIcon action={clearAction} value={value} />}
        />
        <Input
          placeholder={placeHolder}
          onChange={action}
          value={value}
        ></Input>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
