import React, {Fragment} from 'react';

const FilterItems = ({filterCategory, handleChekedInput, filterCheckbox}) => {
    let keyCategory = Object.keys(filterCategory);

    const namesFields = ['Тип', 'Категория', 'Назначение', 'Цвет', 'Использ. с горячим молоком'];
    const Category = ({filterCategory, typeCategory, filterCheckbox, handleChekedInput}) => {
        const filterArr = Object.values(filterCheckbox)
        return (
            <>
                {
                    filterCategory.map((categoryItem, key) => {

                        let checked ='';
                        if(filterCheckbox[typeCategory]!==undefined){
                            checked = filterCheckbox[typeCategory].indexOf(categoryItem) != -1? 'checked' : '';
                        }
                    return (
                        <label key={categoryItem}  className="label-checkbox">
                            <span>{categoryItem}</span>
                            <input checked={checked}
                                   datacategory={typeCategory}
                                   name={categoryItem}
                                   onChange={handleChekedInput}
                                   type="checkbox"/>
                            <span></span>
                        </label>
                    )
                })
                }
            </>
        )
    }

    return (
        <>
            {

                namesFields.map((value, index) => {
                    if(value){
                        return (
                            <Fragment key={index}>
                                <div className="spoiler-block" >
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index+1}`} aria-expanded="false">
                                        {value}
                                    </button>
                                    <div className="collapse" id={`collapse${index+1}`}>
                                        <div className="spoiler-input-block">
                                            <Category
                                                typeCategory={keyCategory[index]}
                                                filterCategory={filterCategory[keyCategory[index]]}
                                                handleChekedInput={handleChekedInput}
                                                filterCheckbox={filterCheckbox}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fragment>

                        )
                    }

                })
            }
        </>
    )
}


export default FilterItems;