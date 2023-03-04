import React,{useState} from 'react'
import './header.css'
import NavTabs from '../navtabs/NavTabs';
import AboutMe from '../aboutme/AboutMe';
import Contact from '../contact/Contact';
import Portfolio from '../portfolio/Portfolio';
import Resume from '../resume/Resume';

const Header = () =>
{const [currentPage, setCurrentPage] = useState('AboutMe');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.


const renderPage = () =>
{
    if (currentPage === 'AboutMe') {
        return <AboutMe />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    return <Resume />;
};

const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div className='container'>
        {/* We are passing the currentPage from     state and the function to update it */}
        {/* Here we are calling the renderPage  method which will return a component  */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    )

}

export default Header