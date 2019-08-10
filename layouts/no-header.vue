<template>
  <!-- Body Inner -->
  <div class="body-inner">
    <!-- Header -->
    <header id="header">
      <header-menu />
    </header>
    <!-- end: Header -->
    <nuxt />
    <!-- Footer -->
    <footer id="footer">
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="widget">
                <div class="widget-title">Contact Us</div>
                <p class="mb-5">
                  Built with love in Fort Worth, Texas, USA
                  <br />All rights reserved. Copyright © 2019. INSPIRO.
                </p>
                <h4>We are social</h4>
                <div class="social-icons social-icons-light social-icons-colored-hover">
                  <ul>
                    <li class="social-facebook">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="social-youtube">
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li class="social-instagram">
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="social-linkedin">
                      <a href="#">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                <div class="col-lg-3">
                  <div class="widget">
                    <div class="widget-title">Discover</div>
                    <ul class="list">
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Layouts</a>
                      </li>
                      <li>
                        <a href="#">Corporate</a>
                      </li>
                      <li>
                        <a href="#">Updates</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Customers</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="widget">
                    <div class="widget-title">Features</div>
                    <ul class="list">
                      <li>
                        <a href="#">Layouts</a>
                      </li>
                      <li>
                        <a href="#">Headers</a>
                      </li>
                      <li>
                        <a href="#">Widgets</a>
                      </li>
                      <li>
                        <a href="#">Footers</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3">
                  <div class="widget">
                    <div class="widget-title">Pages</div>
                    <ul class="list">
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="widget">
                    <div class="widget-title">Support</div>
                    <ul class="list">
                      <li>
                        <a href="#">Help Desk</a>
                      </li>
                      <li>
                        <a href="#">Documentation</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-content">
        <div class="container">
          <div class="copyright-text text-center">
            &copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template.
            All Rights Reserved.
            <a
              href="http://www.inspiro-media.com"
              target="_blank"
            >INSPIRO</a>
          </div>
        </div>
      </div>
    </footer>
    <!-- end: Footer -->

    <!-- Scroll top -->
    <a id="scrollTop">
      <i class="icon-chevron-up1"></i>
      <i class="icon-chevron-up1"></i>
    </a>
    <!--Plugins-->
  </div>
  <!-- end: Body Inner -->
</template>

<script>
import headerMenu from "@/components/layout/header-menu";
import functionsFromPolo from "@/mixins/functions-from-polo";

export default {
  components: { headerMenu },
  mixins: [functionsFromPolo]
};
</script>