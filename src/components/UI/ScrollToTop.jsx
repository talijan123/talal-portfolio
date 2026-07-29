import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-8
            right-8
            z-50
            p-4
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            transition
            shadow-xl
          "
        >
          <HiArrowUp className="text-white text-xl" />
        </button>
      )}
    </>
  );
}