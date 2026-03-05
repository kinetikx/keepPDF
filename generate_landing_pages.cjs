/**
 * Generate localized SEO landing pages from localizedPages.js data.
 * Run: node generate_landing_pages.cjs
 */
const fs = require('fs');
const path = require('path');

// Read the data file and extract the page data
const dataFile = fs.readFileSync(
    path.join(__dirname, 'src', 'data', 'localizedPages.js'), 'utf8'
);

// Parse hreflang groups
const hreflangGroupsMatch = dataFile.match(/export const hreflangGroups = ({[\s\S]*?});/);
const hreflangGroups = eval('(' + hreflangGroupsMatch[1] + ')');

// We'll manually list pages since we can't import ESM
const pages = [
    // SQ
    {
        slug: 'ndaj-pdf-falas-online', lang: 'sq', tool: 'split', comp: 'SplitClient', compImport: "import SplitClient from '../../components/tools/SplitClient';",
        title: 'Ndaj PDF Falas Online — Nxirr Faqe pa Ngarkim në Server | KeepPDF',
        desc: 'Ndaj PDF falas online. Nxirrni faqe specifike ose vargje faqesh pa regjistrim, pa instalim — 100% në shfletuesin tuaj. Shpejt dhe sigurt.',
        h1: 'Ndaj PDF Falas Online', h1Sub: 'Pa Ngarkim në Server — Nxirr Faqet që Dëshironi',
        privBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa regjistrim', 'Pa ngarkim në server'],
        howToTitle: 'Si të Ndash PDF Falas në 3 Hapa', howToSub: 'Ndaj PDF falas me KeepPDF — pa nevojë për njohuri teknike.',
        steps: [{ i: '📂', t: 'Ngarkoni Skedarin PDF', x: 'Zgjidhni ose zvarritni skedarin PDF që dëshironi të ndani.' }, { i: '✂️', t: 'Zgjidhni Faqet', x: 'Klikoni mbi faqet që dëshironi të nxirrni ose shkruani numrat e faqeve.' }, { i: '⬇️', t: 'Shkarkoni', x: 'Klikoni "Nxirr" dhe shkarkoni faqet e zgjedhura si PDF të ri — falas!' }],
        whyTitle: 'Pse të Zgjidhni KeepPDF për të Ndarë PDF?', whySub: 'Arsyet pse mijëra përdoruesve ndajnë PDF me KeepPDF',
        whyItems: [{ i: '🔒', t: '100% Privat', x: 'Skedarët nuk largohen kurrë nga shfletuesi. Ndaj PDF falas me privatësi totale.' }, { i: '⚡', t: 'Shumë i Shpejtë', x: 'Ndaj PDF në sekonda, jo minuta.' }, { i: '💰', t: 'Plotësisht Falas', x: 'Pa tarifa, pa abonime, pa kufizime.' }, { i: '📱', t: 'Punon Kudo', x: 'Kompjuter, telefon, tablet — ndaj PDF online nga çdo pajisje.' }],
        faq: [{ q: 'A është vërtet falas të ndash PDF me KeepPDF?', a: 'Po! Ndaj PDF falas me KeepPDF pa kufizime, pa tarifa, pa abonime.' }, { q: 'A janë të sigurta skedarët kur ndaj PDF online?', a: 'Absolutisht! Gjithçka përpunohet në shfletuesin tuaj — asnjë skedar nuk ngarkohet në server.' }, { q: 'Sa faqe mund të nxjerr nga një PDF?', a: 'Sa të dëshironi! Mund të zgjidhni 1 faqe, disa faqe ose vargje faqesh.' }],
        links: [{ h: '/sq/bashko-pdf-falas', l: '🔗 Bashko PDF Falas' }, { h: '/sq/kompriso-pdf-pa-regjistrim', l: '📦 Kompriso PDF' }, { h: '/sq/merge-pdf', l: '🔧 Mjeti i Bashkimit' }],
    },
    {
        slug: 'kompriso-pdf-pa-regjistrim', lang: 'sq', tool: 'compress', comp: 'CompressClient', compImport: "import CompressClient from '../../components/tools/CompressClient';",
        title: 'Kompriso PDF pa Regjistrim — Zvogëlo PDF Falas Online | KeepPDF',
        desc: 'Kompriso PDF pa regjistrim dhe pa ngarkim në server. Zvogëloni madhësinë e skedarit PDF falas — shpejt, sigurt, 100% në shfletues.',
        h1: 'Kompriso PDF pa Regjistrim', h1Sub: 'Zvogëlo Madhësinë e PDF — Falas dhe pa Server',
        privBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa regjistrim', 'Pa ngarkim në server'],
        howToTitle: 'Si të Kompresosh PDF Falas në 3 Hapa', howToSub: 'Kompriso PDF pa regjistrim me KeepPDF — thjesht dhe shpejt.',
        steps: [{ i: '📂', t: 'Ngarkoni PDF-në', x: 'Zgjidhni ose zvarritni skedarin PDF që dëshironi të kompresoni.' }, { i: '⚙️', t: 'Zgjidhni Cilësinë', x: 'Zgjidhni kompresim bazë (cilësi e lartë) ose të fortë (madhësi minimale).' }, { i: '⬇️', t: 'Shkarkoni', x: 'Klikoni "Kompriso" dhe shkarkoni PDF-në e zvogëluar menjëherë — falas!' }],
        whyTitle: 'Pse të Kompresosh PDF me KeepPDF?', whySub: 'Arsyet pse KeepPDF është zgjedhja më e mirë',
        whyItems: [{ i: '🔒', t: '100% Privat', x: 'Skedarët nuk ngarkohen kurrë në server.' }, { i: '⚡', t: 'Rezultate të Shpejta', x: 'Zvogëloni PDF brenda sekondave.' }, { i: '💰', t: 'Pa Regjistrim', x: 'Nuk kërkohet llogari.' }, { i: '📱', t: 'Çdo Pajisje', x: 'Punon në kompjuter, telefon dhe tablet.' }],
        faq: [{ q: 'A humb cilësinë kur kompriso PDF?', a: 'Kompresimi bazë ruan cilësinë e lartë. Kompresimi i fortë zvogëlon më shumë por mund të ndikojë pak.' }, { q: 'A duhet regjistrim?', a: 'Jo! Kompriso PDF pa regjistrim — nuk nevojitet llogari.' }, { q: 'Sa mund ta zvogëloj madhësinë?', a: 'Bazë: 20-40%, fortë: deri 80%.' }],
        links: [{ h: '/sq/bashko-pdf-falas', l: '🔗 Bashko PDF Falas' }, { h: '/sq/ndaj-pdf-falas-online', l: '✂️ Ndaj PDF Falas' }, { h: '/sq/compress', l: '🔧 Mjeti i Kompresimit' }],
    },
    {
        slug: 'redakto-pdf-online-falas', lang: 'sq', tool: 'edit', comp: 'ComingSoon', compImport: "import ComingSoon from '../../components/ui/ComingSoon';",
        title: 'Redakto PDF Online Falas — Shto Tekst dhe Forma pa Instalim | KeepPDF',
        desc: 'Redakto PDF online falas pa instalim. Shtoni tekst, forma, nënshkrime në PDF direkt në shfletues.',
        h1: 'Redakto PDF Online Falas', h1Sub: 'Shto Tekst, Forma dhe Komente — Pa Instalim',
        privBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa instalim', 'Pa ngarkim në server'],
        howToTitle: 'Si të Redaktosh PDF Falas në 3 Hapa', howToSub: 'Redakto PDF online falas me KeepPDF.',
        steps: [{ i: '📂', t: 'Ngarkoni PDF-në', x: 'Zgjidhni skedarin PDF që dëshironi të redaktoni.' }, { i: '✏️', t: 'Redaktoni', x: 'Shtoni tekst, forma, nënvizime ose komente.' }, { i: '⬇️', t: 'Shkarkoni', x: 'Ruani dhe shkarkoni PDF-në e redaktuar — falas!' }],
        whyTitle: 'Pse të Redaktosh PDF me KeepPDF?', whySub: 'Redaktues PDF falas dhe i sigurt',
        whyItems: [{ i: '🔒', t: '100% Privat', x: 'Asnjë skedar nuk ngarkohet në server.' }, { i: '🚀', t: 'Pa Instalim', x: 'Nuk keni nevojë për softuer.' }, { i: '💰', t: 'Plotësisht Falas', x: 'Pa pagesa, pa licenca.' }, { i: '📱', t: 'Punon Kudo', x: 'Çdo pajisje me shfletues.' }],
        faq: [{ q: 'Çfarë mund të bëj kur redaktoj PDF?', a: 'Shtoni tekst, forma, nënshkrime, vula dhe komente.' }, { q: 'A duhet softuer?', a: 'Jo! KeepPDF punon plotësisht në shfletues.' }],
        links: [{ h: '/sq/bashko-pdf-falas', l: '🔗 Bashko PDF Falas' }, { h: '/sq/ndaj-pdf-falas-online', l: '✂️ Ndaj PDF Falas' }, { h: '/sq/kompriso-pdf-pa-regjistrim', l: '📦 Kompriso PDF' }],
    },
    // ET
    {
        slug: 'uhenda-pdf-tasuta', lang: 'et', tool: 'merge', comp: 'MergeClient', compImport: "import MergeClient from '../../components/tools/MergeClient';",
        title: 'Ühenda PDF Tasuta — Kombineeri PDF-faile Ilma Serverisse Laadimata | KeepPDF',
        desc: 'Ühenda PDF tasuta veebis. Kombineeri mitu PDF-faili üheks dokumendiks — registreerimata, serverisse laadimata, 100% brauseris.',
        h1: 'Ühenda PDF Tasuta ja Kiiresti', h1Sub: 'Ilma Serverisse Laadimata — Sinu Failid ei Lahku Brauserist',
        privBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howToTitle: 'Kuidas Ühendada PDF Tasuta 3 Sammuga', howToSub: 'Ühenda PDF tasuta KeepPDF-iga.',
        steps: [{ i: '📂', t: 'Laadi Failid Üles', x: 'Vali või lohista PDF-failid, mida soovid ühendada.' }, { i: '🔀', t: 'Järjesta Ümber', x: 'Lohista failid soovitud järjekorda.' }, { i: '⬇️', t: 'Laadi Alla', x: 'Klõpsa "Ühenda" ja laadi kombineeritud PDF kohe alla — tasuta!' }],
        whyTitle: 'Miks Valida KeepPDF PDF-ide Ühendamiseks?', whySub: 'Põhjused, miks tuhanded kasutajad usaldavad KeepPDF-i',
        whyItems: [{ i: '🔒', t: '100% Privaatne', x: 'Failid ei lahku kunagi brauserist.' }, { i: '⚡', t: 'Ülikiire', x: 'Ühenda PDF-e sekunditega.' }, { i: '💰', t: 'Täiesti Tasuta', x: 'Peidetud tasusid pole.' }, { i: '📱', t: 'Töötab Igal Pool', x: 'Arvuti, telefon, tahvel.' }],
        faq: [{ q: 'Kas PDF-ide ühendamine on tõesti tasuta?', a: 'Jah! Ühenda PDF tasuta KeepPDF-iga — piiranguteta.' }, { q: 'Kas mu failid on turvalised?', a: 'Absoluutselt! Kõik töödeldakse brauseris.' }, { q: 'Mitu PDF-faili saan ühendada?', a: 'Piirangut pole! 2, 5, 10 või enam.' }],
        links: [{ h: '/et/tukkelda-pdf-tasuta', l: '✂️ Tükelda PDF Tasuta' }, { h: '/et/tihenda-pdf-tasuta', l: '📦 Tihenda PDF Tasuta' }, { h: '/et/merge-pdf', l: '🔧 PDF Ühendamise Tööriist' }],
    },
    {
        slug: 'tukkelda-pdf-tasuta', lang: 'et', tool: 'split', comp: 'SplitClient', compImport: "import SplitClient from '../../components/tools/SplitClient';",
        title: 'Tükelda PDF Tasuta — Eralda Lehekülgi Ilma Registreerimata | KeepPDF',
        desc: 'Tükelda PDF tasuta veebis. Eralda konkreetsed leheküljed PDF-st ilma registreerimata — 100% brauseris.',
        h1: 'Tükelda PDF Tasuta Veebis', h1Sub: 'Eralda Lehekülgi Kiiresti ja Turvaliselt',
        privBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howToTitle: 'Kuidas Tükeldada PDF Tasuta 3 Sammuga', howToSub: 'Tükelda PDF tasuta KeepPDF-iga.',
        steps: [{ i: '📂', t: 'Laadi PDF Üles', x: 'Vali või lohista PDF-fail.' }, { i: '✂️', t: 'Vali Leheküljed', x: 'Klõpsa lehekülgedel või sisesta numbrid.' }, { i: '⬇️', t: 'Laadi Alla', x: 'Klõpsa "Eralda" ja laadi alla!' }],
        whyTitle: 'Miks Tükeldada PDF-e KeepPDF-iga?', whySub: 'Kiire, turvaline ja tasuta',
        whyItems: [{ i: '🔒', t: '100% Privaatne', x: 'Failid jäävad brauserisse.' }, { i: '⚡', t: 'Kohesed Tulemused', x: 'Tükelda sekunditega.' }, { i: '💰', t: 'Täiesti Tasuta', x: 'Kontot pole vaja.' }, { i: '📱', t: 'Igal Seadmel', x: 'Arvuti, telefon, tahvel.' }],
        faq: [{ q: 'Kas PDF tükeldamine on tasuta?', a: 'Jah! Piiranguteta.' }, { q: 'Mitu lehekülge saan eraldada?', a: 'Nii palju kui soovid.' }],
        links: [{ h: '/et/uhenda-pdf-tasuta', l: '🔗 Ühenda PDF Tasuta' }, { h: '/et/tihenda-pdf-tasuta', l: '📦 Tihenda PDF Tasuta' }, { h: '/et/split', l: '🔧 PDF Tükeldamise Tööriist' }],
    },
    {
        slug: 'tihenda-pdf-tasuta', lang: 'et', tool: 'compress', comp: 'CompressClient', compImport: "import CompressClient from '../../components/tools/CompressClient';",
        title: 'Tihenda PDF Tasuta — Vähenda PDF Suurust Ilma Registreerimata | KeepPDF',
        desc: 'Tihenda PDF tasuta veebis. Vähenda faili suurust kvaliteeti säilitades — 100% brauseris.',
        h1: 'Tihenda PDF Tasuta Veebis', h1Sub: 'Vähenda PDF Suurust — Kiiresti ja Turvaliselt',
        privBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howToTitle: 'Kuidas Tihendada PDF Tasuta 3 Sammuga', howToSub: 'Tihenda PDF tasuta KeepPDF-iga.',
        steps: [{ i: '📂', t: 'Laadi PDF Üles', x: 'Vali või lohista PDF.' }, { i: '⚙️', t: 'Vali Kvaliteet', x: 'Tavaline (kõrge kvaliteet) või tugev (minimaalne suurus).' }, { i: '⬇️', t: 'Laadi Alla', x: 'Klõpsa "Tihenda" ja laadi alla!' }],
        whyTitle: 'Miks Tihendada PDF-e KeepPDF-iga?', whySub: 'Usaldusväärne ja kiire',
        whyItems: [{ i: '🔒', t: '100% Privaatne', x: 'Failid ei lahku brauserist.' }, { i: '⚡', t: 'Sekunditega Valmis', x: 'Kaks tihendusmeetodit.' }, { i: '💰', t: 'Registreerimata', x: 'Kontot pole vaja.' }, { i: '📱', t: 'Igal Seadmel', x: 'Ainult brauser vajalik.' }],
        faq: [{ q: 'Kas kvaliteet kannatab?', a: 'Tavaline säilitab kõrge kvaliteedi. Tugev vähendab rohkem.' }, { q: 'Kui palju saan vähendada?', a: 'Tavaline: 20-40%, tugev: kuni 80%.' }],
        links: [{ h: '/et/uhenda-pdf-tasuta', l: '🔗 Ühenda PDF Tasuta' }, { h: '/et/tukkelda-pdf-tasuta', l: '✂️ Tükelda PDF Tasuta' }, { h: '/et/compress', l: '🔧 PDF Tihendamise Tööriist' }],
    },
    {
        slug: 'muuda-pdf-veebi-tasuta', lang: 'et', tool: 'edit', comp: 'ComingSoon', compImport: "import ComingSoon from '../../components/ui/ComingSoon';",
        title: 'Muuda PDF Veebis Tasuta — Lisa Teksti ja Kujundeid | KeepPDF',
        desc: 'Muuda PDF veebis tasuta ilma installimata. Lisa teksti, kujundeid ja allkirju — 100% brauseris.',
        h1: 'Muuda PDF Veebis Tasuta', h1Sub: 'Lisa Teksti ja Kujundeid — Ilma Installimata',
        privBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Installimata', 'Serverisse laadimata'],
        howToTitle: 'Kuidas Muuta PDF-i Tasuta 3 Sammuga', howToSub: 'Muuda PDF veebis tasuta KeepPDF-iga.',
        steps: [{ i: '📂', t: 'Laadi PDF Üles', x: 'Vali PDF-fail.' }, { i: '✏️', t: 'Muuda', x: 'Lisa teksti, kujundeid, allkirju.' }, { i: '⬇️', t: 'Laadi Alla', x: 'Salvesta ja laadi alla!' }],
        whyTitle: 'Miks Muuta PDF-e KeepPDF-iga?', whySub: 'Tasuta ja turvaline PDF redaktor',
        whyItems: [{ i: '🔒', t: '100% Privaatne', x: 'Failid ei lahku brauserist.' }, { i: '🚀', t: 'Installimata', x: 'Tarkvara pole vaja.' }, { i: '💰', t: 'Täiesti Tasuta', x: 'Makseid pole.' }, { i: '📱', t: 'Igal Seadmel', x: 'Arvuti, telefon, tahvel.' }],
        faq: [{ q: 'Mida saan teha?', a: 'Lisa teksti, kujundeid, allkirju, templeid, märkusi.' }, { q: 'Kas tarkvara vajalik?', a: 'Ei! Täielikult brauseris.' }],
        links: [{ h: '/et/uhenda-pdf-tasuta', l: '🔗 Ühenda PDF Tasuta' }, { h: '/et/tukkelda-pdf-tasuta', l: '✂️ Tükelda PDF Tasuta' }, { h: '/et/tihenda-pdf-tasuta', l: '📦 Tihenda PDF Tasuta' }],
    },
    // LV
    {
        slug: 'apvienot-pdf-bezmaksas', lang: 'lv', tool: 'merge', comp: 'MergeClient', compImport: "import MergeClient from '../../components/tools/MergeClient';",
        title: 'Apvienot PDF Bezmaksas — Kombinēt PDF Failus Bez Augšupielādes | KeepPDF',
        desc: 'Apvienot PDF bezmaksas tiešsaistē. Kombinējiet vairākus PDF failus vienā — bez reģistrācijas, 100% pārlūkā.',
        h1: 'Apvienot PDF Bezmaksas un Ātri', h1Sub: 'Bez Augšupielādes Serverī',
        privBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howToTitle: 'Kā Apvienot PDF Bezmaksas 3 Soļos', howToSub: 'Apvienot PDF bezmaksas ar KeepPDF.',
        steps: [{ i: '📂', t: 'Augšupielādējiet Failus', x: 'Izvēlieties vai velciet PDF failus.' }, { i: '🔀', t: 'Pārkārtojiet', x: 'Velciet failus vēlamajā secībā.' }, { i: '⬇️', t: 'Lejupielādējiet', x: 'Nospiediet "Apvienot" un lejupielādējiet — bezmaksas!' }],
        whyTitle: 'Kāpēc Izvēlēties KeepPDF?', whySub: 'Tūkstošiem lietotāju uzticas KeepPDF',
        whyItems: [{ i: '🔒', t: '100% Privāti', x: 'Faili nepametīs pārlūku.' }, { i: '⚡', t: 'Ļoti Ātri', x: 'Sekundēs, ne minūtēs.' }, { i: '💰', t: 'Pilnībā Bezmaksas', x: 'Nav slēptu maksu.' }, { i: '📱', t: 'Darbojas Visur', x: 'Dators, telefons, planšete.' }],
        faq: [{ q: 'Vai PDF apvienošana ir bezmaksas?', a: 'Jā! Bez ierobežojumiem.' }, { q: 'Vai faili ir drošībā?', a: 'Noteikti! Viss pārlūkā.' }, { q: 'Cik failus var apvienot?', a: 'Nav ierobežojumu!' }],
        links: [{ h: '/lv/sadalit-pdf-bezmaksas', l: '✂️ Sadalīt PDF Bezmaksas' }, { h: '/lv/saspiest-pdf-bezmaksas', l: '📦 Saspiest PDF Bezmaksas' }, { h: '/lv/merge-pdf', l: '🔧 PDF Apvienošanas Rīks' }],
    },
    {
        slug: 'sadalit-pdf-bezmaksas', lang: 'lv', tool: 'split', comp: 'SplitClient', compImport: "import SplitClient from '../../components/tools/SplitClient';",
        title: 'Sadalīt PDF Bezmaksas — Izdalīt Lapas Bez Reģistrācijas | KeepPDF',
        desc: 'Sadalīt PDF bezmaksas tiešsaistē. Izdaliet lapas no PDF bez reģistrācijas — 100% pārlūkā.',
        h1: 'Sadalīt PDF Bezmaksas Tiešsaistē', h1Sub: 'Izdaliet Vajadzīgās Lapas',
        privBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howToTitle: 'Kā Sadalīt PDF Bezmaksas 3 Soļos', howToSub: 'Sadalīt PDF bezmaksas ar KeepPDF.',
        steps: [{ i: '📂', t: 'Augšupielādējiet PDF', x: 'Izvēlieties vai velciet PDF failu.' }, { i: '✂️', t: 'Izvēlieties Lapas', x: 'Noklikšķiniet uz lapām vai ievadiet numurus.' }, { i: '⬇️', t: 'Lejupielādējiet', x: 'Nospiediet "Izdalīt" un lejupielādējiet!' }],
        whyTitle: 'Kāpēc Sadalīt PDF ar KeepPDF?', whySub: 'Ātri, droši un bezmaksas',
        whyItems: [{ i: '🔒', t: '100% Privāti', x: 'Faili paliek pārlūkā.' }, { i: '⚡', t: 'Tūlītēji Rezultāti', x: 'Sadaliet sekundēs.' }, { i: '💰', t: 'Pilnībā Bezmaksas', x: 'Konts nav nepieciešams.' }, { i: '📱', t: 'Jebkurā Ierīcē', x: 'Dators, telefons, planšete.' }],
        faq: [{ q: 'Vai PDF sadalīšana ir bezmaksas?', a: 'Jā! Bez ierobežojumiem.' }, { q: 'Cik lapas var izdalīt?', a: 'Cik vēlaties.' }],
        links: [{ h: '/lv/apvienot-pdf-bezmaksas', l: '🔗 Apvienot PDF Bezmaksas' }, { h: '/lv/saspiest-pdf-bezmaksas', l: '📦 Saspiest PDF Bezmaksas' }, { h: '/lv/split', l: '🔧 PDF Sadalīšanas Rīks' }],
    },
    {
        slug: 'saspiest-pdf-bezmaksas', lang: 'lv', tool: 'compress', comp: 'CompressClient', compImport: "import CompressClient from '../../components/tools/CompressClient';",
        title: 'Saspiest PDF Bezmaksas — Samazināt PDF Izmēru Bez Reģistrācijas | KeepPDF',
        desc: 'Saspiest PDF bezmaksas tiešsaistē. Samaziniet faila izmēru kvalitāti saglabājot — 100% pārlūkā.',
        h1: 'Saspiest PDF Bezmaksas Tiešsaistē', h1Sub: 'Samaziniet PDF Izmēru',
        privBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howToTitle: 'Kā Saspiest PDF Bezmaksas 3 Soļos', howToSub: 'Saspiest PDF bezmaksas ar KeepPDF.',
        steps: [{ i: '📂', t: 'Augšupielādējiet PDF', x: 'Izvēlieties vai velciet PDF.' }, { i: '⚙️', t: 'Izvēlieties Kvalitāti', x: 'Pamata vai spēcīga saspiešana.' }, { i: '⬇️', t: 'Lejupielādējiet', x: 'Nospiediet "Saspiest" un lejupielādējiet!' }],
        whyTitle: 'Kāpēc Saspiest PDF ar KeepPDF?', whySub: 'Uzticami un ātri',
        whyItems: [{ i: '🔒', t: '100% Privāti', x: 'Faili nepametīs pārlūku.' }, { i: '⚡', t: 'Sekundēs Gatavs', x: 'Divas saspiešanas metodes.' }, { i: '💰', t: 'Bez Reģistrācijas', x: 'Konts nav nepieciešams.' }, { i: '📱', t: 'Jebkurā Ierīcē', x: 'Tikai pārlūks nepieciešams.' }],
        faq: [{ q: 'Vai kvalitāte cieš?', a: 'Pamata saglabā augstu kvalitāti. Spēcīga samazina vairāk.' }, { q: 'Cik daudz saspiest?', a: 'Pamata: 20-40%, spēcīga: līdz 80%.' }],
        links: [{ h: '/lv/apvienot-pdf-bezmaksas', l: '🔗 Apvienot PDF Bezmaksas' }, { h: '/lv/sadalit-pdf-bezmaksas', l: '✂️ Sadalīt PDF Bezmaksas' }, { h: '/lv/compress', l: '🔧 PDF Saspiešanas Rīks' }],
    },
    {
        slug: 'rediget-pdf-tiesaiste', lang: 'lv', tool: 'edit', comp: 'ComingSoon', compImport: "import ComingSoon from '../../components/ui/ComingSoon';",
        title: 'Rediģēt PDF Tiešsaistē — Pievienot Tekstu un Formas Bezmaksas | KeepPDF',
        desc: 'Rediģēt PDF tiešsaistē bezmaksas bez instalēšanas. Pievienojiet tekstu, formas — 100% pārlūkā.',
        h1: 'Rediģēt PDF Tiešsaistē Bezmaksas', h1Sub: 'Pievienojiet Tekstu un Formas — Bez Instalēšanas',
        privBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez instalēšanas', 'Bez augšupielādes serverī'],
        howToTitle: 'Kā Rediģēt PDF Bezmaksas 3 Soļos', howToSub: 'Rediģēt PDF tiešsaistē ar KeepPDF.',
        steps: [{ i: '📂', t: 'Augšupielādējiet PDF', x: 'Izvēlieties PDF failu.' }, { i: '✏️', t: 'Rediģējiet', x: 'Pievienojiet tekstu, formas, parakstus.' }, { i: '⬇️', t: 'Lejupielādējiet', x: 'Saglabājiet un lejupielādējiet!' }],
        whyTitle: 'Kāpēc Rediģēt PDF ar KeepPDF?', whySub: 'Bezmaksas un drošs PDF redaktors',
        whyItems: [{ i: '🔒', t: '100% Privāti', x: 'Faili nepametīs pārlūku.' }, { i: '🚀', t: 'Bez Instalēšanas', x: 'Programmatūra nav nepieciešama.' }, { i: '💰', t: 'Pilnībā Bezmaksas', x: 'Nav maksu.' }, { i: '📱', t: 'Jebkurā Ierīcē', x: 'Dators, telefons, planšete.' }],
        faq: [{ q: 'Ko var darīt?', a: 'Pievienojiet tekstu, formas, parakstus, zīmogus, komentārus.' }, { q: 'Vai programmatūra nepieciešama?', a: 'Nē! Pilnībā pārlūkā.' }],
        links: [{ h: '/lv/apvienot-pdf-bezmaksas', l: '🔗 Apvienot PDF Bezmaksas' }, { h: '/lv/sadalit-pdf-bezmaksas', l: '✂️ Sadalīt PDF Bezmaksas' }, { h: '/lv/saspiest-pdf-bezmaksas', l: '📦 Saspiest PDF Bezmaksas' }],
    },
];

const stepColors = [
    { from: 'indigo', bg: 'from-indigo-50', border: 'border-indigo-100', badge: 'bg-indigo-600' },
    { from: 'purple', bg: 'from-purple-50', border: 'border-purple-100', badge: 'bg-purple-600' },
    { from: 'emerald', bg: 'from-emerald-50', border: 'border-emerald-100', badge: 'bg-emerald-600' },
];

function buildHreflangTags(tool) {
    const group = hreflangGroups[tool];
    if (!group) return '';
    const lines = Object.entries(group).map(([lang, url]) =>
        `    <link rel="alternate" hreflang="${lang}" href={"https://keep-pdf.online${url}"} />`
    );
    lines.push(`    <link rel="alternate" hreflang="x-default" href={"https://keep-pdf.online${group.en}"} />`);
    return lines.join('\n');
}

function getToolTag(p) {
    if (p.comp === 'ComingSoon') {
        return `    <ComingSoon client:load title="${p.h1}" description="${p.desc.substring(0, 80)}..." lang="${p.lang}" />`;
    }
    return `    <${p.comp} client:load dict={dict} />`;
}

function generatePage(p) {
    const hreflangTags = buildHreflangTags(p.tool);
    const howToSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": p.howToTitle,
        "description": p.howToSub,
        "step": p.steps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": s.t,
            "text": s.x
        }))
    }, null, 4);

    const faqSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": p.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    }, null, 4);

    return `---
export const prerender = true;
import Layout from '../../layouts/Layout.astro';
import { getDictionary } from '../../i18n/dictionary';
import Navbar from '../../components/landing/Navbar';
import CookieBanner from '../../components/landing/CookieBanner';
${p.compImport}

const lang = '${p.lang}';
const dict = getDictionary(lang);

const seoTitle = ${JSON.stringify(p.title)};
const seoDescription = ${JSON.stringify(p.desc)};

const howToSchema = ${howToSchema};

const faqSchema = ${faqSchema};
---

<Layout lang={lang} dict={dict} title={seoTitle} description={seoDescription}>
    <Navbar client:load lang={lang} dict={dict} slot="navbar" />

    <script type="application/ld+json" set:html={JSON.stringify(howToSchema)} />
    <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />

    <!-- Hreflang -->
${hreflangTags}

    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-24 pb-16" style="background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
            <div class="absolute bottom-10 right-20 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        </div>
        <div class="container-custom max-w-4xl mx-auto relative z-10 text-center px-4">
            <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full border border-white/20 mb-6">
                ${p.privBadge}
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6" style="letter-spacing: -0.03em;">
                ${p.h1}
                <span class="block text-indigo-300 text-2xl md:text-3xl font-semibold mt-3">${p.h1Sub}</span>
            </h1>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
${p.badges.map(b => `                <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-white/80 text-sm">
                    <span class="text-green-400">✓</span> ${b}
                </div>`).join('\n')}
            </div>
        </div>
    </section>

    <!-- Tool -->
    <section class="py-12 bg-slate-50">
        <div class="container-custom max-w-4xl mx-auto px-4">
${getToolTag(p)}
        </div>
    </section>

    <!-- How To Section -->
    <section class="py-20 bg-white">
        <div class="container-custom max-w-5xl mx-auto px-4">
            <div class="text-center mb-14">
                <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">${p.howToTitle}</h2>
                <p class="text-lg text-slate-500 max-w-2xl mx-auto">${p.howToSub}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
${p.steps.map((s, i) => {
        const c = stepColors[i];
        return `                <div class="relative bg-gradient-to-br ${c.bg} to-white rounded-2xl p-8 border ${c.border} shadow-sm hover:shadow-lg transition-shadow">
                    <div class="absolute -top-4 -left-4 w-12 h-12 ${c.badge} text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">${i + 1}</div>
                    <div class="text-4xl mb-4 mt-2">${s.i}</div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">${s.t}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">${s.x}</p>
                </div>`;
    }).join('\n')}
            </div>
        </div>
    </section>

    <!-- Why Section -->
    <section class="py-20 bg-slate-50">
        <div class="container-custom max-w-5xl mx-auto px-4">
            <div class="text-center mb-14">
                <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">${p.whyTitle}</h2>
                <p class="text-lg text-slate-500 max-w-2xl mx-auto">${p.whySub}</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
${p.whyItems.map(w => `                <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div class="text-3xl mb-3">${w.i}</div>
                    <h3 class="font-bold text-slate-900 mb-2">${w.t}</h3>
                    <p class="text-sm text-slate-500">${w.x}</p>
                </div>`).join('\n')}
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
        <div class="container-custom max-w-3xl mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">${p.howToTitle.replace(/\d Hapa|3 Sammuga|3 Soļos/g, 'FAQ')}</h2>
            <div class="space-y-4">
${p.faq.map(f => `                <details class="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <summary class="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                        ${f.q}
                        <span class="text-indigo-500 group-open:rotate-45 transition-transform text-xl">+</span>
                    </summary>
                    <div class="px-6 pb-6 text-slate-600 leading-relaxed">${f.a}</div>
                </details>`).join('\n')}
            </div>
        </div>
    </section>

    <!-- Internal Links -->
    <section class="py-16 bg-indigo-50">
        <div class="container-custom max-w-4xl mx-auto px-4 text-center">
            <div class="flex flex-wrap justify-center gap-4">
${p.links.map(l => `                <a href="${l.h}" class="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all text-sm">
                    ${l.l}
                </a>`).join('\n')}
            </div>
        </div>
    </section>

    <CookieBanner client:load dict={dict} slot="cookie-banner" />
</Layout>
`;
}

// Generate all pages
let count = 0;
for (const p of pages) {
    const dir = path.join(__dirname, 'src', 'pages', p.lang);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, `${p.slug}.astro`);
    const content = generatePage(p);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`DONE: ${p.lang}/${p.slug}.astro`);
    count++;
}

console.log(`\\nTotal: ${count} pages generated`);
