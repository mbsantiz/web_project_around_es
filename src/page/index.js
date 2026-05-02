import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopUpWithImage } from "../components/PopUpWithImage.js";
import { PopupWithForm } from "../components/PopupWithForms.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

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

const popupWithImage = new PopUpWithImage("#popupImage");
popupWithImage.setEventListeners();

function createCard(data) {
  const card = new Card(
    data,
    "#card-template",
    (link, name) => {
      popupWithImage.open(link, name);
    },
    (card) => {
      cardToDelete = card;
      popupConfirmation.open();
    },
  );

  return card.generateCard();
}

const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },
  ".elements",
);

let cardToDelete = null;

const popupConfirmation = new PopupWithConfirmation("#popupConfirm", () => {
  api
    .deleteCard(cardToDelete._id)
    .then(() => {
      cardToDelete._element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
});
popupConfirmation.setEventListeners();

const popupEditProfile = new PopupWithForm("#popup", (data) => {
  popupEditProfile.editButton("Guardando...");
  api
    .editProfile(data.name, data.about)
    .then(() => {
      userInfo.setUserInfo({ name: data.name, job: data.about });
      popupEditProfile.editButton("Guardar");
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
      popupEditProfile.editButton("Guardar");
      popupEditProfile.close();
    });
});
popupEditProfile.setEventListeners();

const popupAvatar = new PopupWithForm("#popupAvatar", (avatar) => {
  popupAvatar.editButton("Guardando...");
  api
    .updateAvatar(avatar.avatar)
    .then(() => {
      const avatarImage = document.querySelector(".cover__container-image");
      avatarImage.src = avatar.avatar;
      popupAvatar.editButton("Guardar");
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
      popupAvatar.editButton("Guardar");
      popupAvatar.close();
    });
});
popupAvatar.setEventListeners();

document.getElementById("openPopup").addEventListener("click", () => {
  popupEditProfile.open();
  formValidators["editForm"].resetValidation();
});

const popupNewPlace = new PopupWithForm("#popupPlace", (data) => {
  popupNewPlace.editButton("Guardando...");
  api
    .addNewCard(data.title, data.image)
    .then((newCardData) => {
      const newCard = createCard({
        name: newCardData.name,
        link: newCardData.link,
        _id: newCardData._id,
      });
      elementsSection.prepend(newCard);
      popupNewPlace.editButton("Guardar");
      popupNewPlace.close();
    })
    .catch((err) => {
      console.log(err);
      popupNewPlace.editButton("Guardar");
      popupNewPlace.close();
    });
});
popupNewPlace.setEventListeners();

document.querySelector(".cover__plusbutton").addEventListener("click", () => {
  popupNewPlace.open();
  formValidators["newPlaceForm"].resetValidation();
});

document
  .querySelector(".cover__container-image")
  .addEventListener("click", () => {
    popupAvatar.open();
    formValidators["editAvatar"].resetValidation();
  });

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.about,
    });

    cardSection.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err);
  });
