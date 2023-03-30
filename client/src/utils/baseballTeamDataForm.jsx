import moment from "moment"

// structures all players of the team
export const baseballDataRestruc = (arr) => {
  const reformedArr = arr.standings.map((item, index) => {
    const { rows } = item
    const innerData = rows.map((row, ind) => {
      const {
        team: { id, name }
      } = row
      return { name, id }
    })
    return innerData
  })
  const amerLeague = reformedArr.slice(0, 1)
  const natLeague = reformedArr.slice(5, 6)

  const playersArr = [...amerLeague.flat(), ...natLeague.flat()]

  return playersArr
}

// function to extract only needed info from players
export const extractPlayerDetails = (arr) =>
  arr.map((team, item) => {
    const { players } = team
    const rawTeamPlayers = players?.map((rawPlayers, index) => {
      const {
        player: {
          dateOfBirthTimestamp,
          name: playerName,
          position,
          team: { name: teamName }
        }
      } = rawPlayers
      return { playerName, position, dateOfBirthTimestamp, teamName }
    })

    return rawTeamPlayers
  })

/* Rooster Years Table
    Feb 17, 1969 - Feb 5, 1970
    Feb 5,1981 - Jan 24, 1982
    23 Jan, 1993 - Feb 9, 1994
    Feb 9, 2005 - Jan 28, 2006
  */

const roosterYears = {
  firstDate: ["17 Feb 1969", "05 Feb 1970"],
  secondDate: ["05 Feb 1981", "24 Jan 1982"],
  thirdDate: ["23 Jan 1993", "09 Feb 1994"],
  fourthDate: ["09 Feb 2005", "28 Jan 2005"]
}

// convert datetimestamps to moment format for later comparison
const convertDateTimestamps = (firstDate, secondDate) => {
  const fDate = new Date(firstDate).valueOf()
  const sDate = new Date(secondDate).valueOf()
  const fDateTs = moment(fDate).format("MMM DD YYYY")
  const sDateTs = moment(sDate).format("MMM DD YYYY")

  return { fDateTs, sDateTs }
}

// Converts astro year timestamps
const firstTS = convertDateTimestamps(
  roosterYears.firstDate[0],
  roosterYears.firstDate[1]
)
const secondTS = convertDateTimestamps(
  roosterYears.secondDate[0],
  roosterYears.secondDate[1]
)
const thirdTS = convertDateTimestamps(
  roosterYears.thirdDate[0],
  roosterYears.thirdDate[1]
)
const fourthTS = convertDateTimestamps(
  roosterYears.fourthDate[0],
  roosterYears.fourthDate[1]
)

// compares date of birth of players to rooster years using moment
const compareDateOfBirths = (dateOfBirth) => {
  const mDOB = moment.unix(dateOfBirth).format("MMM DD YYYY")
  if (
    moment(mDOB).isBetween(firstTS.fDateTs, firstTS.sDateTs, undefined, "[]")
  ) {
    return true
  }
  if (
    moment(mDOB).isBetween(secondTS.fDateTs, secondTS.sDateTs, undefined, "[]")
  ) {
    return true
  }
  if (
    moment(mDOB).isBetween(thirdTS.fDateTs, thirdTS.sDateTs, undefined, "[]")
  ) {
    return true
  }
  if (
    moment(mDOB).isBetween(thirdTS.fDateTs, thirdTS.sDateTs, undefined, "[]")
  ) {
    return true
  } else return false
}

// filters enemy year players and adds property to object

export const filterEYearPlayers = (arr) => {
  const filterTeam = arr.map((team, index) => {
    const filterPlayers = team?.map((player, i) => {
      const { playerName, position, dateOfBirthTimestamp, teamName } = player
      const isRooster = compareDateOfBirths(dateOfBirthTimestamp)
      return { playerName, position, dateOfBirthTimestamp, teamName, isRooster }
    })
    return filterPlayers
  })
  return filterTeam.flat()
}

export const matchEYearPlayers = (mainArr, eYearArr) => {
  const eYearPlayers = eYearArr.filter((val) => val.isRooster === true)
  const matchPlayersWithTeams = mainArr.map((team, i) => {
    const { teamName } = team
    const filterEYearByTeam = eYearPlayers.filter(
      (ele) => ele.teamName === teamName && ele.position === "P"
    )

    return {
      ...team,
      filterEYearByTeam
    }
  })
  return matchPlayersWithTeams
}
