let aboutUsContentDiv = document.createElement("div");
aboutUsContentDiv.className = "about-us-content-div";

function showAbout() {
  let aboutUsContainer = document.createElement("div");
  aboutUsContainer.className = "about-us-container";

  let aboutUsTitle = document.createElement("h1");
  aboutUsTitle.className = "about-us-title";
  aboutUsTitle.textContent = "MEET BRENDEN, AUSTIN, AND GRANT";

  let aboutUsInfo = document.createElement("p");
  aboutUsInfo.className = "about-is-info";
  aboutUsInfo.textContent =
    "At Coal and Fire, barbecue isn’t just food — it’s our way of life. We’re three friends who turned weekend cookouts into a full-blown passion project, built on smoke, flavor, and a lot of laughs along the way. Each of us brings something different to the pit, and together, we make barbecue that’s real, honest, and made to share.";

  let brendenTitle = document.createElement("h2");
  brendenTitle.className = "brenden-title";
  brendenTitle.textContent = "BRENDEN";

  let brendenInfo = document.createElement("p");
  brendenInfo.className = "brenden-info";
  brendenInfo.textContent =
    "Brenden was the spark that lit the fire. It all started in his backyard, with a beat-up smoker, some ribs, and the determination to get it right. He was the guy staying up all night, checking the fire, learning every trick the pit had to offer. Brenden’s the heart of the smoke — slow-cooked, deeply flavored, and never rushed. What began as a hobby turned into a calling, and now, he brings that same passion to every plate we serve.";

  let austinTitle = document.createElement("h2");
  austinTitle.className = "austin-title";
  austinTitle.textContent = "AUSTIN";

  let austinInfo = document.createElement("p");
  austinInfo.className = "austin-info";
  austinInfo.textContent =
    "Austin is the flavor master. While Brenden handled the meat, Austin was always perfecting the sides, sauces, and seasonings. He has an eye for detail and a taste for balance — making sure everything on your plate not only tastes great but works together. From spicy to sweet, smoky to tangy, Austin’s touch is in every bite. He’s the guy who makes sure the food isn’t just cooked — it’s crafted.";

  let grantTitle = document.createElement("h2");
  grantTitle.className = "Grant-title";
  grantTitle.textContent = "Grant";

  let grantInfo = document.createElement("p");
  grantInfo.className = "grant-info";
  grantInfo.textContent =
    "Grant is the glue that holds it all together. He’s the organizer, the planner, and the one who makes sure things run like a well-oiled smoker. Whether it’s handling events, managing the chaos of a busy day, or coming up with the next big idea, Grant keeps Coal and Fire moving forward. He’s also the first one to crack a joke and the last one to leave the grill — always making sure everyone’s fed and having a good time.";

  aboutUsContainer.append(
    aboutUsTitle,
    aboutUsInfo,
    brendenTitle,
    brendenInfo,
    austinTitle,
    austinInfo,
    grantTitle,
    grantInfo
  );
  aboutUsContentDiv.append(aboutUsContainer);
}

export { aboutUsContentDiv, showAbout };
