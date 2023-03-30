import { resLP, sumDay } from "./numerologyCalcs"

// Prep team wins/losses to see if numerology matchs

export const matchTeams = (flatArr) => {
  const matches = flatArr?.map((element, i) => {
    const { index, wins, losses, conference, position, streak, teamName } =
      element
    let currWinNum = 0
    let currLossNum = 0
    if ([22].includes(wins)) {
      currWinNum = 22
    }
    if ([33].includes(wins)) {
      currWinNum = 33
    }
    if ([11, 20, 29, 38, 47, 56, 65, 74, 83, 92, 110].includes(wins)) {
      currWinNum = 11
    }
    if ([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109].includes(wins)) {
      currWinNum = 1
    }
    if ([3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102, 111].includes(wins)) {
      currWinNum = 3
    }
    if ([4, 13, 31, 40, 49, 58, 67, 76, 85, 94, 103].includes(wins)) {
      currWinNum = 4
    }
    if ([5, 14, 23, 32, 41, 50, 59, 68, 77, 86, 95, 104].includes(wins)) {
      currWinNum = 5
    }
    if ([6, 15, 24, 42, 51, 60, 69, 78, 87, 96, 105].includes(wins)) {
      currWinNum = 6
    }
    if ([7, 16, 25, 34, 43, 52, 61, 70, 79, 88, 97, 106].includes(wins)) {
      currWinNum = 7
    }
    if ([8, 17, 26, 35, 44, 53, 62, 71, 80, 89, 98, 107].includes(wins)) {
      currWinNum = 8
    }
    if ([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108].includes(wins)) {
      currWinNum = 9
    }
    if ([2, 101].includes(wins)) {
      currWinNum = 2
    }

    // losses match below
    if ([22].includes(losses)) {
      currLossNum = 22
    }
    if ([33].includes(losses)) {
      currLossNum = 33
    }
    if ([11, 20, 29, 38, 47, 56, 65, 74, 83, 92, 110].includes(losses)) {
      currLossNum = 11
    }
    if ([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 100, 109].includes(losses)) {
      currLossNum = 1
    }
    if ([3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93, 102].includes(losses)) {
      currLossNum = 3
    }
    if ([4, 13, 31, 40, 49, 58, 67, 76, 85, 94, 103].includes(losses)) {
      currLossNum = 4
    }
    if ([5, 14, 23, 32, 41, 50, 59, 68, 77, 86, 95, 104].includes(losses)) {
      currLossNum = 5
    }
    if ([6, 15, 24, 42, 51, 60, 69, 78, 87, 96, 105].includes(losses)) {
      currLossNum = 6
    }
    if ([7, 16, 25, 34, 43, 52, 61, 70, 79, 88, 97, 106].includes(losses)) {
      currLossNum = 7
    }
    if ([8, 17, 26, 35, 44, 53, 62, 71, 80, 89, 98, 107].includes(losses)) {
      currLossNum = 8
    }
    if ([9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108].includes(losses)) {
      currLossNum = 9
    }
    if ([2, 101].includes(losses)) {
      currLossNum = 2
    }

    return {
      index,
      wins,
      losses,
      conference,
      position,
      streak,
      teamName,
      currWinNum,
      currLossNum
    }
  })
  return matches
}

export const teamsCurrNumMatch = (stateArr) => {
  const currentTeamMatches = stateArr.filter(
    (obj) =>
      obj.currWinNum === resLP ||
      obj.currWinNum === sumDay ||
      obj.currLossNum === resLP ||
      obj.currLossNum === sumDay
  )

  return currentTeamMatches
}
