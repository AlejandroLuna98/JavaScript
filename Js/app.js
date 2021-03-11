import hamburguerMenu from "./menu.js";
import { alarm, ClockHour } from "./reloj.js";





document.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  ClockHour("#reloj","#activar-reloj","#desactivar-reloj")
  alarm("../assets/assets_alarma.mp3","#activar-alarma","#desactivar-alarma")
});

