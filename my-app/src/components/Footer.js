import React from 'react';

export default function Footer() {
    return (
        <footer class="text-center text-lg-start text-muted">
    
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
        
            <div>
              <a href="https://www.facebook.com/" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/?lang=en" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
           
          </section>
     
          <section class="">
            <div class="container text-center text-md-start mt-5">
           
              <div class="row mt-3">
             
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Smoothie Planet
                  </h6>
                  <p>
                    We are creating smoothie recepies since 1886.
                  </p>
                </div>
         
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
                  <h6 class="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Sweet Smoothies</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Sour Smoothies</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Detox Smoothies</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Diet Smoothies</a>
                  </p>
                </div>
               
      
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Subscribe</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Help</a>
                  </p>
                </div>
             
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                 
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-3"></i> Berlin 12047, Germany</p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 49 234 567 88</p>
                  <p><i class="fas fa-print me-3"></i> + 49 234 567 89</p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center p-4 copyright">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="./index.html">Smoothie Planet</a>
          </div>
          
        </footer>
        
    )
}