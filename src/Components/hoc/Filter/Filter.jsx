import React from 'react';

const Filter = (props) => {
    return (
        <div className="col-lg-3">
            <div className="filter">
                <div className="filter-mobil">
                    <div className="search">
                        <input type="search" placeholder="Поиск" />
                        <button><img src="./images/search.svg" alt="" /></button>
                    </div>
                    <button className="d-block d-lg-none toggle-filter">
                        <img src="./images/filter.svg" alt="" />
                    </button>
                </div>
                <div className="filter-body">

                    <div className="spoiler-block">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse1" aria-expanded="false">
                            Назначение
                        </button>
                        <div className="collapse" id="collapse1">
                            <div className="spoiler-input-block">
                                <label className="label-checkbox">
                                    <span>Фруктовый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Травянистый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Ягодный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Цветочный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Пряный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Десертный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Кофейный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="spoiler-block">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse2" aria-expanded="false">
                            Вкус
                        </button>
                        <div className="collapse" id="collapse2">
                            <div className="spoiler-input-block">
                                <label className="label-checkbox">
                                    <span>Фруктовый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Травянистый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Ягодный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Цветочный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Пряный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Десертный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Кофейный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="spoiler-block">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse3" aria-expanded="false">
                            Цвет
                        </button>
                        <div className="collapse" id="collapse3">
                            <div className="spoiler-input-block">
                                <label className="label-checkbox">
                                    <span>Фруктовый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Травянистый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Ягодный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Цветочный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Пряный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Десертный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Кофейный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="spoiler-block">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse4" aria-expanded="false">
                            Исполь. с горячим молоком
                        </button>
                        <div className="collapse" id="collapse4">
                            <div className="spoiler-input-block">
                                <label className="label-checkbox">
                                    <span>Фруктовый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Травянистый</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Ягодный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Цветочный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Пряный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Десертный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <label className="label-checkbox">
                                    <span>Кофейный</span>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <button className="green-button">Применить</button>
                    <button className="reset">Сбросить фильтр</button>
                </div>

            </div>


        </div>
    )
};

export default Filter;