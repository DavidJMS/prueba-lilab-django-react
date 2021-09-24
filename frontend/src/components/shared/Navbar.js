import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";

import "../styles/navbar.css";

class Navbar extends React.Component {

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    handlerLogout =  (e)=> {

        fetch("http://127.0.0.1:8000/api/accounts/logout/",{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Token ${this.props.token}`
            }
        })
        .then((response)=>{
            
            if (!response.ok){
                console.log(response.statusText)
            }
            else{
                localStorage.clear();
                this.props.history.push('/')
            }
        })
        .catch(function() {
            console.log("error");
        });
    }

    render(){

        return (
            <React.Fragment>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                    <Link to='logistics' className="nav-link">Home</Link>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                    <div className="navbar-search-block">
                        <form className="form-inline">
                        <div className="input-group input-group-sm">
                            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                <i className="fas fa-times" />
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <i className="fas fa-th-large" />
                    </a>
                    </li>
                </ul>
                </nav>
                {/* /.navbar */}

                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link text-center">
                    <span>World Market</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        {/* <img src={this.state.avatarUrl} className="img-circle elevation-2" alt="User Image" /> */}
                    </div>
                    <div className="info">
                        <p className="user"> {this.props.user.first_name} {this.props.user.last_name}</p>
                    </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-item">
                        <NavLink to="/home/credits" activeClassName="active" className="nav-link">
                            <i className="nav-icon fas fa-credit-card" />
                            <p>
                            Creditos
                            </p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <p href="#" className="nav-link" onClick={this.handlerLogout}>
                            <i class="nav-icon fas fa-sign-out-alt"></i>
                            <p>
                            Salir
                            </p>
                        </p>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
                </aside>
            </React.Fragment>
        );
    }
}

export default Navbar;