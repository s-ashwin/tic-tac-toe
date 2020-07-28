import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Container,Card, CardBody } from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Icon from "./components/Icon"

const itemArray = new Array(9).fill("empty");

function App() {
  
  const[isCross, setIsCross] = useState(false)
  const[winmsg, setWinmsg] = useState("")

  const reload = ()=>{
    setIsCross(false)
    setWinmsg("")
    itemArray.fill("empty",0,9)
  };

  const checkwin = ()=>{
    if(itemArray[0]===itemArray[1] && itemArray[1]===itemArray[2] && itemArray[0] !== "empty"){
      setWinmsg(`${itemArray[0]} Won the Game!`)
    }
    else if(itemArray[3]===itemArray[4] && itemArray[4]===itemArray[5] && itemArray[3] !== "empty"){
      setWinmsg(`${itemArray[3]} Won the Game!`)
    }
    else if(itemArray[6]===itemArray[7] && itemArray[7]===itemArray[8] && itemArray[6] !== "empty"){
      setWinmsg(`${itemArray[6]} Won the Game!`)
    }
    else if(itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6] && itemArray[0] !== "empty"){
      setWinmsg(`${itemArray[0]} Won the Game!`)
    }
    else if(itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7] && itemArray[1] !== "empty"){
      setWinmsg(`${itemArray[1]} Won the Game!`)
    }
    else if(itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8] && itemArray[2] !== "empty"){
      setWinmsg(`${itemArray[2]} Won the Game!`)
    }
    else if(itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8] && itemArray[0] !== "empty"){
      setWinmsg(`${itemArray[0]} Won the Game!`)
    }
    else if(itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6] && itemArray[2] !== "empty"){
      setWinmsg(`${itemArray[2]} Won the Game!`)
    }
    else if(itemArray[0]!=="empty" && itemArray[1]!=="empty" && itemArray[2]!=="empty" && itemArray[3]!=="empty" && itemArray[4]!=="empty" && itemArray[5]!=="empty" && itemArray[6]!=="empty" && itemArray[7]!=="empty" && itemArray[8]!=="empty"){
      setWinmsg("It's a TIE")
    }
    
  };

  const changeItem =(itemNum)=>{
    if (winmsg){
      return toast(winmsg, {type:"success"})
    }
    if (itemArray[itemNum]==="empty"){
      itemArray[itemNum] = isCross? "Circle" :"Cross";
      setIsCross(!isCross)
    }
    else{
      return toast("Invalid Selection", {type:"error"})
    }

    checkwin();

  };

  return (
      <Container >
        <ToastContainer position="bottom-center"></ToastContainer>
        <Row>
          <Col md={6} className="offset-md-3">
            {
              winmsg? (
                <div className="my-5 text-center">
                  <h1 className="text-center text-light">{winmsg}</h1>
                  <Button onClick={reload}>Reload</Button>
                </div>
              ) : (
                <div className="my-5">
                  <h1 className="text-center text-light">{
                    isCross? "Circle's" : "Cross's"
                    } turn</h1>
                </div>
              )
            }
            <div className="grid">
              {itemArray.map((item,index)=>(
                <Card >
                  <CardBody className="box" onClick={()=> changeItem(index)}  >
                    <Icon name={item} ></Icon>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
