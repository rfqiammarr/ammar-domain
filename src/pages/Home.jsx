import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <>
      <Hero />
    </>
  );
}
