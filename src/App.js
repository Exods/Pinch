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
    const [mobileFilter, toggleMobileFilter] = useState(false);
    const [pageCountItems, setPageCountItems] = useState(6);//число на странице
    const pageItems = 3;
    const countItems = filterSearch.length?filterSearch.length: itemsPinch.length
    const lastPageCountItems = countItems%pageCountItems;
    const nextPageCountItems = pageCountItems+pageItems;
    window.setFilterSearch =setFilterSearch
    window.filterSearch =filterSearch

    const loadData = async () => {
        fetch(`${BASE_URL}`)
            .then(res => res.json())
            .then(result => {
                setResult(result);
                setFilterCategory(setCategory(result));

            })

            .catch(error => error)

    }
    const handleFilterShow = ()=>{
        toggleMobileFilter(!mobileFilter);
    }
    const clearFilter = () => {
        console.log('reset')

        setQuerySearch('');
        setFilterSearch([]);
        setFilterCheckbox({});
        setPageCountItems(6);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        setQuerySearch(querySearch);
        search();


    }
    const handleValue = ({target:{value}})=>{
        setQuerySearch(value);
        search();
    }
    const search = () => {
        let itemsFiltred;
        let Items = itemsPinch
        // categorySearch(filterCheckbox)
        // e.preventDefault();
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
        let itemsFiltred = itemsPinch;//Где то тут закралась ошибка на  входе...падла))))
        let items =  [];
        let iterationItems =  [];

        // console.log(filterSearch.length && Object.keys(filterCheckbox).length>0)

        for (let itemsFiltredKey in obj) {
            itemsFiltred = items.length ? iterationItems: itemsPinch;
            items = iterationItems.length? []: items
            obj[itemsFiltredKey].forEach((value, index) => {
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
            iterationItems = items;
        }
        // console.log(items.length)

        // items = items);//Заглушка...
        // debugger
        setFilterSearch(items)
        console.log(filterSearch.length+'---новый фильтр')

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
    const handleShowMore = (e) => {
        e.preventDefault();
        console.log(pageCountItems)
        console.log(lastPageCountItems)
        if (pageCountItems!==countItems){
            if(nextPageCountItems<countItems){
                setPageCountItems(nextPageCountItems)
            }else {
                setPageCountItems(pageCountItems+lastPageCountItems);
            }
        }

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
    const items = filterSearch.length || querySearch  ? filterSearch : itemsPinch
    // console.log(items.length)

    return (
        <div className="recipes-wrapper">
            <div className="row">
                {items.length || querySearch?
                    <Fragment>
                        <Filter
                            handleSubmitForm={handleSubmitForm}
                            mobileFilter={mobileFilter}
                            handleFilterShow={handleFilterShow}
                            filterCategory={filterCategory}
                            clear={clearFilter}
                            handleValue={handleValue}
                            setQuerySearch={setQuerySearch}
                            querySearch={querySearch}
                            handleChekedInput={handleChekedInput}
                            filterCheckbox={filterCheckbox}
                        />
                        <Elements sirops={items}
                                  pageCountItems={pageCountItems}
                                  countItems={countItems}
                                  handleShowMore={handleShowMore}
                        />

                    </Fragment>
                    : <EmptyItem />

                }
            </div>
        </div>

    );
}

export default App;
