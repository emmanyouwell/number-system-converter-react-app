import React, { useState, useRef, useEffect } from 'react'
import Navbar from "../../components/Navbar";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Calculator from "../../components/Calculator";
import Info from "../../routes/WholeNumber/Info";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer.js"
const Hexadecimal = () => {
    const ref = useRef(null)

    const [given, setGiven] = useState(0);

    // const [state, setState] = useState(0);

    // const body = $('#container').height();
    useEffect(() => {



        const handleClick = event => {
            var num = document.getElementById("num").value;


            if (isNumeric(num)) {
                if (isFloat(num)){
                    document.getElementById('error').innerHTML = 'Please enter a whole number.';
    
                }
                else{
                    var given = parseInt(document.getElementById("num").value);
                    if (given < 0) {
                        document.getElementById('error').innerHTML = 'Please enter a positive number.';
                    }
    
                    else {
                        setGiven(given);
                        document.getElementById('error').innerHTML = '';
                    }
                }

                

            }
            else {
                document.getElementById('error').innerHTML = 'Error please enter a number.';

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
                    <h1 className="text-center display-6">Decimal to Hexadecimal</h1>
                    <Card className="my-3 p-3" >

                        <Card.Body >
                            <div id="input">
                                <div className="mb-3">
                                    <label className="form-label text-success"><h2>Enter whole number</h2></label>
                                    <input type="text" id="num" className="form-control w-25" ></input>
                                    <small className="text-danger" id="error"></small>
                                </div>
                                {/* <div class="my-3 w-25" id="baseInput">
                        <label for="given" class="form-label">Enter Base</label>
                        <input type="text" id="numBase" class="form-control"></input>
                    </div> */}
                                <Button className="mb-3 btn-success" ref={ref}>Convert</Button>
                                <Calculator given={given} base={16} />
                                {/* {given > 0 && <Calculator given={given} base={2}/>} */}

                            </div>
                        </Card.Body>
                    </Card>
                    <Info base={16} />
                </Container>

            </div >
            <Footer className="footer" />
        </>
    )
}

export default Hexadecimal