import { useEffect, useState } from "react";
import { header } from "./components/header";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSesion = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
      getSesion();
    };
  }, []);
  const handleclick = async () => {
    const { data, error } = (supabase.auth.signInWith = Auth({
      provider: "github",
    }));
    if (error) {
      console.log(data);
    }
  };
  return (
    <>
      <header>
        este es el header
        <button onClick={handleclick}>conectar con git hub</button>
      </header>
    </>
  );
}
