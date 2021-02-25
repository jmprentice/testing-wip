import React from "react";
import { useLocation } from "react-router-dom";
import ViewOptions from "../ViewOptions/index.js";
import Panel from '../Panel/index.js';
import Tools from '../Tools/index.js';
import getSearchParams from '../../functions/getSearchParams.js';
import './index.css';

const Home = (props) => {
    const { search } = useLocation()
    const params = getSearchParams(search);
    console.log(props);
    <h1>{params.name}</h1>
    return (
        <div>
            <ViewOptions params={params}/>
            <div className="content">
                <Panel size="small">
                    <Tools params={params} />
                </Panel>
                <Panel size="large" />
                <Panel size="medium" />
            </div>
        </div>
    );
}

export default Home;