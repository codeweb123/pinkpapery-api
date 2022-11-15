import { Fragment } from "react";
import './info-banner.styles.scss';
import Button from '../button/button.component'

const InfoBanner = () => {


    return (
        <Fragment>
            <div className= 'info-banner'>
                    <h1>Teacher tested. <br></br>Optimized for student success.</h1>
                    <span>
                    <img src="https://i.imgur.com/lxC88tN.jpg" alt="img"></img>
                    </span>
                    
                    <h3>BrainSpark is a teacher created platform that provides easy to use resources for teachers and parents to support student learning. Founded in 2023, BrainSpark is trusted by educators and parents as a resource for comprehensive and individualized activities for K-5 learners.</h3>
                <Button>Learn More</Button>
            </div>
        </Fragment>
    )
}

export default InfoBanner;