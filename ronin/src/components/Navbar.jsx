import {
  Box,
  Avatar,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Stack,
  Input,
  Text,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Links = ["MEN", "WOMEN", "MOBILE COVERS"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      // borderBottom: "4px",
      borderColor: "#FF6000",
      borderRadius: 0,
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} margin="auto">
            <Box as="b">RONIN</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <HStack spacing={10}>
              <Box w={"260px"}>
                <InputGroup bg="#eaebeb" borderRadius={"5px"}>
                  <InputLeftElement
                    children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                  />
                  <Input
                    placeholder="Search by product, category or collection"
                    fontSize={"11px"}
                    _focus={{
                      boxShadow: "none",
                      outline: "none",
                      border: "none",
                    }}
                  />
                </InputGroup>
              </Box>
              <HStack spacing={5}>
                <Text>|</Text>
                <Text _hover={{ cursor: "pointer" }}>Login</Text>
                <FontAwesomeIcon icon={faHeart} fontSize={"20px"} />
                <FontAwesomeIcon icon={faBagShopping} fontSize={"20px"} />
                <Avatar
                  size="sm"
                  name="India"
                  src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                />
              </HStack>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Divider borderBottom={"1.5px solid #90A4AE"} />
    </>
  );
}
