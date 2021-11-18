//this component will hold all the re-usable components that need to be rendered on every page (such as the Header.js)
//will wrap components
import Header from './Header'; //import navbar
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
    <div className="content">
        <Head>
        <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossorigin="anonymous"
		/>
        </Head>
            < Header/>
            { children } {/*this should render the header on all pages*/}

            <style jsx> {`

            `}
            </style>
    </div>
    
    );
}

export default Layout;