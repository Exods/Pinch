import React from 'react';
import FilterItems from "../FilterItems/FilterItems";

const Filter = ({handleValue, querySearch, clear,filterCategory,mobileFilter,handleSubmitForm,handleFilterShow,handleChekedInput,filterCheckbox}) => {
    return (
        <div className="col-lg-3">
            <form onSubmit={handleSubmitForm}>
                <div className="filter">
                    <div className="filter-mobil">
                        <div className="search">
                            <input type="search" onChange={handleValue} placeholder="Поиск" value={querySearch}/>
                            <button><img src="./images/search.svg" alt=""/></button>
                        </div>
                        <button className="d-block d-lg-none toggle-filter" onClick={handleFilterShow}>
                            <img src="./images/filter.svg" alt=""/>
                        </button>
                    </div>
                    <div  className={`filter-body ${mobileFilter?"show":""}`} >
                        <FilterItems  handleChekedInput={handleChekedInput} filterCategory={filterCategory} filterCheckbox={filterCheckbox}/>
                        <button className="green-button">Применить</button>
                        <button type='button' onClick={clear} className="reset">Сбросить фильтр</button>
                    </div>

                </div>
            </form>
        </div>
    )
};

export default Filter;