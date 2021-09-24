import React, {useContext} from 'react'
import { Switch, Route, useRouteMatch} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Components
import Navbar from '../components/shared/Navbar';
import Credits from '../components/pages/Credits';
import AddCredit from '../components/pages/AddCredit';

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
                    <Route exact path={`${path}/credits`} render={(props) => (<Credits {...props} token={auth.token} />)} />
                    <Route exact path={`${path}/credits/new`} render={(props) => (<AddCredit {...props} token={auth.token} />)} />
                </Switch>
            </div>
        </div>
    )
}

export default Home;