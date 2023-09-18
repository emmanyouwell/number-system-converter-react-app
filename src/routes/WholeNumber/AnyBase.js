import React, { useState, useRef, useEffect } from 'react'
import Navbar from "../../components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Calculator from "../../components/Calculator";
import Info from "../../routes/WholeNumber/Info";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer.js";
const AnyBase = () => {
    const ref = useRef(null)

    const [given, setGiven] = useState(0);
    const [base, setBase] = useState(0);
    // const [state, setState] = useState(0);

    // const body = $('#container').height();
    useEffect(() => {



        const handleClick = event => {
            var num = document.getElementById("num").value;
            var numBase = document.getElementById("numBase").value;
            if (isNumeric(num) && isNumeric(numBase)) {
                if (isFloat(num) || isFloat(numBase)){
                    document.getElementById('error2').innerHTML = 'Please enter a whole number.';
                    document.getElementById('error').innerHTML = 'Please enter a whole number.';
                }
                else{
                    var b = parseInt(document.getElementById("numBase").value);
                    var given = parseInt(document.getElementById("num").value);
                    if (b < 0 || given < 0){
                        document.getElementById('error2').innerHTML = 'Please enter a positive number.';
                        document.getElementById('error').innerHTML = 'Please enter a positive number.';
                    }
                    else{
                        if (b === 0 || b === 1 || b === 2 || b === 8 || b === 16 || b === 10) {
                            document.getElementById('error2').innerHTML = 'Cannot choose 0, 1, 2, 8, 10, 16.';
                            document.getElementById('error').innerHTML = '';
        
                        }
                        else {
                            
                            setGiven(given);
                            setBase(b);
                            document.getElementById('error').innerHTML = '';
                            document.getElementById('error2').innerHTML = '';
                        }
                    }
                }

                
                
            }
            else {
                document.getElementById('error').innerHTML = 'Error please enter a number.';
                document.getElementById('error2').innerHTML = 'Error please enter a number.';

            }

        }

        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);

        };
    }, []);
    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
    function isFloat(str) {
        let pattern = /^-?\d*(\.\d+)?$/;
        if (!str.match(pattern)) return false;
        let val = parseFloat(str);
        const isInteger = Number.isInteger(val);
        return isInteger ? false : true;
      }

    return (
        <>
            <div className="" id="container">

                <Navbar />
                <Container className="p-3 mt-5">
                    {/* Width: {size.width}/ Height: {size.height} */}
                    <h1 className="text-center display-6">Decimal to Any Base</h1>
                    <Card className="my-3 p-4" >

                        <Card.Body className="p-4">
                            <div id="input" className="p-1">
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label className="form-label text-success"><h2>Enter whole number</h2></label>
                                            <input type="text" id="num" className="form-control " ></input>
                                            <small className="text-danger" id="error"></small>
                                        </div>
                                        <div className="my-3" id="baseInput">
                                            <label className="form-label text-success"><h2>Enter Base</h2></label>
                                            <input type="text" id="numBase" class="form-control w" ></input>
                                            <small className="text-danger" id="error2"></small>
                                        </div>
                                        <Button className="mb-3 btn-success" ref={ref}>Convert</Button>
                                    </Col>
                                    <Col md={9}>
                                        <Calculator given={given} base={base} />
                                    </Col>
                                </Row>
                                {/* {given > 0 && <Calculator given={given} base={2}/>} */}

                            </div>
                        </Card.Body>
                    </Card>
                    <Info base={base} />
                </Container>

            </div >
            <Footer className="footer"  />
        </>
    )
}

export default AnyBase