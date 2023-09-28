 import '../assets/style.css'

export default function Portfolio() {
 

  const projects = [
    {
      title: "NBA Fantasy Team",
      description: "A collaboration project that ...",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: "https://fantasy-team-kg-c93b3290802a.herokuapp.com/",
    },
    {
      title: "The Tech Blog",
      description: "A collaboration project that ...",
      image: "./assets/techBlog.png",
      repo: "https://github.com/TheKhalidGibson/TechBlog",
      deployed: "https://tech-blog-kg-df1438400110.herokuapp.com/",
    },
    {
      title: "Just Another Text Editor",
      description: "A collaboration project that ...",
      image: "./assets/jate.png",
      repo: "https://github.com/TheKhalidGibson/ProgressiveWebApplication",
      deployed: "https://progressive-web-app-kg-bf94f2971fb5.herokuapp.com/",
    },
    {
      title: "Note Taker",
      description: "A collaboration project that ...",
      image: "./assets/noteTaker.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: "https://note-taker-kg-0f7b13148203.herokuapp.com/",
    },
  ];

  return (
    <>
      <main className="m-0 contact-page">

      
        
      <div className="container pb-5 pt-2">
        <p className="text-center fs-2">Portfolio</p>
        <div className="row g-2">
          {projects.map((project) => (
            <div className="col-md-6 col-sm-12 " key={project.title}>
              <div className="card view">
                <img src={project.image} className="card-img-top img" alt="..." />
                <div className="card-body info">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-body links"> 
                  <a href={project.repo} className="card-link text-white-50 textLink">
                    GitHub Repository
                  </a>
                  <a href={project.deployed} className="card-link text-white-50 textLink">
                    Demo App
                  </a>
                </div>
              </div>
            </div>
          ))}

    
        </div>
      </div>


      
      </main>

    </>
  );
}
