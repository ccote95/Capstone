import { useEffect, useState } from "react";
import { getAllFormats } from "../services/postService.js";
import { FormatDropDown } from "./FormatDropDown.jsx";
import { useNavigate } from "react-router";

export const PostFilter = ({ setShowFormat }) => {
  const [format, setFormat] = useState([]);

  const navigate = useNavigate();

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
      <button
        className="create-post-btn"
        onClick={() => {
          navigate("/posts/create");
        }}
      >
        Create Post
      </button>
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
