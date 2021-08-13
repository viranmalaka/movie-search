import React from 'react';
import { mount } from 'enzyme';
import * as axios from 'axios';
import flushPromises from 'flush-promises';
import MovieList from '../MovieList';

jest.mock('axios');
jest.doMock('../BaseComponents/MovieCardContainer', () => {
  const ComponentToMock = () => <div />;
  return ComponentToMock;
});

describe('test MovieList component', () => {
  it('should show the welcome message initially', () => {
    const wrapper = mount(<MovieList filter={{ searchQuery: '' }} />);

    expect(wrapper.find('WelcomeMessageBox')).toHaveLength(1);
    expect(wrapper.find('.message-box-info').text()).toEqual('Welcome to OMDB Search, search something in the bar above!');
  });

  it('should show loading message when do a search', () => {
    const wrapper = mount(<MovieList filter={{ searchQuery: 'scooby' }} />);

    expect(wrapper.find('MessageBox')).toHaveLength(1);
    expect(wrapper.find('.message-box-info').text()).toEqual('Searching...');
  });

  it('should show error message if no results found', async () => {
    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
      data: { Response: 'False', Error: 'Movie not found!' },
    }));
    const wrapper = mount(<MovieList filter={{ searchQuery: 'scooby' }} />);

    await flushPromises();
    wrapper.update();

    expect(wrapper.find('NoResultsFoundMessageBox')).toHaveLength(1);
    expect(wrapper.find('.message-box-error').text()).toEqual('Movie not found!');
  });

  it('should render the movie card container with given list of movies', async () => {
    jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.resolve({
      data: {
        Search: [
          { Title: "A Pup Named Scooby-Doo", "Year": "1988–1991", "imdbID": "tt0094531", "Type":"series", "Poster": "https://m.media-amazon.com/images/M@._V1_SX300.jpg" },
          { Title: "Scooby-Doo and the Ghoul School", "Year": "1988", "imdbID": "tt0189071", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/@._V1_SX300.jpg"}
        ],
        totalResults: "130",
        Response:"True"
      },
    }));

    const wrapper = mount(<MovieList filter={{ searchQuery: 'scooby' }} />);

    await flushPromises();
    wrapper.update();

    expect(wrapper.find('MovieCardContainer')).toHaveLength(1);
    const MovieCardContainerProps = wrapper.find('MovieCardContainer').props();
    expect(MovieCardContainerProps.dataSource).toEqual([
        {
          Title: 'A Pup Named Scooby-Doo',
          Year: '1988–1991',
          imdbID: 'tt0094531',
          Type: 'series',
          Poster: 'https://m.media-amazon.com/images/M@._V1_SX300.jpg'
        },
        {
          Title: 'Scooby-Doo and the Ghoul School',
          Year: '1988',
          imdbID: 'tt0189071',
          Type: 'movie',
          Poster: 'https://m.media-amazon.com/images/M/@._V1_SX300.jpg'
        }
      ]);
    expect(MovieCardContainerProps.leftMovieCount).toEqual(120)
  });
});
