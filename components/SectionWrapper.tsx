import React, { useRef, useState, useEffect } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to trigger this once
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item has to be visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-cyan-400 rounded-full"></span>
        </h2>
      </div>
      {children}
    </section>
  );
};