const listSection = document.querySelector('#list-section');
const addSection = document.querySelector('#add-section');
const contactSection = document.querySelector('#contact-section');
const sections = [listSection, addSection, contactSection];
const displaySection = (id) => {
  sections.forEach((section) => {
    if (section.id === id) {
      section.classList.remove('d-none');
    } else {
      section.classList.add('d-none');
    }
  });
};

export default displaySection;