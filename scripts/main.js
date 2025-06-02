document.addEventListener("DOMContentLoaded", () => {
  /* Add box shadow to nav on scroll */
  window.addEventListener("scroll", function () {
    const globalNavbar = document.getElementById("global-navbar");

    if (window.scrollY > 72) {
      globalNavbar.classList.add("shadow-nav");
    } else {
      globalNavbar.classList.remove("shadow-nav");
    }
  });

  /* Top Nav Open on Hover */
  const subNavNotion = document.getElementById("sub-nav-notion");
  const notionNavLink = document.getElementById("notion-nav-link");
  const subNavHoverState = bootstrap.Collapse.getOrCreateInstance(
    subNavNotion,
    {
      toggle: false,
    }
  );

  let hideTimeout;

  function clearHideTimeout() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  }

  function showSubNav() {
    clearHideTimeout();
    subNavHoverState.show();
  }

  function hideSubNav() {
    hideTimeout = setTimeout(() => {
      subNavHoverState.hide();
    }, 500);
  }

  notionNavLink.addEventListener("mouseenter", showSubNav);
  subNavNotion.addEventListener("mouseenter", showSubNav);
  notionNavLink.addEventListener("mouseleave", hideSubNav);
  subNavNotion.addEventListener("mouseleave", hideSubNav);

  /* Nav Link "Notion" Open State */
  const notionNavLinkArrow = document.querySelector(
    "#notion-nav-link .collapse-arrow"
  );
  subNavNotion.addEventListener("show.bs.collapse", function () {
    notionNavLink.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
    notionNavLinkArrow.classList.remove("bi-chevron-down");
    notionNavLinkArrow.classList.add("bi-chevron-up");
  });
  subNavNotion.addEventListener("hide.bs.collapse", function () {
    notionNavLink.style.background = "none";
    notionNavLinkArrow.classList.remove("bi-chevron-up");
    notionNavLinkArrow.classList.add("bi-chevron-down");
  });

  /* Toggle Menu Icon Transition */
  const fullscreenNav = document.getElementById("fullscreen-nav");
  const hamburgerIconImg = document.querySelector(".hamburger-icon");
  const xIconImg = document.querySelector(".x-icon");

  function toggleIconFadeIn(icon) {
    icon.classList.remove("hide");
    icon.style.display = "inline";
    setTimeout(() => {
      icon.classList.add("show");
    }, 1);
  }

  function toggleIconFadeOut(icon) {
    icon.classList.remove("show");
    icon.classList.add("hide");
    setTimeout(() => {
      icon.style.display = "none";
    }, 1);
  }

  fullscreenNav.addEventListener("show.bs.offcanvas", function () {
    toggleIconFadeOut(hamburgerIconImg);
    toggleIconFadeIn(xIconImg);
  });

  fullscreenNav.addEventListener("hide.bs.offcanvas", function () {
    toggleIconFadeOut(xIconImg);
    toggleIconFadeIn(hamburgerIconImg);
  });

  /* Close fullscreenNav at xl breakpoint */
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(fullscreenNav);

  function closeNavOnLargerScreens() {
    if (window.innerWidth >= 1200 && fullscreenNav.classList.contains("show")) {
      bsOffcanvas.hide();
    }
  }

  closeNavOnLargerScreens();
  window.addEventListener("resize", closeNavOnLargerScreens);

  /* Nav Content Fade Transition */
  const fullscreenNavContent = document.querySelectorAll("#fullscreen-nav div");

  function fadeIn() {
    fullscreenNavContent.forEach((div) => {
      setTimeout(() => {
        if (div.classList.contains("slideInHidden")) {
          div.classList.remove("slideInHidden");
          div.classList.add("slideInVisible");
          div.classList.add("slideInTransition");
        }
      }, 300);
      setTimeout(() => {
        div.classList.remove("fadeHidden");
        div.classList.add("fadeVisible");
        div.classList.add("fadeTransition");
      }, 400);
    });
  }

  function fadeInReset() {
    fullscreenNavContent.forEach((div) => {
      div.classList.remove("fadeVisible");
      div.classList.remove("fadeTransition");
      div.classList.add("fadeHidden");
      if (div.classList.contains("slideInVisible")) {
        div.classList.remove("slideInVisible");
        div.classList.remove("slideInTransition");
        div.classList.add("slideInHidden");
      }
    });
  }

  fullscreenNav.addEventListener("shown.bs.offcanvas", fadeIn);
  fullscreenNav.addEventListener("hidden.bs.offcanvas", fadeInReset);

  /* Grey Out Non-active Links (Fullscreen Nav) & Change arrow direction */

  fullscreenNav.querySelectorAll(".collapse").forEach((collapseDiv) => {
    const allItemTitles = document.querySelectorAll(
      "#fullscreen-nav .sub-nav-title"
    );
    const fullscreenNavNewBadge = fullscreenNav.querySelector(".nav-badge-new");
    const collapseArrows = {};

    collapseDiv.addEventListener("show.bs.collapse", function () {
      const collapseLink = document.querySelector(`a[href="#${this.id}"]`);
      const activeNavItem = collapseLink.closest(".nav-item");
      const activeItemTitle = activeNavItem.querySelector(".sub-nav-title");
      const inactiveItemTitles = Array.from(allItemTitles).filter(
        (item) => item !== activeItemTitle
      );
      const activeCollapseArrow = collapseLink.querySelector(".collapse-arrow");

      collapseArrows[this.id] = activeCollapseArrow;

      inactiveItemTitles.forEach((item) => item.classList.add("inactive"));
      fullscreenNavNewBadge.classList.add("inactive");
      activeCollapseArrow.classList.remove("bi-chevron-down");
      activeCollapseArrow.classList.add("bi-chevron-up");
    });

    collapseDiv.addEventListener("hide.bs.collapse", function () {
      const downArrow = collapseArrows[this.id];
      allItemTitles.forEach((item) => item.classList.remove("inactive"));
      fullscreenNavNewBadge.classList.remove("inactive");
      downArrow.classList.remove("bi-chevron-up");
      downArrow.classList.add("bi-chevron-down");
    });
  });
});
