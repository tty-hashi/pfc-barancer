import React, { useRef } from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useDisclosure, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ButtonSquare from "../atoms/buttons/ButtonSquare";
import { useRecoilState } from "recoil";
import { userIdState } from "../recoil/states";
import { onAuthStateChanged } from "firebase/auth";
import { auth, singInWithGoogle } from "../../firebaseSettings/firebase";
import DrawerMenu from "../atoms/DrawerMenu";
import { useRouter } from "next/router";

const Header = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const router = useRouter();

  // userの変更をfirebasehooksで検知してstateを書き換え
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
    }
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const onClickGoToHome = () => {
    router.push("/");
  };

  return (
    <>
      <Box bg="brand.main">
        <Flex alignItems="center" h={{ base: 16, md: 24 }} maxW={1200} mx={"auto"} px={4}>
          <Heading onClick={onClickGoToHome} _hover={{ cursor: "pointer" }} as="h1" fontSize={{ base: "20px", md: "40px" }} color="#fff" letterSpacing="0.08em">
            PFC BRANCER
          </Heading>
          <Spacer />
          {userId ? (
            <>
              <Button ref={btnRef} onClick={onOpen}>
                <FontAwesomeIcon icon={faBars} color="#FCC05C" width="20px" />
              </Button>
              <DrawerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
            </>
          ) : (
            <ButtonSquare onClick={singInWithGoogle}>Sing In</ButtonSquare>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Header;
