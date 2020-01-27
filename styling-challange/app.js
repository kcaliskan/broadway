window.addEventListener("DOMContentLoaded", e => {
  //Short version for the long class names while doing event delegation
  const _moreTimesBtn = "showContainer__moreTimesContainer__btn";
  const _moreTimesIcon = "showContainer__moreTimesContainer__icon";

  const showContainer = document.querySelector(
    ".showContainer__datesContainer"
  );

  //Hidden show's wrapper div for when users click the "More Performances" button
  const hiddenShowTimes = document.querySelector(".hiddenShowTimes");

  //View calendar button when users see the all show times
  const viewCalendarBtn = document.querySelector(
    ".showContainer__viewCalendarContainer"
  );

  //More performances button for toggle the show's all show times
  const morePerformancesBtn = document.querySelector(
    ".showContainer__moreTimesContainer"
  );

  // Event listener for when clicking the "More Performances" button
  showContainer.addEventListener("click", e => {
    if (
      e.target.className === _moreTimesBtn ||
      e.target.className === _moreTimesIcon
    ) {
      //Toggle the more performances div
      morePerformancesBtn.style.display = "none";
      viewCalendarBtn.style.display = "flex";
      $(hiddenShowTimes).slideToggle(500, function() {});
    }
  });
});
