<template>
    <div> <!--service-->
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="#"><img src="../assets/Group 247.png" alt="SELVY TEX Logo"></a>
                </div>
                <ul class="nav-links">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="company">Our Company</router-link></li>
                    <li><router-link to="services">Our Services</router-link></li>
                    <li><router-link to="product">Our Product</router-link></li>
                    <li><a href="#">How To Order</a></li>
                    <li><router-link to="contact">Contact us</router-link></li>
                </ul>
            </nav>
        </header>
        <div class="sec1">
            <img src="../assets/pro1.jpg">
        </div>
        <div class="sec2">
            <img src="../assets/pro2.jpg">
        </div>
        <div class="sec3">
            <img src="../assets/pro3.jpg">
        </div>
        <div class="sec4">
            <img src="../assets/pro4.jpg">
        </div>
        <div class="sec5">
            <img src="../assets/pro5.jpg">
        </div>
        <div class="sec6">
            <img src="../assets/pro6.png">
        </div>
        <footer>
            <div class="footer">
                <div class="footer-column">
                    <img src="../assets/footer.png" class="footer-logo" />
                </div>
                <div class="footer-column">
                    <div class="footer-title">Contact</div>
                    <div class="footer-address">
                        8/962, PN Rd, Karupparayan Nagar,
                        <br />
                        Tiruppur, India. 641603
                    </div>
                    <div class="footer-email">
                        Email:
                        <span style="font-weight: 400">contact@selvytex.com</span>
                    </div>
                    <div class="footer-language">Changer la langue en</div>
                    <div class="footer-language-option">
                        <img loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/237fe27e657127840b53433c7bae5064928b5c2e5f63b2fa06a8dee3dcc02343?apiKey=5acb37f697474270ad553272da64e56a&"
                            class="footer-language-flag" />
                        <div class="footer-language-name">Français</div>
                    </div>
                </div>
                <div class="footer-column">
                    <div class="footer-title">Quick links</div>
                    <a class="footer-link">Home</a>
                    <a class="footer-link">About</a>
                    <a class="footer-link">How to Order</a>
                    <a class="footer-link">Products</a>
                    <a class="footer-link">Fabrics</a>
                    <a class="footer-link">Services</a>
                    <a class="footer-link">Contact</a>
                    <div class="footer-language-option">
                        <img loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b7c08e48face2cf41144663c14c3373968c7019913bf6576c9900e7655e04cde?apiKey=5acb37f697474270ad553272da64e56a&"
                            class="footer-language-flag" />
                        <div class="footer-language-name">Français</div>
                    </div>
                </div>
                <div class="footer-column">
                    <div class="footer-title">Follow</div>
                    <a class="footer-social">Instagram</a>
                </div>
            </div>
            <div class="footer-rect">

            </div>
        </footer>
    </div>
</template>

<script>
import { RouterLink } from "vue-router"
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

header {
    background-color: white;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
}

.logo img {
    width: 96%;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.nav-links li {
    font: 400 20px Monda, sans-serif;
}

.nav-links a {
    text-decoration: none;
    color: #D25D38;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 3em;
}

/* Responsive Design for Tablets and Smaller Screens */
@media screen and (max-width: 1024px) {
    .navbar {
        padding: 0 30px;
    }

    .nav-links a {
        font-size: 1rem;
        margin-left: 2em;
    }

    .logo img {
        height: 80px;
        width: 150px;
    }
}

@media screen and (max-width: 768px) {
    .navbar {
        padding: 0 20px;
    }

    .nav-links a {
        font-size: 0.9rem;
        margin-left: 1.5em;
    }

    .logo img {
        height: 70px;
        width: 130px;
    }
}

@media screen and (max-width: 480px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;
    }

    .logo img {
        height: 60px;
        width: 110px;
    }

    .nav-links {
        flex-direction: column;
        width: 100%;
    }

    .nav-links li {
        margin-left: 0;
        margin-bottom: 10px;
    }

    .nav-links a {
        font-size: 1rem;
        margin-left: 0;
    }
}
.sec1 {
    margin-top: 5em;
}

.sec1 img {
    width: 100%;
}
.sec2 {
    margin-top: 5em;
}

.sec2 img {
    width: 100%;
}
.sec3 {
    margin-top: 5em;
}

.sec3 img {
    width: 100%;
}
.sec4 {
    margin-top: 5em;
}

.sec4 img {
    width: 100%;
}
.sec5 {
    margin-top: 5em;
}

.sec5 img {
    width: 100%;
}
.sec6 {
    margin-top: 5em;
}

.sec6 img {
    width: 100%;
}
.footer {
    align-items: start;
    display: flex;
    gap: 20px;
    font-weight: 400;
    text-align: center;
    justify-content: space-between;
    margin-top: 3em;
    padding: 2em 7em 0em 7em
}

@media (max-width: 991px) {
    .footer {
        flex-wrap: wrap;
    }
}

.footer-column {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #333;
    padding: 0 20px 12px;
}

.footer-logo {
    aspect-ratio: 2.5;
    object-fit: auto;
    object-position: center;
    align-self: center;
}

.footer-message {
    font-family: Lora, sans-serif;
    margin-top: 36px;
}

.footer-title {
    color: #e07040;
    letter-spacing: 1px;
    text-transform: uppercase;
    font: 20px/150% Lora, sans-serif;
    font-weight: 900;
}

.footer-address {
    font-family: Open Sans, sans-serif;
    line-height: 32px;
    align-self: stretch;
    margin-top: 32px;
}

.footer-email {
    font-family: Open Sans, sans-serif;
    font-weight: 700;
    line-height: 32px;
}

.footer-language {
    color: #333;
    margin-top: 13px;
    font: 18px/156% Open Sans, sans-serif;
}

.footer-language-option {
    margin-top: 33px;
    gap: 6px;
    white-space: nowrap;
    line-height: 173%;
}

@media (max-width: 991px) {
    .footer-language-option {
        white-space: initial;
    }
}

.footer-language-flag {
    aspect-ratio: 1.45;
    object-fit: auto;
    object-position: center;
    width: 16px;
    align-self: start;
}

.footer-language-name {
    font-family: Open Sans, sans-serif;
}

.footer-link {
    font-family: Open Sans, sans-serif;
    margin-top: 21px;
}

.footer-social {
    color: #959595;
    margin-top: 32px;
    font: 15px/213% Open Sans, sans-serif;
}

.footer-rect {
    width: 100%;
    height: 5vh;
    background-color: #e07040;
}
</style>