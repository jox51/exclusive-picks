import React from "react"
import ReactAnimatedEllipsis from "react-animated-ellipsis"

const Loading = () => {
  return (
    <div className="flex items-center justify-center font-semibold">
      Loading{" "}
      <ReactAnimatedEllipsis
        fontSize="3rem"
        marginLeft="5px"
        spacing="0.3rem"
      />
    </div>
  )
}

export default Loading
