import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Harsh Pathak</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis tenetur ex laudantium nam molestiae eius totam assumenda? Ipsa distinctio eum fugit cum adipisci error? Maiores dignissimos amet eaque culpa, recusandae cumque in qui praesentium autem, vero fuga! Doloremque, deserunt.</p>
          </div>
          <div className="right_container mt-3">
            <img src="harsh.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About