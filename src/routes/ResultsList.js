import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import getGlobalSearch from "../data";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const ListHeader = (props) => {
  const searchResults = props.searchResults;
  const searchValue = props.searchValue;
  var resultsLength = 0;
  var keylist = "";
  Object.entries(searchResults).forEach((entry) => {
    const [key, value] = entry;
    resultsLength = resultsLength + value.length;
    keylist = keylist + key; // This is just to avoid unused variable warning
  });

  return (
    <h4 className="results-header">
      {resultsLength} search results for '{searchValue}'
    </h4>
  );
};

const ListBody = (props) => {
  const resultsList = [];

  Object.entries(props.searchResults).forEach((entry) => {
    const [key, value] = entry;
    var subResults = [];
    if (key === "artists") {
      value.forEach((element, index) => {
        subResults[index] = (
          <ListItem key={element.artist_id}>
            <ListItemButton
              component="a"
              href={`/artist/${element.artist_id}`}
              dense
            >
              <ListItemText>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{element.artist_name}</Typography>
                  <Typography>Artist</Typography>
                </Box>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      });
    } else if (key === "djs") {
      value.forEach((element, index) => {
        subResults[index] = (
          <ListItem key={element.dj_id}>
            <ListItemButton component="a" href={`/dj/${element.dj_id}`} dense>
              <ListItemText>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{element.dj_name}</Typography>
                  <Typography>DJ</Typography>
                </Box>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      });
    } else if (key === "episodes") {
      value.forEach((element, index) => {
        subResults[index] = (
        //   <li className="episode-listitem" key={element.episode_id}>
        //     <h6>Episode</h6>
        //     <EpisodeResult key={element.episode_id} value={element} />
        //   </li>
        <ListItem key={element.episode_id}>
          <ListItemButton
            component="a"
            href={element.episode_url}
            target="_blank"
            rel="noreferrer"
            dense
          >
            <ListItemText>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>{element.episode_name}</Typography>
                <Typography>Episode</Typography>
              </Box>
            </ListItemText>
          </ListItemButton>
        </ListItem>
         );
      });
    } else {
      console.log("Unrecognized data type");
    }

    if (subResults.length > 0) {
      resultsList.push(subResults);
    }
  });

  return (
    <div>
      <List className="search-results">{resultsList}</List>
    </div>
  );
};

export default function ResultsList(props) {
  let params = useParams();
  let searchValue = params.searchValue;
  let [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    let mounted = true;
    getGlobalSearch(searchValue, setSearchResults, mounted);
    return () => {
      mounted = false;
    };
  }, [searchValue, setSearchResults]);

  return (
      <Grid container spacing={2}>
        <Grid item xs={10} md={10} xl={10}>
            <ListHeader searchResults={searchResults} searchValue={searchValue} />
            <ListBody searchResults={searchResults} searchValue={searchValue} />
        </Grid>
    </Grid>
  );
}
