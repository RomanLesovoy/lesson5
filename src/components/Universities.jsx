import React from 'react';
import {useSelector} from "react-redux";
import {selectUniversities} from "../store/new/reducers/universities";

const Universities = () => {
    const universities = useSelector(selectUniversities);

    const renderList = () => universities.map((_) => (
        <div className="university" key={_.name}>
            <span>{ _.country }</span>
            <span>{ _.name }</span>
        </div>
    ));

    return (
        <div className="universities">
            { renderList() }
        </div>
    )
}

export default Universities;
