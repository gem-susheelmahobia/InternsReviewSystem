import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "./Employees";
import StripedRowExample from "./Employees";
import Employees from "./Employees";
import Interns from "./Interns";
import NavBar from "./NavBar";
export default function MainScreen() {
  const [key, setKey] = useState("home");

  return (
    <>
    <NavBar/>
   <button type="button" class="btn btn-primary" style={{float:'right', marginRight:"80px",marginTop:"52px",borderRadius:"0px",padding:"6px 28px"}}><i className='fa fa-plus mx-1'></i>  Register </button>
    
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mx-5 mt-5"
        style={{ fontSize: "1.40rem" ,display:"inline-flex" }}
      >
    
        <Tab eventKey="home" title="Employees">
         
          < Employees/>
        </Tab>
        <Tab eventKey="profile" title="Interns">
        < Interns/>
        </Tab>
      </Tabs>

    </>
  );
}
