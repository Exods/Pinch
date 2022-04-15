import React from 'react';

const Filter = ({search, querySearch, clear, filterCategory:{type,destination,category,color,milk}}) => {
    const Appointment = ({category}) => {
        return (
            <>
                {category.length > 0 ? category.sort().map((categoryItem,key) => {
                    return (
                        <label key={key} className="label-checkbox">
                            <span>{categoryItem}</span>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                    )
                }) : ''}
            </>
        )

    }
    return (
        <div className="col-lg-3">
            <form>
                <div className="filter">
                    <div className="filter-mobil">
                        <div className="search">
                            <input type="search" onChange={search} placeholder="Поиск" value={querySearch}/>
                            <button><img src="./images/search.svg" alt=""/></button>
                        </div>
                        <button className="d-block d-lg-none toggle-filter">
                            <img src="./images/filter.svg" alt=""/>
                        </button>
                    </div>
                    <div className="filter-body">
                        <div className="spoiler-block">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse1" aria-expanded="false">
                                Тип
                            </button>
                            <div className="collapse" id="collapse1">
                                <div className="spoiler-input-block">
                                    <Appointment category={type}/>
                                </div>
                            </div>
                        </div>
                        <div className="spoiler-block">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse2" aria-expanded="false">
                                Назначение
                            </button>
                            <div className="collapse" id="collapse2">
                                <div className="spoiler-input-block">
                                    <Appointment category={destination}/>
                                </div>
                            </div>
                        </div>
                        <div className="spoiler-block">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse3" aria-expanded="false">
                                Категория
                            </button>
                            <div className="collapse" id="collapse3">
                                <div className="spoiler-input-block">
                                    <Appointment category={category}/>

                                </div>
                            </div>
                        </div>
                        <div className="spoiler-block">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse4" aria-expanded="false">
                                Цвет
                            </button>
                            <div className="collapse" id="collapse4">
                                <div className="spoiler-input-block">
                                    <Appointment category={color}/>

                                </div>
                            </div>
                        </div>
                        <div className="spoiler-block">
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse5" aria-expanded="false">
                                Использ. с горячим молоком
                            </button>
                            <div className="collapse" id="collapse5">
                                <div className="spoiler-input-block">
                                    <Appointment category={milk}/>
                                </div>
                            </div>
                        </div>
                        <button className="green-button">Применить</button>
                        <button type='button' onClick={clear} className="reset">Сбросить фильтр</button>
                    </div>

                </div>
            </form>
        </div>
    )
};

export default Filter;