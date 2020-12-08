import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./sample-collection.styles.scss";

const SampleCollection = ({ title, items }) => (
    <div className="sample-collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="sample">
            {
                items.map(({ id, ...otherProps }, index) => {
                    if (index < 4) {
                        return <CollectionItem key={id} {...otherProps} />
                    }
                })
            }
        </div>
    </div>
)

export default SampleCollection;