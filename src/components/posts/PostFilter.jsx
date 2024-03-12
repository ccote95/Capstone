import { useEffect, useState } from "react";
import { getAllFormats } from "../services/postService.js";
import { FormatDropDown } from "./FormatDropDown.jsx";

export const PostFilter = () => {
  const [format, setFormat] = useState([]);

  useEffect(() => {
    getAllFormats().then((formatObj) => {
      setFormat(formatObj);
    });
  }, []);

  return (
    <div className="filter-container">
      <button className="create-post-btn">Create Post</button>
      <select className="format-dropdown">
        <option value="0">Select a Format</option>
        {format.map((formatObj) => {
          return <FormatDropDown format={formatObj} key={formatObj.id} />;
        })}
      </select>
    </div>
  );
};
