import React from "react"

export const BoardMembers = ({ data }) => (
  <section id="boardMembers" className="boardMembers">
    <h2 className="section__title">{data.title}</h2>
    <div className="boardMembers__members">
      {data.officers.map((item, index) => (
        <div key={index} className="boardMembers__member">
            <h4 className="boardMembers__member--title">{item.title}</h4>
            <span className="boardMembers__member--name">{item.name}</span>
            <span> </span>
            <span className="boardMembers__member--credential">{item.credentials}</span>
          </div>
      ))}
    </div>
  </section>
)

export default BoardMembers