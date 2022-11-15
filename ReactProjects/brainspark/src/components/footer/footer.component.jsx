import './footer.styles.scss'

const Footer = () => {
    return (
            <div className= 'footer'>
                <h1>Brainspark.<br></br></h1>
                <h2>Teacher tested.<br></br>Optimized for student success.</h2>
                    <div className= 'social-media'>
                        <span>
                        <img src="https://i.imgur.com/SPUhR11.png" alt="social" ></img>
                        </span>
                        <span>
                        <img src="https://i.imgur.com/5F7DlZJ.png" alt="social" ></img>
                        </span>
                        <span>
                        <img src="https://i.imgur.com/4IcSlPa.png" alt="social" ></img>
                        </span>
                    </div>
            </div>
    )
}

export default Footer;