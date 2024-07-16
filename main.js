"use strict";

const submit = document.querySelector(".submit");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
let totalBalance = document.getElementById("total-balance");
const selectItem = document.querySelector("select");
const addDetail = document.querySelector(".add-detail");

submit.addEventListener("click", function () {
  const descriptionInputValue = description.value;
  const amountValue = Number(amount.value);
  let totalBalanceAdd = Number(totalBalance.textContent);

  if (
    descriptionInputValue !== "" &&
    amountValue !== "" &&
    typeof amountValue === "number" &&
    amountValue > 0
  ) {
    const newDescription = document.createElement("p");
    newDescription.textContent = `${descriptionInputValue} : ${amountValue}`;
    addDetail.append(newDescription);

    totalBalanceAdd += amountValue;
    totalBalance.textContent = totalBalanceAdd;
  } else {
    alert("Please enter a valid description and amount.");
  }
});


