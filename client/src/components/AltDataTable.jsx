import React, { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MantineReactTable } from "mantine-react-table"
import { Box, Button, Menu, Text, Title } from "@mantine/core"

import Loading from "./Loading"
// import { flatArr } from "../utils/sportsData"
import { sumDay, resLP } from "../utils/numerologyCalcs"
import { matchTeams } from "../utils/winLossMatch"
import {
  getStats,
  getBaseballStats,
  filterPicks,
  getPlayerDetails
} from "../features/edges/edgesSlice"

const AltDataTable = () => {
  const dispatch = useDispatch()
  const {
    loading,
    formattedData,
    teamsFilteredPicks,
    arePicksFiltered,
    eYearFormatData,
    eYearPlayerFilter,
    baseballStatsLoading,
    playerDetailsLoading,
    basketballPicksLoading,
    baseballStatsLoaded
  } = useSelector((store) => store.edges)

  // data coming from api
  let rowData
  if (arePicksFiltered) {
    rowData = teamsFilteredPicks
  } else if (eYearPlayerFilter) {
    rowData = eYearFormatData
  } else rowData = formattedData

  let data = rowData

  const columnsMain = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "teamName",
        header: "Team"
      },
      {
        accessorKey: "wins",
        header: "Wins"
      },
      {
        accessorKey: "losses",
        header: "Losses"
      },
      {
        accessorKey: "streak",
        header: "Streak"
      },
      {
        accessorKey: "conference",
        header: "Conference"
      },
      {
        accessorKey: "position",
        header: "Position"
      },

      {
        accessorKey: "currWinNum",
        header: "Win Num",

        Cell: ({ renderedCellValue, cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() === resLP
                  ? theme.colors.green[8]
                  : cell.getValue() === sumDay
                  ? theme.colors.yellow[8]
                  : null,
              borderRadius: "4px",
              // color: "#fff",
              maxWidth: "9ch",
              padding: "4px"
            })}
          >
            {renderedCellValue}
          </Box>
        )
      },
      {
        accessorKey: "currLossNum",
        header: "Loss Num"
      }
    ],
    []
    //end
  )
  const columnsAlt = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "teamName",
        header: "Team"
      },
      {
        accessorKey: "wins",
        header: "Wins"
      },
      {
        accessorKey: "losses",
        header: "Losses"
      },
      {
        accessorKey: "conference",
        header: "Conference"
      },
      {
        accessorKey: "position",
        header: "Position"
      },
      {
        accessorKey: "currWinNum",
        header: "Win Num",

        Cell: ({ renderedCellValue, cell }) => (
          <Box
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() === resLP
                  ? theme.colors.green[8]
                  : cell.getValue() === sumDay
                  ? theme.colors.yellow[8]
                  : null,
              borderRadius: "4px",
              // color: "#fff",
              maxWidth: "9ch",
              padding: "4px"
            })}
          >
            {renderedCellValue}
          </Box>
        )
      },
      {
        accessorKey: "currLossNum",
        header: "Loss Num"
      },
      {
        accessorFn: (row) =>
          row.filterEYearByTeam?.map((player, index) => {
            const { playerName } = player
            return row.filterEYearByTeam.length - 1 === index
              ? `${playerName}`
              : `${playerName}, `
          }),
        id: "eyear",
        header: "E-Year Pitchers",
        Cell: ({ renderedCellValue, row }) => <Box>{renderedCellValue}</Box>
      }
    ],
    []
    //end
  )

  const statsHandler = () => {
    dispatch(getStats())
  }
  const baseballStatsHandler = () => {
    dispatch(getBaseballStats())
  }
  const filteredHandler = () => {
    eYearPlayerFilter
      ? dispatch(filterPicks(eYearFormatData))
      : dispatch(filterPicks(formattedData))
  }
  const pitchersHandler = () => {
    dispatch(getPlayerDetails())
  }

  const getCellStyle = () => ({
    style: { height: `70px` }
  })

  return (
    <section>
      <div className="divider"></div>
      <div className="max-w-full flex justify-center gap-2 ">
        <button className="btn btn-info" onClick={statsHandler}>
          {basketballPicksLoading ? <Loading /> : "Get Basketball Picks"}
        </button>
        <button className="btn btn-info" onClick={baseballStatsHandler}>
          {baseballStatsLoading ? <Loading /> : "Get Baseball Picks"}
        </button>
        <button className="btn btn-info" onClick={filteredHandler}>
          Filter Picks
        </button>

        <button className="btn btn-info" onClick={pitchersHandler}>
          {playerDetailsLoading ? <Loading /> : "Filter E-Year Pitchers"}
        </button>
      </div>
      <div className="flex justify-center mx-auto m-2 overflow-auto">
        {!baseballStatsLoaded ? (
          <MantineReactTable columns={columnsMain} data={data} />
        ) : (
          <MantineReactTable columns={columnsAlt} data={data} />
        )}
      </div>
    </section>
  )
}

export default AltDataTable
