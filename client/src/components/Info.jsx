import React from "react"
import Card from "./Card"
import { cardInfo } from "../utils/cardInfo"

const Info = () => {
  return (
    <section className="flex justify-center items-center gap-2 mx-2 flex-wrap pb-20">
      {cardInfo.map((item, index) => {
        const { card } = item
        const { title, description } = card

        return (
          <Card
            key={index}
            id="#features"
            title={title}
            description={description}
          />
        )
      })}
    </section>
  )
}

export default Info
