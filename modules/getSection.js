const getSectionId = (navItemId) => {
  let sectionId;
  switch (navItemId) {
    case 'list-nav-item':
      sectionId = 'list-section';
      break;
    case 'add-nav-item':
      sectionId = 'add-section';
      break;
    case 'contact-nav-item':
      sectionId = 'contact-section';
      break;
    default:
      sectionId = '';
  }
  return sectionId;
};
export default getSectionId;