const generate = (team) => {
  const generateManager = (manager) => {
    return `<div class="card">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
        <p>Office:${manager.getOfficeNumber()}</p>
        <a href="mailto:${manager.getEmail()}">Email</a>
      </div>`;
  };
  const generateIntern = (intern) => {
    return `<div class="card">
    <h2>${intern.getName()}</h2>
    <h3>${intern.getRole()}</h3>
    <p>ID:${intern.getId()}</p>
    <p>School:${intern.getSchool()}</p>
    <a href="mailto:${intern.getEmail()}">Email</a>
  </div>`;
  };
};
