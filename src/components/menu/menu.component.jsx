import React from "react";
import MenuItem from "./../menu-item/menu-item.component";
import "./menu.styles.scss";

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.pinimg.com/564x/e9/4d/63/e94d63db92933dd9bea24c06f2270ded.jpg',
                    id: 1,
                },
                {
                    title: 'accessories',
                    imageUrl: 'https://i.pinimg.com/564x/86/d9/83/86d9834ede240350499dafaa48a87463.jpg',
                    id: 2,
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://i.pinimg.com/564x/65/49/80/65498031ea1b596542e17ff74a746c1f.jpg',
                    id: 3,
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.pinimg.com/564x/b5/60/e4/b560e4b44e9ab938931aaff5b7223c35.jpg',
                    size: 'large',
                    id: 4,
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.pinimg.com/564x/7c/28/4b/7c284b29a7f1c491b01a575e8e30f991.jpg',
                    size: 'large',
                    id: 5,
                }
            ]
        }
    }

    render() {
        return (
            <div className="menu">
                { this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => {
                    return <MenuItem title={title} key={id} image={imageUrl} linkUrl={linkUrl} size={size} />
                })}
            </div>
        )
    }
}

export default Menu;