import axios from "axios";
import {
  Box,
  Grid,
  Grommet,
  Heading,
  Image,
  List,
  Text,
  TextInput,
} from "grommet";
import { grommet } from "grommet/themes";
import React, { ChangeEvent } from "react";

const getMovies = async (query: string, cb: any) => {
  const results = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=8f04f55cb668f5fe095af040343f9960&query=${encodeURIComponent(
      query
    )}/`
  );
  cb(results.data.results);
};

const Search = ({ title }) => {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    getMovies(event.target.value, setMovies);
  };

  return (
    <Grommet full theme={grommet}>
      <Box background="light-1" direction="row" height="100%">
        <Grid
          fill
          rows={["xsmall", "xsmall", "small"]}
          columns={["500px"]}
          justifyContent="center"
          areas={[
            { name: "title", start: [0, 0], end: [0, 0] },
            { name: "query", start: [0, 1], end: [0, 1] },
            { name: "results", start: [0, 2], end: [0, 2] },
          ]}
        >
          <Box
            gridArea="title"
            pad={{ horizontal: "medium", vertical: "small" }}
          >
            <Heading margin="none">{title}</Heading>
          </Box>
          <Box
            gridArea="query"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
          >
            <TextInput
              placeholder="Search for movies"
              value={query}
              onChange={onChange}
            />
          </Box>
          <Box gridArea="results">
            <List data={movies}>
              {(data: any) => (
                <Box direction="row" justify="between">
                  <Image
                    style={{ width: 75 }}
                    src={`https://image.tmdb.org/t/p//w220_and_h330_face/${data.poster_path}`}
                  />
                  <Text weight="bold">{data.title}</Text>
                  <Text>{data.release_date}</Text>
                </Box>
              )}
            </List>
          </Box>
        </Grid>
      </Box>
    </Grommet>
  );
};

export default Search;
