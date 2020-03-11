import Tooltip from './components/tooltip';
import {translateNum} from './problems/translateNum';

document.addEventListener('DOMContentLoaded', e => {
  let tip = new Tooltip(document.querySelector('#test-tooltip'));

  let tipRed = new Tooltip(document.querySelector('#test-tooltip-red'), {
    customTipClassName: 'tooltip-red'
  });

  let tipYellow = new Tooltip(document.querySelector('#test-tooltip-yellow'), {
    customTipClassName: 'tooltip-yellow'
  });

  let tipBlue = new Tooltip(document.querySelector('#test-tooltip-blue'), {
    customTipClassName: 'tooltip-blue'
  });
})

console.log(translateNum(55))
