import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className='author rotate'></div>
        <div>
          <nav>
            <Link to="/">首页</Link>
          </nav>
          <nav>
            <a href="https://github.com/Birnen9">github</a>
          </nav>
        </div>
        <StaticImage
          src="../../images/author.jpg"
          title="birne9"
          alt="birne9"
          className="author rotate"
        ></StaticImage>
      </div>
    </div>
  );
};

export default Header;
