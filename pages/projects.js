//page needs to contain a list of all my best work
//include at least 1 project deployed to Heroku (previous Capstone Project)
//push some projects to Github and link the repo's here
import Layout from "../components/Layout";
import Link from 'next/link';

const Project = () => (

    <div>
        <h1> My Projects </h1>
        <div className="row">
        <div className="two columns main-col">
        <h4> An Online Shop Created Using HTML, CSS and JavaScript</h4>
        <img src="/static/images/confirmOrder.png" alt="online store" width="700px" height="500px" /> 
        <img src="/static/images/homepage.png" alt="online store" width="700px" height="500px" /> 

        <div className="two columns main-col">
        <h4> To-Do-List and iTunes Search</h4>
        <img src="/static/images/todo.png" alt="to do app" width="700px" height="400px" /> 
        <img src="/static/images/itunesSearchApp.png" alt="itunes search" width="700px" height="400px" /> 
        </div>
        </div>
        </div>
        <h6> Feel Free To Check Me Out On: 
            <br/>
            <Link href="https://github.com/Josiah-Sithole"> 
            <a> GitHub </a>
             </Link>
            <br/>
            <Link href="https://www.linkedin.com/in/josiah-sithole-40480b222/"> 
            <a> LinkedIn</a> 
            </Link>
        </h6>
        <style jsx> {`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 6rem;
            text-align: center;
            padding: 4rem 0 2rem 0;
        }
        h4 {
            font-family: 'DM Serif Display', serif;
            font-size: 2rem;
            text-align: center;
            caption-side: top;
            color: grey;
        }
        div {
            margin: 0 auto;
        }
        h6 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        a {
            text-decoration: none;
            color: black;
        }
        a :hover {
            color: green;
        }
        img {
            padding: 4rem;
            float: left;
            margin: 0 auto;
            object-fit: cover;
         }
        `}
        </style>
    </div>
 
)

export default Project;