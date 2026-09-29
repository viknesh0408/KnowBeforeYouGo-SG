// Language translations - Shared across all pages
const translations = {
  en: {},
  ta: {
    // Main site navigation
    'Know the': 'அறிவதை',
    'rules': 'விதிமுறைகள்',
    'before you go': 'செல்வதற்கு முன்',
    'Work Pass': 'பணி பாஸ்',
    'Visa': 'விசா',
    'Laws': 'சட்டங்கள்',
    "Do's & Don'ts": "செய்வதும், செய்யக்கூடாததும்",
    'Travel Tips': 'பயண குறிப்புகள்',
    'Contact': 'தொடர்பு',
    'Home': 'முகப்பு',

    // Work Pass Section
    'Work Pass Information': 'பணி பாஸ் தகவல்',
    'Employment passes, work permits, and visa options for working in Singapore.': 'சிங்கப்பூரில் வேலை செய்வதற்கான employment passes, work permits மற்றும் visa விருப்பங்கள்.',
    'All Pass Types': 'அனைத்து பாஸ் வகைகள்',
    'Choose the right pass for your work in Singapore.': 'சிங்கப்பூரில் உங்கள் வேலைக்கு சரியான பாஸைத் தேர்ந்தெடுக்கவும்.',
    'Employment Pass': 'Employment Pass',
    'For professionals with job offers earning SGD 5,000+/month.': 'வேலை வாய்ப்பு உள்ளவர்களுக்கு,SGD 5,000+/மாதம் சம்பளம் பெறுபவர்களுக்கு.',
    'S Pass': 'S Pass',
    'For mid-level skilled workers earning SGD 3,000+/month.': 'நடுத்தர திறன் உள்ளவர்களுக்கு,SGD 3,000+/மாதம் சம்பளம் பெறுபவர்களுக்கு.',
    'Work Permit': 'பணி அனுமதி',
    'For semi-skilled workers in construction, manufacturing, etc.': 'construction, manufacturing போன்ற துறைகளில் நடுத்தர திறன் உள்ள தொழிலாளிகளுக்கு.',
    'Student Pass': 'மாணவர் பாஸ்',
    'For international students studying in Singapore.': 'சிங்கப்பூரில் படித்துக்கொள்ளும் வெளிநாட்டு மாணவர்களுக்கு.',
    'Tourist Visa': 'சுற்றுலா விசா',
    'For short-term visits up to 30-90 days.': '30-90 நாட்கள் வரை குறுகிய பக்கமான விஜயங்களுக்கு.',

    // Laws Section
    'Know the Laws': 'சட்டங்களை அறிவதை',
    'Important rules to know before arriving in Singapore.': 'சிங்கப்பூருக்கு வருவதற்கு முன் அறிவதற்கான முக்கியமான விதிமுறைகள்.',
    'All Laws': 'அனைத்து சட்டங்கள்',
    'Critical Laws': 'முக்கியமான சட்டங்கள்',
    'Laws you must know before visiting Singapore.': 'சிங்கப்பூருக்கு வருகைக்கு முன் நீங்கள் அறிவதற்கான சட்டங்கள்.',
    'Drug trafficking & possession': 'மருந்து கடத்தல் & வைத்திருத்தல்',
    'Trafficking even small quantities of controlled drugs can result in the mandatory death penalty. Never carry packages for strangers, ever.': 'குறைந்த அளவு கட்டுப்படுத்தப்பட்ட மருந்தைக் கடத்தினாலும் கூட கடுமையான தண்டனை ஏற்படக்கூடும். ஒரு போதும் அந்மதியானவர்களிடம் பொதிகளைச் சுமக்காதீர்கள்.',
    'Smoking restrictions': 'புகைபிடிப்பதற்கான கட்டுப்பாடுகள்',
    'Only permitted in designated smoking zones. Lighting up anywhere else is an on-the-spot fine. No exceptions for tourists or new arrivals.': 'குறிப்பிட்ட புகைபிடிப்பு பகுதிகளில் மட்டுமே அனுமதி. வேறு எங்கு வேண்டுமானாலும் புகைபிடித்தல் உடனடி அபராதம். சுற்றுலா பயணிகள் அல்லது புதிய வருகையாளர்களுக்கு விதிவிலக்கு இல்லை.',
    'Littering & vandalism': 'குப்பைக்கூடு & சொத்து சேதம்',
    'First-time litter fines reach SGD 2,000. Corrective work orders may also apply. Vandalism can result in caning and imprisonment.': 'முதல் முறை குப்பை கூடு அபராதம் SGD 2,000 வரை இருக்கலாம். சரி செய்யும் வேலை உத்தரவுகள் கூட விதிக்கப்படலாம். சொத்து சேதம் கைது மற்றும் சிறை தண்டனைகளுக்குக் காரணமாகும்.',
    'Chewing gum': 'சீக்கிங் கம்பு',
    'Chewing gum is banned in Singapore. Importing or chewing it can result in fines.': 'சிங்கப்பூரில் சீக்கிங் கம்பு தடை செய்யப்பட்டு உள்ளது. இதை இறக்குமதிசெய்வதோ அல்லது சீக்குதல் எனினும் அபராதத்திற்கு வழிவகுக்கும்.',
    "Do's & Don'ts": 'செய்வதும், செய்யக்கூடாததும்',
    'Essential guidelines for behaving properly in Singapore.': 'சிங்கப்பூரில் சரியாக நடந்துக்கொள்வதற்கான அவசியமான வழிமுறைகள்.',

    // Travel Tips
    'Tips': 'குறிப்புகள்',
    'Follow these tips to have a safe and respectful trip.': 'பாதுகாப்பான மற்றும் மரியாதையான பயணத்தைக் கொண்டிருக்க இந்த குறிப்புகளைப் பின்பற்றவும்.',
    'Getting Around Singapore': 'சிங்கப்பூரை சுற்றி திரிதல்',
    'Weather': 'வான நிலை',
    'SIM & Wi-Fi': 'SIM & Wi-Fi',
    'Healthcare': 'மருத்துவம்',
    'Cost of Living': 'வாழ்க்கைச் செலவு',
    'Emergency Contacts': 'அவசர தொடர்புகள்',
    'MRT & Bus': 'MRT & பஸ்',
    'Efficient public transport system. Use EZ-Link card.': 'திறமையான போக்குவரத்து முறை. EZ-Link கார்டு பயன்படுத்தவும்.',
    'Tropical climate year-round.': 'ஆண்டு முழுவதும் வெப்பமண்டல காலநிலை.',
    'Get local SIM at airport.': 'விமான நிலையத்தில் local SIM பெறவும்.',
    'World-class medical facilities.': 'உலகத்தரவரமான மருத்து வசதிகள்.',
    'Higher than many countries.': 'பல நாடுகளை விட அதிகம்.',
    'Save these numbers.': 'இந்த எண்களை சேமியுங்கள்.',
    'Read Laws': 'சட்டங்களைப் படியுங்கள்',
    'Need Help?': 'உதவி தேவை?',
    'Trusted travel awareness platform for workers and tourists.': 'தொழிலாளிகள் மற்றும் சுற்றுலா பயணிகளுக்கான நம்பகமான பயண விழிப்புணர்வு தளம்.',

    // Hero Section
    'Three things every worker': 'மூன்று விஷயங்கள் ஒவ்வொரு தொழிலாளியும்',
    'must know before Singapore': 'சிங்கப்பூரிற்கு முன் அறிய வேண்டும்',
    'Three': 'மூன்று',
    'things': 'விஷயங்கள்',
    'every': 'ஒவ்வொரு',
    'worker': 'தொழிலாளி',
    'must know': 'அறிய வேண்டும்',
    'before': 'முன்',
    'Singapore': 'சிங்கப்பூர்',
    'Laws you must know': 'சட்டங்களை நீங்கள் அறிய வேண்டும்',
    'before you land': 'நீங்கள் இறங்குவதற்கு முன்',
    'you': 'நீங்கள்',
    'land': 'இறங்கு',

    // Blog page translations
    'Singapore Travel Blog': 'சிங்கப்பூர் பயண வலைப்பதிவு',
    'Complete Work Pass Checklist: Before You Fly to Singapore': 'முழு பணி பாஸ் செக்லிஸ்ட்: நீங்கள் சிங்கப்பூருக்கு புறப்படுவதற்கு முன்',
    'Complete Guide to Singapore Public Transport': 'சிங்கப்பூர் போக்குவரத்து முழு வழிகாட்டி',
    'Cost of Living in Singapore: 2026 Budget Guide': 'சிங்கப்பூரில் வாழ்க்கைச் செலவு: 2026 பட்ஜெட் வழிகாட்டி',
    'Emergency Numbers You Must Save in Singapore': 'சிங்கப்பூரில் நீங்கள் சேமிக்க வேண்டிய அவசர எண்கள்',
    'How to Verify Your IPA Before Traveling': 'பயணத்திற்கு முன் உங்கள் IPA ஐ எவ்வாறு சரிப்பார்ப்பது',
    '5 Common Mistakes New Workers Make in Singapore': 'சிங்கப்பூரில் புதிய தொழிலாளர்கள் செய்யும் 5 பொதுவான தவறுகள்',

    // Common blog content
    'min read': 'நிமிடம் படித்தல்',
    'Back to Blog': 'வலைப்பதிவுக்கு திரும்பு',
    'Remember:': 'நினைவில் வைக்கவும்:',
    'When in doubt, call MOM at 6438 5122 before you do anything.': 'சந்தேகமிருந்தால், ஏதாவதை செய்வதற்கு முன் MOMஐ 6438 5122இல் தொடர்பு கொள்ளவும்.',
    "They're there to help workers.": 'அவர்கள் தொழிலாளர்களுக்கு உதவ வந்திருக்கிறார்கள்.',

    // Common Mistakes blog specific
    'Avoid these pitfalls that cost many workers their jobs and passes.': 'இந்த தவறுகள் பல தொழிலாளர்களின் வேலைகளையும் பாஸ்களையும் பாதித்து வருகிறது.',
    'Every year, thousands of workers lose their jobs, passes, or worse — all because of simple mistakes. Here\'s how to avoid them.': 'ஒவ்வொரு ஆண்டும், ஆயிரக்கணக்கான தொழிலாளர்கள் தங்கள் வேலைகளையோ, பாஸ்களையோ அல்லது மோசமானவற்றை இழக்கிறார்கள் — இவை எல்லாமே சிறு தவறுகள் காரணமாகத்தான். அவற்றை எவ்வாறு தவிர்ப்பது என்பதை இங்கு பார்ப்போம்.',
    'Working Before Pass Issued': 'பாஸ் வழங்குவதற்கு முன் வேலை செய்தல்',
    'You arrived in Singapore and your employer says "just start working, the pass will come in a few days." This is illegal. You MUST wait until the work pass is formally issued by MOM before your first day.': 'நீங்கள் சிங்கப்பூருக்கு வந்து உங்கள் முதலாளி "வேலை செய்யத் துவக்கு, பாஸ் சில நாட்களில் வரும்" என்கிறார். இது சட்டவிரோதமானது. உங்கள் முதல் நாளுக்கு முன் MOM உங்களுக்கு பணி பாஸ் வழங்கும் வரை காத்திருக்க வேண்டும்.',
    'Consequence:': 'விளைவு:',
    "Working on a visit pass = criminal offence. Fines, deportation, and blacklisted from Singapore.": "பயண பாஸில் வேலை செய்வத = குற்றம். அபராதம், நாடு கடத்துதல், மற்றும் சிங்கப்பூருக்கு தடை.",
    'Ignoring IPA Errors': 'IPA பிழைகளை புறக்கணித்தல்',
    'Your IPA shows a different salary or job title than what was promised. You think "it\'s fine, they\'ll fix it." They don\'t. You\'re stuck with whatever is on the IPA.': 'உங்கள் IPA வேறு சம்பளம் அல்லது வேலைத் தலைப்பைக் காட்டுகிறது, உறுதிமொழியில் கூறியதை விட. நீங்கள் "இதில் பிரச்சனை இல்லை, அவர்கள் சரிசெய்து விடுவார்கள்" என்று நினைக்கிறீர்கள். அவர்கள் சரிசெய்யமாட்டார்கள். IPAஇல் உள்ளதை விட நீங்கள் சிக்கிக் கொள்கிறீர்கள்.',
    'Wrong details mean your pass may be revoked. Always verify before you travel.': 'தவறான விவரங்கள் உங்கள் பாஸ் ரத்து ஆகலாம. பயணத்திற்கு முன் எப்போதும் சரிப்பார்க்கவும்.',
    'Overpaying Agents': 'முகவர்களுக்கு அதிகம் பணம் கொடுத்தல்',
    'You paid SGD 2,000 or more in agent fees because "that\'s the normal rate." It\'s not. The legal maximum is 1 month\'s salary for a 1-year pass.': 'நீங்கள் SGD 2,000 அல்லது அதிகமாக முகவர் கட்டணமாகக் கொடுத்தீர்கள் "அதுதான் வழக்கமான விகிதம்" என்று. அதுதான் இல்லை. சட்டப்படி அதிகபட்சம் 1 ஆண்டு பாஸுக்கு 1 மாத சம்பளம் மட்டுமே.',
    'You can report to MOM (6438 5122) and demand a refund. Keep all receipts.': 'நீங்கள் MOMஐ (6438 5122) அழைத்து பணத்தைத் திரும்பக் கேட்கலாம். எல்லா ரசீதுகளையும் வைத்துக் கொள்ளவும்.',
    'Not Carrying Your Pass': 'உங்கள் பாஸை எடுத்துச் செல்லாமல் இருத்தல்',
    'You leave your work pass card at home because "I won\'t need it." Then a police officer or MOM inspector asks to see it. You can\'t produce it.': 'நீங்கள் "எனக்கு தேவைப்படாது" என்று உங்கள் பணி பாஸ் கார்டை வீட்டில் விட்டீர்கள். பிறகு போலீஸ் அதிகாரி அல்லது MOM ஆய்வாளர் அதைக் காட்டு என்கிறார். நீங்கள் காட்டமுடியாது.',
    'Fine up to SGD 5,000, potential pass revocation. Carry it always.': 'SGD 5,000 வரை அபராதம், பாஸ் ரத்து ஆகலாம. எப்போதும் எடுத்துச் செல்லுங்கள்.',
    'Accepting "Convert Later" Scam': '"பிறகு மாற்றலாம" சித்தா ஏற்றுக்கொள்ளுதல்',
    'Your agent or employer says "come on a visit pass first, we\'ll convert it to a work pass later." This is a well-known scam. It does not work and is illegal.': 'உங்கள் முகவர் அல்லது முதலாளி "முதல் பயண பாஸ் வரம், பிறகு பணி பாஸாக மாற்றுவோம்" என்கிறார். இது ஒரு பிரபலமான சித்தா. இது வேலை செய்யாது மற்றும் சட்டவிரோதமானது.',
    'You work illegally, get caught, deported, and banned. Never accept this arrangement.': 'நீங்கள் சட்டவிரோதமாக வேலை செய்கிறீர்கள், பிடிபடுவீர்கள், நாடு கடத்தப்படுவீர்கள், தடை செய்யப்படுவீர்கள். இந்த ஏற்பாட்டை ஒருபோதும் ஏற்காதீர்கள்.',

    // IPA Verification page
    'Your IPA (In-Principle Approval) is the most important document for your Singapore work pass application.': 'உங்கள் IPA (In-Principle Approval) உங்கள் சிங்கப்பூர் பணி பாஸ் விண்ணப்பத்திற்கு மிக முக்கியமான ஆவணம்.',
    'What is an IPA?': 'IPA என்ன?',
    'The IPA is your initial work pass approval from MOM. It lists your details - name, passport number, employer, job title, and salary.': 'IPA உங்கள் MOMஇல் இருந்து வரும் முதல் பணி பாஸ் ஒப்புதல் ஆகும். இது உங்கள் விவரங்களைக் குறிக்கிறது - பெயர், பாஸ்போர்ட் எண், முதலாளி, வேலைத் தலைப்பு மற்றும் சம்பளம்.',
    'Why verify your IPA?': 'உங்கள் IPA ஐ ஏன் சரிப்பார்ப்பது?',
    'Your IPA MUST match what was promised. If there are errors, you must get them fixed BEFORE traveling.': 'உங்கள் IPA உறுதிமொழியில் கூறியதைப் போலவே இருக்க வேண்டியது. பிழைகள் இருந்தால், பயணத்திற்கு முன் அவற்றை சரிசெய்ய வேண்டும்.',
    'How to verify': 'எவ்வாறு சரிப்பார்ப்பது',
    'Check these details on your IPA:': 'உங்கள் IPAஇல் இந்த விவரங்களைச் சரிப்பார்க்கவும்:',
    'Your name matches your passport exactly': 'உங்கள் பெயர் உங்கள் பாஸ்போர்ட்டுக்கு சரியாகப் பொருந்துகிறதா',
    'Passport number is correct': 'பாஸ்போர்ட் எண் சரியா',
    'Employer name matches your contract': 'முதலாளி பெயர் உங்கள் ஒப்பந்தத்துடன் பொருந்துகிறதா',
    'Job title matches what you were promised': 'வேலைத் தலைப்பு உறுதிமொழியில் கூறியதைப் போலவேதானா',
    'Salary matches what you were promised': 'சம்பளம் உறுதிமொழியில் கூறியதைப் போலவேதானா',
    'Start date is correct': 'தொடக்க தேதி சரியா',
    'What to do if there are errors': 'பிழைகள் இருந்தால் என்ன செய்வது',
    'Contact your employer or agent IMMEDIATELY. Do not travel until errors are fixed.': 'உங்கள் முதலாளி அல்லது முகவரை உடனடியாகத் தொடர்பு கொள்ளவும். பிழைகள் சரிசெய்யப்படும் வரை பயணம் செய்யாதீர்கள்.',

    // Work Pass Checklist page
    'Things to do before flying to Singapore': 'சிங்கப்பூருக்கு புறப்படுவதற்கு முன் செய்ய வேண்டியவை',
    'Documents to bring': 'கொண்டு செல்ல ஆவணங்கள்',
    'Valid passport (at least 6 months validity)': 'செல்லுபடியான பாஸ்போர்ட் (குறைந்தது 6 மாதங்கள் செல்லுபடியாக இருக்க வேண்டும்)',
    'IPA letter from MOM': 'MOMஇல் இருந்து IPA கடிதம்',
    'Employment contract': 'வேலை ஒப்பந்தம்',
    'All original certificates': 'அனைத்து அசல் சான்றிதழ்கள்',
    'Medical reports (if required)': 'மருத்துவ அறிக்கைகள் (தேவைப்பட்டால்)',
    'Things to arrange': 'அமைக்க வேண்டியவை',
    'Bank account (can open after arrival)': 'வங்கி கணக்கு (வந்தப் பிறகு திறக்கலாம்)',
    'Local SIM card (available at airport)': 'உள்ளூர் SIM கார்டு (விமான நிலையத்தில் கிடைக்கிறது)',
    'EZ-Link card for transport': 'போக்குவரத்துக்கு EZ-Link கார்டு',
    'Accommodation confirmation': 'தங்குமிட உறுதிப்படுத்தல்',
    'What NOT to do': 'என்ன செய்யக் கூடாது',
    'Do NOT work on a visit pass': 'பயண பாஸில் வேலை செய்யக் கூடாது',
    'Do NOT accept "convert later" offers': '"பிறகு மாற்றலாம" ஆசையை ஏற்கக் கூடாது',
    'Do NOT pay excessive agent fees': 'முகவர் கட்டணத்திற்கு அதிகம் பணம் கொடுக்கக் கூடாது',

    // Transport Guide page
    'Getting around Singapore is easy with its efficient public transport system.': 'சிங்கப்பூரை சுற்றி திரிப்பது அதன் திறமையான போக்குவரத்து முறை காரணமாக எளிது.',
    'MRT (Mass Rapid Transit)': 'MRT (Mass Rapid Transit)',
    'The fastest way to travel across Singapore. Trains run from 5:30 AM to 12:30 AM.': 'சிங்கப்பூர் முழுவதும் விரைவாகப் பயணம் செய்வதற்கான வழி. ரயில்கள் காலை 5:30 மணி முதல் நள்ளிரவு 12:30 மணி வரை இயக்கப்படும்.',
    'Bus': 'பஸ்',
    'Extensive network covering areas MRT doesn\'t reach. Fares are cheaper for short trips.': 'MRT செல்லாத பகுதிகளைக் கவரும் பரந்த வலை. குறுகிய பயணங்களுக்கு கட்டணம் மலிவு.',
    'EZ-Link Card': 'EZ-Link கார்டு',
    'Prepaid card for all public transport. Tap in and out at gantry. Top up at any convenience store.': 'எல்லா போக்குவரத்துக்கும் முன் பணம் செலுத்திய கார்டு. கேட்வேயில் டாப் இன் மற்றும் அ웃் செய்யவும்.எந்த வசதியான கடையில் भी முடியும்.',
    'Taxi & Ride-share': 'டாக்ஸி & ரைட்-ஷேர்',
    'Available via apps like Grab. More expensive but convenient for door-to-door.': 'Grab போன்ற செயலிகள் வழியாக கிடைக்கிறது.அதிகம் ஆனால் வீடு வீடாக வசதியானது.',
    'Tips for using transport': 'போக்குவரத்து பயன்படுத்துவதற்கான குறிப்புகள்',
    'Avoid peak hours (7-9 AM, 5-8 PM) for fewer crowds': 'கூட்டத்தைத் தவிர்க்க முன்/பிற்பகல் நேரங்களைத் தவிர்க்கவும்',
    'Keep your pass with you at all times': 'உங்கள் பாஸை எப்போதும் உடன் வைத்துக் கொள்ளவும்',
    'Fare enforcement is strict': 'கட்டணம் செயல்படுத்து கடுமையானது',

    // Cost of Living page
    'Singapore is expensive, but with planning, you can manage your budget effectively.': 'சிங்கப்பூர் வாசமானது, ஆனால் திட்டமிடுவதன் மூலம் உங்கள் பட்ஜெட்டை நீங்கள் சுமூகமாக நிர்வகிக்கலாம்.',
    'Monthly budget breakdown': 'மாதாந்திர பட்ஜெட் பகுப்பு',
    'Accommodation (HDB room)': 'தங்குமிடம் (HDB அறை)',
    'Food': 'உணவு',
    'Transport': 'போக்குவரம்',
    'Mobile data': 'மொபைல் டேட்டா',
    'Utilities': 'பயோப்பத் தேவைகள்',
    'Total estimated': 'மொத்த மதிப்பீடு',
    'Tips to save money': 'பணம் சேமிக்கும் குறிப்புகள்',
    'Cook at home most days': 'பெரும்பாலும் வீட்டிலேயே சமைக்கவும்',
    'Use public transport': 'பொதுப் போக்குவரத்தைப் பயன்படுத்தவும்',
    'Buy SIM only plans': 'SIM மட்டும் திட்டங்களை வாங்கவும்',
    'Shop at wet markets': 'வெட் மார்க்கெட்டுகளில் வாங்கவும்',

    // Emergency Numbers page
    'Save these numbers. You may need them.': 'இந்த எண்களைச் சேமியுங்கள். உங்களுக்கு தேவைப்படலாம.',
    'Emergency Services': 'அவசர சேவைகள்',
    'Police': 'போலீஸ்',
    'Fire': 'தீ',
    'Ambulance': 'ஆம்புலன்ஸ்',
    'Important Contacts': 'முக்கிய தொடர்புகள்',
    'MOM (Ministry of Manpower)': 'MOM (Ministry of Manpower)',
    'For work pass issues': 'பணி பாஸ் சிக்கல்களுக்கு',
    ' ICA (Immigration & Checkpoints Authority)': ' ICA (Immigration & Checkpoints Authority)',
    'For immigration matters': 'இம்மிகிரேஷன் விஷயங்களுக்கு',
    'SingHealth (Medical)': 'SingHealth (Medical)',
    'For medical emergencies': 'மருத்துவ அவசரங்களுக்கு',

    // Blog index
    'Latest Articles': 'சமீபமான கட்டுரைகள்',
    'Read More': 'மேலும் படியுங்கள்',
    'Categories': 'வகைகள்'
  }
};

const originalContent = {};

function storeOriginalContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  let i = 0;
  while (node = walker.nextNode()) {
    const txt = node.textContent.trim();
    if (txt && txt.length > 0 && !txt.match(/^\d+$/) && !node.parentElement.classList.contains('lang-drop') && !node.parentElement.closest('.nav-links') && !node.parentElement.closest('.blog-meta')) {
      originalContent[i] = { node: node, original: txt };
      i++;
    }
  }
}

function changeLang(lang) {
  const drop = document.getElementById('langDrop');
  if (drop) drop.classList.remove('open');

  const enItem = document.getElementById('langEnItem');
  const taItem = document.getElementById('langTaItem');
  const langLabel = document.getElementById('langLabel');

  if (lang === 'en') {
    if (enItem) enItem.classList.add('active');
    if (taItem) taItem.classList.remove('active');
    if (langLabel) langLabel.textContent = 'EN';
    Object.keys(originalContent).forEach(i => {
      const item = originalContent[i];
      if (translations.ta[item.original]) {
        item.node.textContent = item.original;
      }
    });
  } else {
    if (taItem) taItem.classList.add('active');
    if (enItem) enItem.classList.remove('active');
    if (langLabel) langLabel.textContent = 'தமிழ்';
    Object.keys(originalContent).forEach(i => {
      const item = originalContent[i];
      if (translations.ta[item.original]) {
        item.node.textContent = translations.ta[item.original];
      }
    });
  }
  localStorage.setItem('preferredLang', lang);
}

// Initialize on page load
document.addEventListener('click', function(e) {
  const drop = document.getElementById('langDrop');
  if (drop && !drop.contains(e.target) && !e.target.closest('.lang-drop')) {
    drop.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  storeOriginalContent();
  const saved = localStorage.getItem('preferredLang') || 'en';
  if (saved === 'ta') {
    changeLang('ta');
  } else {
    changeLang('en');
  }
});