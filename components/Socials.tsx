import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/koredeycode" },
  { icon: <FaLinkedinIn />, path: "https://ng.linkedin.com/in/koredeycode" },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@yusufakoredeyusuf5233",
  },
  { icon: <FaTwitter />, path: "https://x.com/korecodes" },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
