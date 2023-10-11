"use client";

import {
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Image from "next/image";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();

  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
              href={link.route}
              key={link.label}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItem key={link.label}>
                <ListItemButton
                  selected={isActive}
                  sx={{
                    minHeight: 48,
                    justifyContent: "initial",
                    px: 2.5,
                    py: 2.5,
                    gap: 1,
                  }}
                  color="secondary"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 2,
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                  </ListItemIcon>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default LeftSideBar;
