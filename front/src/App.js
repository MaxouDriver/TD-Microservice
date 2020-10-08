import React, {Fragment} from 'react';
import { Link, NavLink } from "react-router-dom";
import Routes from './components/Routes';
import { withRouter } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        }
    }

    userHasAuthenticated = (value) => {
        this.setState({ isAuthenticated: value });
    }

    handleLogout = async event => {
        this.userHasAuthenticated(false);
        this.props.history.push("/login");
    }

    render(){
        return (
            <Fragment>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand" href="#"><h1>TD-Microservice</h1></Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.state.isAuthenticated ? 
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink onClick={() => this.handleLogout}>Logout</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/newjot" className="nav-link">New Jot</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/alljots" className="nav-link">All Jots</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/viewjot" className="nav-link">View Jot</NavLink>
                                    </li>
                                </Fragment> : 
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/signup" className="nav-link">Signup</NavLink>
                                    </li>
                                </Fragment>
                            } 
                        </ul>
                    </div>                   
                </div>
                <Routes userHasAuthenticated={this.userHasAuthenticated} isAuthenticated = {this.state.isAuthenticated}/>
            </Fragment>
        );
    }
}

export default withRouter(App);