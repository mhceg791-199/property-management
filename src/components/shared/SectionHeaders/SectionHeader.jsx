
import "./sectionHeader.css";
import { Link } from "react-router-dom";

function SectionHeader({
  firstWord,
  secondWord,
  fontSize = "large",
  type = "horizontal",
  line = true,
  link = "",
}) {
  const content = type === "horizontal" ? (
    <span className={`${line ? "hoverOneLine" : ""}`}>
      <span>{firstWord}</span>
      <span> {secondWord}</span>
    </span>
  ) : (
    <span
      className={`${
        line ? "border-b-half" : ""
      } sm:text-large tracking-wider`}
    >
      <p className="my-0 leading-">{firstWord}</p>
      <p className="leading-3 my-2">{secondWord}</p>
    </span>
  );

  return link ? (
    <Link
      to={link}
      target="_blank"
      className={`cursor-pointer   heading`}
    >
      {content}
    </Link>
  ) : (
    <span
      className={`cursor-default   heading`}
    >
      {content}
    </span>
  );
}

export default SectionHeader;

