import axios from 'axios';

class LeaderboardsApi {
  baseUrl = 'https://aqueous-woodland-27846.herokuapp.com/api/leaderboards';

  getOutcomes = (filterParams) => {
    const options = {};
    if (filterParams) {
      options.params = {
        filter: filterParams,
      };
    }
    return axios.get(this.baseUrl, options)
    .then(
      res => res.data,
      error => console.error(error)
    );
  }

  getOneOutcome = (id) => {
    return axios.get(`${this.baseUrl}\\${id}`)
    .then(
      res => res.data,
      error => console.error(error)
    );
  }
  addOutcome = (outcome) => {
    if (!outcome || !outcome.player_x_name || !outcome.player_o_name) {
      return console.error('Cannot add outcome: invalid data.');
    }
    return axios.post(this.baseUrl, outcome)
    .then(
      res => res,
      error => console.error(error)
    );
  }
}

export default LeaderboardsApi;
