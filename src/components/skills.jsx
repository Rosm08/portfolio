import React from "react";
import js from "../assets/icons/javascript.256x256.png"
import ts from "../assets/icons/file-type-typescript-official.256x256.png"
import py from "../assets/icons/file-type-python.256x254.png"
import node from "../assets/icons/nodejs.256x157.png"
import express from "../assets/icons/express.256x75.png"
import psql from "../assets/icons/postgresql-plain-wordmark.256x254.png"
import sequelize from "../assets/icons/sequelize.222x256.png"
import html from "../assets/icons/file-type-html.226x256.png"
import css from "../assets/icons/file-type-css.226x256.png"
import reactjs from "../assets/icons/file-type-reactjs.256x228.png"
import redux from "../assets/icons/redux.256x243.png"
import next from "../assets/icons/nextjs.256x153.png"
import scss from "../assets/icons/file-type-scss.216x256.png"
import jest from "../assets/icons/file-type-jest.231x256.png"
import cyp from "../assets/icons/cypress.256x255.png"
const Skills = function(){
  return(

    <section class="skills" id="skills">
    <h2 class="heading"><span>Skills</span></h2>
    <div class="container">
      <div class="row" id="skillsContainer">
        <div class="bar">
          <div class="info">
            <img src={js} alt="" />
            <span>javascript</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img
              src={ts}
              alt=""
            />
            <span>typescript</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={py} alt="" />
            <span>python</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={node} alt="" />
            <span>node.js</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={express} alt="" />
            <span>express.js</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img
              src={psql}
              alt=""
            />
            <span>postgresql</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={sequelize} alt="" />
            <span>sequelize</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={html} alt="" />
            <span>HTML</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={css} alt="" />
            <span>css</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={reactjs} alt="" />
            <span>react.js</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={redux} alt="" />
            <span>redux.js</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={next} alt="" />
            <span>Next.js</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={scss} alt="" />
            <span>scss</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={jest} alt="" />
            <span>jest</span>
          </div>
        </div>
        <div class="bar">
          <div class="info">
            <img src={cyp} alt="" />
            <span>cypress</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Skills