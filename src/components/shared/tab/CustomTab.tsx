"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabProps {
  id: number;
  value: string;
  label: string;
  icon: string;
}
interface CustomTabProps {
  tabs: Array<TabProps>;
  children?: React.ReactNode;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTab({ tabs, children }: CustomTabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic-tabs"
        >
          {tabs.map((tab) => (
            <Tab
              icon={
                <Image
                  src={tab.icon}
                  alt="logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              }
              iconPosition="start"
              label={tab.label}
              {...a11yProps(tab.id)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab) => (
        <CustomTabPanel key={tab.id} value={value} index={tab.id}>
          {children}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
