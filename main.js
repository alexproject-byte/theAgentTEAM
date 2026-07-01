/* =========================================================
   Interaktivität: Garage öffnen, Autos vorfahren, UFO, Aliens
   Reines Vanilla-JS, keine Abhängigkeiten.
   ========================================================= */

(function () {
  "use strict";

  const garage   = document.getElementById("garage");
  const ufo      = document.getElementById("ufo");
  const hint     = document.getElementById("hint");
  const car1     = document.getElementById("car1");
  const car2     = document.getElementById("car2");
  const cars     = [car1, car2];

  const btnCar    = document.getElementById("btnCar");
  const btnGarage = document.getElementById("btnGarage");
  const btnUfo    = document.getElementById("btnUfo");

  // Wo die Autos einparken (linke Position in px innerhalb der Szene)
  const PARK_SPOTS = [335, 240];
  let nextCar = 0;

  function say(text) {
    if (hint) hint.textContent = text;
  }

  /* ---------- Garage öffnen / schließen ---------- */
  function toggleGarage() {
    const open = garage.classList.toggle("open");
    say(open
      ? "👽 Uuuh … da lugen die Aliens raus! Klick eins an, dann duckt es sich."
      : "🚪 Garage zu. Die Aliens verstecken sich wieder …");
  }

  garage.addEventListener("click", function (e) {
    // Klick direkt auf ein Alien -> Alien duckt sich (nicht Tor schalten)
    const alien = e.target.closest("[data-alien]");
    if (alien && garage.classList.contains("open")) {
      duck(alien);
      e.stopPropagation();
      return;
    }
    toggleGarage();
  });

  function duck(alien) {
    alien.classList.add("duck");
    say("😆 Erwischt! Das Alien versteckt sich kurz …");
    setTimeout(() => alien.classList.remove("duck"), 1200);
  }

  /* ---------- Auto vorfahren & einparken ---------- */
  function driveCar() {
    const car = cars[nextCar % cars.length];
    const spot = PARK_SPOTS[nextCar % PARK_SPOTS.length];
    nextCar++;

    // zurück nach links setzen, dann vorfahren
    car.style.left = "-120px";
    // kleiner Reflow-Trick, damit die Transition sauber neu startet
    void car.offsetWidth;
    car.style.left = spot + "px";
    say("🚗 Ein Auto fährt vor und parkt ein …");
    setTimeout(() => say("🅿️ Geparkt! Noch ein Auto? Drück den Knopf nochmal."), 2700);
  }

  /* ---------- UFO rufen ---------- */
  function callUfo() {
    const show = ufo.classList.toggle("show");
    say(show
      ? "🛸 Ein UFO schwebt heran … vielleicht wollen sie die Aliens abholen?"
      : "🛸 Das UFO fliegt wieder davon.");
  }

  btnGarage.addEventListener("click", toggleGarage);
  btnCar.addEventListener("click", driveCar);
  btnUfo.addEventListener("click", callUfo);

  /* ---------- Die Szene lebt von selbst ----------
     Erstes Auto fährt automatisch vor, Garage öffnet kurz zum Gruß. */
  window.addEventListener("load", function () {
    setTimeout(driveCar, 900);
    setTimeout(function () {
      garage.classList.add("open");
      say("👋 Die Aliens sagen Hallo! Klick die Garage, um sie zu schließen.");
    }, 2600);
  });
})();
