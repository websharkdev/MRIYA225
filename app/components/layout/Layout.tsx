import { FC, ReactElement, createContext, useEffect, useRef } from "react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import styles from "./layout.module.sass";
import { useSwitchTheme } from "@/hooks/useSwitchTheme";

export const UContext = createContext({});

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const theme = useSwitchTheme();
  const cursorREF = useRef(null);

  useEffect(() => {
    document.onmousemove = (ev) => {
      if (cursorREF.current) {
        // @ts-ignore
        cursorREF.current.style = `
        left: ${ev.clientX}px;
        top: ${ev.clientY}px;
      `;
      }
    };
  }, [cursorREF]);
  return (
    <UContext.Provider value={{}}>
      <div className="cursor" ref={cursorREF} />
      <div
        className={`${styles.layout} ${
          theme.isLight ? "bg-white" : "bg-[#212121]"
        }`}
      >
        <div className="container py-5 z-10">
          <Header />
          <div className={styles.page}>{children}</div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </UContext.Provider>
  );
};

export default Layout;
