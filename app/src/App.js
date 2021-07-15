import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import JsonData from "./data/skill.json";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import ForceGraph from "./components/ForceGraph";
import TreeGraph from "./components/TreeGraph";
import backImg from './public/background.png';
// import { Tab, TabContainer } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/Assets.js";

// import data from './data/layer3.json'

function App() {
  const [skill, searchSkill] = useState("");
  const [showRelationship, setShowRelationship] = useState(true);
  const skills = [];
  JsonData.map((v) => {
    const key = Math.floor(Math.random() * 10000000 + 1);
    return skills.push({ key, ...v });
  });
  useEffect(() => {
    var data = document.getElementsByTagName("svg");
    if(data.length>0)
    {
      data[0].setAttribute("viewBox","-40 -40 2000 2000")
    }
    console.log(document.getElementsByTagName("svg"))
  }, [showRelationship]);
  return (
    <div className="container">
      <ui5-shellbar primary-title="Skill Cockpit">
        <ui5-avatar slot="profile" icon="customer"></ui5-avatar>
        <img
          slot="logo"
          src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
        />
        <ui5-button icon="nav-back" slot="startButton"></ui5-button>
      </ui5-shellbar>

    <div style={{"margin-left":"100px","display":"inline-block","width": "40%","margin-top":"1%"}}>
      <div>
      <h1> Welcome To Skill Relationship Cockpit</h1> 
      <img src={backImg}></img>
      </div>
    </div>
    <div style={{"margin-left":"50px","display":"inline-block","width": "50%"}}>
      <h2>Discover skill relationships</h2>
      <p> 
      Detailed description about what skill relation ship cockpit can offer,it basic functionalities like  discovering relationship,giving feedback etc.
      Why we need skill relationships. how to give feedbback, what the line length represents,etc

      Some useful links can also be put in this place.etc
      If needed , can we put a skfsdksd kskd ;lsk ;

      </p>
      </div>


      <div style={{ "margin-left": "200px", "margin-right": "200px" }}>
        <Header
          skills={skills}
          searchSkill={searchSkill}
          skill={skill}
          setShowRorT={setShowRelationship}
        />

        {showRelationship == false ? (
          <React.Fragment>
            <TreeGraph viewBox="-40 -40 2000 2000 "></TreeGraph>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ForceGraph skill={skill} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
