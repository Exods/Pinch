import React from 'react';
import ElemetntItem from "../../ElemetItem/ElemetntItem";

const Elements = ({sirops}) => {
    return (
        <div className="col-lg-9">
            <div className="row">
                {
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
                    })
                }

            </div>
            <a href="" className="green-button green-button-tm">Загрузить еще</a>
        </div>
    )
};

export default Elements;