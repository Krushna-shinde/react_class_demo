import React from "react";

class Footer extends React.Component{
    render(){ // render is method and return is keyword
        return <div>
           <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-top pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 Krish Brothers Company, Inc</p>
  </footer>
        </div>
    }

}
export default Footer;