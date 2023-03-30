import { matchTeams } from "./winLossMatch"

export const sportsNodes = (arr) =>
  arr.standings?.map((item, index) => {
    console.log("arr", arr)
    const { rows } = item
    const innerData = rows.map((row) => {
      const { losses, streak, wins, team, position } = row
      const { name: teamName } = team

      return { losses, streak, wins, teamName, position }
    })

    return innerData
  })

// const teast = Array.isArray(sportsNodes) ? sportsNodes?.slice(0, 1) : []
// const twest = Array.isArray(sportsNodes) ? sportsNodes.slice(1, 2) : []

const west = Array.isArray(sportsNodes) ? sportsNodes?.slice(1, 2) : []

export const eastFunc = (arr, sport) => {
  const sportsNodes = arr.standings?.map((item, index) => {
    console.log("arr", arr)
    const { rows } = item
    const innerData = rows.map((row) => {
      const { losses, streak, wins, team, position } = row
      const { name: teamName } = team

      return { losses, streak, wins, teamName, position }
    })

    return innerData
  })

  let east = []
  let west = []

  //slice array to only seperate teams by east/west conf
  if (sport === "basketball") {
    east = Array.isArray(sportsNodes) ? sportsNodes?.slice(0, 1) : []
    west = Array.isArray(sportsNodes) ? sportsNodes?.slice(1, 2) : []
  }

  if (sport === "baseball") {
    east = Array.isArray(sportsNodes) ? sportsNodes?.slice(0, 1) : []
    west = Array.isArray(sportsNodes) ? sportsNodes?.slice(5, 6) : []
  }

  // formatting eastern conference
  const eastNodes = east?.map((item, index) => {
    let conference = ""
    if (sport === "basketball") {
      conference = "Eastern"
    }
    if (sport === "baseball") {
      conference = "American"
    }

    const teams = item.map((team, index) => {
      const { losses, position, streak, teamName, wins } = team
      return {
        index,
        losses,
        position,
        streak,
        teamName,
        wins,
        conference
      }
    })
    return teams
  })

  // formatting western conference
  const westNodes = west?.map((item, index) => {
    let conference = ""
    if (sport === "basketball") {
      conference = "Western"
    }
    if (sport === "baseball") {
      conference = "National"
    }
    const teams = item.map((team, index) => {
      const { losses, position, streak, teamName, wins } = team
      return {
        index,
        losses,
        position,
        streak,
        teamName,
        wins,
        conference
      }
    })
    return teams
  })

  const flatArr = [...eastNodes.flat(), ...westNodes.flat()]

  const result = matchTeams(flatArr)
  return result
}

const westNodes = west?.map((item, index) => {
  const teams = item.map((team, index) => {
    const { losses, position, streak, teamName, wins } = team
    return {
      index,
      losses,
      position,
      streak,
      teamName,
      wins,
      conference: "Western"
    }
  })
  return teams
})

//  const flatArr = [...eastNodes.flat(), ...westNodes.flat()]
