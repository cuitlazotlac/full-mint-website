import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Github from "./assets/social-media-icons/github.gif";
import PixelArt from "./assets/social-media-icons/pixel-art.gif";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      <Flex justify="space-around" width="40%" padding="0px 75px">
        <Link
          href="https://github.com/cuitlazotlac/full-mint-website"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Github} boxSize="52px" margin="0 15px" />
        </Link>
        <Link href="https://heyhayssem.dev/" target="_blank" rel="noreferrer">
          <Image src={PixelArt} boxSize="52px" margin="0 15px" />
        </Link>
        <Link
          href="mailto:heyhayssem@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Email} boxSize="42px" margin="0 15px" />
        </Link>
      </Flex>

      <Flex justify="space-around" align="center" width="40%" padding="30px">
        <Link
          href="https://github.com/cuitlazotlac/full-mint-website"
          target="_blank"
          rel="noreferrer"
          color="white"
        >
          <Box margin="0 15px">About</Box>
        </Link>
        <Spacer />
        <Link
          href="https://www.sofi.com/learn/content/what-is-nft-minting/"
          target="_blank"
          rel="noreferrer"
          color="white"
        >
          <Box margin="0 15px">Mint</Box>
        </Link>
        <Spacer />
        {/* <Box margin="0 15px">Team</Box>
        <Spacer /> */}

        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
