import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LayoutContainer from "../atoms/LayoutContainer";
import Header from "../templates/Header";

type Props = {
  children: React.ReactNode;
  heading: string;
  icon: IconProp;
};

const PageLayout: React.FC<Props> = (props) => {
  const { children, heading, icon } = props;
  const fontSize = { base: "xl", md: "6xl" };
  return (
    <>
      <Header />
      <Box bg="brand.bg">
        <Flex alignItems="center" maxW="1200" p={6} mx="auto">
          <Heading as="h2" fontSize={fontSize} color="#fff">
            {heading}
          </Heading>
          <Spacer />
          <Box w={{ base: 150, md: 300 }}>
            <FontAwesomeIcon icon={icon} color="rgba(255,255,255,0.5)" />
          </Box>
        </Flex>
      </Box>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default PageLayout;
