import "../style/main.scss";
import { repos } from "../data/repos";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="heading-text">Projects</h1>
      <div className="show-projects">
        {repos.map((repo) => (
          <div className="project-card" key={repo.id}>
            <div className="image-and-text">
              <a href={repo.git_url} target="blank">
                <img
                  src={repo.webImg_url}
                  alt="web image"
                  className="project-image"
                />
                <button className="image-text">View on GitHub</button>
              </a>
            </div>
            <h4 className="project-title">{repo.name}</h4>
            <p>{repo.description}</p>
            <div className="tags-container">
              {repo.tags.map((tag) => (
                <p className="tag">{tag}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
