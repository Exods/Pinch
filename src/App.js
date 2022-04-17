import {HEROKU_URL, BASE_URL} from './constans'
import './App.css';
import './bootstrap.min.css';

import {Fragment, useEffect, useState} from "react";
import Filter from "./Components/hoc/Filter/Filter";
import Elements from "./Components/hoc/Elements/Elements";
import EmptyItem from "./Components/EmptyItem/EmptyItem";

function App() {
    const [querySearch, setQuerySearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);
    const [itemsPinch, setResult] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterCheckbox, setFilterCheckbox] = useState([]);


    const loadData = () => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(result => {
                setResult(result);
                    setFilterCategory(setCategory(result));
            })

            .catch(error => error)
    }
    const clearFilter = () => {
        console.log('reset')

        setQuerySearch('');
        setFilterSearch(itemsPinch);
        setFilterCheckbox({});
    }
    const search = (e) => {
        e.preventDefault();
        setQuerySearch(e.target.value);
        let itemsFiltred;
        itemsFiltred = itemsPinch.filter(itemPinch => {
            if (itemPinch.NAME !== null) {
                return itemPinch.NAME.toLowerCase().indexOf(querySearch) !== -1;
            }
        })
        setFilterSearch(itemsFiltred)
        console.log(itemsFiltred)
    }
    const handleChekedInput = ({target:{attributes:{datacategory,name}}}) => {
        let filterInput = { ...filterCheckbox }

        filterInput[datacategory.value] = Object.values(filterInput[datacategory.value]).filter((el)=>{return el == name.value}) ? name.value: ''
        setFilterCheckbox(filterInput)
        console.log(name.value)
        console.log(filterInput.hasOwnProperty(name.value))
        // setFilterCategory(filterCategory)
    }

    const setCategory = (result) => {
        let category = {
            'type': [],
            'category': [],
            'destination': [],
            'color': [],
            'milk': [],
        };
        const fields = ['type', 'category', 'destination', 'color', 'milk']
        fields.forEach((value, index) => {
            switch (value) {
                case 'destination':
                    category[value] = result.map((item) => {
                        return item.PROPS.DESTINATION.VALUE
                    })
                    category[value] = [...new Set(category[value].flat().filter((el) => el))];
                    break;
                case 'milk':
                    category[value] = result.map((item) => {
                        return item.PROPS.USE_MILK.VALUE
                    })
                    category[value] = [...new Set(category[value].flat().filter((el) => el))];
                    break;
                default:
                    category[value] = result.map((item) => {
                        return item[value.toUpperCase()]
                    })
                    category[value] = [...new Set(category[value].flat().filter((el) => el))]
                    break;
            }

        })
        // category['setFilter'] = false;
        // console.log(category)
        return category
    }

    useEffect(() => {
        loadData();
    }, [])

    const items = filterSearch.length ? filterSearch : itemsPinch
    return (
        <div className="recipes-wrapper">
            <div className="row">


                {itemsPinch.length > 0 ?
                    <Fragment>
                        <Filter
                            filterCategory={filterCategory}
                            clear={clearFilter}
                            search={search}
                            setQuerySearch={setQuerySearch}
                            querySearch={querySearch}
                            handleChekedInput={handleChekedInput}
                            filterCheckbox={filterCheckbox}
                        />
                        <Elements sirops={items}/>

                    </Fragment>
                        : <EmptyItem/>

                }
            </div>
        </div>

    );
}

export default App;
