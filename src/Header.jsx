import "./Header.css"

export default function Header() {
  
   
    return (
        <div class="wrapper">
             <nav id="sidebar">
           <div class="title">
              logo
           </div>
           <ul class="list-items">
              <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
              <li><a href="#"><i class="fas fa-sliders-h"></i>Client</a></li>
              <li><a href="#"><i class="fas fa-address-book"></i>Service</a></li>
              <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
              <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>
              <li><a href="#"><i class="fas fa-user"></i>About us</a></li>
              <li><a href="#"><i class="fas fa-envelope"></i>Contact us</a></li>
              <div class="icons">
                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                 <a href="#"><i class="fab fa-twitter"></i></a>
                 <a href="#"><i class="fab fa-github"></i></a>
                 <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
           </ul>
        </nav>
        </div>
     
    )
};
