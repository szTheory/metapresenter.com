// CSS imports
import "../stylesheets/application.scss";
import "../stylesheets/highlighting.scss.erb";

// image imports
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("../images/", true));

// JS imports
import "bootstrap/js/src/collapse";

// app code
import "./github";
import "./navscroll";

// app init
import { init } from "./init";
init();
