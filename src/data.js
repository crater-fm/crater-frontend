import axios from "axios";

export function getArtistDetail(artistId) {
    axios.get(`https://crater-backend.herokuapp.com/api/artist/${artistId}`)
        .then((res) => {
            this.setState({ artistData: res.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export function getDjDetail(djId) {
    axios.get(`https://crater-backend.herokuapp.com/api/dj/${djId}`)
        .then((res) => {
            this.setState({ djData: res.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export default function getGlobalSearch(searchValue) {
    axios.get(`https://crater-backend.herokuapp.com/api/search/${searchValue}`)
        .then((res) => {
            return res.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
