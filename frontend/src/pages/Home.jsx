import React, {useContext} from 'react'
import { Switch, Route, useRouteMatch} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Components
import Navbar from '../components/shared/Navbar';

// Style
import "./styles/home.css"

function Home (props){

    const auth = useContext(AuthContext);
    const { path } = useRouteMatch();
    if (!auth.token){
        props.history.push("/");
    }

    return(
        <div className="wrapper">
            <Navbar {...props} token={auth.token} user={auth.user} />
            <div className="content-wrapper">
                <Switch> 
                    
                </Switch>
            </div>
        </div>
    )
}

export default Home;