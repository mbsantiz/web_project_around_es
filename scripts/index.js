import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

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

document.addEventListener("DOMContentLoaded", () => {
  const elementsSection = document.querySelector(".elements");

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      if (openedPopup) closePopup(openedPopup);
    }
  });

  const allPopups = document.querySelectorAll(".popup");
  allPopups.forEach((popup) => {
    popup.addEventListener("mousedown", (e) => {
      if (e.target === popup) {
        closePopup(popup);
      }
    });
  });

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

  function createCard(data) {
    const card = new Card(data, "#card-template", (link, name) => {
      openImagePopup(link, name);
    });

    return card.generateCard();
  }

  initialCards.forEach((cardData) => {
    elementsSection.appendChild(createCard(cardData));
  });

  const popupProfile = document.getElementById("popup");
  const openProfileBtn = document.getElementById("openPopup");
  const closeProfileBtn = document.getElementById("closePopup");
  const saveProfileBtn = document.getElementById("saveButton");
  const profileInputs = popupProfile.querySelectorAll(".popup__input");
  const formProfile = document.querySelector("#editForm");

  function toggleSaveButton(btn, inputs) {
    const hasText = Array.from(inputs).some((i) => i.value.trim() !== "");
    btn.classList.toggle("active", hasText);
  }

  openProfileBtn?.addEventListener("click", () => {
    formValidators[formProfile.id].resetValidation();
    openPopup(popupProfile);
  });
  closeProfileBtn?.addEventListener("click", () => closePopup(popupProfile));

  profileInputs.forEach((input) =>
    input.addEventListener("input", () =>
      toggleSaveButton(saveProfileBtn, profileInputs),
    ),
  );

  function handleProfileFormSubmit(e) {
    e.preventDefault();

    const nameInput = formProfile.querySelector('input[name="name"]');
    const jobInput = formProfile.querySelector('input[name="about"]');

    document.querySelector(".cover__container__info-name").textContent =
      nameInput.value;
    document.querySelector(".cover__container__info-role").textContent =
      jobInput.value;

    closePopup(popupProfile);
  }

  formProfile.addEventListener("submit", handleProfileFormSubmit);

  const popupPlace = document.getElementById("popupPlace");
  const openPlaceBtn = document.querySelector(".cover__plusbutton");
  const closePlaceBtn = document.getElementById("closePopupPlace");
  const savePlaceButton = document.getElementById("savePlaceButton");
  const placeInputs = popupPlace.querySelectorAll(".popup__input");
  const placeForm = popupPlace.querySelector("form");

  openPlaceBtn.addEventListener("click", () => {
    openPopup(popupPlace);
    placeForm.reset();
    formValidators[formProfile.id].resetValidation();
  });

  closePlaceBtn.addEventListener("click", () => closePopup(popupPlace));

  placeInputs.forEach((input) =>
    input.addEventListener("input", () =>
      toggleSaveButton(savePlaceButton, placeInputs),
    ),
  );

  placeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = placeForm.querySelector('input[name="title"]').value;
    const link = placeForm.querySelector('input[name="image"]').value;

    const newCard = createCard({ name, link });

    elementsSection.prepend(newCard);
    placeForm.reset();
    savePlaceButton.classList.remove("active");
    closePopup(popupPlace);
  });

  const popupImage = document.getElementById("popupImage");
  const popupImagePhoto = popupImage.querySelector(".popup-image__photo");
  const popupImageCaption = popupImage.querySelector(".popup-image__caption");
  const closePopupImageBtn = document.getElementById("closePopupImage");

  function openImagePopup(src, caption) {
    popupImagePhoto.src = src;
    popupImageCaption.textContent = caption;
    openPopup(popupImage);
  }

  closePopupImageBtn.addEventListener("click", () => closePopup(popupImage));
});
