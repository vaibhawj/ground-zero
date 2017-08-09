import { configure } from '@kadira/storybook';
import 'todomvc-app-css/index.css'

function loadStories() {
  require('../stories/');
}

configure(loadStories, module);
