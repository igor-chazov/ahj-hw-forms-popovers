export default class PopoverController {
  constructor(popoverUi) {
    this.popoverUi = popoverUi;
  }

  init() {
    this.popoverUi.drawUi();

    this.popoverUi.btn.addEventListener('click', () => {
      if (!this.popoverUi.container.querySelector('.popover')) {
        this.popoverUi.showPopover();
      } else {
        this.popoverUi.clearPopover();
      }
    });
  }
}
