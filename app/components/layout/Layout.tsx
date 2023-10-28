import { FC, ReactElement, createContext } from "react";

import { Header } from "@/components/layout/header";

import { useSwitchTheme } from "@/hooks/useSwitchTheme";
import styles from "./layout.module.sass";

export const UContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const theme = useSwitchTheme();

  return (
    <UContext.Provider value={{}}>
      <div
        className={`${styles.layout} ${
          theme.isLight ? "bg-white" : "bg-[#212121]"
        }`}
      >
        <div className="container py-5 z-10">
          <Header />
          <div className={styles.page}>{children}</div>
        </div>
      </div>
    </UContext.Provider>
  );
};

export default Layout;
