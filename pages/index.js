//acts as home page or the App.js file with React
//contains main styling
import Layout from '../components/Layout'; 

//import all components
import Header from '../components/Header';

//the first page to be displayed when the page loads 
const Home = () => (
    <div>
        <h1>Hello World, I'm J.Sithole</h1>
        <small> ( A Full Stack Web Developer ) </small>

        <style jsx>{`
        h1 {
            font-family: 'DM Serif Display', serif;
            font-size: 5rem;
            text-align: center;
            padding-top: 8rem;
            font-variant: small-caps; 
        }
        small {
            font-family: 'DM Serif Display', serif;
            font-size: 1.5rem;
            margin-left: 510px;
            padding: 4rem;
        }
        `}
        </style>

    </div>
)

export default Home;

