import React, { useState } from "react";
import Header from "../../context/header/header";
import Footer from "../../context/footer/footer";
import categories from "./categories";
import projectList from "./projects";
import "./styles.scss";

const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState("");

  const filterBtnHandle = (clickedCategory) => {
    setFilteredCategory(`filter-${clickedCategory.toLowerCase()}`);
  };

  const getActiveClass = (category) => {
    if (category === "All" && filteredCategory === "") {
      return "active";
    }
    if (filteredCategory === `filter-${category.toLowerCase()}`) {
      return "active";
    }
    return "";
  };

  return (
    <>
      <Header
        pageTitle="Portfolio"
        linkPage1="Home"
        linkPage2="About"
        linkPage3="Contact"
      />

      <main className="portfolio">
        <div className="filterOptions">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${getActiveClass(category)}`}
              onClick={() => filterBtnHandle(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`projects ${filteredCategory}`}>
          {projectList.map((project, i) => (
            <div key={i} className={`filterProject ${project.categories}`}>
              <a
                href={project.link}
                title="project link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.photo} alt="project" />
              </a>
              <div className="projInfo">
                <h3>
                  <a
                    href={project.link}
                    title="project link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
                <a
                  href={project.gitlink}
                  className="gitLink"
                  title="github link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
