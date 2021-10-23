import PopoverUi from './PopoverUi';
import PopoverController from './PopoverController';

const popoverUi = new PopoverUi();
popoverUi.bindToDOM(document.querySelector('#container'));

const popoverCtrl = new PopoverController(popoverUi);
popoverCtrl.init();
