import ProjectCard from "@molecules/project-card";

export function App() {
  const projects = [
    {
        "id": 1,
        "title": "Portfolio Website",
        "description": "A personal portfolio website to showcase my projects and skills.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD2Zw8bKsezPy8fOui-DF4XLUqpMov6W9Qhg64TcGO9yw0rXer9MiBot29g&s",
        "technologies": ["HTML", "CSS", "JavaScript", "React"],
        "github": "https://github.com/username/portfolio",
        "website": "https://username.github.io/portfolio",
        "createdAt": "2023-01-01T12:00:00Z",
        "updatedAt": "2023-01-15T12:00:00Z"
    },
    {
        "id": 2,
        "title": "E-commerce Platform",
        "description": "A full-featured e-commerce platform with payment integration.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD2Zw8bKsezPy8fOui-DF4XLUqpMov6W9Qhg64TcGO9yw0rXer9MiBot29g&s",
        "technologies": ["Node.js", "Express", "MongoDB", "React"],
        "github": "https://github.com/username/ecommerce",
        "website": "https://ecommerce.example.com",
        "createdAt": "2022-05-10T08:30:00Z",
        "updatedAt": "2022-06-20T09:45:00Z"
    },
    {
        "id": 3,
        "title": "Chat Application",
        "description": "A real-time chat application with WebSocket support.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD2Zw8bKsezPy8fOui-DF4XLUqpMov6W9Qhg64TcGO9yw0rXer9MiBot29g&s",
        "technologies": ["Python", "Django", "Channels", "WebSocket"],
        "github": "https://github.com/username/chatapp",
        "website": "https://chatapp.example.com",
        "createdAt": "2021-11-01T14:00:00Z",
        "updatedAt": "2021-12-01T16:00:00Z"
    }]

  return (
    <section className="flex flex-wrap w-full items-center gap-10">
      <div className="flex flex-wrap gap-8">
        {
          projects.map((data, index) => (
            <ProjectCard data={data}/>
          ))
        }
      </div>
    </section>
  );
}

export default App;
