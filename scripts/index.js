document.addEventListener("DOMContentLoaded", () => {
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

  function createCard(cardData) {
    const card = document.createElement("figure");
    card.classList.add("elements__item");

    card.innerHTML = `
    <div class="elements__image-container">
      <img src="${cardData.link}" alt="${cardData.name}" class="elements__image" />
      <button class="elements__delete-button">
        <img src="./images/Trash.png" alt="Eliminar" />
      </button>
    </div>

    <div class="elements__foot">
      <p class="elements__foot-text">${cardData.name}</p>
      <button class="elements__foot-button">
        <img src="./images/heart.svg" alt="Me gusta" class="elements__button-image" />
      </button>
    </div>
  `;
    const image = card.querySelector(".elements__image");

    image.addEventListener("click", () => {
      openImagePopup(cardData.link, cardData.name);
    });

    const likeButton = card.querySelector(".elements__foot-button");
    const likeImg = likeButton.querySelector("img");

    likeButton.addEventListener("click", () => {
      const isActive = likeButton.classList.toggle("active");
      likeImg.src = isActive
        ? "./images/hearthfilled.png"
        : "./images/heart.svg";
    });

    const deleteButton = card.querySelector(".elements__delete-button");
    deleteButton.addEventListener("click", () => {
      card.remove();
    });

    return card;
  }

  initialCards.forEach((cardData) => {
    elementsSection.appendChild(createCard(cardData));
  });

  const popupProfile = document.getElementById("popup");
  const openProfileBtn = document.getElementById("openPopup");
  const closeProfileBtn = document.getElementById("closePopup");
  const saveProfileBtn = document.getElementById("saveButton");
  const profileInputs = document.querySelectorAll(".popup__form__text");
  const formProfile = document.querySelector("#editForm");

  function toggleSaveButton(btn, inputs) {
    const hasText = Array.from(inputs).some((i) => i.value.trim() !== "");
    btn.classList.toggle("active", hasText);
  }

  openProfileBtn?.addEventListener("click", () =>
    popupProfile.classList.add("popup_opened")
  );
  closeProfileBtn?.addEventListener("click", () =>
    popupProfile.classList.remove("popup_opened")
  );

  profileInputs.forEach((input) =>
    input.addEventListener("input", () =>
      toggleSaveButton(saveProfileBtn, profileInputs)
    )
  );

  function handleProfileFormSubmit(e) {
    e.preventDefault();

    const nameInput = formProfile.querySelector('input[name="name"]');
    const jobInput = formProfile.querySelector('input[name="about"]');

    document.querySelector(".cover__container__info-name").textContent =
      nameInput.value;
    document.querySelector(".cover__container__info-role").textContent =
      jobInput.value;

    popupProfile.classList.remove("popup_opened");
  }

  formProfile.addEventListener("submit", handleProfileFormSubmit);

  const popupPlace = document.getElementById("popupPlace");
  const openPlaceBtn = document.querySelector(".cover__plusbutton");
  const closePlaceBtn = document.getElementById("closePopupPlace");
  const savePlaceButton = document.getElementById("savePlaceButton");
  const placeInputs = popupPlace.querySelectorAll(".popup__input");
  const placeForm = popupPlace.querySelector("form");

  openPlaceBtn.addEventListener("click", () =>
    popupPlace.classList.add("popup_opened")
  );
  closePlaceBtn.addEventListener("click", () =>
    popupPlace.classList.remove("popup_opened")
  );

  placeInputs.forEach((input) =>
    input.addEventListener("input", () =>
      toggleSaveButton(savePlaceButton, placeInputs)
    )
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popupPlace.classList.remove("popup_opened");
  });

  popupPlace.addEventListener("click", (e) => {
    if (e.target === popupPlace) popupPlace.classList.remove("popup_opened");
  });

  placeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = placeForm.querySelector('input[name="title"]').value;
    const link = placeForm.querySelector('input[name="image"]').value;

    const newCard = createCard({ name, link });

    elementsSection.prepend(newCard);
    popupPlace.classList.remove("popup_opened");
    placeForm.reset();
    savePlaceButton.classList.remove("active");
  });

  const popupImage = document.getElementById("popupImage");
  const popupImagePhoto = popupImage.querySelector(".popup-image__photo");
  const popupImageCaption = popupImage.querySelector(".popup-image__caption");
  const closePopupImageBtn = document.getElementById("closePopupImage");

  function openImagePopup(src, caption) {
    popupImagePhoto.src = src;
    popupImageCaption.textContent = caption;
    popupImage.classList.add("popup_opened");
  }

  closePopupImageBtn.addEventListener("click", () => {
    popupImage.classList.remove("popup_opened");
  });

  popupImage.addEventListener("click", (e) => {
    if (e.target === popupImage) popupImage.classList.remove("popup_opened");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") popupImage.classList.remove("popup_opened");
  });
});
