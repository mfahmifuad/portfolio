translations.en.nav_education = "Education";
translations.en.education_eyebrow = "Education";
translations.en.education_title = "Academic foundation in finance, engineering, and quantitative analysis.";
translations.en.education_graduated = "Graduated";
translations.en.education_postgraduate = "Postgraduate";
translations.en.education_undergraduate = "Undergraduate";
translations.en.education_mba_title = "Master of Business Administration";
translations.en.education_mba_focus = "Major in Finance";
translations.en.education_beng_title = "Bachelor of Mechanical Engineering with Honours";
translations.en.education_beng_focus = "Engineering with Honours";

translations.ms.nav_education = "Pendidikan";
translations.ms.education_eyebrow = "Pendidikan";
translations.ms.education_title = "Asas akademik dalam kewangan, kejuruteraan dan analisis kuantitatif.";
translations.ms.education_graduated = "Tamat";
translations.ms.education_postgraduate = "Pascasiswazah";
translations.ms.education_undergraduate = "Prasiswazah";
translations.ms.education_mba_title = "Master of Business Administration";
translations.ms.education_mba_focus = "Pengkhususan Kewangan";
translations.ms.education_beng_title = "Bachelor of Mechanical Engineering with Honours";
translations.ms.education_beng_focus = "Kejuruteraan dengan Kepujian";

document.querySelectorAll(".desktop-nav, .mobile-nav").forEach((nav) => {
  if (nav.querySelector('a[href="#education"]')) return;
  const link = document.createElement("a");
  link.href = "#education";
  link.dataset.i18n = "nav_education";
  const contactLink = nav.querySelector('a[href="#contact"]');
  nav.insertBefore(link, contactLink);
});

if (!document.querySelector("#education")) {
  const section = document.createElement("section");
  section.className = "section education-section";
  section.id = "education";
  section.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow" data-i18n="education_eyebrow">Education</p>
      <h2 data-i18n="education_title">Academic foundation in finance, engineering, and quantitative analysis.</h2>
    </div>
    <div class="education-list">
      <article class="education-item">
        <div class="education-year">
          <span data-i18n="education_graduated">Graduated</span>
          <strong>2026</strong>
        </div>
        <div class="education-body">
          <p class="education-level" data-i18n="education_postgraduate">Postgraduate</p>
          <h3 data-i18n="education_mba_title">Master of Business Administration</h3>
          <p>Universiti Tun Abdul Razak <span>(UNIRAZAK)</span></p>
        </div>
        <div class="education-result">
          <span>CGPA</span>
          <strong>3.81</strong>
          <small data-i18n="education_mba_focus">Major in Finance</small>
        </div>
      </article>
      <article class="education-item">
        <div class="education-year">
          <span data-i18n="education_graduated">Graduated</span>
          <strong>2021</strong>
        </div>
        <div class="education-body">
          <p class="education-level" data-i18n="education_undergraduate">Undergraduate</p>
          <h3 data-i18n="education_beng_title">Bachelor of Mechanical Engineering with Honours</h3>
          <p>Universiti Tenaga Nasional <span>(UNITEN)</span></p>
        </div>
        <div class="education-result">
          <span>CGPA</span>
          <strong>3.76</strong>
          <small data-i18n="education_beng_focus">Engineering with Honours</small>
        </div>
      </article>
    </div>`;
  document.querySelector(".skills-section").before(section);
}

const educationStyles = document.createElement("style");
educationStyles.textContent = `
  .education-section { border-bottom: 1px solid var(--line); }
  .education-list { border-top: 1px solid var(--line-strong); }
  .education-item { align-items: center; border-bottom: 1px solid var(--line); display: grid; gap: 2rem; grid-template-columns: 130px minmax(0, 1fr) 150px; min-height: 180px; padding: 1.75rem 0; }
  .education-year { border-right: 1px solid var(--line); display: grid; gap: 0.25rem; min-height: 92px; place-content: center start; }
  .education-year span, .education-level, .education-result span { color: var(--teal); font-size: 0.72rem; font-weight: 850; text-transform: uppercase; }
  .education-year strong { font-family: Georgia, "Times New Roman", serif; font-size: 2rem; font-weight: 600; }
  .education-level { margin-bottom: 0.55rem; }
  .education-body h3 { font-family: Georgia, "Times New Roman", serif; font-size: 1.45rem; font-weight: 600; margin-bottom: 0.65rem; }
  .education-body > p:last-child { color: var(--muted); margin: 0; }
  .education-body > p:last-child span { color: var(--ink); font-weight: 750; }
  .education-result { border-left: 1px solid var(--line); display: grid; gap: 0.2rem; padding-left: 2rem; }
  .education-result strong { font-family: Georgia, "Times New Roman", serif; font-size: 2.2rem; font-weight: 600; }
  .education-result small { color: var(--muted); font-size: 0.76rem; }
  @media (max-width: 820px) { .education-item { grid-template-columns: 110px minmax(0, 1fr) 130px; } }
  @media (max-width: 560px) {
    .education-item { align-items: start; gap: 1rem; grid-template-columns: 1fr auto; min-height: 0; padding: 1.5rem 0; }
    .education-year { border-right: 0; display: flex; gap: 0.45rem; grid-column: 1 / -1; min-height: 0; place-content: initial; }
    .education-year strong { font-family: inherit; font-size: 0.78rem; }
    .education-body h3 { font-size: 1.2rem; }
    .education-result { border-left: 0; min-width: 88px; padding-left: 0; text-align: right; }
    .education-result strong { font-size: 1.75rem; }
    .education-result small { display: block; font-size: 0.68rem; line-height: 1.3; overflow-wrap: anywhere; }
  }`;
document.head.append(educationStyles);

applyLanguage();
