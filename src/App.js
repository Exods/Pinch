import {HEROKU_URL, BASE_URL} from './constans'
import './App.css';
import './bootstrap.min.css';

import {useEffect, useState} from "react";
import Filter from "./Components/hoc/Filter/Filter";
import Elements from "./Components/hoc/Elements/Elements";
import EmptyItem from "./Components/EmptyItem/EmptyItem";

function App() {
    const [apiResult, setResult] = useState([]);
    const loadData = () => {
        fetch(`${HEROKU_URL}${BASE_URL}`)
            .then(res => res.json())
            .then(result => {
                setResult(result);
            })
            .catch(error => error)
    }
    useEffect(()=>{
        loadData();
    },[])

    return (
        <div className="recipes-wrapper">
            <div className="row">
                <Filter />
                { apiResult.length>0?<Elements sirops={apiResult}/>:<EmptyItem />}

            </div>
        </div>

    );
}

export default App;
