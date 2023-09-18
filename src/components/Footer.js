import React, {useState} from 'react'
import "./Footer.css"
const Footer = () => {
    const [bounce, setBounce] = useState('');
  const handleClick = event => {
    if (event.target.classList.contains('fa-bounce')){
     
      event.target.classList.remove('fa-bounce');
    }
    else{
      
      event.target.classList.add('fa-bounce');
    }
   

  }
    return (
        <footer class="py-6 bg-primary" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto text-center">
              <h2>Technologies used</h2>
              <ul class="list-inline social social-dark social-sm">
                <li class="list-inline-item">
                  <a href="#footer"><i class="fa-brands fa-react fa-xl" onClick={handleClick}></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#footer"><i class="fa-brands fa-js fa-lg" onClick={handleClick}></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#footer"><i class="fa-brands fa-bootstrap fa-lg" onClick={handleClick}></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="#footer"><i class="fa-brands fa-html5 fa-lg" onClick={handleClick}></i></a>
                </li>
              </ul>
              {/* <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">Privacy</a></li>
                            <li class="list-inline-item"><a href="#">Terms</a></li>
                            <li class="list-inline-item"><a href="#">Affiliates</a></li>
                            <li class="list-inline-item"><a href="#">Support</a></li>
                            <li class="list-inline-item"><a href="#">Blog</a></li>
                        </ul> */}
              <p class="text-muted small text-uppercase mt-4">
                Follow me on social media
              </p>
              <ul class="list-inline social social-dark social-sm">
                <li class="list-inline-item">
                  <a href=""><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa-brands fa-google-plus"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href=""><i class="fa-brands fa-github"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 text-muted text-center small-xl">
              Created by Emmanuel Mingala
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer