import { match } from "@/lib/utils/match";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { useEvent } from "@/hooks/use-event";

/**
 * Auth context is used for share state between sign in and sign up forms
 */

type StateDefinition = {
  countryCode?: string;
  userId?: string;
  otpExpiresAt?: Date;
};

const AuthDataContext = createContext<StateDefinition | null>(null);

enum ActionType {
  SetOtp,
  UpdateOtpExpiresAt,
}

type Actions =
  | {
      type: ActionType.SetOtp;
      countryCode: string;
      userId: string;
      otpExpiresAt: Date;
    }
  | {
      type: ActionType.UpdateOtpExpiresAt;
      otpExpiresAt: Date;
    };

const reducers: {
  [P in ActionType]: (
    state: StateDefinition,
    action: Extract<Actions, { type: P }>
  ) => StateDefinition;
} = {
  [ActionType.SetOtp](state, action) {
    return {
      ...state,
      countryCode: action.countryCode,
      userId: action.userId,
      otpExpiresAt: action.otpExpiresAt,
    };
  },
  [ActionType.UpdateOtpExpiresAt](state, action) {
    return {
      ...state,
      otpExpiresAt: action.otpExpiresAt,
    };
  },
};

function stateReducer(state: StateDefinition, action: Actions) {
  return match(action.type, reducers, state, action);
}

type AuthActionsContextProps = {
  setOtp(params: Omit<Extract<Actions, { type: ActionType.SetOtp }>, "type">): void;
  updateOtpExpiresAt(
    params: Omit<Extract<Actions, { type: ActionType.UpdateOtpExpiresAt }>, "type">
  ): void;
};

const AuthActionsContext = createContext<AuthActionsContextProps | null>(null);

export function useAuthData() {
  const context = useContext(AuthDataContext);
  if (!context) {
    const err = new Error("useAuthData is missing parent AuthProvider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAuthData);
    throw err;
  }
  return context;
}

export function useAuthActions() {
  const context = useContext(AuthActionsContext);
  if (!context) {
    const err = new Error("useAuthActions is missing parent AuthProvider");
    if (Error.captureStackTrace) Error.captureStackTrace(err, useAuthActions);
    throw err;
  }
  return context;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthProvider(props: AuthContextProviderProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(stateReducer, {});

  const setOtp = useEvent((params: Parameters<AuthActionsContextProps["setOtp"]>[0]) => {
    dispatch({
      type: ActionType.SetOtp,
      ...params,
    });
  });

  const updateOtpExpiresAt = useEvent(
    (params: Parameters<AuthActionsContextProps["updateOtpExpiresAt"]>[0]) => {
      dispatch({
        type: ActionType.UpdateOtpExpiresAt,
        ...params,
      });
    }
  );

  return (
    <AuthDataContext.Provider value={state}>
      <AuthActionsContext.Provider
        value={{
          setOtp,
          updateOtpExpiresAt,
        }}
      >
        {children}
      </AuthActionsContext.Provider>
    </AuthDataContext.Provider>
  );
}
