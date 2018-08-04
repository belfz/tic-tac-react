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
    .then( res => Promise.resolve(res.data) );
  }

  getOneOutcome = (id) => {
    return axios.get(`${this.baseUrl}\\${id}`)
    .then( res => Promise.resolve(res.data) );
  }
  addOutcome = (outcome) => {
    if (!outcome || !outcome.player_x_name || !outcome.player_o_name) {
      throw new Error('Cannot add outcome: invalid data.');
    }
    return axios.post(this.baseUrl, outcome);
  }
}

export default LeaderboardsApi;
