export let sportsStats = {}
export function formSportsData(data){
  console.log('sports data :', sportsStats)
 return sportsStats = data
}

// export const sportsStats = {
//   standings: [
//     {
//       descriptions: [],
//       id: 96604,
//       name: "Eastern Conference",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 794869,
//           losses: 21,
//           matches: 74,
//           percentage: 0.716,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8316,
//           scoresFor: 8634,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3410,
//             name: "Milwaukee Bucks",
//             nameCode: "MIL",
//             national: false,
//             shortName: "Milwaukee",
//             slug: "milwaukee-bucks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00471b",
//               secondary: "#eee1c6",
//               text: "#eee1c6"
//             },
//             type: 0,
//             userCount: 82410
//           },
//           wins: 53
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 1.5,
//           id: 794861,
//           losses: 23,
//           matches: 75,
//           percentage: 0.693,
//           position: 2,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8381,
//           scoresFor: 8859,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3422,
//             name: "Boston Celtics",
//             nameCode: "BOS",
//             national: false,
//             shortName: "Boston",
//             slug: "boston-celtics",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008348",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 93777
//           },
//           wins: 52
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 4,
//           id: 794872,
//           losses: 25,
//           matches: 74,
//           percentage: 0.662,
//           position: 3,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8177,
//           scoresFor: 8526,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3420,
//             name: "Philadelphia 76ers",
//             nameCode: "PHI",
//             national: false,
//             shortName: "Philadelphia",
//             slug: "philadelphia-76ers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 49789
//           },
//           wins: 49
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6,
//           id: 794865,
//           losses: 28,
//           matches: 76,
//           percentage: 0.632,
//           position: 4,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8096,
//           scoresFor: 8526,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3432,
//             name: "Cleveland Cavaliers",
//             nameCode: "CLE",
//             national: false,
//             shortName: "Cleveland",
//             slug: "cleveland-cavaliers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#871539",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 30548
//           },
//           wins: 48
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 11.5,
//           id: 794870,
//           losses: 33,
//           matches: 75,
//           percentage: 0.56,
//           position: 5,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8459,
//           scoresFor: 8649,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3421,
//             name: "New York Knicks",
//             nameCode: "NYK",
//             national: false,
//             shortName: "NY Knicks",
//             slug: "new-york-knicks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#f58426",
//               text: "#f58426"
//             },
//             type: 0,
//             userCount: 22769
//           },
//           wins: 42
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 794862,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 6,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8461,
//           scoresFor: 8506,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3436,
//             name: "Brooklyn Nets",
//             nameCode: "BKN",
//             national: false,
//             shortName: "Brooklyn",
//             slug: "brooklyn-nets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 59707
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 794868,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 7,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8244,
//           scoresFor: 8186,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3435,
//             name: "Miami Heat",
//             nameCode: "MIA",
//             national: false,
//             shortName: "Miami",
//             slug: "miami-heat",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#98002e",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 54177
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 794860,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 8,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8838,
//           scoresFor: 8850,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3423,
//             name: "Atlanta Hawks",
//             nameCode: "ATL",
//             national: false,
//             shortName: "Atlanta",
//             slug: "atlanta-hawks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e03a3e",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 28878
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 794873,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 9,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8393,
//           scoresFor: 8474,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3433,
//             name: "Toronto Raptors",
//             nameCode: "TOR",
//             national: false,
//             shortName: "Toronto",
//             slug: "toronto-raptors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 31759
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 17,
//           id: 794864,
//           losses: 38,
//           matches: 74,
//           percentage: 0.486,
//           position: 10,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8306,
//           scoresFor: 8390,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3409,
//             name: "Chicago Bulls",
//             nameCode: "CHI",
//             national: false,
//             shortName: "Chicago",
//             slug: "chicago-bulls",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 49184
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 20.5,
//           id: 794867,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 11,
//           scoresAgainst: 8892,
//           scoresFor: 8684,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3419,
//             name: "Indiana Pacers",
//             nameCode: "IND",
//             national: false,
//             shortName: "Indiana",
//             slug: "indiana-pacers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00275d",
//               secondary: "#ffc633",
//               text: "#ffc633"
//             },
//             type: 0,
//             userCount: 15761
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 20.5,
//           id: 794874,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 12,
//           scoresAgainst: 8537,
//           scoresFor: 8464,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3431,
//             name: "Washington Wizards",
//             nameCode: "WAS",
//             national: false,
//             shortName: "Washington",
//             slug: "washington-wizards",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f5002f",
//               secondary: "#002566",
//               text: "#002566"
//             },
//             type: 0,
//             userCount: 16081
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 21.5,
//           id: 794871,
//           losses: 43,
//           matches: 75,
//           percentage: 0.427,
//           position: 13,
//           scoresAgainst: 8563,
//           scoresFor: 8383,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3437,
//             name: "Orlando Magic",
//             nameCode: "ORL",
//             national: false,
//             shortName: "Orlando",
//             slug: "orlando-magic",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#c4ced3",
//               text: "#c4ced3"
//             },
//             type: 0,
//             userCount: 15352
//           },
//           wins: 32
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 29,
//           id: 794863,
//           losses: 51,
//           matches: 76,
//           percentage: 0.329,
//           position: 14,
//           scoresAgainst: 8900,
//           scoresFor: 8447,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3430,
//             name: "Charlotte Hornets",
//             nameCode: "CHA",
//             national: false,
//             shortName: "Charlotte",
//             slug: "charlotte-hornets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008ca8",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 18119
//           },
//           wins: 25
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 37,
//           id: 794866,
//           losses: 58,
//           matches: 74,
//           percentage: 0.216,
//           position: 15,
//           scoresAgainst: 8778,
//           scoresFor: 8189,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3424,
//             name: "Detroit Pistons",
//             nameCode: "DET",
//             national: false,
//             shortName: "Detroit",
//             slug: "detroit-pistons",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 12568
//           },
//           wins: 16
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1666748266
//     },
//     {
//       descriptions: [],
//       id: 99653,
//       name: "Western Conference",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824971,
//           losses: 24,
//           matches: 74,
//           percentage: 0.676,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8338,
//           scoresFor: 8645,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3417,
//             name: "Denver Nuggets",
//             nameCode: "DEN",
//             national: false,
//             shortName: "Denver",
//             slug: "denver-nuggets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#4fa8ff",
//               secondary: "#f3bb4b",
//               text: "#f3bb4b"
//             },
//             type: 0,
//             userCount: 43153
//           },
//           wins: 50
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 3,
//           id: 824972,
//           losses: 27,
//           matches: 74,
//           percentage: 0.635,
//           position: 2,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8317,
//           scoresFor: 8640,
//           streak: 6,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3415,
//             name: "Memphis Grizzlies",
//             nameCode: "MEM",
//             national: false,
//             shortName: "Memphis",
//             slug: "memphis-grizzlies",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#6189b9",
//               secondary: "#23375b",
//               text: "#23375b"
//             },
//             type: 0,
//             userCount: 38750
//           },
//           wins: 47
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 5,
//           id: 824973,
//           losses: 29,
//           matches: 74,
//           percentage: 0.608,
//           position: 3,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8772,
//           scoresFor: 8959,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3413,
//             name: "Sacramento Kings",
//             nameCode: "SAC",
//             national: false,
//             shortName: "Sacramento",
//             slug: "sacramento-kings",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#724c9f",
//               secondary: "#8e9090",
//               text: "#8e9090"
//             },
//             type: 0,
//             userCount: 16871
//           },
//           wins: 45
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 11,
//           id: 824977,
//           losses: 35,
//           matches: 74,
//           percentage: 0.527,
//           position: 4,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8286,
//           scoresFor: 8412,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3416,
//             name: "Phoenix Suns",
//             nameCode: "PHX",
//             national: false,
//             shortName: "Phoenix",
//             slug: "phoenix-suns",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e56020",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 42916
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 11.5,
//           id: 824974,
//           losses: 36,
//           matches: 75,
//           percentage: 0.52,
//           position: 5,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8442,
//           scoresFor: 8461,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3425,
//             name: "Los Angeles Clippers",
//             nameCode: "LAC",
//             national: false,
//             shortName: "LA Clippers",
//             slug: "los-angeles-clippers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 39076
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 12,
//           id: 824975,
//           losses: 37,
//           matches: 76,
//           percentage: 0.513,
//           position: 6,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8946,
//           scoresFor: 8981,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3428,
//             name: "Golden State Warriors",
//             nameCode: "GSW",
//             national: false,
//             shortName: "Golden State",
//             slug: "golden-state-warriors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#006bb6",
//               text: "#006bb6"
//             },
//             type: 0,
//             userCount: 170600
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 12.5,
//           id: 824979,
//           losses: 37,
//           matches: 75,
//           percentage: 0.507,
//           position: 7,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8704,
//           scoresFor: 8688,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3426,
//             name: "Minnesota Timberwolves",
//             nameCode: "MIN",
//             national: false,
//             shortName: "Minnesota",
//             slug: "minnesota-timberwolves",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#005083",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 17169
//           },
//           wins: 38
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13,
//           id: 824978,
//           losses: 37,
//           matches: 74,
//           percentage: 0.5,
//           position: 8,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8341,
//           scoresFor: 8454,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 5539,
//             name: "New Orleans Pelicans",
//             nameCode: "NOP",
//             national: false,
//             shortName: "New Orleans",
//             slug: "new-orleans-pelicans",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#b4975a",
//               text: "#b4975a"
//             },
//             type: 0,
//             userCount: 19273
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 824983,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 9,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8749,
//           scoresFor: 8728,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3427,
//             name: "Los Angeles Lakers",
//             nameCode: "LAL",
//             national: false,
//             shortName: "LA Lakers",
//             slug: "los-angeles-lakers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#552582",
//               text: "#552582"
//             },
//             type: 0,
//             userCount: 167556
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 824981,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 10,
//           promotion: {
//             id: 14,
//             text: "Qualification Playoffs"
//           },
//           scoresAgainst: 8718,
//           scoresFor: 8803,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3418,
//             name: "Oklahoma City Thunder",
//             nameCode: "OKC",
//             national: false,
//             shortName: "Oklahoma",
//             slug: "oklahoma-city-thunder",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#3479bc",
//               secondary: "#dd4b33",
//               text: "#dd4b33"
//             },
//             type: 0,
//             userCount: 18613
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 14.5,
//           id: 824976,
//           losses: 39,
//           matches: 75,
//           percentage: 0.48,
//           position: 11,
//           scoresAgainst: 8507,
//           scoresFor: 8527,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3411,
//             name: "Dallas Mavericks",
//             nameCode: "DAL",
//             national: false,
//             shortName: "Dallas",
//             slug: "dallas-mavericks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#20385b",
//               text: "#20385b"
//             },
//             type: 0,
//             userCount: 61499
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15,
//           id: 824980,
//           losses: 39,
//           matches: 74,
//           percentage: 0.473,
//           position: 12,
//           scoresAgainst: 8719,
//           scoresFor: 8679,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3434,
//             name: "Utah Jazz",
//             nameCode: "UTA",
//             national: false,
//             shortName: "Utah Jazz",
//             slug: "utah-jazz",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#f9a01b",
//               text: "#f9a01b"
//             },
//             type: 0,
//             userCount: 26411
//           },
//           wins: 35
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 18,
//           id: 824982,
//           losses: 42,
//           matches: 74,
//           percentage: 0.432,
//           position: 13,
//           scoresAgainst: 8600,
//           scoresFor: 8446,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3414,
//             name: "Portland Trail Blazers",
//             nameCode: "POR",
//             national: false,
//             shortName: "Portland",
//             slug: "portland-trail-blazers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f0163a",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 22165
//           },
//           wins: 32
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 31.5,
//           id: 824984,
//           losses: 56,
//           matches: 75,
//           percentage: 0.253,
//           position: 14,
//           scoresAgainst: 9190,
//           scoresFor: 8403,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3429,
//             name: "San Antonio Spurs",
//             nameCode: "SAS",
//             national: false,
//             shortName: "San Antonio",
//             slug: "san-antonio-spurs",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#a6afaf",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 20551
//           },
//           wins: 19
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 32.5,
//           id: 824985,
//           losses: 57,
//           matches: 75,
//           percentage: 0.24,
//           position: 15,
//           scoresAgainst: 8895,
//           scoresFor: 8272,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3412,
//             name: "Houston Rockets",
//             nameCode: "HOU",
//             national: false,
//             shortName: "Houston",
//             slug: "houston-rockets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#ce1141",
//               text: "#ce1141"
//             },
//             type: 0,
//             userCount: 25075
//           },
//           wins: 18
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99648,
//       name: "Central Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824946,
//           losses: 21,
//           matches: 74,
//           percentage: 0.716,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8316,
//           scoresFor: 8634,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3410,
//             name: "Milwaukee Bucks",
//             nameCode: "MIL",
//             national: false,
//             shortName: "Milwaukee",
//             slug: "milwaukee-bucks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00471b",
//               secondary: "#eee1c6",
//               text: "#eee1c6"
//             },
//             type: 0,
//             userCount: 82410
//           },
//           wins: 53
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6,
//           id: 824947,
//           losses: 28,
//           matches: 76,
//           percentage: 0.632,
//           position: 2,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8096,
//           scoresFor: 8526,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3432,
//             name: "Cleveland Cavaliers",
//             nameCode: "CLE",
//             national: false,
//             shortName: "Cleveland",
//             slug: "cleveland-cavaliers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#871539",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 30548
//           },
//           wins: 48
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 17,
//           id: 824948,
//           losses: 38,
//           matches: 74,
//           percentage: 0.486,
//           position: 3,
//           scoresAgainst: 8306,
//           scoresFor: 8390,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3409,
//             name: "Chicago Bulls",
//             nameCode: "CHI",
//             national: false,
//             shortName: "Chicago",
//             slug: "chicago-bulls",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 49184
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 20.5,
//           id: 824949,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 4,
//           scoresAgainst: 8892,
//           scoresFor: 8684,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3419,
//             name: "Indiana Pacers",
//             nameCode: "IND",
//             national: false,
//             shortName: "Indiana",
//             slug: "indiana-pacers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00275d",
//               secondary: "#ffc633",
//               text: "#ffc633"
//             },
//             type: 0,
//             userCount: 15761
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 37,
//           id: 824950,
//           losses: 58,
//           matches: 74,
//           percentage: 0.216,
//           position: 5,
//           scoresAgainst: 8778,
//           scoresFor: 8189,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3424,
//             name: "Detroit Pistons",
//             nameCode: "DET",
//             national: false,
//             shortName: "Detroit",
//             slug: "detroit-pistons",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 12568
//           },
//           wins: 16
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99647,
//       name: "Atlantic Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824941,
//           losses: 23,
//           matches: 75,
//           percentage: 0.693,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8381,
//           scoresFor: 8859,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3422,
//             name: "Boston Celtics",
//             nameCode: "BOS",
//             national: false,
//             shortName: "Boston",
//             slug: "boston-celtics",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008348",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 93777
//           },
//           wins: 52
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 2.5,
//           id: 824942,
//           losses: 25,
//           matches: 74,
//           percentage: 0.662,
//           position: 2,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8177,
//           scoresFor: 8526,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3420,
//             name: "Philadelphia 76ers",
//             nameCode: "PHI",
//             national: false,
//             shortName: "Philadelphia",
//             slug: "philadelphia-76ers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 49789
//           },
//           wins: 49
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 10,
//           id: 824944,
//           losses: 33,
//           matches: 75,
//           percentage: 0.56,
//           position: 3,
//           scoresAgainst: 8459,
//           scoresFor: 8649,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3421,
//             name: "New York Knicks",
//             nameCode: "NYK",
//             national: false,
//             shortName: "NY Knicks",
//             slug: "new-york-knicks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#f58426",
//               text: "#f58426"
//             },
//             type: 0,
//             userCount: 22769
//           },
//           wins: 42
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 12,
//           id: 824943,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 4,
//           scoresAgainst: 8461,
//           scoresFor: 8506,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3436,
//             name: "Brooklyn Nets",
//             nameCode: "BKN",
//             national: false,
//             shortName: "Brooklyn",
//             slug: "brooklyn-nets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 59707
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15,
//           id: 824945,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 5,
//           scoresAgainst: 8393,
//           scoresFor: 8474,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3433,
//             name: "Toronto Raptors",
//             nameCode: "TOR",
//             national: false,
//             shortName: "Toronto",
//             slug: "toronto-raptors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 31759
//           },
//           wins: 37
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99651,
//       name: "Southeast Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824961,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 1,
//           scoresAgainst: 8244,
//           scoresFor: 8186,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3435,
//             name: "Miami Heat",
//             nameCode: "MIA",
//             national: false,
//             shortName: "Miami",
//             slug: "miami-heat",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#98002e",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 54177
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 3,
//           id: 824962,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 2,
//           scoresAgainst: 8838,
//           scoresFor: 8850,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3423,
//             name: "Atlanta Hawks",
//             nameCode: "ATL",
//             national: false,
//             shortName: "Atlanta",
//             slug: "atlanta-hawks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e03a3e",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 28878
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 7,
//           id: 824963,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 3,
//           scoresAgainst: 8537,
//           scoresFor: 8464,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3431,
//             name: "Washington Wizards",
//             nameCode: "WAS",
//             national: false,
//             shortName: "Washington",
//             slug: "washington-wizards",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f5002f",
//               secondary: "#002566",
//               text: "#002566"
//             },
//             type: 0,
//             userCount: 16081
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 8,
//           id: 824964,
//           losses: 43,
//           matches: 75,
//           percentage: 0.427,
//           position: 4,
//           scoresAgainst: 8563,
//           scoresFor: 8383,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3437,
//             name: "Orlando Magic",
//             nameCode: "ORL",
//             national: false,
//             shortName: "Orlando",
//             slug: "orlando-magic",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#c4ced3",
//               text: "#c4ced3"
//             },
//             type: 0,
//             userCount: 15352
//           },
//           wins: 32
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15.5,
//           id: 824965,
//           losses: 51,
//           matches: 76,
//           percentage: 0.329,
//           position: 5,
//           scoresAgainst: 8900,
//           scoresFor: 8447,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3430,
//             name: "Charlotte Hornets",
//             nameCode: "CHA",
//             national: false,
//             shortName: "Charlotte",
//             slug: "charlotte-hornets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008ca8",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 18119
//           },
//           wins: 25
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99649,
//       name: "Northwest Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824951,
//           losses: 24,
//           matches: 74,
//           percentage: 0.676,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8338,
//           scoresFor: 8645,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3417,
//             name: "Denver Nuggets",
//             nameCode: "DEN",
//             national: false,
//             shortName: "Denver",
//             slug: "denver-nuggets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#4fa8ff",
//               secondary: "#f3bb4b",
//               text: "#f3bb4b"
//             },
//             type: 0,
//             userCount: 43153
//           },
//           wins: 50
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 12.5,
//           id: 824952,
//           losses: 37,
//           matches: 75,
//           percentage: 0.507,
//           position: 2,
//           scoresAgainst: 8704,
//           scoresFor: 8688,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3426,
//             name: "Minnesota Timberwolves",
//             nameCode: "MIN",
//             national: false,
//             shortName: "Minnesota",
//             slug: "minnesota-timberwolves",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#005083",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 17169
//           },
//           wins: 38
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 824954,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 3,
//           scoresAgainst: 8718,
//           scoresFor: 8803,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3418,
//             name: "Oklahoma City Thunder",
//             nameCode: "OKC",
//             national: false,
//             shortName: "Oklahoma",
//             slug: "oklahoma-city-thunder",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#3479bc",
//               secondary: "#dd4b33",
//               text: "#dd4b33"
//             },
//             type: 0,
//             userCount: 18613
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15,
//           id: 824953,
//           losses: 39,
//           matches: 74,
//           percentage: 0.473,
//           position: 4,
//           scoresAgainst: 8719,
//           scoresFor: 8679,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3434,
//             name: "Utah Jazz",
//             nameCode: "UTA",
//             national: false,
//             shortName: "Utah Jazz",
//             slug: "utah-jazz",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#f9a01b",
//               text: "#f9a01b"
//             },
//             type: 0,
//             userCount: 26411
//           },
//           wins: 35
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 18,
//           id: 824955,
//           losses: 42,
//           matches: 74,
//           percentage: 0.432,
//           position: 5,
//           scoresAgainst: 8600,
//           scoresFor: 8446,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3414,
//             name: "Portland Trail Blazers",
//             nameCode: "POR",
//             national: false,
//             shortName: "Portland",
//             slug: "portland-trail-blazers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f0163a",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 22165
//           },
//           wins: 32
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99650,
//       name: "Pacific Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824956,
//           losses: 29,
//           matches: 74,
//           percentage: 0.608,
//           position: 1,
//           scoresAgainst: 8772,
//           scoresFor: 8959,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3413,
//             name: "Sacramento Kings",
//             nameCode: "SAC",
//             national: false,
//             shortName: "Sacramento",
//             slug: "sacramento-kings",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#724c9f",
//               secondary: "#8e9090",
//               text: "#8e9090"
//             },
//             type: 0,
//             userCount: 16871
//           },
//           wins: 45
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6,
//           id: 824959,
//           losses: 35,
//           matches: 74,
//           percentage: 0.527,
//           position: 2,
//           scoresAgainst: 8286,
//           scoresFor: 8412,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3416,
//             name: "Phoenix Suns",
//             nameCode: "PHX",
//             national: false,
//             shortName: "Phoenix",
//             slug: "phoenix-suns",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e56020",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 42916
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6.5,
//           id: 824957,
//           losses: 36,
//           matches: 75,
//           percentage: 0.52,
//           position: 3,
//           scoresAgainst: 8442,
//           scoresFor: 8461,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3425,
//             name: "Los Angeles Clippers",
//             nameCode: "LAC",
//             national: false,
//             shortName: "LA Clippers",
//             slug: "los-angeles-clippers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 39076
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 7,
//           id: 824958,
//           losses: 37,
//           matches: 76,
//           percentage: 0.513,
//           position: 4,
//           scoresAgainst: 8946,
//           scoresFor: 8981,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3428,
//             name: "Golden State Warriors",
//             nameCode: "GSW",
//             national: false,
//             shortName: "Golden State",
//             slug: "golden-state-warriors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#006bb6",
//               text: "#006bb6"
//             },
//             type: 0,
//             userCount: 170600
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 8.5,
//           id: 824960,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 5,
//           scoresAgainst: 8749,
//           scoresFor: 8728,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3427,
//             name: "Los Angeles Lakers",
//             nameCode: "LAL",
//             national: false,
//             shortName: "LA Lakers",
//             slug: "los-angeles-lakers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#552582",
//               text: "#552582"
//             },
//             type: 0,
//             userCount: 167556
//           },
//           wins: 37
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99652,
//       name: "Southwest Division",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824966,
//           losses: 27,
//           matches: 74,
//           percentage: 0.635,
//           position: 1,
//           promotion: {
//             id: 6,
//             text: "Playoffs"
//           },
//           scoresAgainst: 8317,
//           scoresFor: 8640,
//           streak: 6,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3415,
//             name: "Memphis Grizzlies",
//             nameCode: "MEM",
//             national: false,
//             shortName: "Memphis",
//             slug: "memphis-grizzlies",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#6189b9",
//               secondary: "#23375b",
//               text: "#23375b"
//             },
//             type: 0,
//             userCount: 38750
//           },
//           wins: 47
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 10,
//           id: 824968,
//           losses: 37,
//           matches: 74,
//           percentage: 0.5,
//           position: 2,
//           scoresAgainst: 8341,
//           scoresFor: 8454,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 5539,
//             name: "New Orleans Pelicans",
//             nameCode: "NOP",
//             national: false,
//             shortName: "New Orleans",
//             slug: "new-orleans-pelicans",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#b4975a",
//               text: "#b4975a"
//             },
//             type: 0,
//             userCount: 19273
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 11.5,
//           id: 824967,
//           losses: 39,
//           matches: 75,
//           percentage: 0.48,
//           position: 3,
//           scoresAgainst: 8507,
//           scoresFor: 8527,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3411,
//             name: "Dallas Mavericks",
//             nameCode: "DAL",
//             national: false,
//             shortName: "Dallas",
//             slug: "dallas-mavericks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#20385b",
//               text: "#20385b"
//             },
//             type: 0,
//             userCount: 61499
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 28.5,
//           id: 824969,
//           losses: 56,
//           matches: 75,
//           percentage: 0.253,
//           position: 4,
//           scoresAgainst: 9190,
//           scoresFor: 8403,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3429,
//             name: "San Antonio Spurs",
//             nameCode: "SAS",
//             national: false,
//             shortName: "San Antonio",
//             slug: "san-antonio-spurs",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#a6afaf",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 20551
//           },
//           wins: 19
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 29.5,
//           id: 824970,
//           losses: 57,
//           matches: 75,
//           percentage: 0.24,
//           position: 5,
//           scoresAgainst: 8895,
//           scoresFor: 8272,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3412,
//             name: "Houston Rockets",
//             nameCode: "HOU",
//             national: false,
//             shortName: "Houston",
//             slug: "houston-rockets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#ce1141",
//               text: "#ce1141"
//             },
//             type: 0,
//             userCount: 25075
//           },
//           wins: 18
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1675166910
//     },
//     {
//       descriptions: [],
//       id: 99646,
//       name: "NBA",
//       rows: [
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 0,
//           id: 824913,
//           losses: 21,
//           matches: 74,
//           percentage: 0.716,
//           position: 1,
//           scoresAgainst: 8316,
//           scoresFor: 8634,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3410,
//             name: "Milwaukee Bucks",
//             nameCode: "MIL",
//             national: false,
//             shortName: "Milwaukee",
//             slug: "milwaukee-bucks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00471b",
//               secondary: "#eee1c6",
//               text: "#eee1c6"
//             },
//             type: 0,
//             userCount: 82410
//           },
//           wins: 53
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 1.5,
//           id: 824911,
//           losses: 23,
//           matches: 75,
//           percentage: 0.693,
//           position: 2,
//           scoresAgainst: 8381,
//           scoresFor: 8859,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3422,
//             name: "Boston Celtics",
//             nameCode: "BOS",
//             national: false,
//             shortName: "Boston",
//             slug: "boston-celtics",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008348",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 93777
//           },
//           wins: 52
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 3,
//           id: 824912,
//           losses: 24,
//           matches: 74,
//           percentage: 0.676,
//           position: 3,
//           scoresAgainst: 8338,
//           scoresFor: 8645,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3417,
//             name: "Denver Nuggets",
//             nameCode: "DEN",
//             national: false,
//             shortName: "Denver",
//             slug: "denver-nuggets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#4fa8ff",
//               secondary: "#f3bb4b",
//               text: "#f3bb4b"
//             },
//             type: 0,
//             userCount: 43153
//           },
//           wins: 50
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 4,
//           id: 824914,
//           losses: 25,
//           matches: 74,
//           percentage: 0.662,
//           position: 4,
//           scoresAgainst: 8177,
//           scoresFor: 8526,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3420,
//             name: "Philadelphia 76ers",
//             nameCode: "PHI",
//             national: false,
//             shortName: "Philadelphia",
//             slug: "philadelphia-76ers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 49789
//           },
//           wins: 49
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6,
//           id: 824915,
//           losses: 27,
//           matches: 74,
//           percentage: 0.635,
//           position: 5,
//           scoresAgainst: 8317,
//           scoresFor: 8640,
//           streak: 6,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3415,
//             name: "Memphis Grizzlies",
//             nameCode: "MEM",
//             national: false,
//             shortName: "Memphis",
//             slug: "memphis-grizzlies",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#6189b9",
//               secondary: "#23375b",
//               text: "#23375b"
//             },
//             type: 0,
//             userCount: 38750
//           },
//           wins: 47
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 6,
//           id: 824917,
//           losses: 28,
//           matches: 76,
//           percentage: 0.632,
//           position: 6,
//           scoresAgainst: 8096,
//           scoresFor: 8526,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3432,
//             name: "Cleveland Cavaliers",
//             nameCode: "CLE",
//             national: false,
//             shortName: "Cleveland",
//             slug: "cleveland-cavaliers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#871539",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 30548
//           },
//           wins: 48
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 8,
//           id: 824918,
//           losses: 29,
//           matches: 74,
//           percentage: 0.608,
//           position: 7,
//           scoresAgainst: 8772,
//           scoresFor: 8959,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3413,
//             name: "Sacramento Kings",
//             nameCode: "SAC",
//             national: false,
//             shortName: "Sacramento",
//             slug: "sacramento-kings",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#724c9f",
//               secondary: "#8e9090",
//               text: "#8e9090"
//             },
//             type: 0,
//             userCount: 16871
//           },
//           wins: 45
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 11.5,
//           id: 824920,
//           losses: 33,
//           matches: 75,
//           percentage: 0.56,
//           position: 8,
//           scoresAgainst: 8459,
//           scoresFor: 8649,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3421,
//             name: "New York Knicks",
//             nameCode: "NYK",
//             national: false,
//             shortName: "NY Knicks",
//             slug: "new-york-knicks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#f58426",
//               text: "#f58426"
//             },
//             type: 0,
//             userCount: 22769
//           },
//           wins: 42
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 824916,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 9,
//           scoresAgainst: 8461,
//           scoresFor: 8506,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3436,
//             name: "Brooklyn Nets",
//             nameCode: "BKN",
//             national: false,
//             shortName: "Brooklyn",
//             slug: "brooklyn-nets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 59707
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 13.5,
//           id: 824919,
//           losses: 35,
//           matches: 75,
//           percentage: 0.533,
//           position: 10,
//           scoresAgainst: 8244,
//           scoresFor: 8186,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3435,
//             name: "Miami Heat",
//             nameCode: "MIA",
//             national: false,
//             shortName: "Miami",
//             slug: "miami-heat",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#98002e",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 54177
//           },
//           wins: 40
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 14,
//           id: 824924,
//           losses: 35,
//           matches: 74,
//           percentage: 0.527,
//           position: 11,
//           scoresAgainst: 8286,
//           scoresFor: 8412,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3416,
//             name: "Phoenix Suns",
//             nameCode: "PHX",
//             national: false,
//             shortName: "Phoenix",
//             slug: "phoenix-suns",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e56020",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 42916
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 14.5,
//           id: 824921,
//           losses: 36,
//           matches: 75,
//           percentage: 0.52,
//           position: 12,
//           scoresAgainst: 8442,
//           scoresFor: 8461,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3425,
//             name: "Los Angeles Clippers",
//             nameCode: "LAC",
//             national: false,
//             shortName: "LA Clippers",
//             slug: "los-angeles-clippers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 39076
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15,
//           id: 824922,
//           losses: 37,
//           matches: 76,
//           percentage: 0.513,
//           position: 13,
//           scoresAgainst: 8946,
//           scoresFor: 8981,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3428,
//             name: "Golden State Warriors",
//             nameCode: "GSW",
//             national: false,
//             shortName: "Golden State",
//             slug: "golden-state-warriors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#006bb6",
//               text: "#006bb6"
//             },
//             type: 0,
//             userCount: 170600
//           },
//           wins: 39
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 15.5,
//           id: 824926,
//           losses: 37,
//           matches: 75,
//           percentage: 0.507,
//           position: 14,
//           scoresAgainst: 8704,
//           scoresFor: 8688,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3426,
//             name: "Minnesota Timberwolves",
//             nameCode: "MIN",
//             national: false,
//             shortName: "Minnesota",
//             slug: "minnesota-timberwolves",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#005083",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 17169
//           },
//           wins: 38
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16,
//           id: 824925,
//           losses: 37,
//           matches: 74,
//           percentage: 0.5,
//           position: 15,
//           scoresAgainst: 8341,
//           scoresFor: 8454,
//           streak: 4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 5539,
//             name: "New Orleans Pelicans",
//             nameCode: "NOP",
//             national: false,
//             shortName: "New Orleans",
//             slug: "new-orleans-pelicans",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#b4975a",
//               text: "#b4975a"
//             },
//             type: 0,
//             userCount: 19273
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 824928,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 16,
//           scoresAgainst: 8838,
//           scoresFor: 8850,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3423,
//             name: "Atlanta Hawks",
//             nameCode: "ATL",
//             national: false,
//             shortName: "Atlanta",
//             slug: "atlanta-hawks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#e03a3e",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 28878
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 824934,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 17,
//           scoresAgainst: 8749,
//           scoresFor: 8728,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3427,
//             name: "Los Angeles Lakers",
//             nameCode: "LAL",
//             national: false,
//             shortName: "LA Lakers",
//             slug: "los-angeles-lakers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#fdb927",
//               secondary: "#552582",
//               text: "#552582"
//             },
//             type: 0,
//             userCount: 167556
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 824935,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 18,
//           scoresAgainst: 8393,
//           scoresFor: 8474,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3433,
//             name: "Toronto Raptors",
//             nameCode: "TOR",
//             national: false,
//             shortName: "Toronto",
//             slug: "toronto-raptors",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 31759
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 16.5,
//           id: 824930,
//           losses: 38,
//           matches: 75,
//           percentage: 0.493,
//           position: 19,
//           scoresAgainst: 8718,
//           scoresFor: 8803,
//           streak: 1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3418,
//             name: "Oklahoma City Thunder",
//             nameCode: "OKC",
//             national: false,
//             shortName: "Oklahoma",
//             slug: "oklahoma-city-thunder",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#3479bc",
//               secondary: "#dd4b33",
//               text: "#dd4b33"
//             },
//             type: 0,
//             userCount: 18613
//           },
//           wins: 37
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 17,
//           id: 824932,
//           losses: 38,
//           matches: 74,
//           percentage: 0.486,
//           position: 20,
//           scoresAgainst: 8306,
//           scoresFor: 8390,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3409,
//             name: "Chicago Bulls",
//             nameCode: "CHI",
//             national: false,
//             shortName: "Chicago",
//             slug: "chicago-bulls",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ce1141",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 49184
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 17.5,
//           id: 824923,
//           losses: 39,
//           matches: 75,
//           percentage: 0.48,
//           position: 21,
//           scoresAgainst: 8507,
//           scoresFor: 8527,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3411,
//             name: "Dallas Mavericks",
//             nameCode: "DAL",
//             national: false,
//             shortName: "Dallas",
//             slug: "dallas-mavericks",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#20385b",
//               text: "#20385b"
//             },
//             type: 0,
//             userCount: 61499
//           },
//           wins: 36
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 18,
//           id: 824927,
//           losses: 39,
//           matches: 74,
//           percentage: 0.473,
//           position: 22,
//           scoresAgainst: 8719,
//           scoresFor: 8679,
//           streak: -3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3434,
//             name: "Utah Jazz",
//             nameCode: "UTA",
//             national: false,
//             shortName: "Utah Jazz",
//             slug: "utah-jazz",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#002b5c",
//               secondary: "#f9a01b",
//               text: "#f9a01b"
//             },
//             type: 0,
//             userCount: 26411
//           },
//           wins: 35
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 20.5,
//           id: 824933,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 23,
//           scoresAgainst: 8892,
//           scoresFor: 8684,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3419,
//             name: "Indiana Pacers",
//             nameCode: "IND",
//             national: false,
//             shortName: "Indiana",
//             slug: "indiana-pacers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#00275d",
//               secondary: "#ffc633",
//               text: "#ffc633"
//             },
//             type: 0,
//             userCount: 15761
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 20.5,
//           id: 824929,
//           losses: 42,
//           matches: 75,
//           percentage: 0.44,
//           position: 24,
//           scoresAgainst: 8537,
//           scoresFor: 8464,
//           streak: -1,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3431,
//             name: "Washington Wizards",
//             nameCode: "WAS",
//             national: false,
//             shortName: "Washington",
//             slug: "washington-wizards",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f5002f",
//               secondary: "#002566",
//               text: "#002566"
//             },
//             type: 0,
//             userCount: 16081
//           },
//           wins: 33
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 21,
//           id: 824931,
//           losses: 42,
//           matches: 74,
//           percentage: 0.432,
//           position: 25,
//           scoresAgainst: 8600,
//           scoresFor: 8446,
//           streak: -2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3414,
//             name: "Portland Trail Blazers",
//             nameCode: "POR",
//             national: false,
//             shortName: "Portland",
//             slug: "portland-trail-blazers",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#f0163a",
//               secondary: "#ffffff",
//               text: "#ffffff"
//             },
//             type: 0,
//             userCount: 22165
//           },
//           wins: 32
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 21.5,
//           id: 824936,
//           losses: 43,
//           matches: 75,
//           percentage: 0.427,
//           position: 26,
//           scoresAgainst: 8563,
//           scoresFor: 8383,
//           streak: 3,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3437,
//             name: "Orlando Magic",
//             nameCode: "ORL",
//             national: false,
//             shortName: "Orlando",
//             slug: "orlando-magic",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#007dc5",
//               secondary: "#c4ced3",
//               text: "#c4ced3"
//             },
//             type: 0,
//             userCount: 15352
//           },
//           wins: 32
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 29,
//           id: 824937,
//           losses: 51,
//           matches: 76,
//           percentage: 0.329,
//           position: 27,
//           scoresAgainst: 8900,
//           scoresFor: 8447,
//           streak: 2,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3430,
//             name: "Charlotte Hornets",
//             nameCode: "CHA",
//             national: false,
//             shortName: "Charlotte",
//             slug: "charlotte-hornets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#008ca8",
//               secondary: "#1d1160",
//               text: "#1d1160"
//             },
//             type: 0,
//             userCount: 18119
//           },
//           wins: 25
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 34.5,
//           id: 824938,
//           losses: 56,
//           matches: 75,
//           percentage: 0.253,
//           position: 28,
//           scoresAgainst: 9190,
//           scoresFor: 8403,
//           streak: -4,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3429,
//             name: "San Antonio Spurs",
//             nameCode: "SAS",
//             national: false,
//             shortName: "San Antonio",
//             slug: "san-antonio-spurs",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#a6afaf",
//               secondary: "#000000",
//               text: "#000000"
//             },
//             type: 0,
//             userCount: 20551
//           },
//           wins: 19
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 35.5,
//           id: 824940,
//           losses: 57,
//           matches: 75,
//           percentage: 0.24,
//           position: 29,
//           scoresAgainst: 8895,
//           scoresFor: 8272,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3412,
//             name: "Houston Rockets",
//             nameCode: "HOU",
//             national: false,
//             shortName: "Houston",
//             slug: "houston-rockets",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#ffffff",
//               secondary: "#ce1141",
//               text: "#ce1141"
//             },
//             type: 0,
//             userCount: 25075
//           },
//           wins: 18
//         },
//         {
//           descriptions: [],
//           draws: 0,
//           gamesBehind: 37,
//           id: 824939,
//           losses: 58,
//           matches: 74,
//           percentage: 0.216,
//           position: 30,
//           scoresAgainst: 8778,
//           scoresFor: 8189,
//           streak: -5,
//           team: {
//             disabled: false,
//             gender: "M",
//             id: 3424,
//             name: "Detroit Pistons",
//             nameCode: "DET",
//             national: false,
//             shortName: "Detroit",
//             slug: "detroit-pistons",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             },
//             teamColors: {
//               primary: "#006bb6",
//               secondary: "#ed174c",
//               text: "#ed174c"
//             },
//             type: 0,
//             userCount: 12568
//           },
//           wins: 16
//         }
//       ],
//       tournament: {
//         category: {
//           alpha2: "US",
//           flag: "usa",
//           id: 15,
//           name: "USA",
//           slug: "usa",
//           sport: {
//             id: 2,
//             name: "Basketball",
//             slug: "basketball"
//           }
//         },
//         id: 177,
//         name: "NBA",
//         priority: 124,
//         slug: "nba",
//         uniqueTournament: {
//           category: {
//             alpha2: "US",
//             flag: "usa",
//             id: 15,
//             name: "USA",
//             slug: "usa",
//             sport: {
//               id: 2,
//               name: "Basketball",
//               slug: "basketball"
//             }
//           },
//           displayInverseHomeAwayTeams: true,
//           hasPerformanceGraphFeature: false,
//           id: 132,
//           name: "NBA",
//           slug: "nba",
//           userCount: 211608
//         }
//       },
//       type: "total",
//       updatedAtTimestamp: 1678784407
//     }
//   ]
// }
