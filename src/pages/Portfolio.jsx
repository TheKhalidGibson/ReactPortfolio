import '../assets/style.css'

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
      title: "Work Day Scheduler",
      description: "A collaboration project that ...",
      image: "./assets/workDayScheduler.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
    {
      title: "The Tech Blog",
      description: "A collaboration project that ...",
      image: "./assets/techBlog.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
    },
    {
      title: "Note Taker",
      description: "A collaboration project that ...",
      image: "./assets/noteTaker.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: " add heroku link",
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
                <img src={project.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-body">
                  <a href={project.repo} className="card-link text-black-50">
                    GitHub Repository
                  </a>
                  <a href={project.deployed} className="card-link text-black-50">
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
