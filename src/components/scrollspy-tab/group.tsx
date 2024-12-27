import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";

type GroupProps = {
  className?: string;
  children: ReactNode;
  id: string;
  /**
   * Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to new multiple trigger points.
   */
  threshold?: number;
  /**
   * Offset top from the root.
   */
  offsetTop?: number;
};

type StateProps = {
  activeIndex: number;
  id: string;
  /**
   * Number between 0 and 1 indicating the percentage that should be visible before triggering. Can also be an array of numbers, to new multiple trigger points.
   */
  threshold: number;
  /**
   * Offset top from the root.
   */
  offsetTop: number;
};

type ContextProps = {
  state: StateProps;
  dispatch: Dispatch<SetStateAction<StateProps>>;
};

const initialStateValue: StateProps = {
  activeIndex: 0,
  id: "",
  threshold: 0,
  offsetTop: 0
};

const TabContext = createContext<ContextProps>({
  state: initialStateValue,
  dispatch: () => {}
});

export default function Group({
  className,
  threshold,
  offsetTop,
  id,
  ...otherProps
}: GroupProps) {
  const [state, dispatch] = useState<StateProps>({
    ...initialStateValue,
    id,
    threshold: threshold ? threshold : initialStateValue.threshold,
    offsetTop: offsetTop ? offsetTop : initialStateValue.offsetTop
  });

  useEffect(() => {
    dispatch((prevState) => ({
      ...prevState,
      id,
      threshold: threshold ? threshold : prevState.threshold,
      offsetTop: offsetTop ? offsetTop : prevState.offsetTop
    }));
  }, [threshold, offsetTop, id]);

  return (
    <TabContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div {...otherProps} className={`flex flex-col ${className}`} />
    </TabContext.Provider>
  );
}

export function useTabContext() {
  return useContext(TabContext);
}
