var mql = window.matchMedia("(max-width: 768px)");
var panelShown = null;

function userClickedAccordion(event) {
  event.preventDefault();
  if (mql.matches) {
    var panel = document.getElementById("panel-mobile");
    panelShown = "panel-mobile";
  } else {
    var panel = document.getElementById("panel-desktop");
    panelShown = "panel-desktop";
  }
  if (panel.style.display === "") {
    panel.style.display = "table-row";
    document
      .getElementById("details-chevron")
      .classList.replace("fa-chevron-down", "fa-chevron-up");
    document.getElementsByClassName("accordion")[0].firstChild.textContent =
      "Hide Details";
  } else {
    panel.style.display = "";
    document
      .getElementById("details-chevron")
      .classList.replace("fa-chevron-up", "fa-chevron-down");
    document.getElementsByClassName("accordion")[0].firstChild.textContent =
      "Show Details";
    panelShown = null;
  }
}

function userClickedMobileMenu(event) {
  event.preventDefault();
  var mobileNavLinks = document.getElementsByClassName("mobile-nav-links")[0]; // We only have list of mobile links at the moment.
  console.log(mobileNavLinks.style.display);
  if (mobileNavLinks.style.display === "") {
    mobileNavLinks.style.display = "block";
    document
      .getElementById("mobile-menu-chevron")
      .classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    mobileNavLinks.style.display = "";
    document
      .getElementById("mobile-menu-chevron")
      .classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

mql.addEventListener("change", (e) => {
  if (e.matches) {
    if (panelShown === "panel-desktop") {
      /* If we are currently viewing the desktop panel but our screen-size is mobile, we need
			to show the mobile panel */
      var panel = document.getElementById("panel-desktop");
      panel.style.display = "";
      panel = document.getElementById("panel-mobile");
      panel.style.display = "table-row";
      panelShown = "panel-mobile";
    }
  } else {
    if (panelShown === "panel-mobile") {
      /* If we are currently viewing the mobile panel but our screen-size is mobile, we need
			to show the desktop panel */
      var panel = document.getElementById("panel-mobile");
      panel.style.display = "";
      panel = document.getElementById("panel-desktop");
      panel.style.display = "table-row";
      panelShown = "panel-desktop";
    }
  }
});
