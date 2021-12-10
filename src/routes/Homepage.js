import ntsLogo from "../img/nts_icon.png"
import dublabLogo from '../img/dublab-logo-transparent.png'
import kxluLogo from '../img/KXLU-Black.png'

export default function Homepage() {

    return (
        <div>
            <br></br>
            <div className='call-to-action-container'>
                <h3 className='call-to-action'>Discover new music with Crater: <br></br>
                Search for artists, DJs, and radio shows or browse top artists and DJs.</h3>
            </div>
            <br></br>
            <h4>Our data comes from the following curators:</h4>
            <div className='curatorLogoContainer'>
                <a href="https://www.nts.live/" target="_blank" rel="noreferrer">
                    <img alt="NTS Radio" src={ntsLogo}
                        width="auto" height="150"></img>
                </a>
                <a href="https://www.dublab.com/" target="_blank" rel="noreferrer">
                    <img alt="Dublab Future Roots Radio" src={dublabLogo}
                        width="auto" height="150"></img>
                </a>
                <a href="https://kxlu.com/" target="_blank" rel="noreferrer">
                    <img alt="KXLU Radio" src={kxluLogo}
                        width="auto" height="150"></img>
                </a>
            </div>
        </div>
    )
}