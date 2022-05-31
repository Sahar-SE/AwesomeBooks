const listNav = document.querySelector('#list-nav-item');
const addNav = document.querySelector('#add-nav-item');
const contactNav = document.querySelector('#contact-nav-item');
const navItems = [listNav, addNav, contactNav];
const activateNavItem = (id) => {
  navItems.forEach((navItem) => {
    if (navItem.id === id) {
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
};

export default activateNavItem;