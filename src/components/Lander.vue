<template>
  <div>
    <!-- lander section -->
    <section class="section">
      <div class="container-fluid">
        <img
          alt="Vue logo"
          class="rounded-circle"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/220px-Woman_1.jpg"
        />
        <h1 id="name">Damien Belingheri</h1>
        <h2>Web Developer</h2>
        <p>
          Hello, I am 28 years old and I grew up in Lyon,France. I studied Web Developement at
          <a href="https://oclock.io">O'clock</a>
        </p>
      </div>
    </section>

    <!-- portfolio section -->
    <section class="portfolio">
      <h1>Portfolio</h1>
      <div class="container">
        <div class="row">
          <div class="flip-card col-md-6">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/Logo-Cosmorama-Rentas.png"
                  alt="Avatar"
                  style="width:80%;height:250px;margin:auto"
                />
                <h1>Cosmorama</h1>
              </div>
              <div class="flip-card-back">
                <h1>Cosmorama</h1>
                <p>
                  Cosmorama Renta is a audiovisual equipment rental website i made for a friend. I used Html, Css, Javascript, Bootstrap and Php inter alia.
                  <br />This is my first project.
                </p>
                <div class="button-code">
                  <button type="button" class="btn btn-outline-secondary">Demo</button>
                  <button type="button" class="btn btn-outline-secondary">Github</button>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card col-md-6">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../assets/421_black.png"
                  alt="Avatar"
                  style="width:60%;height:250px;margin:auto"
                />
                <h1>O'troquet</h1>
              </div>
              <div class="flip-card-back">
                <h1>O'troquet</h1>
                <p>
                  O'troquet is an online dice game and our school final project.
                  <br />This was very challenging because we had to create the whole project including specifications, wireframes, MCD, etc...
                  <br />I created the API REST using Symfony.
                </p>

                <div class="button-code">
                  <button type="button" class="btn btn-outline-secondary">Demo</button>
                  <button type="button" class="btn btn-outline-secondary">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skills">
      <h1>Skills</h1>
      <div class="container">
        <div class="row"></div>
      </div>
    </section>
  </div>
</template>



<style lang="css" scoped>
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
.portfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}
.skills{
 padding-top: 8%;
  padding-bottom: 15%;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 30em;
  perspective: 1000px;
  margin-top: 15px;
  border-radius: 20px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   border-radius: 20px;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
}

.flip-card-front {
  background-color: #ffffff;
  color: black;
}

.flip-card-back {
  background-color: #614051;
  color: white;
  transform: rotateY(180deg);
}
.flip-card-back h1 {
  margin: 100px 0 50px 0;
}
.flip-card-back p {
  margin: 50px 15px 15px 15px;
  text-align: center;
  border: 2px solid;
  padding: 15px 0 10px 0;
}
.flip-card-back img {
  margin-top: 35px;
}

.flip-card-back button {
  margin-right: 10px;
}
.btn-outline-secondary {
  color: black;
  background-color: #fff;
  border-color: #fff;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #325c82;
  border-color: #fff;
}

.button-code {
  position: absolute;
  bottom: 40px;
  left: calc(100% / 2 - 165.4px / 2);
}

#name {
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 900;
}
</style>