import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type FadeAnimationProps = {
  children: ReactNode;
};

const FadeAnimation = (props: FadeAnimationProps) => {
  const { children } = props;

  const { ref, inView } = useInView({
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <div className={`fade-element ${inView ? "visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
};

export default FadeAnimation;
