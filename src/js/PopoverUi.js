export default class Popover {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Контейнер не является элементом "HTMLElement"');
    }
    this.container = container;
  }

  drawUi() {
    const btnEl = document.createElement('button');
    btnEl.type = 'button';
    btnEl.classList.add('button');
    btnEl.textContent = 'Показать подсказку';
    this.container.append(btnEl);
    this.btn = btnEl;
  }

  showPopover() {
    const popoverEl = document.createElement('div');
    popoverEl.classList.add('popover');
    popoverEl.innerHTML = `
    <h4 class="popover-header">Popover title</h4>
    <p class="popover-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Alias ea possimus ratione impedit doloremque earum consectetur, dicta maxime est sit.</p>
    <div class="popover-tip"></div>
    `;
    this.container.prepend(popoverEl);
    popoverEl.style.top = `${this.btn.offsetTop - popoverEl.offsetHeight}px`;
    popoverEl.style.left = `${this.btn.offsetLeft + this.btn.offsetWidth / 2 - popoverEl.offsetWidth / 2}px`;
  }

  clearPopover() {
    const popoverEl = this.container.querySelector('.popover');
    if (popoverEl) {
      popoverEl.remove();
    }
  }
}
