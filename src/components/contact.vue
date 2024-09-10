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
    <section class="sec2">
      <div class="sec2-text">
        <h1>SELVYTEX</h1>
        <p>Selvy Tex exceptionally blends premium fabrics like Polyester, Viscose, and Modal <br> to create outstanding
          garments, offering clients more than just a product and <br>providing strong partnerships and guaranteed high
          quality. Our meticulous <br> production process, from cutting to packing, is overseen by a specialized
          Quality<br>Control Team, ensuring each stage meets the highest standards for export.</p>
      </div>
      <div class="contact-container">
        <div class="contact-info">
          <h2>Contact US</h2>
          <img src="../assets/address.jpg" class="info">
          <div class="social-media">
            <h3>Follow us</h3>
            <div class="social-img">
              <img src="../assets/insta.png">
              <img src="../assets/you.png">
              <img src="../assets/twitter.png">
              <img src="../assets/face.png">
            </div>
          </div>
        </div>
        <section class="contact-form">
          <div class="form-container">
            <h2 class="form-title">Send a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="name-fields">
                <div class="input-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" v-model="firstName" class="input-field" placeholder="First Name"
                    required>
                </div>
                <div class="input-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" v-model="lastName" class="input-field" placeholder="Last Name"
                    required>
                </div>
              </div>
              <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" class="input-field" placeholder="Enter Your Email"
                  required>
              </div>
              <div class="input-group">
                <label for="phone">Phone</label>
                <div class="phone-input">
                  <span class="country-code">+91</span>
                  <input type="tel" id="phone" v-model="phone" class="input-field" placeholder="Enter Phone Number"
                    required>
                </div>
              </div>
              <div class="input-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="message" class="input-field message-area" placeholder="Type Message..."
                  required></textarea>
              </div>
              <button type="submit" class="submit-button">Submit</button>
            </form>
          </div>
        </section>
      </div>
    </section>
    <section class="image-section">
      <div class="image-container">
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/728827dc69be2012abcfd0b704bb8a1fcc2942be34e669a0e82cb6bd2b5bb7ad?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a"
          alt="Decorative image" class="main-image" />
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
export default {
  name: 'ContactForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted', this.$data);
    }
  }
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

.sec2 {
  height: 111vh;
  width: 100%;
  background-image: url(/src/assets/Ellipse.png);
  background-position: center;
  background-size: cover;
  margin-top: 4em;
}

.sec2-text h1 {
  color: #d25d38;
  font-family: "Magra-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 50px;
  text-align: center;
  padding-top: 4em;
}

.sec2-text p {
  font-family: "Open Sans-Regular", Helvetica;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  margin-top: 1em;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 4em;
  height: 85%;

}

.contact-info {
  margin-right: 40px;
  padding: 0em 4em;
}

.contact-info h2 {
  color: #e07040;
  font-family: "Magra-Bold", Helvetica;
  font-size: 48px;
  font-weight: 700;
  height: 100px;
  left: 0;
  letter-spacing: 0;
  line-height: 100px;
  text-align: center;
  white-space: nowrap;
}

.info {
  margin-top: 2em;
}

.social-media {
  margin-top: 2em;
}

.social-img {
  margin-top: 1em;
}

.social-img img {
  margin-left: 1em;
}

.social-media h3 {
  color: #e07040;
  font-family: "Magra-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  white-space: nowrap;
  margin-left: 0.4em;
}

.contact-form {
  font-family: Poppins, sans-serif;
  text-align: center;
  max-width: 698px;
  margin: 0 auto;
}

.form-container {
  background-color: rgba(224, 112, 64, 0.9);
  border-radius: 20px;
  padding: 1em 56px;
  height: 97%;

}

.form-title {
  color: #fff;
  font: 600 48px/100px Magra, sans-serif;
  margin-bottom: 0.40em;
}

.name-fields {
  display: flex;
  gap: 40px;
  margin-bottom: 3px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 18px;
}

.input-group label {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 11px;
}

.input-field {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 275;
}

.phone-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 0 25px;
  width: 96%;
}

.country-code {
  color: #000;
  font-size: 15px;
  font-weight: 300;
  margin-right: 17px;
}

.message-area {
  height: 17vh;
  resize: vertical;
}

.submit-button {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  padding: 13px 70px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #f0f0f0;
}

@media (max-width: 991px) {
  .form-container {
    padding: 26px 20px;
  }

  .form-title {
    font-size: 40px;
    line-height: 93px;
  }

  .name-fields {
    flex-direction: column;
    gap: 20px;
  }

  .submit-button {
    width: 100%;
    padding: 13px 20px;
  }
}

.image-section {
  display: flex;
  padding-top: 123px;
  flex-direction: column;
  margin-top: 33em;
}

.image-container {
  background-color: rgba(224, 112, 64, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 146px;
}

.main-image {
  aspect-ratio: 4.1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  z-index: 10;
  max-width: 1110px;
  margin: -123px 0 -29px;
}

@media (max-width: 991px) {
  .image-section {
    padding-top: 100px;
  }

  .image-container {
    max-width: 100%;
    padding: 0 20px 100px;
  }

  .main-image {
    max-width: 100%;
    margin-bottom: 10px;
  }
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
