import { observable, action, configure, runInAction } from 'mobx';
import { get } from 'lodash';
import axios from 'axios';

configure({ enforceActions: 'observed' });

class MovieStore {
  @observable
  movies = [];

  @observable
  loading = false;

  @action
  async fetchMovies(searchKeyword) {
    try {
      this.loading = true;
      const response = await axios({
        url: `http://localhost:5000/api/search/${searchKeyword}`,
        method: 'GET'
      });
      if (response) {
        runInAction(() => {
          this.movies = get(response, 'data', []);
          this.loading = false;
        });
      }
    } catch (error) {
      this.loading = false;
      throw new Error(error);
    }
  }
}

export default new MovieStore();
