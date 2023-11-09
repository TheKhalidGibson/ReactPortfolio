 import '../assets/style.css'

export default function Portfolio() {
 

  const projects = [
    {
      title: "Recipe Book",
      description: "An interactive way to view and create a list of recipes and with healthy eating in mind",
      image: "./assets/recipeBook.png",
      repo: "https://github.com/TheKhalidGibson/RecipeBook",
      deployed: "https://project-3-app-mck-b96b86dfcabe.herokuapp.com/",
    },
    {
      title: "Tech Blog",
      description: "Providing Tech Enthusiasts the opportunity to interact and publish concepts, thoughts, and ideas in blog form",
      image: "./assets/techBlog.png",
      repo: "https://github.com/TheKhalidGibson/TechBlog",
      deployed: "https://tech-blog-kg-3d1231aaaa4b.herokuapp.com/",
    },
    {
      title: "Weather Dashboard",
      description: "Helping travelers be up to date with the 5-day forecast for any city in world so that they can properly prepare for trips",
      image: "./assets/weatherDashboard.png",
      repo: "https://github.com/TheKhalidGibson/WeatherDashboard",
      deployed: "https://thekhalidgibson.github.io/WeatherDashboard/",
    },
    {
      title: "NBA 3v3 Fantasy Basketball",
      description: "An Engaging Fantasy Basketball League where players can be chosen based on stats and added to your team",
      image: "./assets/project2Dashboard.png",
      repo: "https://github.com/TheKhalidGibson/sports-forum",
      deployed: "https://fantasy-basketball-kg-c8cb3e00148e.herokuapp.com/",
    },
    {
      title: "Work Day Scheduler",
      description: "Never miss a beat! Organize your day hour by hour and stay on track with your daily todo list",
      image: "./assets/workDayScheduler.png",
      repo: "https://github.com/TheKhalidGibson/WorkDayScheduler",
      deployed: "https://thekhalidgibson.github.io/WorkDayScheduler/",
    },
    {
      title: "Note Taker",
      description: "The app to help you remember thoughts and ideas for school projects, work meetings, you name it!",
      image: "./assets/noteTaker.png",
      repo: "https://github.com/TheKhalidGibson/NoteTaker",
      deployed: "https://note-taker-kg-95e0f53d1def.herokuapp.com/",
    },
    {
      title: "Book Search Engine",
      description: "A place where book lovers can discover books of interest while online and save them to their wishlist",
      image: "./assets/bookSearch.png",
      repo: "https://github.com/TheKhalidGibson/BookSearchEngine",
      deployed: "https://book-search-mern-kg-ea68acc05060.herokuapp.com/",
    },
    {
      title: "Code Quiz",
      description: "Test your knowledge and trivia skills in this fun quiz! See if you can create an unbeatable High Score!",
      image: "./assets/codeQuiz.png",
      repo: "https://github.com/TheKhalidGibson/CodeQuiz",
      deployed: "https://thekhalidgibson.github.io/CodeQuiz/",
    },
  ];

  return (
    <>
      <main className="m-0 portfolio-page">

      
        
      <div className="container pb-5 pt-2 portfolio-content border border-light border-3">
        <p className="text-center fs-2">My Work</p>
        <div className="row g-2">
          {projects.map((project) => (
            <div className="col-md-6 col-sm-12 entire-card px-3 pt-4" key={project.title}>
              <div className="card view">
                <img src={project.image} className="card-img-top img placeholder-glow" alt="..." />
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
