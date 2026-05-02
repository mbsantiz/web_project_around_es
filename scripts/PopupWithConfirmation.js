import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selector, handleConfirm) {
    super(selector);
    this._handleConfirm = handleConfirm;
    this._confirmButton = this._popup.querySelector(".popup__savebutton");
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._handleConfirm();
    });
  }
}
