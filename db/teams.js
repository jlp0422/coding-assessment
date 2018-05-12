const teams = [
  { id: 1, name: 'Lakers', city: 'Los Angeles', full_name: 'Los Angeles Lakers', abbrev: 'LAL' },
  { id: 2, name: 'Cavaliers', city: 'Cleveland', full_name: 'Cleveland Cavaliers', abbrev: 'CLE' },
  { id: 3, name: 'Clippers', city: 'Los Angeles', full_name: 'Los Angeles Clippers', abbrev: 'LAC' },
  { id: 4, name: 'Warriors', city: 'Golden State', full_name: 'Golden State Warriors', abbrev: 'GSW' },
  { id: 5, name: 'Hawks', city: 'Atlanta', full_name: 'Atlanta Hawks', abbrev: 'ATL' },
  { id: 6, name: 'Raptors', city: 'Toronto', full_name: 'Toronto Raptors', abbrev: 'TOR' },
]

const getTeams = () => {
  return teams
}

const getTeam = (id) => {
  return teams.find(team => team.id === id)
}

module.exports = {
  getTeams,
  getTeam
}
