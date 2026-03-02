/**
 * Localized SEO Landing Pages — Centralized Data
 * 
 * Her landing page'in SEO verisi, içerik metni ve hreflang cross-reference'ları.
 * Yeni sayfa eklemek = bu objeye entry eklemek + .astro dosyasını oluşturmak.
 */

// Hreflang groups: aynı aracı hedefleyen sayfalar birbirine cross-link yapar
export const hreflangGroups = {
    merge: {
        en: '/en/merge-pdf',
        tr: '/tr/merge-pdf',
        sq: '/sq/bashko-pdf-falas',
        et: '/et/uhenda-pdf-tasuta',
        lv: '/lv/apvienot-pdf-bezmaksas',
    },
    split: {
        en: '/en/split',
        tr: '/tr/split',
        sq: '/sq/ndaj-pdf-falas-online',
        et: '/et/tukkelda-pdf-tasuta',
        lv: '/lv/sadalit-pdf-bezmaksas',
    },
    compress: {
        en: '/en/compress',
        tr: '/tr/compress',
        sq: '/sq/kompriso-pdf-pa-regjistrim',
        et: '/et/tihenda-pdf-tasuta',
        lv: '/lv/saspiest-pdf-bezmaksas',
    },
    edit: {
        en: '/en/edit-pdf',
        tr: '/tr/edit-pdf',
        sq: '/sq/redakto-pdf-online-falas',
        et: '/et/muuda-pdf-veebi-tasuta',
        lv: '/lv/rediget-pdf-tiesaiste',
    },
};

export const localizedPages = {
    // ═══════════════════════════════════════════════════════════
    // ALBANIAN (SQ)
    // ═══════════════════════════════════════════════════════════

    'sq-ndaj-pdf-falas-online': {
        slug: 'ndaj-pdf-falas-online',
        lang: 'sq',
        tool: 'split',
        toolComponent: 'SplitClient',
        seoTitle: 'Ndaj PDF Falas Online — Nxirr Faqe pa Ngarkim në Server | KeepPDF',
        seoDescription: 'Ndaj PDF falas online. Nxirrni faqe specifike ose vargje faqesh pa regjistrim, pa instalim — 100% në shfletuesin tuaj. Shpejt dhe sigurt.',
        h1: 'Ndaj PDF Falas Online',
        h1Sub: 'Pa Ngarkim në Server — Nxirr Faqet që Dëshironi',
        privacyBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa regjistrim', 'Pa ngarkim në server'],
        howTo: {
            title: 'Si të Ndash PDF Falas në 3 Hapa',
            subtitle: 'Ndaj PDF falas me KeepPDF — pa nevojë për njohuri teknike.',
            steps: [
                { icon: '📂', title: 'Ngarkoni Skedarin PDF', text: 'Zgjidhni ose zvarritni skedarin PDF që dëshironi të ndani.' },
                { icon: '✂️', title: 'Zgjidhni Faqet', text: 'Klikoni mbi faqet që dëshironi të nxirrni ose shkruani numrat e faqeve.' },
                { icon: '⬇️', title: 'Shkarkoni', text: 'Klikoni "Nxirr" dhe shkarkoni faqet e zgjedhura si PDF të ri — falas!' },
            ],
        },
        why: {
            title: 'Pse të Zgjidhni KeepPDF për të Ndarë PDF?',
            subtitle: 'Arsyet pse mijëra përdoruesve ndajnë PDF me KeepPDF',
            items: [
                { icon: '🔒', title: '100% Privat', text: 'Skedarët nuk largohen kurrë nga shfletuesi. Ndaj PDF falas me privatësi totale.' },
                { icon: '⚡', title: 'Shumë i Shpejtë', text: 'Ndaj PDF në sekonda, jo minuta. Algoritmet tona punojnë menjëherë.' },
                { icon: '💰', title: 'Plotësisht Falas', text: 'Pa tarifa, pa abonime, pa kufizime. Ndaj sa PDF të dëshironi falas.' },
                { icon: '📱', title: 'Punon Kudo', text: 'Kompjuter, telefon, tablet — ndaj PDF online nga çdo pajisje.' },
            ],
        },
        faq: [
            { q: 'A është vërtet falas të ndash PDF me KeepPDF?', a: 'Po! Ndaj PDF falas me KeepPDF pa kufizime, pa tarifa, pa abonime.' },
            { q: 'A janë të sigurta skedarët kur ndaj PDF online?', a: 'Absolutisht! Gjithçka përpunohet në shfletuesin tuaj — asnjë skedar nuk ngarkohet në server.' },
            { q: 'Sa faqe mund të nxjerr nga një PDF?', a: 'Sa të dëshironi! Mund të zgjidhni 1 faqe, disa faqe ose vargje faqesh.' },
        ],
        internalLinks: [
            { href: '/sq/bashko-pdf-falas', label: '🔗 Bashko PDF Falas' },
            { href: '/sq/kompriso-pdf-pa-regjistrim', label: '📦 Kompriso PDF' },
            { href: '/sq/merge-pdf', label: '🔧 Mjeti i Bashkimit' },
        ],
    },

    'sq-kompriso-pdf-pa-regjistrim': {
        slug: 'kompriso-pdf-pa-regjistrim',
        lang: 'sq',
        tool: 'compress',
        toolComponent: 'CompressClient',
        seoTitle: 'Kompriso PDF pa Regjistrim — Zvogëlo PDF Falas Online | KeepPDF',
        seoDescription: 'Kompriso PDF pa regjistrim dhe pa ngarkim në server. Zvogëloni madhësinë e skedarit PDF falas — shpejt, sigurt, 100% në shfletues.',
        h1: 'Kompriso PDF pa Regjistrim',
        h1Sub: 'Zvogëlo Madhësinë e PDF — Falas dhe pa Server',
        privacyBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa regjistrim', 'Pa ngarkim në server'],
        howTo: {
            title: 'Si të Kompresosh PDF Falas në 3 Hapa',
            subtitle: 'Kompriso PDF pa regjistrim me KeepPDF — thjesht dhe shpejt.',
            steps: [
                { icon: '📂', title: 'Ngarkoni PDF-në', text: 'Zgjidhni ose zvarritni skedarin PDF që dëshironi të kompresoni.' },
                { icon: '⚙️', title: 'Zgjidhni Cilësinë', text: 'Zgjidhni kompresim bazë (cilësi e lartë) ose të fortë (madhësi minimale).' },
                { icon: '⬇️', title: 'Shkarkoni', text: 'Klikoni "Kompriso" dhe shkarkoni PDF-në e zvogëluar menjëherë — falas!' },
            ],
        },
        why: {
            title: 'Pse të Kompresosh PDF me KeepPDF?',
            subtitle: 'Arsyet pse KeepPDF është zgjedhja më e mirë',
            items: [
                { icon: '🔒', title: '100% Privat', text: 'Skedarët nuk ngarkohen kurrë në server. Kompriso PDF me privatësi totale.' },
                { icon: '⚡', title: 'Rezultate të Shpejta', text: 'Zvogëloni PDF brenda sekondave. Dy mënyra kompresimi për çdo nevojë.' },
                { icon: '💰', title: 'Pa Regjistrim', text: 'Nuk kërkohet llogari. Kompriso PDF falas sa herë të dëshironi.' },
                { icon: '📱', title: 'Çdo Pajisje', text: 'Punon në kompjuter, telefon dhe tablet — veç shfletues nevojitet.' },
            ],
        },
        faq: [
            { q: 'A humb cilësinë kur kompriso PDF?', a: 'Kompresimi bazë ruan cilësinë e lartë. Kompresimi i fortë zvogëlon më shumë por mund të ndikojë pak në qartësinë e tekstit.' },
            { q: 'A duhet regjistrim për të kompresuar PDF?', a: 'Jo! Kompriso PDF Pa Regjistrim — nuk nevojitet llogari, email apo informacion personal.' },
            { q: 'Sa mund ta zvogëloj madhësinë e PDF?', a: 'Kompresimi bazë ul 20-40%, kompresimi i fortë mund ta ulë deri në 80% të madhësisë.' },
        ],
        internalLinks: [
            { href: '/sq/bashko-pdf-falas', label: '🔗 Bashko PDF Falas' },
            { href: '/sq/ndaj-pdf-falas-online', label: '✂️ Ndaj PDF Falas' },
            { href: '/sq/compress', label: '🔧 Mjeti i Kompresimit' },
        ],
    },

    'sq-redakto-pdf-online-falas': {
        slug: 'redakto-pdf-online-falas',
        lang: 'sq',
        tool: 'edit',
        toolComponent: 'ComingSoon',
        seoTitle: 'Redakto PDF Online Falas — Shto Tekst dhe Forma pa Instalim | KeepPDF',
        seoDescription: 'Redakto PDF online falas pa instalim. Shtoni tekst, forma, nënshkrime në PDF direkt në shfletues — pa regjistrim, pa ngarkim në server.',
        h1: 'Redakto PDF Online Falas',
        h1Sub: 'Shto Tekst, Forma dhe Komente — Pa Instalim',
        privacyBadge: '🔒 100% private — skedarët nuk largohen nga shfletuesi juaj',
        badges: ['Falas përgjithmonë', 'Pa instalim', 'Pa ngarkim në server'],
        howTo: {
            title: 'Si të Redaktosh PDF Falas në 3 Hapa',
            subtitle: 'Redakto PDF online falas me KeepPDF.',
            steps: [
                { icon: '📂', title: 'Ngarkoni PDF-në', text: 'Zgjidhni skedarin PDF që dëshironi të redaktoni.' },
                { icon: '✏️', title: 'Redaktoni', text: 'Shtoni tekst, forma, nënvizime ose komente në dokumentin tuaj.' },
                { icon: '⬇️', title: 'Shkarkoni', text: 'Ruani dhe shkarkoni PDF-në e redaktuar menjëherë — falas!' },
            ],
        },
        why: {
            title: 'Pse të Redaktosh PDF me KeepPDF?',
            subtitle: 'Redaktues PDF falas dhe i sigurt',
            items: [
                { icon: '🔒', title: '100% Privat', text: 'Asnjë skedar nuk ngarkohet në server. Redakto PDF me privatësi totale.' },
                { icon: '🚀', title: 'Pa Instalim', text: 'Nuk keni nevojë për softuer. Redakto PDF direkt në shfletues.' },
                { icon: '💰', title: 'Plotësisht Falas', text: 'Pa pagesa, pa licenca, pa abonime. Redakto PDF sa herë të dëshironi.' },
                { icon: '📱', title: 'Punon Kudo', text: 'Redakto PDF nga çdo pajisje — kompjuter, telefon ose tablet.' },
            ],
        },
        faq: [
            { q: 'Çfarë mund të bëj kur redaktoj PDF online?', a: 'Mund të shtoni tekst, forma, nënshkrime, vula dhe komente në PDF.' },
            { q: 'A duhet softuer për të redaktuar PDF?', a: 'Jo! KeepPDF punon plotësisht në shfletues — pa instalim, pa Adobe.' },
        ],
        internalLinks: [
            { href: '/sq/bashko-pdf-falas', label: '🔗 Bashko PDF Falas' },
            { href: '/sq/ndaj-pdf-falas-online', label: '✂️ Ndaj PDF Falas' },
            { href: '/sq/kompriso-pdf-pa-regjistrim', label: '📦 Kompriso PDF' },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // ESTONIAN (ET)
    // ═══════════════════════════════════════════════════════════

    'et-uhenda-pdf-tasuta': {
        slug: 'uhenda-pdf-tasuta',
        lang: 'et',
        tool: 'merge',
        toolComponent: 'MergeClient',
        seoTitle: 'Ühenda PDF Tasuta — Kombineeri PDF-faile Ilma Serverisse Laadimata | KeepPDF',
        seoDescription: 'Ühenda PDF tasuta veebis. Kombineeri mitu PDF-faili üheks dokumendiks sekunditega — registreerimata, serverisse laadimata, 100% brauseris.',
        h1: 'Ühenda PDF Tasuta ja Kiiresti',
        h1Sub: 'Ilma Serverisse Laadimata — Sinu Failid ei Lahku Brauserist',
        privacyBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howTo: {
            title: 'Kuidas Ühendada PDF Tasuta 3 Sammuga',
            subtitle: 'Ühenda PDF tasuta KeepPDF-iga — lihtne ja kiire.',
            steps: [
                { icon: '📂', title: 'Laadi Failid Üles', text: 'Vali või lohista PDF-failid, mida soovid ühendada.' },
                { icon: '🔀', title: 'Järjesta Ümber', text: 'Lohista failid soovitud järjekorda.' },
                { icon: '⬇️', title: 'Laadi Alla', text: 'Klõpsa "Ühenda" ja laadi kombineeritud PDF kohe alla — tasuta!' },
            ],
        },
        why: {
            title: 'Miks Valida KeepPDF PDF-ide Ühendamiseks?',
            subtitle: 'Põhjused, miks tuhanded kasutajad usaldavad KeepPDF-i',
            items: [
                { icon: '🔒', title: '100% Privaatne', text: 'Failid ei lahku kunagi brauserist. Ühenda PDF täieliku privaatsusega.' },
                { icon: '⚡', title: 'Ülikiire', text: 'Ühenda PDF-e sekunditega, mitte minutitega.' },
                { icon: '💰', title: 'Täiesti Tasuta', text: 'Peidetud tasusid pole, tellimusi pole, piiranguid pole.' },
                { icon: '📱', title: 'Töötab Igal Pool', text: 'Arvuti, telefon, tahvel — ühenda PDF igast seadmest.' },
            ],
        },
        faq: [
            { q: 'Kas PDF-ide ühendamine on tõesti tasuta?', a: 'Jah! Ühenda PDF tasuta KeepPDF-iga — piiranguteta, tasudeta.' },
            { q: 'Kas mu failid on turvalised?', a: 'Absoluutselt! Kõik töödeldakse sinu brauseris — failid ei laeta serverisse.' },
            { q: 'Mitu PDF-faili saan korraga ühendada?', a: 'Piirangut pole! Ühenda 2, 5, 10 või enam PDF-faili üheks.' },
        ],
        internalLinks: [
            { href: '/et/tukkelda-pdf-tasuta', label: '✂️ Tükelda PDF Tasuta' },
            { href: '/et/tihenda-pdf-tasuta', label: '📦 Tihenda PDF Tasuta' },
            { href: '/et/merge-pdf', label: '🔧 PDF Ühendamise Tööriist' },
        ],
    },

    'et-tukkelda-pdf-tasuta': {
        slug: 'tukkelda-pdf-tasuta',
        lang: 'et',
        tool: 'split',
        toolComponent: 'SplitClient',
        seoTitle: 'Tükelda PDF Tasuta — Eralda Lehekülgi Ilma Registreerimata | KeepPDF',
        seoDescription: 'Tükelda PDF tasuta veebis. Eralda konkreetsed leheküljed PDF-st ilma registreerimata, ilma serverisse laadimata — 100% brauseris.',
        h1: 'Tükelda PDF Tasuta Veebis',
        h1Sub: 'Eralda Lehekülgi Kiiresti ja Turvaliselt',
        privacyBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howTo: {
            title: 'Kuidas Tükeldada PDF Tasuta 3 Sammuga',
            subtitle: 'Tükelda PDF tasuta KeepPDF-iga — lihtne ja kiire.',
            steps: [
                { icon: '📂', title: 'Laadi PDF Üles', text: 'Vali või lohista PDF-fail, mida soovid tükeldada.' },
                { icon: '✂️', title: 'Vali Leheküljed', text: 'Klõpsa lehekülgedel, mida soovid eraldada, või sisesta leheküljenumbrid.' },
                { icon: '⬇️', title: 'Laadi Alla', text: 'Klõpsa "Eralda" ja laadi valitud leheküljed uue PDF-na alla!' },
            ],
        },
        why: {
            title: 'Miks Tükeldada PDF-e KeepPDF-iga?',
            subtitle: 'Kiire, turvaline ja tasuta',
            items: [
                { icon: '🔒', title: '100% Privaatne', text: 'Failid jäävad sinu brauserisse. Serverisse laadimata.' },
                { icon: '⚡', title: 'Kohesed Tulemused', text: 'Tükelda PDF sekunditega.' },
                { icon: '💰', title: 'Täiesti Tasuta', text: 'Kontot pole vaja. Tükelda PDF tasuta piiramatult.' },
                { icon: '📱', title: 'Igal Seadmel', text: 'Töötab arvutis, telefonis ja tahvlis.' },
            ],
        },
        faq: [
            { q: 'Kas PDF tükeldamine on tasuta?', a: 'Jah! Tükelda PDF tasuta KeepPDF-iga ilma piiranguteta.' },
            { q: 'Mitu lehekülge saan eraldada?', a: 'Nii palju kui soovid — 1 lehekülg, mitu lehekülge või leheküljevahemikud.' },
        ],
        internalLinks: [
            { href: '/et/uhenda-pdf-tasuta', label: '🔗 Ühenda PDF Tasuta' },
            { href: '/et/tihenda-pdf-tasuta', label: '📦 Tihenda PDF Tasuta' },
            { href: '/et/split', label: '🔧 PDF Tükeldamise Tööriist' },
        ],
    },

    'et-tihenda-pdf-tasuta': {
        slug: 'tihenda-pdf-tasuta',
        lang: 'et',
        tool: 'compress',
        toolComponent: 'CompressClient',
        seoTitle: 'Tihenda PDF Tasuta — Vähenda PDF Suurust Ilma Registreerimata | KeepPDF',
        seoDescription: 'Tihenda PDF tasuta veebis. Vähenda faili suurust kvaliteeti säilitades — registreerimata, serverisse laadimata, 100% brauseris.',
        h1: 'Tihenda PDF Tasuta Veebis',
        h1Sub: 'Vähenda PDF Suurust — Kiiresti ja Turvaliselt',
        privacyBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Registreerimata', 'Serverisse laadimata'],
        howTo: {
            title: 'Kuidas Tihendada PDF Tasuta 3 Sammuga',
            subtitle: 'Tihenda PDF tasuta KeepPDF-iga.',
            steps: [
                { icon: '📂', title: 'Laadi PDF Üles', text: 'Vali või lohista PDF, mida soovid tihendada.' },
                { icon: '⚙️', title: 'Vali Kvaliteet', text: 'Vali tavaline (kõrge kvaliteet) või tugev (minimaalne suurus) tihendamine.' },
                { icon: '⬇️', title: 'Laadi Alla', text: 'Klõpsa "Tihenda" ja laadi vähendatud PDF kohe alla!' },
            ],
        },
        why: {
            title: 'Miks Tihendada PDF-e KeepPDF-iga?',
            subtitle: 'Usaldusväärne ja kiire',
            items: [
                { icon: '🔒', title: '100% Privaatne', text: 'Failid ei lahku brauserist. Tihenda PDF privaatselt.' },
                { icon: '⚡', title: 'Sekunditega Valmis', text: 'Vähenda PDF suurust kiiresti. Kaks tihendusmeetodit.' },
                { icon: '💰', title: 'Registreerimata', text: 'Kontot pole vaja. Tihenda PDF tasuta piiramatult.' },
                { icon: '📱', title: 'Igal Seadmel', text: 'Arvuti, telefon, tahvel — ainult brauser on vajalik.' },
            ],
        },
        faq: [
            { q: 'Kas kvaliteet kannatab tihendamisel?', a: 'Tavaline tihendamine säilitab kõrge kvaliteedi. Tugev tihendamine vähendab rohkem, kuid tekst võib olla veidi udusem.' },
            { q: 'Kui palju saan PDF suurust vähendada?', a: 'Tavaline tihendamine vähendab 20-40%, tugev kuni 80%.' },
        ],
        internalLinks: [
            { href: '/et/uhenda-pdf-tasuta', label: '🔗 Ühenda PDF Tasuta' },
            { href: '/et/tukkelda-pdf-tasuta', label: '✂️ Tükelda PDF Tasuta' },
            { href: '/et/compress', label: '🔧 PDF Tihendamise Tööriist' },
        ],
    },

    'et-muuda-pdf-veebi-tasuta': {
        slug: 'muuda-pdf-veebi-tasuta',
        lang: 'et',
        tool: 'edit',
        toolComponent: 'ComingSoon',
        seoTitle: 'Muuda PDF Veebis Tasuta — Lisa Teksti ja Kujundeid Ilma Installimata | KeepPDF',
        seoDescription: 'Muuda PDF veebis tasuta ilma installimata. Lisa teksti, kujundeid ja allkirju PDF-le otse brauseris — registreerimata, serverisse laadimata.',
        h1: 'Muuda PDF Veebis Tasuta',
        h1Sub: 'Lisa Teksti ja Kujundeid — Ilma Installimata',
        privacyBadge: '🔒 100% privaatne — failid ei lahku sinu brauserist',
        badges: ['Alati tasuta', 'Installimata', 'Serverisse laadimata'],
        howTo: {
            title: 'Kuidas Muuta PDF-i Tasuta 3 Sammuga',
            subtitle: 'Muuda PDF veebis tasuta KeepPDF-iga.',
            steps: [
                { icon: '📂', title: 'Laadi PDF Üles', text: 'Vali PDF-fail, mida soovid muuta.' },
                { icon: '✏️', title: 'Muuda', text: 'Lisa teksti, kujundeid, allkirju või märkusi.' },
                { icon: '⬇️', title: 'Laadi Alla', text: 'Salvesta ja laadi muudetud PDF kohe alla!' },
            ],
        },
        why: {
            title: 'Miks Muuta PDF-e KeepPDF-iga?',
            subtitle: 'Tasuta ja turvaline PDF redaktor',
            items: [
                { icon: '🔒', title: '100% Privaatne', text: 'Failid ei lahku brauserist. Muuda PDF privaatselt.' },
                { icon: '🚀', title: 'Installimata', text: 'Tarkvara pole vaja. Muuda PDF otse brauseris.' },
                { icon: '💰', title: 'Täiesti Tasuta', text: 'Makseid pole, litsentse pole. Muuda PDF piiramatult.' },
                { icon: '📱', title: 'Igal Seadmel', text: 'Muuda PDF arvutist, telefonist või tahvlist.' },
            ],
        },
        faq: [
            { q: 'Mida saan PDF muutmisel teha?', a: 'Lisa teksti, kujundeid, allkirju, templeid ja märkusi.' },
            { q: 'Kas tarkvara on vajalik?', a: 'Ei! KeepPDF töötab täielikult brauseris — installimata, Adobe\'ta.' },
        ],
        internalLinks: [
            { href: '/et/uhenda-pdf-tasuta', label: '🔗 Ühenda PDF Tasuta' },
            { href: '/et/tukkelda-pdf-tasuta', label: '✂️ Tükelda PDF Tasuta' },
            { href: '/et/tihenda-pdf-tasuta', label: '📦 Tihenda PDF Tasuta' },
        ],
    },

    // ═══════════════════════════════════════════════════════════
    // LATVIAN (LV)
    // ═══════════════════════════════════════════════════════════

    'lv-apvienot-pdf-bezmaksas': {
        slug: 'apvienot-pdf-bezmaksas',
        lang: 'lv',
        tool: 'merge',
        toolComponent: 'MergeClient',
        seoTitle: 'Apvienot PDF Bezmaksas — Kombinēt PDF Failus Bez Augšupielādes Serverī | KeepPDF',
        seoDescription: 'Apvienot PDF bezmaksas tiešsaistē. Kombinējiet vairākus PDF failus vienā dokumentā sekundēs — bez reģistrācijas, bez augšupielādes serverī, 100% pārlūkā.',
        h1: 'Apvienot PDF Bezmaksas un Ātri',
        h1Sub: 'Bez Augšupielādes Serverī — Faili Nepametīs Jūsu Pārlūku',
        privacyBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howTo: {
            title: 'Kā Apvienot PDF Bezmaksas 3 Soļos',
            subtitle: 'Apvienot PDF bezmaksas ar KeepPDF — vienkārši un ātri.',
            steps: [
                { icon: '📂', title: 'Augšupielādējiet Failus', text: 'Izvēlieties vai velciet PDF failus, kurus vēlaties apvienot.' },
                { icon: '🔀', title: 'Pārkārtojiet', text: 'Velciet failus, lai mainītu to secību.' },
                { icon: '⬇️', title: 'Lejupielādējiet', text: 'Nospiediet "Apvienot" un lejupielādējiet kombinēto PDF — bezmaksas!' },
            ],
        },
        why: {
            title: 'Kāpēc Izvēlēties KeepPDF PDF Apvienošanai?',
            subtitle: 'Iemesli, kāpēc tūkstošiem lietotāju uzticas KeepPDF',
            items: [
                { icon: '🔒', title: '100% Privāti', text: 'Faili nekad nepametīs pārlūku. Apvienojiet PDF ar pilnīgu privātumu.' },
                { icon: '⚡', title: 'Ļoti Ātri', text: 'Apvienojiet PDF sekundēs, nevis minūtēs.' },
                { icon: '💰', title: 'Pilnībā Bezmaksas', text: 'Nav slēptu maksu, nav abonementu, nav ierobežojumu.' },
                { icon: '📱', title: 'Darbojas Visur', text: 'Dators, telefons, planšete — apvienojiet PDF no jebkuras ierīces.' },
            ],
        },
        faq: [
            { q: 'Vai PDF apvienošana tiešām ir bezmaksas?', a: 'Jā! Apvienojiet PDF bezmaksas ar KeepPDF — bez ierobežojumiem, bez maksām.' },
            { q: 'Vai mani faili ir drošībā?', a: 'Noteikti! Viss tiek apstrādāts jūsu pārlūkā — faili netiek augšupielādēti serverī.' },
            { q: 'Cik PDF failus var apvienot vienlaicīgi?', a: 'Nav ierobežojumu! Apvienojiet 2, 5, 10 vai vairāk PDF failus vienā.' },
        ],
        internalLinks: [
            { href: '/lv/sadalit-pdf-bezmaksas', label: '✂️ Sadalīt PDF Bezmaksas' },
            { href: '/lv/saspiest-pdf-bezmaksas', label: '📦 Saspiest PDF Bezmaksas' },
            { href: '/lv/merge-pdf', label: '🔧 PDF Apvienošanas Rīks' },
        ],
    },

    'lv-sadalit-pdf-bezmaksas': {
        slug: 'sadalit-pdf-bezmaksas',
        lang: 'lv',
        tool: 'split',
        toolComponent: 'SplitClient',
        seoTitle: 'Sadalīt PDF Bezmaksas — Izdalīt Lapas Bez Reģistrācijas | KeepPDF',
        seoDescription: 'Sadalīt PDF bezmaksas tiešsaistē. Izdaliet konkrētas lapas no PDF bez reģistrācijas, bez augšupielādes serverī — 100% pārlūkā.',
        h1: 'Sadalīt PDF Bezmaksas Tiešsaistē',
        h1Sub: 'Izdaliet Vajadzīgās Lapas — Ātri un Droši',
        privacyBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howTo: {
            title: 'Kā Sadalīt PDF Bezmaksas 3 Soļos',
            subtitle: 'Sadalīt PDF bezmaksas ar KeepPDF.',
            steps: [
                { icon: '📂', title: 'Augšupielādējiet PDF', text: 'Izvēlieties vai velciet PDF failu, kuru vēlaties sadalīt.' },
                { icon: '✂️', title: 'Izvēlieties Lapas', text: 'Noklikšķiniet uz lapām vai ievadiet lapu numurus.' },
                { icon: '⬇️', title: 'Lejupielādējiet', text: 'Nospiediet "Izdalīt" un lejupielādējiet izvēlētās lapas!' },
            ],
        },
        why: {
            title: 'Kāpēc Sadalīt PDF ar KeepPDF?',
            subtitle: 'Ātri, droši un bezmaksas',
            items: [
                { icon: '🔒', title: '100% Privāti', text: 'Faili paliek jūsu pārlūkā. Bez augšupielādes serverī.' },
                { icon: '⚡', title: 'Tūlītēji Rezultāti', text: 'Sadaliet PDF sekundēs.' },
                { icon: '💰', title: 'Pilnībā Bezmaksas', text: 'Konts nav nepieciešams. Sadaliet PDF neierobežoti.' },
                { icon: '📱', title: 'Jebkurā Ierīcē', text: 'Darbojas datorā, telefonā un planšetē.' },
            ],
        },
        faq: [
            { q: 'Vai PDF sadalīšana ir bezmaksas?', a: 'Jā! Sadaliet PDF bezmaksas ar KeepPDF bez ierobežojumiem.' },
            { q: 'Cik lapas var izdalīt?', a: 'Cik vēlaties — 1 lapu, vairākas lapas vai lapu diapazonus.' },
        ],
        internalLinks: [
            { href: '/lv/apvienot-pdf-bezmaksas', label: '🔗 Apvienot PDF Bezmaksas' },
            { href: '/lv/saspiest-pdf-bezmaksas', label: '📦 Saspiest PDF Bezmaksas' },
            { href: '/lv/split', label: '🔧 PDF Sadalīšanas Rīks' },
        ],
    },

    'lv-saspiest-pdf-bezmaksas': {
        slug: 'saspiest-pdf-bezmaksas',
        lang: 'lv',
        tool: 'compress',
        toolComponent: 'CompressClient',
        seoTitle: 'Saspiest PDF Bezmaksas — Samazināt PDF Izmēru Bez Reģistrācijas | KeepPDF',
        seoDescription: 'Saspiest PDF bezmaksas tiešsaistē. Samaziniet faila izmēru saglabājot kvalitāti — bez reģistrācijas, bez augšupielādes serverī, 100% pārlūkā.',
        h1: 'Saspiest PDF Bezmaksas Tiešsaistē',
        h1Sub: 'Samaziniet PDF Izmēru — Ātri un Droši',
        privacyBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez reģistrācijas', 'Bez augšupielādes serverī'],
        howTo: {
            title: 'Kā Saspiest PDF Bezmaksas 3 Soļos',
            subtitle: 'Saspiest PDF bezmaksas ar KeepPDF.',
            steps: [
                { icon: '📂', title: 'Augšupielādējiet PDF', text: 'Izvēlieties vai velciet PDF, kuru vēlaties saspiest.' },
                { icon: '⚙️', title: 'Izvēlieties Kvalitāti', text: 'Izvēlieties pamata (augsta kvalitāte) vai spēcīgu (minimāls izmērs) saspiešanu.' },
                { icon: '⬇️', title: 'Lejupielādējiet', text: 'Nospiediet "Saspiest" un lejupielādējiet samazināto PDF!' },
            ],
        },
        why: {
            title: 'Kāpēc Saspiest PDF ar KeepPDF?',
            subtitle: 'Uzticami un ātri',
            items: [
                { icon: '🔒', title: '100% Privāti', text: 'Faili nepametīs pārlūku. Saspiediet PDF privāti.' },
                { icon: '⚡', title: 'Sekundēs Gatavs', text: 'Samaziniet PDF izmēru ātri. Divas saspiešanas metodes.' },
                { icon: '💰', title: 'Bez Reģistrācijas', text: 'Konts nav nepieciešams. Saspiediet PDF bezmaksas neierobežoti.' },
                { icon: '📱', title: 'Jebkurā Ierīcē', text: 'Dators, telefons, planšete — tikai pārlūks ir nepieciešams.' },
            ],
        },
        faq: [
            { q: 'Vai kvalitāte cieš saspiešanā?', a: 'Pamata saspiešana saglabā augstu kvalitāti. Spēcīga saspiešana samazina vairāk, bet teksts var būt nedaudz izplūdušāks.' },
            { q: 'Cik daudz var samazināt PDF izmēru?', a: 'Pamata saspiešana samazina par 20-40%, spēcīga līdz 80%.' },
        ],
        internalLinks: [
            { href: '/lv/apvienot-pdf-bezmaksas', label: '🔗 Apvienot PDF Bezmaksas' },
            { href: '/lv/sadalit-pdf-bezmaksas', label: '✂️ Sadalīt PDF Bezmaksas' },
            { href: '/lv/compress', label: '🔧 PDF Saspiešanas Rīks' },
        ],
    },

    'lv-rediget-pdf-tiesaiste': {
        slug: 'rediget-pdf-tiesaiste',
        lang: 'lv',
        tool: 'edit',
        toolComponent: 'ComingSoon',
        seoTitle: 'Rediģēt PDF Tiešsaistē — Pievienot Tekstu un Formas Bezmaksas | KeepPDF',
        seoDescription: 'Rediģēt PDF tiešsaistē bezmaksas bez instalēšanas. Pievienojiet tekstu, formas un parakstus PDF tieši pārlūkā — bez reģistrācijas, bez augšupielādes.',
        h1: 'Rediģēt PDF Tiešsaistē Bezmaksas',
        h1Sub: 'Pievienojiet Tekstu un Formas — Bez Instalēšanas',
        privacyBadge: '🔒 100% privāti — faili nekad nepametīs jūsu pārlūku',
        badges: ['Vienmēr bezmaksas', 'Bez instalēšanas', 'Bez augšupielādes serverī'],
        howTo: {
            title: 'Kā Rediģēt PDF Bezmaksas 3 Soļos',
            subtitle: 'Rediģēt PDF tiešsaistē bezmaksas ar KeepPDF.',
            steps: [
                { icon: '📂', title: 'Augšupielādējiet PDF', text: 'Izvēlieties PDF failu, kuru vēlaties rediģēt.' },
                { icon: '✏️', title: 'Rediģējiet', text: 'Pievienojiet tekstu, formas, parakstus vai komentārus.' },
                { icon: '⬇️', title: 'Lejupielādējiet', text: 'Saglabājiet un lejupielādējiet rediģēto PDF!' },
            ],
        },
        why: {
            title: 'Kāpēc Rediģēt PDF ar KeepPDF?',
            subtitle: 'Bezmaksas un drošs PDF redaktors',
            items: [
                { icon: '🔒', title: '100% Privāti', text: 'Faili nepametīs pārlūku. Rediģējiet PDF privāti.' },
                { icon: '🚀', title: 'Bez Instalēšanas', text: 'Programmatūra nav nepieciešama. Rediģējiet PDF tieši pārlūkā.' },
                { icon: '💰', title: 'Pilnībā Bezmaksas', text: 'Nav maksu, nav licenču. Rediģējiet PDF neierobežoti.' },
                { icon: '📱', title: 'Jebkurā Ierīcē', text: 'Rediģējiet PDF no datora, telefona vai planšetes.' },
            ],
        },
        faq: [
            { q: 'Ko var darīt, rediģējot PDF?', a: 'Pievienojiet tekstu, formas, parakstus, zīmogus un komentārus.' },
            { q: 'Vai ir nepieciešama programmatūra?', a: 'Nē! KeepPDF darbojas pilnībā pārlūkā — bez instalēšanas, bez Adobe.' },
        ],
        internalLinks: [
            { href: '/lv/apvienot-pdf-bezmaksas', label: '🔗 Apvienot PDF Bezmaksas' },
            { href: '/lv/sadalit-pdf-bezmaksas', label: '✂️ Sadalīt PDF Bezmaksas' },
            { href: '/lv/saspiest-pdf-bezmaksas', label: '📦 Saspiest PDF Bezmaksas' },
        ],
    },
};
