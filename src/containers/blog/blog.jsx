import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-header">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-group1">
          <Article imgurl={blog01} />
        </div>
        <div className="gpt3__blog-container-group2">
          <Article imgurl={blog02} />
          <Article imgurl={blog03} />
          <Article imgurl={blog04} />
          <Article imgurl={blog05} />
        </div>
      </div>
    </div>
  );
};

export default blog;
