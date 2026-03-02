export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle("active");
    const isActive = this._likeButton.classList.contains("active");
    this._likeImage.src = isActive
      ? "./images/hearthfilled.png"
      : "./images/heart.svg";
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeClick());

    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteClick(),
    );

    this._image.addEventListener("click", () =>
      this._handleCardClick(this._link, this._name),
    );
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector(".elements__image");
    this._likeButton = this._element.querySelector(".elements__foot-button");
    this._likeImage = this._likeButton.querySelector("img");
    this._deleteButton = this._element.querySelector(
      ".elements__delete-button",
    );

    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".elements__foot-text").textContent =
      this._name;

    this._setEventListeners();

    return this._element;
  }
}
