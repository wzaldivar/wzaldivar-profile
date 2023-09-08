import { useEffect, useState } from "react";
import { FaChevronDown as DownArrowIcon } from "react-icons/fa";

interface ScrollButtonProps {
  sectionId: string;
}

export default function ScrollButton(props: ScrollButtonProps) {
  const [showButton, setShowButton] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  const handleScrollToSection = () => {
    const nextSection = document.getElementById(props.sectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const nextSection = document.getElementById(props.sectionId);
    if (nextSection) {
      const nextSectionTop = nextSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const addButton = nextSectionTop > windowHeight * 0.95;
      setFadeIn(addButton);
      if (addButton) {
        setShowButton(addButton);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.sectionId]);

  const handleFadeOutEnd = () => {
    setShowButton(false);
  };

  useEffect(() => {
    const iconContainer = document.querySelector(".icon-container.fade-out");
    if (iconContainer) {
      iconContainer?.addEventListener("animationend", handleFadeOutEnd);
    }
    return () => {
      iconContainer?.removeEventListener("animationend", handleFadeOutEnd);
    };
  }, [fadeIn]);

  return (
    showButton && (
      <div
        className={`icon-container ${fadeIn ? "fade-in" : "fade-out"}`}
        onClick={handleScrollToSection}
      >
        <div className="icon-bouncer">
          <DownArrowIcon />
        </div>
      </div>
    )
  );
}
