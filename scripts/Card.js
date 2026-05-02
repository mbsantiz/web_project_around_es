import { api } from "./Api.js";

export class Card {
  constructor(data, templateSelector, handleCardClick, handleDelete) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeClick() {
    const isActive = this._likeButton.classList.contains("active");
    if (isActive) {
      api
        .dislikeCard(this._id)
        .then(() => {
          this._likeButton.classList.remove("active");
          this._likeImage.src = "./images/heart.svg";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .likeCard(this._id)
        .then(() => {
          this._likeButton.classList.add("active");
          this._likeImage.src = "./images/hearthfilled.png";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeClick());

    this._deleteButton.addEventListener("click", () =>
      this._handleDelete(this),
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
