import "../style/main.scss";
function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="profile-text">
        <h1 className="heading-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          nisi quae nihil minima nemo consequuntur fuga, laboriosam quo id
          officia ea maxime sequi excepturi ipsam?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae
          obcaecati corrupti accusamus ratione harum veritatis, unde iste dolore
          earum nemo repellat, dolores adipisci laboriosam itaque ipsam officiis
          cumque sunt!
        </p>
        <div className="tags-container">
          <p className="tag">HTML</p>
          <p className="tag">CSS/SCSS</p>
          <p className="tag">JavaScript/TypeScript</p>
          <p className="tag">ReactJS</p>
          <p className="tag">Vue.js</p>
          <p className="tag">NodeJS</p>
          <p className="tag">GraphQL</p>
        </div>
      </div>
      <div className="profile-img-container">
        <img src="https://dl.dropboxusercontent.com/s/egocgwnyni1tslz/20230123153739_IMG_0292.JPG?dl=0" />
      </div>
    </div>
  );
}

export default AboutMe;
