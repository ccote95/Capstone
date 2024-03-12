import { useEffect, useState } from "react";
import { getAllFormats } from "../services/postService.js";
import { FormatDropDown } from "./FormatDropDown.jsx";

export const PostFilter = ({ setShowFormat }) => {
  const [format, setFormat] = useState([]);

  useEffect(() => {
    getAllFormats().then((formatObj) => {
      setFormat(formatObj);
    });
  }, []);

  const handleChange = (e) => {
    setShowFormat(e);
  };

  return (
    <div className="filter-container">
      <button className="create-post-btn">Create Post</button>
      <select
        className="format-dropdown"
        defaultValue="0"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      >
        <option value="0">Select a Format</option>
        {format.map((formatObj) => {
          return <FormatDropDown format={formatObj} key={formatObj.id} />;
        })}
      </select>
    </div>
  );
};
