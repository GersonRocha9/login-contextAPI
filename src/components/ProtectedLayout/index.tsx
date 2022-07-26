import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You dont have access</h1>;
  }

  return <h1>Você está acessando o Profile</h1>;
};
