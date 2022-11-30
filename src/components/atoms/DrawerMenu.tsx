import React from "react";
import Link from "next/link";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, UnorderedList, ListItem, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faDove, faFeather, faMailBulk, faMailForward, faMailReply, faUser } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import ButtonSquare from "./buttons/ButtonSquare";
import { logOut } from "../../firebaseSettings/firebase";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<undefined>;
};

type NavList = {
  link: string;
  renderText: string;
  icon: IconProp;
};
const DrawerMenu: React.FC<Props> = (props) => {
  const { isOpen, onClose, btnRef } = props;
  const navList: NavList[] = [
    { link: "/", renderText: "トップ", icon: faDove },
    { link: "/my-page", renderText: "マイページ", icon: faUser },
    { link: "/today-eat-menu", renderText: "カート", icon: faCartShopping },
    { link: "/new-menu", renderText: "新着メニュー", icon: faFeather },
    { link: "mailto:web-partner@tainer-web-partner.com", renderText: "不具合報告", icon: faMailBulk },
  ];
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="brand.main">
          <DrawerCloseButton />
          <DrawerHeader pt={{ base: "12", md: "14" }} fontSize={{ base: "2xl", md: "3xl" }} fontFamily="Montserrat" color="#fff">
            PFC BRANCER
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList listStyleType="none">
              {navList.map(({ link, renderText, icon }) => (
                <ListItem key={link} color="#fff" fontWeight="700" fontSize={{ base: "xl", md: "2xl" }}>
                  <Link href={link} style={{ padding: "10px 0", display: "flex", alignItems: "center" }}>
                    <Box w={{ base: "6" }} mr={{ base: 4, md: 2 }}>
                      <FontAwesomeIcon icon={icon} />
                    </Box>
                    {renderText}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
          <DrawerFooter>
            <ButtonSquare onClick={logOut}>Sing Out</ButtonSquare>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
