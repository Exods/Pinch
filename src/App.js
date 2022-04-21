import {BASE_URL} from './constans'
import './App.css';
import './bootstrap.min.css';

import {Fragment, useEffect, useState} from "react";
import Filter from "./Components/hoc/Filter/Filter";
import Elements from "./Components/hoc/Elements/Elements";
import EmptyItem from "./Components/EmptyItem/EmptyItem";

function App() {
    const [filterCategory, setFilterCategory] = useState([]);
    const [filterCheckbox, setFilterCheckbox] = useState({});
    const [querySearch, setQuerySearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);
    const [itemsPinch, setResult] = useState([]);
    window.setFilterSearch =setFilterSearch
    window.filterSearch =filterSearch
    const unique = (arr)=> {
        return Array.from(new Set(arr));
    }
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
        setFilterSearch([]);
        setFilterCheckbox({});
    }
    const search = (e) => {
        setQuerySearch(e.target.value);
        let itemsFiltred;
        let Items = itemsPinch
        // categorySearch(filterCheckbox)
        e.preventDefault();
        setFilterSearch(itemsFiltred)
        itemsFiltred = Items.filter(itemPinch => {
            if (itemPinch.NAME !== null) {
                return itemPinch.NAME.toLowerCase().indexOf(querySearch) !== -1;
            }
        })
        setFilterSearch(itemsFiltred)
        // console.log(itemsFiltred)
    }
    const categorySearch = (obj) => {
        let itemsFiltred = itemsPinch;//Где то тут закралась ошибка на
        // входе...падла))))
         console.log(itemsFiltred)

        let items = filterSearch.length && filterCheckbox.length ? filterSearch  : [];
        for (let itemsFiltredKey in obj) {
            obj[itemsFiltredKey].forEach((value, index) => {

                // console.log(itemsFiltred.length)

                items = [...itemsFiltred.filter(itemPinch => {
                    itemsFiltredKey = itemsFiltredKey.toUpperCase()
                    if (itemPinch.itemsFiltredKey !== null) {
                        if (itemsFiltredKey == 'DESTINATION') {
                            if (itemPinch.PROPS[itemsFiltredKey].VALUE) {
                                return itemPinch.PROPS[itemsFiltredKey].VALUE.filter((item) => {
                                    return item.indexOf(value) !== -1;
                                })
                            }
                        } else {
                            return itemPinch[itemsFiltredKey].indexOf(value) !== -1;
                        }

                    }

                }), ...items]

            })

        }
        console.log(items.length)

        // unique(items);//Заглушка...
        console.log(items.length)
        setFilterSearch(items)

    }
    const handleChekedInput = ({target: {attributes: {datacategory, name}}}) => {

        let filterInput = filterCheckbox
        // console.log(filterInput);
        if (!filterInput.hasOwnProperty(datacategory.value)) {
            filterInput[datacategory.value] = [name.value]
        } else {

            if (!Object.values(filterInput[datacategory.value]).includes(name.value)) {
                filterInput[datacategory.value] = [...filterInput[datacategory.value], name.value]
            } else {
                filterInput[datacategory.value] = filterInput[datacategory.value].filter((n) => {
                    return n !== name.value
                })
            }
            if (filterInput.hasOwnProperty(datacategory.value) && !filterInput[datacategory.value].length) {
                delete filterInput[datacategory.value]
                // console.log(filterInput);

            }
        }
        setFilterCheckbox(filterInput);
        categorySearch(filterCheckbox);


    }

    const setCategory = (result) => {
        let category = {
            'type': [],
            'category': [],
            'destination': [],
            'color': [],
            'use_milk': [],
        };
        const fields = ['type', 'category', 'destination', 'color', 'use_milk']
        fields.forEach((value, index) => {
            switch (value) {
                case 'destination':
                    category[value] = result.map((item) => {
                        return item.PROPS.DESTINATION.VALUE
                    })
                    category[value] = [...new Set(category[value].flat().filter((el) => el))];
                    break;
                case 'use_milk':
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
    // console.log(filterSearch);
    const items = filterSearch.length || querySearch ? filterSearch : itemsPinch
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
