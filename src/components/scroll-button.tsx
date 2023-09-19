import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaChevronDown as DownArrowIcon } from "react-icons/fa";
import { IconType } from "react-icons";

interface ScrollButtonProps {
  sectionId: string;
  icon?: IconType;
}

const ScrollButton: FunctionComponent<ScrollButtonProps> = (props) => {
  const { sectionId, icon: Icon = DownArrowIcon } = props;

  const nextSectionRef = useRef<HTMLElement | null>(null);

  const [showButton, setShowButton] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    nextSectionRef.current = document.getElementById(sectionId);
  }, [sectionId]);

  const handleScrollToSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (nextSectionRef.current) {
      const nextSectionTop = nextSectionRef.current.getBoundingClientRect().top;
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
  });

  const handleFadeOutEnd = () => {
    setShowButton(false);
  };

  useEffect(() => {
    const iconContainer = document.querySelector(".icon-container.fade-out");
    iconContainer?.addEventListener(
      "animationend",
      handleFadeOutEnd as EventListener,
    );

    return () => {
      iconContainer?.removeEventListener(
        "animationend",
        handleFadeOutEnd as EventListener,
      );
    };
  }, [fadeIn]);

  return (
    showButton && (
      <div
        className={`icon-container ${fadeIn ? "fade-in" : "fade-out"}`}
        onClick={handleScrollToSection}
      >
        <div className="icon-bouncer">
          <Icon />
        </div>
      </div>
    )
  );
};

export default ScrollButton;
