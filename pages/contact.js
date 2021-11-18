//contact page
//email, cell number
//include static image here
import Link from 'next/link';
import Card from 'react-bootstrap/Card'

//Contact Component with its own styling
const Contact = () => (
  <div>
    <h2> CONNECT </h2>
    <span> sitholejosiah7@gmail.com </span>
    <span> +27603191619</span>

    <style jsx>{`
    h2 {
      font-family: 'DM Serif Display', serif;
      font-size: 3rem;
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 2rem;
     }
     span {
      font-family: 'DM Serif Display', serif;
      font-size: 1.5rem;
      text-align: center;
      margin: 10rem 11rem;
      padding: 6rem;
     }
    `}</style>
  </div>
)

export default Contact;