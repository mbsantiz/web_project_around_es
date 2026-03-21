import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopUpWithImage } from "./PopUpWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const userInfo = new UserInfo({
  nameSelector: ".cover__container__info-name",
  jobSelector: ".cover__container__info-role",
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__savebutton",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formList = Array.from(
  document.querySelectorAll(validationConfig.formSelector),
);

const formValidators = {};

formList.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
  formValidators[formElement.id] = validator;
});

const elementsSection = document.querySelector(".elements");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const popupWithImage = new PopUpWithImage("#popupImage");
popupWithImage.setEventListeners();

function createCard(data) {
  const card = new Card(data, "#card-template", (link, name) => {
    popupWithImage.open(link, name);
  });

  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },
  ".elements",
);

cardSection.renderItems();

const popupEditProfile = new PopupWithForm("#popup", (data) => {
  userInfo.setUserInfo({ name: data.name, job: data.about });
});
popupEditProfile.setEventListeners();

document.getElementById("openPopup").addEventListener("click", () => {
  popupEditProfile.open();
  formValidators["editorm"].resetValidation();
});

const popupNewPlace = new PopupWithForm("#popupPlace", (data) => {
  const newCard = createCard({ name: data.title, link: data.image });
  elementsSection.prepend(newCard);
});
popupNewPlace.setEventListeners();

document.querySelector(".cover__plusbutton").addEventListener("click", () => {
  popupNewPlace.open();
  formValidators["newPlaceForm"].resetValidation();
});
