import { Popup } from "./Popup.js";

export class PopUpWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(link, name) {
    const image = this._popup.querySelector(".popup-image__photo");
    image.src = link;
    const caption = this._popup.querySelector(".popup-image__caption");
    caption.textContent = name;
    super.open();
  }
}
