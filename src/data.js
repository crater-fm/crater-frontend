import axios from "axios";

export default function getGlobalSearch(searchValue, setStateVar, mounted) {
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/search/${searchValue}`)
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
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/artist/${artistId}`)
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
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/dj/${djId}`)
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

export function getAllArtists(setStateVar, page, mounted) {
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/artist?format=json&page=${page}`)
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

export function getAllDjs(setStateVar, page, mounted) {
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/dj?format=json&page=${page}`)
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

export function getAllEpisodes(setStateVar, page, mounted) {
    axios.get(`https://crater-api.eu-west-2.elasticbeanstalk.com/api/episode?format=json&page=${page}`)
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
