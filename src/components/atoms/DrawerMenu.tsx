import React from "react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Input, UnorderedList, ListItem } from "@chakra-ui/react";
import ButtonSquare from "./buttons/ButtonSquare";
import { logOut } from "../../firebaseSettings/firebase";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<undefined>;
};

const DrawerMenu: React.FC<Props> = (props) => {
  const { isOpen, onClose, btnRef } = props;

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              <ListItem><Link href='/'>トップ</Link></ListItem>
              <ListItem><Link href='/my-page'>マイページ</Link></ListItem>
              <ListItem><Link href='/today-eat-menu'>カート</Link></ListItem>
              <ListItem><Link href='/new-menu'>新着メニュー</Link></ListItem>
              <ListItem><Link href='/popular-menu'>人気のメニュー</Link></ListItem>
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
