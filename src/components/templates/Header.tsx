import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

import ButtonSquare from "../atoms/ButtonSquare";
import { useSetRecoilState } from "recoil";
import { userId } from "../recoil/states";
import { onAuthStateChanged } from "firebase/auth";
import { auth, singInWithGoogle } from "../../firebaseSettings/firebase";

const Header = () => {
  const setUserId = useSetRecoilState(userId)
  // userの変更をfirebasehooksで検知してstateを書き換え
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
    }
  });

  return (
    <>
      <Box bg="brand.main">
        <Flex alignItems="center" h={{ base: 16, md: 24 }} maxW={1200} mx={"auto"} px={4}>
          <Heading as="h1" fontSize={{ base: "20px", md: "40px" }} color="#fff" letterSpacing="0.08em">
            PFC BRANCER
          </Heading>
          <Spacer />
          <ButtonSquare onClick={singInWithGoogle}>Sing In</ButtonSquare>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
