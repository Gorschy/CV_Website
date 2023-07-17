import React, { useState, useEffect } from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";

const AdvancedScrollProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [barColors, setBarColors] = useState(['#6c757d', '#6c757d', '#6c757d']); // The color for empty bars.

  const scrollMarks = [0, 33, 66, 100];

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
  
    const scrollPercentage = (currentPosition / totalScroll) * 100;
    setScrollPosition(scrollPercentage);
  
    // Update the color of each bar.
    const newBarColors = barColors.map((_, index) => {
      if (scrollPercentage >= scrollMarks[index]) {
        return "#007bff"; // The color for filled bars.
      }
      return "#6c757d"; // The color for empty bars.
    });
  
    setBarColors(newBarColors);
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={styles.container}>
      {scrollMarks.map((mark, index) => (
        <React.Fragment key={index}>
          <div style={mark <= scrollPosition ? styles.filledCircle : styles.emptyCircle}>
            <BsCircleFill size={24} />
          </div>
          {index < scrollMarks.length - 1 && 
            <div style={{...styles.line, backgroundColor: barColors[index]}} /> 
          }
        </React.Fragment>
      ))}
    </div>
  );
  
};

const styles = {
  container: {
    position: "sticky", // Change from fixed to sticky
    top: "0",
    left: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    zIndex: 9999,
  },
  filledCircle: {
    color: "#007bff",  // Adjust this based on your layout
  },
  emptyCircle: {
    color: "#6c757d",  // Adjust this based on your layout
  },
  line: {
    width: "4px",
    height: "31vh",  // Adjust this based on your layout
    backgroundColor: "#007bff",
  },
};

export default AdvancedScrollProgressBar;
