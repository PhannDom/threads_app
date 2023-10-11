"use client";

import ThemeRegistry from "@/themes/ThemeRegistry";

type Props = {
  children: React.ReactNode;
};

const App = ({ children }: Props) => {
  return <ThemeRegistry>{children}</ThemeRegistry>;
};

export default App;
