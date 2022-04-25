import React from 'react';
import ElemetntItem from "../../ElemetItem/ElemetntItem";

const Elements = ({sirops, pageCountItems, handleShowMore, countItems}) => {
    const Empty = () => {
        return (
            <div className="col-lg-9">
                <div className="row" id="result_items"><p className="products_not_found">Данные, удовлетворящие фильтрации,
                    отсутствуют!</p>
                </div>
                <div id="paginator"></div>
            </div>)
    }
    const ShowMore = () => {
        return <a href="!#" className="green-button green-button-tm" onClick={handleShowMore} value>Загрузить еще</a>
    }
    sirops = sirops.slice(0, pageCountItems)
    return (

        <div className="col-lg-9">
            <div className="row">
                {sirops.length ?
                    sirops.map(({
                                    VOLUME,
                                    VENDOR_CODE,
                                    MATERIAL,
                                    NAME,
                                    ID,
                                    TASTE,
                                    CATEGORY,
                                    LINK,
                                    COLOR,
                                    PREVIEW_SRC,
                                    USE_MILK,
                                    PROPS: {DESTINATION}
                                }) => {
                        // console.log(DESTINATION +'----'+NAME);
                        return <ElemetntItem
                            key={ID}
                            material={MATERIAL}
                            name={NAME}
                            category={CATEGORY}
                            link={LINK}
                            color={COLOR}
                            img={PREVIEW_SRC}
                            use_milk={USE_MILK}
                            destination={DESTINATION}
                            volume={VOLUME}
                            taste={TASTE}
                            article={VENDOR_CODE}

                        />
                    }) :
                    <Empty/>
                }

            </div>
            {countItems > pageCountItems && sirops.length? <ShowMore/> : ''}
        </div>
    )
};

export default Elements;