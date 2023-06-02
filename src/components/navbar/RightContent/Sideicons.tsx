import React from "react";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Divider,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineStock, AiOutlineUser } from "react-icons/ai";
import { GiPresent } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";

type SoddeIconProps = {
  user: any;
};

const Sideicons: React.FC<SoddeIconProps> = ({ user }) => {
  return (
    <Flex align="center" justify-content="space-between" width="100%">
      <Flex>
        <IconButton
          display={{ base: "none", md: "flex" }}
          aria-label="Notifications"
          icon={<RiNotification2Line fontSize={24} />}
          bg="none"
          color="gray.700"
          mr={2}
          borderRadius="8px"
          _hover={{
            bg: "gray.100",
            opacity: "0.7",
          }}
        />
        <Badge
          bg="rgb(217,79,112)"
          color="white"
          height="10pt"
          width="10pt"
          borderRadius="50"
          position="absolute"
          alignItems="center"
          textAlign="center"
          fontSize="6pt"
        >
          3
        </Badge>
      </Flex>
      <Flex>
        <IconButton
          display={{ base: "none", md: "flex" }}
          aria-label="Notifications"
          color="gray.700"
          icon={<AiOutlineStock fontSize={26} />}
          bg="none"
          mr={2}
          borderRadius="8px"
          _hover={{
            bg: "gray.100",
            opacity: "0.7",
          }}
        />
       
      </Flex>
      <Menu>
        {user.photoURL ? (
          <MenuButton _hover={{ opacity: "0.6" }}>
            <Avatar
              borderRadius="16px"
              height="40px"
              width="40px"
              src={user.photoURL}
            />
          </MenuButton>
        ) : (
          <MenuButton as={IconButton} icon={<AiOutlineUser />} />
        )}

        <MenuList padding={2}>
          <MenuItem
            borderRadius="16px"
            fontSize="11pt"
            fontWeight={600}
            _hover={{ bg: "rgb(217,79,112)", color: "white" }}
            icon={<AiOutlineUser />}
          >
            Profile
          </MenuItem>
          <MenuItem
            borderRadius="16px"
            fontSize="11pt"
            fontWeight={600}
            _hover={{ bg: "rgb(217,79,112)", color: "white" }}
            icon={<AiOutlineStock />}
          >
            WatchList
          </MenuItem>
          <MenuItem
            borderRadius="16px"
            fontSize="11pt"
            fontWeight={600}
            _hover={{ bg: "rgb(217,79,112)", color: "white" }}
            icon={<RiNotification2Line />}
          >
            Notifications
          </MenuItem>
          <MenuItem
            mb={2}
            borderRadius="16px"
            fontSize="11pt"
            fontWeight={600}
            _hover={{ bg: "rgb(217,79,112)", color: "white" }}
            icon={<GiPresent />}
          >
            Rewards
          </MenuItem>

          <Divider />
          <MenuItem
            borderRadius="16px"
            mt={2}
            icon={<MdOutlineLogout />}
            _hover={{ color: "red" }}
            onClick={() => signOut(auth)}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default Sideicons;
