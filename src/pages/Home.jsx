/** src/pages/Homes.jsx */
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <article>
        <section className="left">
          <h1 style={{fontSize:'clamp(3rem, 15vw, 8rem)', marginBottom:'0'}}>Lucia Alday</h1>
          <p>Software Engineer | React • Node.js • C/C++ • Embedded Systems </p>
        </section>
        <section className="right">
          <Link to="/Developer"><h2 className="item">Full-stack Projects</h2></Link>
          <Link to="/Researcher"><h2 className="item">Research Projects</h2></Link>
          <Link to="/Designer"><h2 className="item">Artistic Portfolio</h2></Link>
          <Link to="/Resume"><h5 className="item">View my experience</h5></Link>
        </section>
      </article>
        <hr></hr>
      <article>
        <div style={{textAlign:'left', margin:'auto', width: '90%'}}>
          <h2 style={{textAlign:'center'}}>About Me</h2>
          <p>
            I build full-stack web applications and embedded systems with a focus on performance, data flow, and real-world usability. Experience in production web platforms, municipal systems, and ML-driven applications.
          </p>
          <p>
            Languages: C/C++, Python, JavaScript, Java, SQL
            
          </p>
          <p>
            Frameworks: React, Node.js, Express
          </p>
          <p>
            Technologies: REST APIs, Firebase, SQLite, Machine Learning (scikit-learn)
          </p>
          <p>
            Tools: Git, Linux, JUnit
          </p>
          <h2 style={{textAlign:'center'}}>
            Focus Areas
          </h2>
          <p style={{textAlign:'center'}}>
            • Full-stack web systems
            • Embedded systems & low-level programming
            • API design and data flow
            •
          </p>
        </div>
      </article>
    </main>
  );
}