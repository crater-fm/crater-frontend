import ntsIcon from "../img/nts_icon.png"

export default function Homepage() {
    return (
        <div>
            <h2>Discover new music with CRATER.</h2>
            <br></br>
            <h3>Our data comes from the following curators:</h3>
            <a href="https://www.nts.live/">
                <img alt="NTS Radio" src={ntsIcon}
                    width="150" height="150"></img>
            </a>
        </div>
    )
}
