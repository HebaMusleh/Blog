import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";
import { Footer, Header } from "../views/partials";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = async () => {
      setLoading(true);
      await setUser();
      setLoading(false);
    };

    handler();
  }, []);
  return (
    <>
      <Header />
      {loading ? null : children}
      <Footer />
    </>
  );
};

export default MainWrapper;
