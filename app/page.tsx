// import { Home } from "@/src/components/HomePage";
import { Home } from "@/src/components/Home";
import { NextPage } from "next";

const HomePage: NextPage = async () => {
  return (
    <section className="flex grow flex-col items-center justify-center gap-6 md:grid md:grid-cols-2 md:gap-0">
      <Home />
    </section>
  );
};

export default HomePage;
