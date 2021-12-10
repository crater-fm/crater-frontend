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

export function getDjDetails(djId, setStateVar, mounted) {
    axios.get(`https://crater-backend.herokuapp.com/api/dj/${djId}`)
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

export function getAllArtists(setStateVar, mounted) {
    axios.get('https://crater-backend.herokuapp.com/api/artist')
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

export function getAllDjs(setStateVar, mounted) {
    axios.get('https://crater-backend.herokuapp.com/api/dj')
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
