export default function Portfolio() {
  const projects = [
    {
      title: "NBA Fantasy Team",
      description: "A collaboration project that ...",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
    {
      title: "NBA Fantasy Team",
      description: "A collaboration project that ...",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
    {
      title: "NBA Fantasy Team",
      description: "A collaboration project that ...",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
    {
      title: "NBA Fantasy Team",
      description: "A collaboration project that ...",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
  ];

  return (
    <>
      {/* <main className="m-0 contact-page"> */}

      <p className="text-center fs-2">Portfolio</p>
        
      <div className="container">
        <div className="row g-2">
          {projects.map((project) => (
            <div className="col-md-6 col-sm-12" key={project.title}>
              <div className="card mb-0">
                <img src={project.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-body">
                  <a href={project.repo} className="card-link">
                    GitHub Repo
                  </a>
                  <a href={project.deployed} className="card-link">
                    Demo App
                  </a>
                </div>
              </div>
            </div>
          ))}

    
        </div>
      </div>
      {/* </main> */}

    </>
  );
}
