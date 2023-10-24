import { createContext, useContext, useState } from "react";

import { FC, ReactElement } from "react";

const Context = createContext({
  play: false,
  setPlay: (play: boolean) => {},
  end: false,
  setEnd: (end: boolean) => {},
  hasScroll: false,
  setHasScroll: (hasScroll: boolean) => {},
});

const MainProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [play, setPlay] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);
  const [hasScroll, setHasScroll] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        play,
        setPlay,
        end,
        setEnd,
        hasScroll,
        setHasScroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainProvider;

export const usePlay = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("usePlay must be used within a MainProvider");
  }

  return context;
};
