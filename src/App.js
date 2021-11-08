import "./App.css";
import {Table} from "react-bootstrap";
import React,{ useState} from 'react'
import Tabs from './Tabs';




function App() {
    const [activeId, setActiveId] = useState([])
  const data = {
    listData: [
      {
        paymentNetwork: "FTS",
        chargesIdentifier: "RETAIL_FTS",
        description: "",
        feeId: "567",
        segmentType: "RETAIL",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "AF",
        chargesIdentifier: "MENTP_AF",
        description: "",
        feeId: "571",
        segmentType: "MENTP",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "FTS",
        chargesIdentifier: "IMS_DFLT_FTS",
        description: "",
        feeId: "580",
        segmentType: "MENTP",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "FTS",
        chargesIdentifier: "fasf",
        description: "safsa",
        feeId: "589",
        segmentType: "STAFF",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "FTS",
        chargesIdentifier: "MENTP_FTS",
        description: "",
        feeId: "624",
        segmentType: "MENTP",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "FTS",
        chargesIdentifier: "MENTP_FTS",
        description: "",
        feeId: "626",
        segmentType: "MENTP",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "SWIFT",
        chargesIdentifier: "IMS_DFLT_SWIFT",
        description: "",
        feeId: "646",
        segmentType: "IMS_DFLT",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "SWIFT",
        chargesIdentifier: "MENTP_SWIFT",
        description: "",
        feeId: "647",
        segmentType: "MENTP",
        status: "ACTIVE",
      },
      {
        paymentNetwork: "INTER",
        chargesIdentifier: "t1",
        description: "",
        feeId: "656",
        segmentType: "CORP",
        status: "ACTIVE",
      },
    ],
  };





  function showData(id){
    let newArr = data.listData.filter(item => item.feeId === id);
    console.log(newArr);
    setActiveId(newArr)
  }
  
  const [show,setShow]=useState(false)
  return (

    <>
      
    <div className="App">
{
    show?<> <Tabs data = {activeId[0]}/> </>:null
}



      
      <Table striped  hover  >
          <thead>
        <tr className="heading">
          <th>PAYMENT NETWORK</th>
          <th>CHARGER IDENTIFIER</th>
          <th>DESCRIPTION</th>
          <th>FEE ID</th>
          <th>SEGMENT TYPE</th>
          <th>STATUS</th>
        </tr>
        </thead>
        <tbody>
      {data.listData.map((item) => { 
        return (
         <tr className="data" onClick={()=>setShow(true)} >
            <td onClick={() => showData(item.feeId)}>{item.paymentNetwork}</td>
            <td onClick={() => showData(item.feeId)}>{item.chargesIdentifier}</td>
            <td onClick={() => showData(item.feeId)}>{item.description}</td>
            <td onClick={() => showData(item.feeId)}>{item.feeId}</td>
            <td onClick={() => showData(item.feeId)}>{item.segmentType}</td>
            <td onClick={() => showData(item.feeId)}>{item.status}</td>
          </tr>
          
        );
      })}
      </tbody>
      </Table>
    </div>
  <div className="button">
    <button className="add">Add</button>&nbsp;&nbsp;&nbsp;
    <button className="edit">Edit</button>&nbsp;&nbsp;&nbsp;
    <button className="delete">Delete</button>&nbsp;&nbsp;&nbsp;
    </div>
 </>
  );
}

export default App;
