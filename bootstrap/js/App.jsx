import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';
import PageAbout from './PageAbout.jsx';
import PageHome from './PageHome.jsx';
import Navbar from './Navbar.jsx';


var App = React.createClass({
    getInitialState: function () {
        return {
            page: 'home'
        }
    },
    handleHomeClick: function () {
        this.setState({
            page: 'home'
        });
    },
    handleAboutClick: function () {
        this.setState({
            page: 'about'
        });
    },
    render: function () {
        if (this.state.page == 'home') {
            var jumbotron = <Jumbotron />
            var page = <PageHome />
        } else if (this.state.page == 'about') {
            var jumbotron = '';

            var page = <PageAbout />
        }
        return (
            <div>
                <Navbar
                    color ="dark"
                    page ={this.state.page}
                    homeClick ={this.handleHomeClick}
                    aboutClick = {this.handleAboutClick}/>

                {jumbotron}
                {page}
                <Footer />
            </div>
        )
    }
});
ReactDOM.render(<App />,document.getElementById('app'))