//the about page include education, skills and things am passionate at.
import Image from "next/image";

//About Section 
const About = () => (
    <div>
     <div className="row">
        <div className="two columns main-col">
           <img src="/static/images/pro.jpg " width="290px" height="380px" alt="My Profile Pic" />
           <h2>About Me</h2>
           <article>Recently made a career switch from social sciences to tech. 
               My career path prior doesn't have much to do with Web Development but i self taught myself from the start before joining HyperiondDev Bootcamp. 
               I am grateful that HyperionDev has helped me through this touch change.
               So my goal at the moment is to specialize in Front-end developer roll, at the same time learning all the tools to become a Full Stack Developer. 
               With the help of hyperiondev, im well aware that i will succeed. Please feel free as well to check out my projects on gitHub. <br />
               "The best way to create value in the 21st century is to connect Creativity with Technology" <br /> 
                  --Steve Jobs--</article>
        </div>

        <div className="column">
        <h4> EDUCATION </h4>
       <ul>
           <li> - University of Pretoria || Degree 2014-2016 ||  International Studies</li>
           <li> - University of Pretoria || Honors-2017 ||  Development Studies</li>
           <li> - HyperionDev || 2021 || Full Stack Web Developer Bootcamp</li>
       </ul>
       </div>
       <div className="column">
       <h4> PASSIONS </h4>
       <ul>
           <li> Technology </li>
           <li> Gaming</li>
           <li> Travelling</li>
       </ul>
      
       </div>
     </div>

   <style jsx>{`
   h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 5rem;
    text-align: center;
   }
   article {
       margin-left: 510px;
       margin-top: 2rem;
       font-family: 'DM Serif Display', serif;
    font-size: 1rem;
   }
   h4 {
    font-family: 'DM Serif Display', serif;
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
   }
   li {
    list-style: none;
   }
   img {
       padding: 1.5rem;
       float: left;
    }
    div {
        text-align: center;
        margin: 0 auto;
        padding: 2rem;
    }
      `}
      </style>
 </div>
)

export default About;