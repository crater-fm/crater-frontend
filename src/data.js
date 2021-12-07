import axios from "axios";

export default function getGlobalSearch(searchValue, setStateVar, mounted) {
    axios.get(`https://crater-backend.herokuapp.com/api/search/${searchValue}`)
        .then((res) => {
            if (mounted) {
                setStateVar(res.data);
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export function getArtistDetails(artistId, setStateVar, mounted) {
    axios.get(`https://crater-backend.herokuapp.com/api/artist/${artistId}`)
        .then((res) => {
            if (mounted) {
                setStateVar(res.data);
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
