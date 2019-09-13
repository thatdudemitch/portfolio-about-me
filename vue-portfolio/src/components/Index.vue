<template>
  <div class="index">
    <div class="splash-container">
      <div class="description" :style="{ opacity: activeOpacity }">
        <vue-typer
          :text="["Hi, I am Mitchel Severe and welcome to my portfolio. I enjoy implementing design with programming to create clean, attractive websites. I spend everyday refining my skills while learning how to implement new technologies to my reptoire."]"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="30"
          :type-delay="100"
          caret-animation="smooth"
        ></vue-typer>
      </div>
      <a class="arrow" href="#tabs">
        <i class="fa fa-angle-double-down" aria-hidden="true"></i>
      </a>
    </div>
    <div id="tabs"></div>
    <ul class="tabs">
      <li :class="{ active: isActive('skills') }" @click="setActive('skills')">Skills</li>
      <li :class="{ active: isActive('web') }" @click="setActive('web')">Web Apps</li>
      <li :class="{ active: isActive('graphic') }" @click="setActive('graphic')">Graphic Design</li>
    </ul>
    <div class="content">
      <transition name="slide-fade" mode="out-in">
        <div class="skills" v-if="this.activeItem === 'skills'" key="skills">
          <h2>These are my skills.</h2>
          <div class="skills-icons" v-scroll-reveal>
            <div>
              <img src="../assets/images/api.png" />
              <span>APIs</span>
            </div>
            <div>
              <img src="../assets/images/bootstrap.png" />
              <span>Bootstrap</span>
            </div>
            <div>
              <img src="../assets/images/css.png" />
              <span>CSS3</span>
            </div>
            <div>
              <img src="../assets/images/express.png" />
              <span>Express</span>
            </div>
            <div>
              <img src="../assets/images/html.png" />
              <span>HTML5</span>
            </div>
            <div>
              <img src="../assets/images/javascript.png" />
              <span>JavaScript</span>
            </div>
            <div>
              <img src="../assets/images/nodejs.png" />
              <span>NodeJS</span>
            </div>
            <div>
              <img src="../assets/images/postgres.png" />
              <span>PostgreSQL</span>
            </div>
            <div>
              <img src="../assets/images/rails.png" />
              <span>Rails</span>
            </div>
            <div>
              <img src="../assets/images/react.png" />
              <span>React</span>
            </div>
            <div>
              <img src="../assets/images/sass.png" />
              <span>Sass/SCSS</span>
            </div>
            <div>
              <img src="../assets/images/vue.png" />
              <span>Vue</span>
            </div>
          </div>
        </div>
        <div class="web" v-else-if="this.activeItem === 'web'" key="web">
          <h2>Web apps built by me.</h2>
          <div class="web-thumbnails" v-scroll-reveal>
            <div class="thumbnail-one">
              <img src="../assets/images/cardodge.png" />
              <div class="overlay">
                <div class="info">
                  <h3>Car Dodge</h3>
                  <span>
                    <strong>Technologies Used:</strong>HTML5, CSS3, Javascript
                  </span>
                  <p>Car dodge is an infinite driver where the objective is to get as many points before you crash.</p>
                  <div class="icons">
                    <a href="https://github.com/thatdudemitch/car-dodger" target="_blank">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://thatdudemitch.github.io/car-dodger/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail-two">
              <img src="../assets/images/giphy.png" />
              <div class="overlay">
                <div class="info">
                  <h3>Giphy Calculator</h3>
                  <span>
                    <strong>Technologies Used:</strong>HTML5, CSS3, Javascript
                  </span>
                  <p>Javascript calculator inspired by Giphy.</p>
                  <div class="icons">
                    <a href="https://github.com/mitchelsevere/giphyCalc" target="_blank">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://mitchelsevere.github.io/giphyCalc/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail-three">
              <img src="../assets/images/wordsmith.png" />
              <div class="overlay">
                <div class="info">
                  <h3>Wordsmith</h3>
                  <span>
                    <strong>Technologies Used:</strong>Node, Express, PostgreSQL, Pug, APIs
                  </span>
                  <p>Wordsmith is a elegant lyrics based website from most of your favorite artists around the globe. The lyrics are powered by Genius.</p>
                  <div class="icons">
                    <a href="https://github.com/mitchelsevere/wordsmith" target="_blank">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://evening-coast-89238.herokuapp.com/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail-four">
              <img src="../assets/images/codeshare.png" />
              <div class="overlay">
                <div class="info">
                  <h3>Code Share&trade;</h3>
                  <span>
                    <strong>Technologies Used:</strong>React, Node, Express, PostgreSQL, Socket.io
                  </span>
                  <p>Code Share is a platform that provide groups an ability to code together without being together in one place. The app has an option to work on coding challenges which include tests or to work/share individual code collaboratively.</p>
                  <div class="icons">
                    <a href="https://github.com/mitchelsevere/code_share" target="_blank">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://mysterious-anchorage-20913.herokuapp.com/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail-five">
              <img src="../assets/images/melanina.png" />
              <div class="overlay">
                <div class="info">
                  <h3>Melanina Essentials&trade;</h3>
                  <span>
                    <strong>Technologies Used:</strong>HTML5, CSS3
                  </span>
                  <p>Client prototype for skin care and aromatherapy products. Melanina Essentials™ takes a curative approach to beauty, discovering wholesome formulas that promote wellbeing, and improved health.</p>
                  <div class="icons">
                    <a href="https://github.com/mitchelsevere/melaninaEssentials" target="_blank">
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://mitchelsevere.github.io/melaninaEssentials/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumbnail-six">
              <img src="../assets/images/weather.png" />
              <div class="overlay">
                <div class="info">
                  <h3>React Weather</h3>
                  <span>
                    <strong>Technologies Used:</strong>React, Firebase, APIs
                  </span>
                  <p>A simple CRUD Weather App.</p>
                  <div class="icons">
                    <a
                      href="https://git.generalassemb.ly/mitchelsevere/HW_U03_D06_React-Weather-2/tree/master/react-weather"
                      target="_blank"
                    >
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="http://not-another-weather-app.bitballoon.com/" target="_blank">
                      <i class="fa fa-safari" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="graphic" v-else key="graphic">
          <h2>My curated designs.</h2>
          <div class="designs" v-scroll-reveal>
            <div class="design-one">
              <img src="../assets/images/cg-logo.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Chase Greatness&trade;</h3>
                  <span>Logo Design</span>
                  <p>Chase Greatness logo.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802415/Chase-Greatness-logo"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-two">
              <img src="../assets/images/theresa.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Hotel Theresa</h3>
                  <span>Branding</span>
                  <p>Hotel Theresa poster for the Harlem Project.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57801705/Harlem-Brand-Project"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-three">
              <img src="../assets/images/crmbc.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Creative Revolution Media&trade;</h3>
                  <span>Branding</span>
                  <p>Business cards for Creative Revolution Media.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802265/Creative-Revolution-Media-Business-Cards"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-four">
              <img src="../assets/images/stpa.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Smoke The Pain Away</h3>
                  <span>Graphic Design</span>
                  <p>Album artwork for single, "Smoke The Pain Away" by J. Lamour.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802553/Smoke-The-Pain-Away-album-artwork"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-five">
              <img src="../assets/images/porn.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Pornography Seminar</h3>
                  <span>Graphic Design</span>
                  <p>Flyer for the seminar on pornography awareness.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802827/Pornography-Seminar-flyer"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-six">
              <img src="../assets/images/ebiz-logo.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>eBizJapan</h3>
                  <span>Logo Design</span>
                  <p>Prototype logo for eBizJapan.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802055/ebizjapan-prototype-logo"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-seven">
              <img src="../assets/images/take5.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Take 5</h3>
                  <span>Graphic Design</span>
                  <p>Flyer for the Take 5 special at La Caye Restaurant.</p>
                  <div class="icons">
                    <a href="https://www.behance.net/gallery/57802493/Take-5-flyer" target="_blank">
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="design-eight">
              <img src="../assets/images/swc.jpg" />
              <div class="overlay">
                <div class="info">
                  <h3>Spring Worship Concert</h3>
                  <span>Graphic Design</span>
                  <p>Flyer for the Spring Worship Concert '13.</p>
                  <div class="icons">
                    <a
                      href="https://www.behance.net/gallery/57802373/Spring-Concert-13"
                      target="_blank"
                    >
                      <i class="fa fa-behance" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Index",
  data() {
    return {
      activeItem: "skills",
      scrollPosition: 0,
      activeOpacity: 1
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateFadeScroll);
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    updateFadeScroll() {
      this.scrollPosition = window.scrollY;
      this.nextSection = document.querySelector("#tabs").offsetTop;
      switch (true) {
        case this.scrollPosition < 50:
          this.activeOpacity = 1;
          break;
        case this.scrollPosition < 200:
          this.activeOpacity = 0.7;
          break;
        case this.scrollPosition < 500:
          this.activeOpacity = 0.4;
          break;
        case this.scrollPosition < 520:
          this.activeOpacity = 0.2;
          break;
        case this.nextSection < this.scrollPosition:
          this.activeOpacity = 0;
          break;
        default:
          break;
      }
    }
  },
  components: {
    VueTyper
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.splash-container {
  width: 100vw;
  height: 100vh;
  background: $main-color;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -999;
}

.description {
  width: 50%;
  font-size: 4.2vh;
  line-height: 8vh;
  font-weight: normal;
  letter-spacing: 0.5px;
}

.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10vh;
  h2 {
    font-size: 6vh;
  }
}
#tabs {
  height: 10vh;
  position: absolute;
  margin-top: -9.8vh;
  z-index: -999;
}

.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .skills-icons {
    width: 45%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      width: 15%;
      padding: 3%;
      text-align: center;
      filter: grayscale(85%);
      color: $accent-color;
      &:hover {
        filter: grayscale(0%);
        color: $main-color;
      }
      span {
        font-size: 1.7vh;
        font-weight: bold;
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 12px;
        cursor: pointer;
        transition: 500ms;
      }
    }
  }
}

.web {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  .web-thumbnails {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    @each $num, $color in $thumbnail-colors {
      .thumbnail-#{$num} {
        width: 30%;
        margin: 0.5%;
        height: 70%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color;
        .overlay {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: rgba(255, 255, 255, 0.9);
        }
        &:hover {
          .overlay {
            opacity: 1;
          }
        }
      }
      img {
        width: 85%;
        box-shadow: 0 5px 5px -6px $main-color;
      }
    }
  }
}

.graphic {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .designs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    @each $num, $color in $design-colors {
      .design-#{$num} {
        width: 20%;
        margin: 0.5%;
        height: 70%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color;
        .overlay {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: rgba(255, 255, 255, 0.9);
        }
        &:hover {
          .overlay {
            opacity: 1;
          }
        }
      }
      img {
        position: absolute;
        width: 75%;
        box-shadow: 0 5px 5px -6px $main-color;
      }
    }
  }
}

.info {
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 2.5vh;
  padding: 0 7%;
  text-align: center;
  span {
    font-size: 1.5vh;
  }
  i {
    font-size: 4vh;
    padding: 0 10%;
    color: $main-color;
  }
}

.arrow {
  position: absolute;
  bottom: 0;
  font-size: 6vh;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  color: $secondary-color;
  opacity: 0.5;
  transition: 500ms;
  &:hover {
    opacity: 1;
  }
}

.tabs {
  display: flex;
  width: 100vw;
  margin: 1.6% 0;
  color: $accent-color;
  li {
    list-style-type: none;
    height: 33px;
    margin: 0 1% -3px;
    cursor: pointer;
  }
}

@media only screen and (max-device-width: 750px) and (-webkit-min-device-pixel-ratio: 2) {
  .description {
    width: 80%;
    font-size: 3vh;
    line-height: 5vh;
    text-align: center;
  }

  .content {
    h2 {
      font-size: 4vh;
    }
  }

  .skills {
    .skills-icons {
      width: 80%;
      div {
        width: 22%;
        &:focus {
          filter: grayscale(0%);
          color: $main-color;
        }
        span {
          font-size: 1.5vh;
        }
      }
    }
  }

  .content {
    height: 100%;
    margin-bottom: 10vh;
  }

  .web {
    height: 245vh;
    .web-thumbnails {
      height: 100vh;
      @each $num, $color in $thumbnail-colors {
        .thumbnail-#{$num} {
          width: 100%;
          height: 40vh;
          &:focus {
            .overlay {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .graphic {
    height: 326vh;
    .designs {
      height: 74.7vh;
      @each $num, $color in $design-colors {
        .design-#{$num} {
          width: 100%;
          height: 40vh;
          &:focus {
            .overlay {
              opacity: 1;
            }
          }
        }
        img {
          width: 40%;
        }
      }
    }
  }

  .info {
    line-height: 2.5vh;
    padding: 0 7%;
    text-align: center;
    span {
      font-size: 1.5vh;
    }
    h3 {
      font-size: 2.6vh;
    }
    p {
      font-size: 1.8vh;
    }
    i {
      font-size: 4vh;
    }
  }

  .tabs {
    justify-content: center;
    width: 95.5%;
    li {
      font-size: 2.5vh;
      height: 65px;
      margin: 2% 4% 0;
    }
  }
}
</style>