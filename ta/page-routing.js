(() => {
  const segments = location.pathname.split('/').filter(Boolean);
  const isBlogPage = segments.includes('blog');
  const fileName = segments.at(-1) || 'index.html';
  const englishUrl = isBlogPage
    ? (fileName === 'blogindex.html' ? '../../blog/' : `../../blog/${fileName}`)
    : `../${fileName}`;
  const tamilUrl = fileName === 'blogindex.html' ? 'blogindex.html' : fileName;
  const pageTitles = {
    'about.html': 'எங்களைப் பற்றி | KnowBeforeYouGo',
    'contact.html': 'தொடர்பு கொள்ளுங்கள் | KnowBeforeYouGo',
    'more_pass_info.html': 'சிங்கப்பூர் பணி அனுமதிகள் மற்றும் விசாக்கள் | KnowBeforeYouGo',
    'privacy.html': 'தனியுரிமைக் கொள்கை | KnowBeforeYouGo',
    'singapore_laws.html': 'சிங்கப்பூர் சட்டங்கள் மற்றும் விதிமுறைகள் | KnowBeforeYouGo',
    'blogindex.html': 'சிங்கப்பூர் பயண வலைப்பதிவு | KnowBeforeYouGo',
    'common-mistakes.html': 'சிங்கப்பூரில் தொழிலாளர்கள் செய்யும் பொதுவான தவறுகள் | KnowBeforeYouGo',
    'ipa-verification.html': 'பயணத்திற்கு முன் IPA சரிபார்ப்பு | KnowBeforeYouGo',
    'singapore-cost-living.html': 'சிங்கப்பூரில் வாழ்க்கைச் செலவு | KnowBeforeYouGo',
    'singapore-emergency-numbers.html': 'சிங்கப்பூர் அவசரத் தொலைபேசி எண்கள் | KnowBeforeYouGo',
    'singapore-transport-guide.html': 'சிங்கப்பூர் பொதுப் போக்குவரத்து வழிகாட்டி | KnowBeforeYouGo',
    'work-pass-checklist.html': 'சிங்கப்பூர் பயணத்திற்கு முன் பணி அனுமதி சரிபார்ப்புப் பட்டியல் | KnowBeforeYouGo'
  };
  const nav = document.querySelector('.nav-i');
  const hamburger = document.getElementById('hbg');
  const languageDrop = document.getElementById('langDrop');

  document.documentElement.lang = 'ta';
  document.body.lang = 'ta';
  if (pageTitles[fileName]) document.title = pageTitles[fileName];
  if (typeof window.changeLang === 'function') {
    window.addEventListener('DOMContentLoaded', () => window.changeLang('ta'), { once: true });
  }

  const style = document.createElement('style');
  style.textContent = `
    .ta-route-switch{display:flex;align-items:center;gap:8px;margin-left:12px;white-space:nowrap}
    .ta-route-switch a,.ta-route-switch span{color:rgba(255,255,255,.8);font-size:.75rem;text-decoration:none;padding:6px 10px;border:1px solid rgba(255,255,255,.14);border-radius:8px}
    .ta-route-switch [aria-current=page]{background:var(--red);border-color:var(--red);color:#fff}
    .nav-i>.lang-drop{margin:0 0 0 auto;width:auto}
    .nav-i>.lang-drop .lang-drop-toggle{width:auto}
    .nav-i>.lang-drop .lang-drop-menu{left:auto;right:0}
    @media(max-width:768px){.ta-route-switch{margin-left:auto}.nav-i>.lang-drop{margin:0 0 0 auto;width:auto}.nav-i>.lang-drop .lang-drop-toggle{width:auto}.nav-i>.lang-drop .lang-drop-menu{left:auto;right:0;transform:translateY(-8px) scale(.96)}.nav-i>.lang-drop.open .lang-drop-menu{transform:translateY(0) scale(1)}}
    html[lang=ta] *{font-family:'Noto Sans Tamil','DM Sans',sans-serif}html[lang=ta] h1,html[lang=ta] h2,html[lang=ta] h3{line-height:1.35}
  `;
  document.head.append(style);
  const font = document.createElement('link'); font.rel='stylesheet'; font.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap'; document.head.append(font);

  if (languageDrop && nav) {
    const englishLink = document.getElementById('langEnItem');
    const tamilLink = document.getElementById('langTaItem');
    if (englishLink) {
      englishLink.href = englishUrl;
      englishLink.removeAttribute('onclick');
      englishLink.classList.remove('active');
    }
    if (tamilLink) {
      tamilLink.href = tamilUrl;
      tamilLink.removeAttribute('onclick');
      tamilLink.classList.add('active');
    }
    if (hamburger) hamburger.parentElement.insertBefore(languageDrop, hamburger);
  } else if (nav && hamburger) {
    const switcher = document.createElement('div');
    switcher.className = 'ta-route-switch';
    switcher.innerHTML = `<a href="${englishUrl}" hreflang="en" lang="en">English</a><span aria-current="page" lang="ta">தமிழ்</span>`;
    nav.insertBefore(switcher, hamburger);
  }
})();
