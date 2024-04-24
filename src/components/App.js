import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id="home">
      <h1>Welcome, {props.user.name}!</h1>
    </div>
  );
}

function About(props) {
  return (
    <div id="about">
      <h2>About</h2>
      {props.bio && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

function Links(props) {
  return (
    <nav>
      <a href={props.github}>GitHub</a>
      <a href={props.linkedin}>LinkedIn</a>
    </nav>
  );
}


function App() {
  const user = {
    name: 'John Doe',
    bio: 'This is a short bio about John Doe.',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  };

  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;