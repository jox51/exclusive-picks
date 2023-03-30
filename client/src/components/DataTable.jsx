import React, { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
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
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell
} from "@table-library/react-table-library/table"
import { useTheme } from "@table-library/react-table-library/theme"
// import { getTheme } from "@table-library/react-table-library/baseline"
import { usePagination } from "@table-library/react-table-library/pagination"

import {
  DEFAULT_OPTIONS,
  getTheme
} from "@table-library/react-table-library/chakra-ui"
import { Box, HStack, Button, IconButton } from "@chakra-ui/react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"

const DataTable = () => {
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
    basketballPicksLoading
  } = useSelector((store) => store.edges)

  // const theme = useTheme([
  //   getTheme(),
  //   {
  //     HeaderRow: `
  //       background-color: #eaf5fd;
  //     `,
  //     Row: `
  //       &:nth-of-type(odd) {
  //         background-color: #d2e9fb;
  //       }

  //       &:nth-of-type(even) {
  //         background-color: #eaf5fd;
  //       }
  //     `,
  //     Table: ``
  //   }
  // ])

  const chakraTheme = getTheme(DEFAULT_OPTIONS)
  const theme = useTheme(chakraTheme)

  let nodes
  if (arePicksFiltered) {
    nodes = teamsFilteredPicks
  } else if (eYearPlayerFilter) {
    nodes = eYearFormatData
  } else nodes = formattedData

  // const COLUMNS = [
  //   { label: "Team", renderCell: (item) => item.teamName },
  //   {
  //     label: "Wins",
  //     renderCell: (item) => item.wins
  //   },
  //   { label: "Losses", renderCell: (item) => item.losses },

  //   { label: "Streak", renderCell: (item) => item.streak },
  //   { label: "Position", renderCell: (item) => item.position },
  //   { label: "Conference", renderCell: (item) => item.conference },
  //   { label: "CurrWinNum", renderCell: (item) => item.currWinNum },
  //   { label: "CurrLossNum", renderCell: (item) => item.currLossNum },
  //   {
  //     label: "Enemy Year Player",
  //     renderCell: eYearPlayerFilter
  //       ? (item) => item.filterEYearByTeam[0].isRooster
  //       : ""
  //   }
  // ]
  const data = { nodes }
  const resize = { resizerHighlight: "#dde2eb", resizerWidth: 25 }

  // pagination settings
  const pagination = usePagination(
    data,
    {
      state: {
        page: 0,
        size: 10
      },
      onChange: onPaginationChange
    },
    { isServer: false }
  )

  function onPaginationChange(action, state) {
    console.log(action, state)
  }

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
      <div className="flex justify-center mx-auto max-w-6xl py-2">
        <Box p={3} borderWidth="1px" borderRadius="lg">
          <Table
            data={data}
            theme={theme}
            layout={{ horizontalScroll: true }}
            pagination={pagination}
          >
            {(tableList) => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCell resize={resize}>Team</HeaderCell>
                    <HeaderCell resize={resize}>Wins</HeaderCell>
                    <HeaderCell resize={resize}>Losses</HeaderCell>
                    <HeaderCell resize={resize}>Streak</HeaderCell>
                    <HeaderCell resize={resize}>Position</HeaderCell>
                    <HeaderCell resize={resize}>Conference</HeaderCell>
                    <HeaderCell resize={resize}>Win Num</HeaderCell>
                    <HeaderCell resize={resize}>Loss Num</HeaderCell>
                    <HeaderCell
                      hide={!eYearPlayerFilter}
                      resize={{ minWidth: 50 }}
                    >
                      E-Year Pitcher
                    </HeaderCell>
                  </HeaderRow>
                </Header>
                <Body>
                  {tableList.map((item) => (
                    <Row key={item.id} item={item}>
                      <Cell>{item.teamName}</Cell>
                      <Cell>{item.wins}</Cell>
                      <Cell>{item.losses}</Cell>
                      <Cell>{item.streak}</Cell>
                      <Cell>{item.position}</Cell>
                      <Cell>{item.conference}</Cell>
                      <Cell>{item.currWinNum}</Cell>
                      <Cell>{item.currLossNum}</Cell>
                      {eYearPlayerFilter && (
                        <Cell>
                          {item.filterEYearByTeam?.map((player, index) => {
                            const { playerName } = player
                            return `${playerName}, `
                          })}
                        </Cell>
                      )}
                    </Row>
                  ))}
                </Body>
              </>
            )}
          </Table>
        </Box>
      </div>
      <br />
      <HStack justify="flex-end">
        <IconButton
          aria-label="previous page"
          icon={<FaChevronLeft />}
          colorScheme="teal"
          variant="ghost"
          isDisabled={pagination.state.page === 0}
          onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
        />

        {pagination.state.getPages(data.nodes).map((_, index) => (
          <Button
            key={index}
            colorScheme="teal"
            variant={pagination.state.page === index ? "solid" : "solid"}
            onClick={() => pagination.fns.onSetPage(index)}
          >
            {index + 1}
          </Button>
        ))}
        <IconButton
          aria-label="next page"
          icon={<FaChevronRight />}
          colorScheme="teal"
          variant="ghost"
          isDisabled={
            pagination.state.page + 1 ===
            pagination.state.getTotalPages(data.nodes)
          }
          onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
        />
      </HStack>
      <br />
    </section>
  )
}

export default DataTable
