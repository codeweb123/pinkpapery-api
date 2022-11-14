import { Fragment } from "react";
import './info-banner.styles.scss';
import Button from '../button/button.component'

const InfoBanner = () => {

    return (
        <Fragment>
            <div className= 'info-banner'>
                <div className= 'info-text-container'>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies. Nunc lobortis mattis aliquam faucibus purus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Mattis ali</h1>
                </div>
            </div>
            <Button>Learn More</Button> 
        </Fragment>
    )
}

export default InfoBanner;