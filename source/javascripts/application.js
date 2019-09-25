// CSS imports
import '../stylesheets/application.scss'
import '../stylesheets/highlighting.scss.erb'

// JS imports
import 'bootstrap/js/src/collapse'

// app
import './github'
import './navscroll'

function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('../fonts/', true));
requireAll(require.context('../images/', true));