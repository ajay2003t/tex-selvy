<template>
    <div>
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
        <section class="sec1"></section>
        <div class="box">
            <div class="group">
                <div class="overlap-group">
                    <h1 class="section-heading">“ENGINEERING PERFECTION”</h1>
                    <div class="rectangle" />
                </div>
                <p class="section">
                    Founded in 2013, SELVYTEX seamlessly integrates French sophistication with Indian textile<br>
                    expertise delivering top-notch quality and craftsmanship, embodying our commitment to<br> excellence
                    and strong customer
                    relationships.<br> Join us at the heart of India's cotton knitwear industry!
                </p>
            </div>
        </div>
        <section class="velcord-stats">
            <div class="stats-container">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f835946adadea0f7c8204b3a19651d26bda6e40f95b3c01c65fa5137b55c59?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a"
                    class="background-image" alt="" />
                <div class="stats-wrapper">
                    <div class="stats-grid">
                        <StatCard v-for="(stat, index) in stats" :key="index" :icon="stat.icon" :number="stat.number"
                            :title="stat.title" :description="stat.description" />
                    </div>
                </div>
            </div>
        </section>
        <div>
            <img src="../assets/Rectangle.png" class="border-img">
        </div>
        <section class="sec3">
            <div class="overlap-group1">
                <div class="rectangle1" />
                <h1 class="section-heading1"> Global presence</h1>
            </div>
            <img src='../assets/map.png' class="map">
            <brand></brand>
        </section>
        <section class="sec4">
            <div class="sec4-boxt">
                <div class="sec4-box">
                    <h2>HOW TO ORDER</h2>
                    <h4>MINIMUM QUANTITY</h4>
                    <p>Colors and fabrics stocks from 150 pcs<br>Pantone colors from 200 pcs</p>
                    <h4>DEADLINE</h4>
                    <P>
                        Prototypes<br>
                        10 to 15 days<br> Production
                        <br>45 to 60 days
                        <br> Transport
                        <br> 3 to 7 days by plane
                        <br>20 to 35 days by ship
                    </P>
                    <button class="sec4-btn">
                        Make enquiry
                    </button>
                </div>
            </div>
        </section>
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
import StatCard from './statCard.vue';

export default {
    name: 'VelcordStats',
    components: {
        StatCard,
    },
    data() {
        return {
            stats: [
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/afbce5e2b41132c3a0c421eb46fa16721fd70ff6373dddf993e3e71068fb3712?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
                    number: '500+',
                    title: 'Varities',
                    description: 'of Corduroy and Velveteen fabrics designed and developed by Velcord',
                },
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e24e400d24f56169c6123aef668c9a35233629a19705336456fe1eb415218b75?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
                    number: '210+',
                    title: 'Millions',
                    description: 'Meters of Fabrics sold since inception',
                },
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/85556f6390c78a6ec1c402e969f0cd78901ddc96b136469a7f11eacff835cc83?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
                    number: '7+',
                    title: 'Certificate',
                    description: 'International Sustainability Certifications',
                },
                {
                    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/414be4d5e2b36e1746f4c20656cef90ce29235aae4448885a44b3df121d8a383?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
                    number: '40+',
                    title: 'Years',
                    description: 'of legacy in the corduroy industry',
                },
            ],
        };
    },
};
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
    height: 87vh;
    background-image: url(../assets/back1.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.box {
    width: 100%;
    padding-top: 5em;
}

.overlap-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.box .section-heading {
    color: rgba(224, 112, 64, 1);
    font: 600 40px/1 Magra, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin-right: 0.6em;
}

.box .rectangle {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 400px;
}

.box .section {
    color: #585858;
    font: 400 17px/26px Outfit, sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 25.5px;
    text-align: center;
    padding-top: 2em;

}

.sec2 {
    height: 68vh;
    background-image: url(../assets/Designer.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 5em;
}
.border-img {
    width: 100%;
    padding: 0em 0em 4em 0em;
}

.overlap-group1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.section-heading1 {
    color: #e07040;
    font: 600 40px/1 Magra, sans-serif;
    font-size: 40px;
    font-weight: 700;
    left: 0;
    letter-spacing: 2px;
    line-height: 50px;
    text-align: center;
    top: 0;
    white-space: nowrap;
    text-transform: uppercase;
}

.rectangle1 {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 37%;
    margin-right: 2em;
}

.map {
    padding: 0em 6em;
    padding-top: 4em;
}

.brand {
    padding: 0em 10em;
}

.sec4 {
    height: 100vh;
    width: 100%;
    background-image: url(../assets/back3.png);
    margin-top: 4em;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.sec4-boxt {
    padding: 3em 30em;
}

.sec4-box {
    height: 80vh;
    width: 34vw;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 37px;
    padding-top: 2em;
}

.sec4-box h2 {
    font: 600 29px/1 Magra, sans-serif;
    margin-top: 0.5em;
    margin-bottom: 1em;
}

.sec4-box h4 {
    font-family: Magra, sans-serif;
    font: 400 15px/29px Lora, sans-serif;
    margin-top: 1em;
    margin-bottom: 1em;
}

.sec4-box p {
    font-family: Outfit, sans-serif;
    font: 400 15px/29px Lora, sans-serif;
    line-height: 33px;
}

.sec4-box h2,
h4 {
    color: #e07040;
}

.sec4-btn {
    background-color: #e07040;
    padding: 1em 4em;
    border: transparent;
    margin-top: 2em;
    color: white;
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

.velcord-stats {
    display: flex;
    flex-direction: column;
}

.stats-container {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 447px;
    align-items: center;
    justify-content: center;
    padding: 87px 70px;
    margin-top: 5em;
}

.background-image {
    position: absolute;
    inset: 0;
    height: 90%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.stats-wrapper {
    position: relative;
    width: 100%;
    max-width: 1098px;
}

.stats-grid {
    display: flex;
    gap: 20px;
}

@media (max-width: 991px) {
    .stats-container {
        max-width: 100%;
        padding: 0 20px;
    }

    .stats-wrapper {
        max-width: 100%;
    }

    .stats-grid {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
}
</style>
