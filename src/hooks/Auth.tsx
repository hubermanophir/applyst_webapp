import { createContext, useContext, useState } from "react";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => null,
});

export const useAuth = (): [
  string | null,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const context = useContext(AuthContext);
  return [context.accessToken, context.setAccessToken];
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
