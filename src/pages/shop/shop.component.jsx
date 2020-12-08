import React from "react";
import { collections } from "./collections";
import SampleCollection from "../../components/shop-components/sample-collection.component"

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections
        }
    }

    render() {
        return (
            <div className="shop-page">
                { this.state.collections
                    .map(({ id, ...otherProps }) => {
                        return <SampleCollection key={id} {...otherProps} />
                    })}
            </div>
        )
    }
}

export default ShopPage;