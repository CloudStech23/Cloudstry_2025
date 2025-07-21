import React from "react";
import {
  HeadFontFamily,
  HeadTextColor,
} from "../../../CustomeComponents/Theme";
import {
  FiAward,
  FiSend,
  FiUserCheck,
  FiSmile,
  FiShare2,
  FiMail,
  FiEdit3,
  FiUnlock,
  FiBookOpen,
  FiCheckSquare,
  FiLayers,
  FiTool,
  FiTrendingUp,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function PlatformFeature() {
  const features = [
    {
      title: "Intuitive Badge Design",
      subtitle:
        "A user-friendly interface for creating visually appealing badges.",
      icon: <FiAward size={40} className="text-[#085d9e]" />,
    },

    {
      title: "Earner API",
      subtitle:
        "A RESTful API integration that offers a range of methods tailored for earners.",
      icon: <FiUserCheck size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Enhanced Earner Engagement",
      subtitle:
        "Eliminates the need for recipients to log in to the BadgeCert Portal to access and share badges.",
      icon: <FiSmile size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Social Media Integration",
      subtitle:
        "Direct sharing of badges on social media platforms such as LinkedIn, X and Facebook.",
      icon: <FiShare2 size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Email Sender Whitelisting",
      subtitle:
        "Whitelist your email address to that your users receive emails from you directly. ",
      icon: <FiMail size={40} className="text-[#085d9e]" />,
    },

    {
      title: "SSO Authentication",
      subtitle: "Seamless single sign-on (SSO) integration.",
      icon: <FiUnlock size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Customizable Email Templates",
      subtitle:
        "All email types, including issuance, reminders, and expiration notifications, can be fully customized. Our platform provides a comprehensive selection of wildcards to streamline and enhance the customization process.",
      icon: <FiEdit3 size={40} className="text-[#085d9e]" />,
    },

    {
      title: "Automated QR Code Verification",
      subtitle:
        "Generate PDF certificates with integrated QR code verification.",
      icon: <FiCheckSquare size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Badge Scaffolding",
      subtitle:
        "Enable stackable micro-credentials for flexible learning pathways.",
      icon: <FiLayers size={40} className="text-[#085d9e]" />,
    },

    {
      title: "Advanced Email Delivery",
      subtitle: "Robust email delivery capabilities to enhance communication.",
      icon: <FiTrendingUp size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Administrative Tools",
      subtitle:
        "Enhanced self-service options for badge earners and administrators.",
      icon: <FiSettings size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Reports and Analytics",
      subtitle: "Updated, downloadable reports for data-driven insights.",
      icon: <FiBarChart2 size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Self-Service Tools",
      subtitle:
        "Upload new artwork, customize badge expiration workflows, and create personalized recipient engagements.",
      icon: <FiTool size={40} className="text-[#085d9e]" />,
    },
    {
      title: "Issuer API",
      subtitle:
        "A RESTful API integration that can be leveraged to facilitate the integration with any Learning Management System.",
      icon: <FiSend size={40} className="text-[#085d9e]" />,
    },
    {
      title: "LMS Integration",
      subtitle:
        "Compatibility with Learning Management Systems for streamlined processes.",
      icon: <FiBookOpen size={40} className="text-[#085d9e]" />,
    },
  ];

  return (
    <div className="relative w-full py-5 px-4 sm:px-6 lg:px-8 z-10 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 px-6">
          <h1
            className="sm:text-4xl text-2xl font-bold mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            PLATFORM <span className="text-[#1f1446]"> FEATURES</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 p-4 border border-[#085d9e] ${
                index === 2 ? "rounded-tr-[100px]" : ""
              }`}
            >
              <div className="mb-2 font-light">{feature.icon}</div>
              <div
                className="text-[16px] font-semibold tracking-wide"
                style={{ fontFamily: HeadFontFamily }}
              >
                {feature.title}
              </div>
              <div className=" text-[16px]  text-color">{feature.subtitle}</div>
            </div>
          ))}
        </div>
          
      </div>
    </div>
  );
}
