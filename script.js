const i_am = document.querySelector("#profile h1");
const img_Profile = document.querySelector("#profileInfo img");
const p_Profile = document.querySelector("#profileInfo p");
const interrogation = document.querySelector("#profile h1  strong");
const iconsprofile = document.querySelectorAll("#profileIcons");


const iconMenu = document.querySelector("#iconBurguer");
const showNav = document.querySelector("nav");


const profile = document.querySelector("#profile");
const scrollProfile = document.querySelector("#scrollProf");

const project = document.querySelector("#projects")
const scrollProject = document.querySelector("#scrollProj");

const scrollSkill = document.querySelector("#scrollSkill");
const skill = document.querySelector("#mySkills");

const scrollContact = document.querySelector("#scrollContact");
const Contact = document.querySelector("#contact");

scrollSkill.addEventListener("click", () => {
  skill.scrollIntoView({behavior:'smooth'})
})

scrollProject.addEventListener("click", () => {
  project.scrollIntoView({behavior:'smooth'})
})


scrollProfile.addEventListener('click', () => {
  profile.scrollIntoView({behavior: 'smooth'})
})


scrollContact.addEventListener("click", () => {
  Contact.scrollIntoView({behavior:'smooth'})
})


window.addEventListener("load", () => {
  if (window.innerWidth >= 700) {
    gsap.to(i_am, {
      y: 0,
      duration: 1,
      opacity: 1,
    });

    gsap.to(img_Profile, {
      x: -50,
      opacity: 1,
      duration: 1,
    });

    gsap.to(interrogation, {
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "bounce.out",
    });

    gsap.to(p_Profile, {
      duration: 1.2,
      opacity: 1,
    });

    gsap.to(iconsprofile, {
      y: 0,
      opacity: 1,
      duration: 1.2,
    });
  }
});

//Show menu
let animationButMenu = false;

iconMenu.addEventListener("click", () => {
  if (!animationButMenu) {
    iconMenu.classList.add("activeMenu");
    showNav.classList.add("showMenu");
    console.log("oi");
    animationButMenu = true;
  } else {
    iconMenu.classList.remove("activeMenu");
    showNav.classList.remove("showMenu");
    animationButMenu = false;
  }
});
