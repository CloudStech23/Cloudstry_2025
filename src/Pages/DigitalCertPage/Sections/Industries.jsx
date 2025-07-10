import React from "react";
import {
  HeadFontFamily,
  HeadTextColor,
} from "../../../CustomeComponents/Theme";
import { FaFlag } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { BsBuildings } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";

const industries = [
  {
    title: "UNIVERSITIES",
    content:
      "Securely issue and manage academic digital credentials and badges with ease. Cloudstry helps universities go paperless, ensure authenticity, and let students share verified digital certificates instantly.",
    icon: <LiaUniversitySolid size={66} color="#fff" />,
  },
  {
    title: "ORGANIZATIONS",
    content:
      "Recognize employee training and achievements with tamper-proof digital credentials. Cloudstry simplifies tracking, improves verification, and supports seamless sharing across platforms.",
    icon: <BsBuildings size={59} color="#fff" />,
  },
  {
    title: "INSTITUTIONS",
    content:
      "Issue skill-based certificates and badges digitally. Cloudstry ensures secure delivery, easy management, and broad visibility—enhancing learner trust and institutional credibility.",
    icon: <FaSchool size={59} color="#fff" />,
  },
];

// 🧠 All required inline styles here
const styles = {
  card: {
    perspective: "800px",
    width: "260px",
    height: "180px",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.7s ease-in-out",
  },
  cardHover: {
    transform: "rotateY(180deg)",
  },
  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    fontSize: "1rem",
    textAlign: "center",
  },
  front: {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
  },
  back: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    transform: "rotateY(180deg)",
  },
};

// 🔄 FlipCard Component (using local state for hover effect)
function FlipCard({ title, content, icon }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardContainerStyle = {
    perspective: "1000px",
    width: "350px",
    height: "260px",
    minHeight: "250px",
    position: "relative",
  };

  const cardContentStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.75s cubic-bezier(0.4, 0.2, 0.2, 1)",
    transformStyle: "preserve-3d",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const sharedFaceStyle = {
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    padding: "1.5rem",
    textAlign: "center",
  };

  const frontStyle = {
    ...sharedFaceStyle,
    backgroundColor: "#ffffff",
    color: "#085d9e",
    zIndex: 2,
  };

  const backStyle = {
    ...sharedFaceStyle,
    backgroundColor: "#085d9e",
    color: "#fff",
    transform: "rotateY(180deg)",
    zIndex: 1,
  };

  return (
    <div
      style={cardContainerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardContentStyle}>
        <div
          style={frontStyle}
          className="flex flex-col items-center justify-center "
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#085d9e] to-[#00c1de] mb-4 flex items-center justify-center">
            {icon}
          </div>

          <h2
            className="text-[25px] font-bold  text-center"
            style={{ fontStyle: HeadFontFamily }}
          >
            {title}
          </h2>
        </div>

        <div style={backStyle}>
          <p className="text-[20px]">{content}</p>
        </div>
      </div>
    </div>
  );
}

// 🧩 Industries Section with Cards
function Industries() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="relative z-10 mx-auto">
        <div className="text-center mb-6 px-6">
          <h1
            className="sm:text-4xl text-2xl font-bold mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            INDUSTRIES <span className="text-[#1f1446]">WE SERVE</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
        </div>

        {/* Flip Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {industries.map((item, index) => (
            <FlipCard
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
