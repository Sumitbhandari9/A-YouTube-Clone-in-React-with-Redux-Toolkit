import React from 'react'

export const BackDropSidebar = ({sidebar,handlesidebar}) => {
  return (
    <div className={sidebar?"backdrop-open backdrop":"backdrop-open"} onClick={handlesidebar}></div>
  )
}
