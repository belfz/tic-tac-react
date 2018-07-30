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
    .then(res => res.data)
    .catch(console.error);
  }

  getOneOutcome = (id) => {
    return axios.get(`${this.baseUrl}\\${id}`)
    .then(res => res.data)
    .catch(console.error);
  }
  addOutcome = (outcome) => {
    if (!outcome || !outcome.xPlayer || !outcome.yPlayer) {
      return console.error('Cannot add outcome: invalid data.');
    }
    return axios.post(this.baseUrl, outcome)
    .then(res => res.data)
    .catch(console.error);
  }
}

export default LeaderboardsApi;
