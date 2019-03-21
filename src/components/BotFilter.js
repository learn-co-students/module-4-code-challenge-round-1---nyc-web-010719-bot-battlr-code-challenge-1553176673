import React from "react"

const BotFilter = (props) => {
  return (
  <div className="">
    <strong>Filter:</strong>
    <select onChange={props.filterBots}>
      <option defaultValue="none">Choose One</option>
      <option value="all">All</option>
      <option value="support">Support</option>
      <option value="defender">Defender</option>
      <option value="assault">Assault</option>
    </select>
  </div>
  )
}

export default BotFilter
