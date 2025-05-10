const data = {
  profilePic: "https://i.pinimg.com/originals/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg",
  name: "Irana Mirzazada",
  title: "Marketing Manager",
  contact: [
    "+123-456-7890",
    "hello@reallygreatsite.com",
    "123 Anywhere St., Any City",
    "www.reallygreatsite.com"
  ],
  education: [
    { years: "2029 - 2030", school: "WARDIERE UNIVERSITY", degree: "Master of Business Management" },
    { years: "2025 - 2029", school: "WARDIERE UNIVERSITY", degree: "Bachelor of Business", gpa: "3.8 / 4.0" }
  ],
  skills: ["Project Management", "Public Relations", "Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"],
  languages: ["English (Fluent)", "French (Fluent)", "German (Basics)", "Spanish (Intermediate)"],
  profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  experience: [
    {
      company: "Borcelle Studio",
      title: "Marketing Manager & Specialist",
      responsibilities: [
        "Develop and execute comprehensive marketing strategies...",
        "Lead, mentor, and manage a high-performing team...",
        "Monitor brand consistency across channels."
      ]
    }
  ],
  references: [
    { name: "Estelle Darcy", position: "Wardiere Inc. / CTO", phone: "123-456-7890", email: "hello@reallygreatsite.com" },
    { name: "Harper Richard", position: "Wardiere Inc. / CEO", phone: "123-456-7890", email: "hello@reallygreatsite.com" }
  ]
};

function render() {
  document.getElementById("profile-pic").src = data.profilePic;
  document.getElementById("name").textContent = data.name;
  document.getElementById("title").textContent = data.title;

  document.getElementById("contact").innerHTML = data.contact.map(c => `<p class="text-small">${c}</p>`).join('');
  document.getElementById("education").innerHTML = data.education.map(e => `
    <div class="text-small">
      <div>${e.years}</div>
      <div class="bold">${e.school}</div>
      <div>${e.degree}</div>
      ${e.gpa ? `<div>GPA: ${e.gpa}</div>` : ''}
    </div>`).join('');

  document.getElementById("skills").innerHTML = data.skills.map(s => `<div class="skill">${s}</div>`).join('');
  document.getElementById("languages").innerHTML = data.languages.map(l => `<div class="text-small">${l}</div>`).join('');
  document.getElementById("profile").textContent = data.profile;

  document.getElementById("experience").innerHTML = data.experience.map(exp => `
    <div class="text-small">
      <div class="bold">${exp.company}</div>
      <div>${exp.title}</div>
      <ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>`).join('');

  document.getElementById("references").innerHTML = data.references.map(ref => `
    <div class="text-small">
      <div class="bold">${ref.name}</div>
      <div>${ref.position}</div>
      <div>Phone: ${ref.phone}</div>
      <div>Email: ${ref.email}</div>
    </div>`).join('');
}

function addEducation() {
  const years = prompt("Years:");
  const school = prompt("School:");
  const degree = prompt("Degree:");
  const gpa = prompt("GPA (optional):");
  if (years && school && degree) {
    data.education.push({ years, school, degree, gpa });
    render();
  }
}

function addSkill() {
  const skill = prompt("New skill:");
  if (skill) {
    data.skills.push(skill);
    render();
  }
}

function addExperience() {
  const company = prompt("Company name:");
  const title = prompt("Job title:");
  const responsibilities = [];
  while (true) {
    const r = prompt("Responsibility (leave empty to finish):");
    if (!r) break;
    responsibilities.push(r);
  }
  if (company && title && responsibilities.length > 0) {
    data.experience.push({ company, title, responsibilities });
    render();
  }
}

function toggleSection(header) {
  const dropdown = header.parentElement;
  dropdown.classList.toggle("open");
}

render();
