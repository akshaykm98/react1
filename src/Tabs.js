import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./App.css";

function Tabs({ data }) {
  const [toggleState, setToggleState] = useState('F2F');
 

  const json = {
    detailData: {
      paymentNetwork: "3",
      defaultVal: "true",
      actionStatus: "ACTIVE",
      custom: "",
      description: "",
      directionList: [
        {
          F2F: [
            {
              fees: {
                min: "2",
                max: "",
                currency: "",
                type: [],
              },
              tier: {
                range: [],
                type: "",
                frequency: "",
              },
              purpose: "",
              customTag: "",
              channel: "",
              detailID: "",
            },
          ],
        },
        {
          INFLOW: [
            {
              fees: {
                min: "",
                max: "",
                currency: "",
                type: ["1", ""],
              },
              tier: {
                range: ["1", "1000"],
                type: "1",
                frequency: "3",
              },
              purpose: "1",
              customTag: "",
              channel: "2",
              detailID: "35",
            },
            {
              fees: {
                min: "",
                max: "",
                currency: "1",
                type: ["2", "3"],
              },
              tier: {
                range: ["1", "500"],
                type: "1",
                frequency: "1",
              },
              purpose: "1",
              customTag: "",
              channel: "1004",
              detailID: "55",
            },
            {
              fees: {
                min: "",
                max: "",
                currency: "1",
                type: ["2", "5"],
              },
              tier: {
                range: ["1", "1000"],
                type: "1",
                frequency: "2",
              },
              purpose: "1005",
              customTag: "",
              channel: "1004",
              detailID: "56",
            },
          ],
        },
        {
          OUTFLOW: [
            {
              fees: {
                min: "1",
                max: "10",
                currency: "1",
                type: ["3", "2"],
              },
              tier: {
                range: ["1", "2"],
                type: "1",
                frequency: "1",
              },
              purpose: "2",
              customTag: "",
              channel: "3",
              detailID: "46",
            },
            {
              fees: {
                min: "",
                max: "",
                currency: "1",
                type: ["2", "4"],
              },
              tier: {
                range: ["1", "10000"],
                type: "2",
                frequency: "2",
              },
              purpose: "1",
              customTag: "",
              channel: "3",
              detailID: "49",
            },
            {
              fees: {
                min: "4",
                max: "10",
                currency: "1",
                type: ["3", "0.4"],
              },
              tier: {
                range: ["1", "20000"],
                type: "1",
                frequency: "2",
              },
              purpose: "1005",
              customTag: "",
              channel: "1004",
              detailID: "51",
            },
            {
              fees: {
                min: "",
                max: "",
                currency: "1",
                type: ["2", "6"],
              },
              tier: {
                range: ["1", "1000"],
                type: "1",
                frequency: "1",
              },
              purpose: "1",
              customTag: "",
              channel: "1",
              detailID: "63",
            },
            {
              fees: {
                min: "",
                max: "",
                currency: "1",
                type: ["2", "9"],
              },
              tier: {
                range: ["1", "10000"],
                type: "1",
                frequency: "1",
              },
              purpose: "1",
              customTag: "",
              channel: "2",
              detailID: "71",
            },
          ],
        },
      ],
      segmentType: "23",
      status: "ACTIVE",
    },
  };

  json.detailData.directionList.map(item => {
    let opions = []
    Object.values(item)[0].map(elem => {
      
      opions.push(elem.channel)
    })
    var unique = opions.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    Object.values(item).options = unique
  })


  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <div className="container">
      <div>Update details</div>
            <br></br>
            <tr className="toplist">
              <td className="toplistitem">
                <input type="radio" name="true"/>
                <label>Default</label>
              </td>
              <td className="toplistitem">
                <input type="radio" name="true" />
                <label>Custom</label>
              </td>
              <td className="toplistitem">
                <input type="text" value={json.detailData.segmentType} />
                <label>segmentType</label>
              </td>
              <td className="toplistitem">
                <input type="text" value={json.detailData.paymentNetwork}/>
                <label>paymentNetwork</label>
              </td>
              <td className="toplistitem">
                <input type="text" />
                <label>Description</label>
              </td>
              <td className="toplistitem">status</td>
            </tr>
            <br></br>
        
 <div className="bloc-tabs" >
      {json.detailData.directionList.map(i => (
        <>
          <button
          className={toggleState === Object.keys(i)[0] ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(Object.keys(i)[0])}
        >
          {Object.keys(i)[0]}
        </button>
       
        </>
       
      ))}
       </div>

      
       <div className="content-tabs">
       <tr className="toplist1">
                  <td className="toplistitem121">channel*</td>
                  <td className="toplistitem122">purpose*</td>
                  <td className="toplistitem123">custom tag</td>
                  <td className="toplistitem124">detailID</td>
                  <td className="toplistitem12">tier</td>
                  <td className="toplistitem13">fees</td>
                </tr>
                <br></br>
                {/* <Dropdown>
  <Dropdown.Toggle>
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}


                <tr className="toplist2">
                  <td className="toplistitem2">type</td>
                  <td className="toplistitem2">range</td>
                  <td className="toplistitem2">frequency</td>
                  <td className="toplistitem2">type</td>
                  <td className="toplistitem2">min</td>
                  <td className="toplistitem2">max</td>
                  <td className="toplistitem2">currency</td>
                </tr>
                <br></br>
                
       {json.detailData.directionList.map(i => ( 
          <div
          className={toggleState === Object.keys(i)[0] ? "content.active-content" : "content"}
        >
          
          {toggleState === Object.keys(i)[0] && i[toggleState].map(elem => (
              <>
                {console.log(elem)}
              <tr className="toplist3">
                <td className="toplistitem3"><select>
    <option>{elem.channel}</option>
  </select></td>
                <td className="toplistitem4"><select>
    <option>{elem.purpose}</option>
  </select></td>
                <td className="toplistitem5"><select>
    <option>{elem.detailID}</option>
  </select></td>
                <td className="toplistitem6"><select>
    <option>{elem.customTag}</option>
  </select></td>
  {/* <td className="toplistitem7"><select>
    <option>{json.detailData.directionList[0].F2F[0].fees.min}</option>
  </select></td>
  <td className="toplistitem8"><select>
    <option>{json.detailData.directionList[0].F2F[0].fees.max}</option>
  </select></td>
  <td className="toplistitem9"><select>
    <option>{json.detailData.directionList[0].F2F[0].fees.currency}</option>
  </select></td>
  <td className="toplistitem10"><select>
    <option>{json.detailData.directionList[0].F2F[0].fees.type}</option>
  </select></td>


  <td className="toplistitem11"><select>
    <option>{json.detailData.directionList[0].F2F[0].tier.range}</option>
  </select></td>
  <td className="toplistitem12"><select>
    <option>{json.detailData.directionList[0].F2F[0].tier.type}</option>
  </select></td>
  <td className="toplistitem13"><select>
    <option>{json.detailData.directionList[0].F2F[0].tier.frequency}</option>
  </select></td> */}

              </tr>   
              </>
          ))}
         
          </div>
        
       ))}



     

       </div>
       
  
    </div>
  );
}

export default Tabs;
