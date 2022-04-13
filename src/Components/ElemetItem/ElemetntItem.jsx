import React from 'react';
import {DOMAIN} from "../../constans";

function Distinations({destinations}) {
    return (
        <>
            {destinations.map((item) => `${item.trim()}, `)}
        </>
    )
}

const ElemetntItem = ({name, category, link,taste,article, color, img, use_milk, destination, material, volume}) => {

    return (
        <div className="col-sm-6 col-md-3 col-lg-4">
            <div className="card-product-block">
                <div className="card-product-block-top">
                    <img src={`${DOMAIN}${img}`} alt={`${name}`}/>
                </div>
                <div className="card-product-block-bottom">
                    <h3>{`${name}`}</h3>
                </div>
                <div className="card-product-block-hover">
                    <h3>{`${category} «${name}»`}</h3>
                    <div className="card-product-specification">
                        <h4>Описание вкуса</h4>
                        <p>{taste}</p>
                    </div>
                    <div className="card-product-specification">
                        <h4>{material}</h4>
                        <p>{volume}</p>
                    </div>
                    <div className="card-product-specification">
                        <h4>Бутылка</h4>
                        <p>{material}</p>
                    </div>
                    <div className="card-product-specification">
                        <h4>Используется для</h4>
                        <p>
                            {typeof (destination.VALUE) == 'object' ? <Distinations destinations={destination.VALUE}/> : ''}
                        </p>
                    </div>
                    <div className="card-product-block-hover">
                        <div className="card-product-info">

                            <h3>{name}</h3>

                            <div className="card-product-specification">
                                <h4><span><strong>{`${category} «${name}»`}</strong></span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Вкус: <span>{name}<span></span></span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Использ. с горячим молоком: <span>{use_milk}</span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Цвет: <span>{color}</span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Бутылка: <span>{material}</span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Объем: <span>{volume}</span></h4>
                            </div>

                            <div className="card-product-specification">
                                <h4>Артикул: <span>{article}</span></h4>
                            </div>


                        </div>

                        <a className="green-button fix_red" target="_blank"
                           href={`${link}`}>Заказать на сайте</a>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default ElemetntItem;