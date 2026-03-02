/**
 * Keyword Landing Pages Registry
 * 
 * Merkezi kayıt: Tüm keyword-hedefli landing page'ler ve blog yazıları.
 * Yeni sayfa eklemek = bu array'e 1 obje eklemek + .astro/.md dosyasını oluşturmak.
 * Admin dashboard bu dosyadan otomatik okur.
 */

export const keywordPages = [
    // ─── Albanian (SQ) — Merge ───────────────────────────────
    {
        id: "sq-bashko-pdf-falas",
        tool: "merge",
        lang: "sq",
        keyword: "bashko pdf falas",
        score: 85,
        scoreColor: "green",
        type: "landing",
        url: "/sq/bashko-pdf-falas",
        file: "src/pages/sq/bashko-pdf-falas.astro",
        title: "Bashko PDF Falas — Bashkoni Skedarë PDF Online pa Regjistrim | KeepPDF",
        description: "Bashko PDF falas online. Kombinoni skedarë PDF në sekonda pa ngarkim në server, pa regjistrim — 100% në shfletuesin tuaj.",
        h1: "Bashko PDF Falas dhe Shpejt — Pa Ngarkuar në Server",
        status: "live",
    },
    {
        id: "sq-pdf-bashko-online",
        tool: "merge",
        lang: "sq",
        keyword: "pdf bashko online",
        score: 72,
        scoreColor: "yellow",
        type: "landing",
        url: "/sq/pdf-bashko-online",
        file: "src/pages/sq/pdf-bashko-online.astro",
        title: "PDF Bashko Online — Mjet Falas për Bashkimin e PDF pa Instalim | KeepPDF",
        description: "PDF bashko online pa instalim dhe pa regjistrim. Ngarkoni, rirenditni dhe bashkoni skedarë PDF direkt në shfletues.",
        h1: "PDF Bashko Online — Falas dhe pa Instalim",
        status: "live",
    },
    {
        id: "sq-si-bashko-pdf",
        tool: "merge",
        lang: "sq",
        keyword: "si bashko pdf",
        score: 55,
        scoreColor: "yellow",
        type: "blog",
        url: "/sq/blog/si-bashko-pdf",
        file: "src/content/blog/sq/si-bashko-pdf.md",
        title: "Si Bashko PDF — Udhëzuesi i Plotë në 3 Hapa",
        description: "Mësoni si bashko PDF falas me KeepPDF. Udhëzues hap pas hapi me 3 hapa.",
        h1: "Si Bashko PDF në 3 Hapa — Udhëzues i Plotë",
        status: "live",
    },

    // ─── Albanian (SQ) — Split ───────────────────────────────
    {
        id: "sq-ndaj-pdf-falas-online",
        tool: "split",
        lang: "sq",
        keyword: "ndaj pdf falas online",
        score: 78,
        scoreColor: "green",
        type: "landing",
        url: "/sq/ndaj-pdf-falas-online",
        file: "src/pages/sq/ndaj-pdf-falas-online.astro",
        title: "Ndaj PDF Falas Online — Nxirr Faqe pa Ngarkim në Server | KeepPDF",
        description: "Ndaj PDF falas online. Nxirrni faqe specifike pa regjistrim — 100% në shfletuesin tuaj.",
        h1: "Ndaj PDF Falas Online — Pa Ngarkim në Server",
        status: "live",
    },

    // ─── Albanian (SQ) — Compress ────────────────────────────
    {
        id: "sq-kompriso-pdf-pa-regjistrim",
        tool: "compress",
        lang: "sq",
        keyword: "kompriso pdf pa regjistrim",
        score: 74,
        scoreColor: "green",
        type: "landing",
        url: "/sq/kompriso-pdf-pa-regjistrim",
        file: "src/pages/sq/kompriso-pdf-pa-regjistrim.astro",
        title: "Kompriso PDF pa Regjistrim — Zvogëlo PDF Falas Online | KeepPDF",
        description: "Kompriso PDF pa regjistrim dhe pa ngarkim në server — falas, shpejt, 100% në shfletues.",
        h1: "Kompriso PDF pa Regjistrim — Falas dhe pa Server",
        status: "live",
    },

    // ─── Albanian (SQ) — Edit ────────────────────────────────
    {
        id: "sq-redakto-pdf-online-falas",
        tool: "edit",
        lang: "sq",
        keyword: "redakto pdf online falas",
        score: 68,
        scoreColor: "yellow",
        type: "landing",
        url: "/sq/redakto-pdf-online-falas",
        file: "src/pages/sq/redakto-pdf-online-falas.astro",
        title: "Redakto PDF Online Falas — Shto Tekst pa Instalim | KeepPDF",
        description: "Redakto PDF online falas pa instalim — shtoni tekst, forma, nënshkrime direkt në shfletues.",
        h1: "Redakto PDF Online Falas — Pa Instalim",
        status: "live",
    },

    // ─── Estonian (ET) — Merge ───────────────────────────────
    {
        id: "et-uhenda-pdf-tasuta",
        tool: "merge",
        lang: "et",
        keyword: "ühenda pdf tasuta",
        score: 80,
        scoreColor: "green",
        type: "landing",
        url: "/et/uhenda-pdf-tasuta",
        file: "src/pages/et/uhenda-pdf-tasuta.astro",
        title: "Ühenda PDF Tasuta — Kombineeri PDF-faile Ilma Serverisse Laadimata | KeepPDF",
        description: "Ühenda PDF tasuta veebis — registreerimata, serverisse laadimata, 100% brauseris.",
        h1: "Ühenda PDF Tasuta ja Kiiresti — Ilma Serverisse Laadimata",
        status: "live",
    },

    // ─── Estonian (ET) — Split ───────────────────────────────
    {
        id: "et-tukkelda-pdf-tasuta",
        tool: "split",
        lang: "et",
        keyword: "tükelda pdf tasuta",
        score: 72,
        scoreColor: "green",
        type: "landing",
        url: "/et/tukkelda-pdf-tasuta",
        file: "src/pages/et/tukkelda-pdf-tasuta.astro",
        title: "Tükelda PDF Tasuta — Eralda Lehekülgi Ilma Registreerimata | KeepPDF",
        description: "Tükelda PDF tasuta veebis — eralda leheküljed ilma registreerimata, 100% brauseris.",
        h1: "Tükelda PDF Tasuta Veebis — Eralda Lehekülgi",
        status: "live",
    },

    // ─── Estonian (ET) — Compress ────────────────────────────
    {
        id: "et-tihenda-pdf-tasuta",
        tool: "compress",
        lang: "et",
        keyword: "tihenda pdf tasuta",
        score: 70,
        scoreColor: "yellow",
        type: "landing",
        url: "/et/tihenda-pdf-tasuta",
        file: "src/pages/et/tihenda-pdf-tasuta.astro",
        title: "Tihenda PDF Tasuta — Vähenda PDF Suurust Ilma Registreerimata | KeepPDF",
        description: "Tihenda PDF tasuta veebis — vähenda suurust kvaliteeti säilitades, 100% brauseris.",
        h1: "Tihenda PDF Tasuta Veebis — Vähenda Suurust",
        status: "live",
    },

    // ─── Estonian (ET) — Edit ────────────────────────────────
    {
        id: "et-muuda-pdf-veebi-tasuta",
        tool: "edit",
        lang: "et",
        keyword: "muuda pdf veebis tasuta",
        score: 65,
        scoreColor: "yellow",
        type: "landing",
        url: "/et/muuda-pdf-veebi-tasuta",
        file: "src/pages/et/muuda-pdf-veebi-tasuta.astro",
        title: "Muuda PDF Veebis Tasuta — Lisa Teksti Ilma Installimata | KeepPDF",
        description: "Muuda PDF veebis tasuta ilma installimata — 100% brauseris.",
        h1: "Muuda PDF Veebis Tasuta — Ilma Installimata",
        status: "live",
    },

    // ─── Latvian (LV) — Merge ───────────────────────────────
    {
        id: "lv-apvienot-pdf-bezmaksas",
        tool: "merge",
        lang: "lv",
        keyword: "apvienot pdf bezmaksas",
        score: 82,
        scoreColor: "green",
        type: "landing",
        url: "/lv/apvienot-pdf-bezmaksas",
        file: "src/pages/lv/apvienot-pdf-bezmaksas.astro",
        title: "Apvienot PDF Bezmaksas — Kombinēt PDF Failus Bez Augšupielādes | KeepPDF",
        description: "Apvienot PDF bezmaksas tiešsaistē — bez reģistrācijas, 100% pārlūkā.",
        h1: "Apvienot PDF Bezmaksas un Ātri — Bez Augšupielādes Serverī",
        status: "live",
    },

    // ─── Latvian (LV) — Split ───────────────────────────────
    {
        id: "lv-sadalit-pdf-bezmaksas",
        tool: "split",
        lang: "lv",
        keyword: "sadalīt pdf bezmaksas",
        score: 70,
        scoreColor: "yellow",
        type: "landing",
        url: "/lv/sadalit-pdf-bezmaksas",
        file: "src/pages/lv/sadalit-pdf-bezmaksas.astro",
        title: "Sadalīt PDF Bezmaksas — Izdalīt Lapas Bez Reģistrācijas | KeepPDF",
        description: "Sadalīt PDF bezmaksas tiešsaistē — bez reģistrācijas, 100% pārlūkā.",
        h1: "Sadalīt PDF Bezmaksas Tiešsaistē — Izdaliet Lapas",
        status: "live",
    },

    // ─── Latvian (LV) — Compress ────────────────────────────
    {
        id: "lv-saspiest-pdf-bezmaksas",
        tool: "compress",
        lang: "lv",
        keyword: "saspiest pdf bezmaksas",
        score: 72,
        scoreColor: "green",
        type: "landing",
        url: "/lv/saspiest-pdf-bezmaksas",
        file: "src/pages/lv/saspiest-pdf-bezmaksas.astro",
        title: "Saspiest PDF Bezmaksas — Samazināt PDF Izmēru Bez Reģistrācijas | KeepPDF",
        description: "Saspiest PDF bezmaksas tiešsaistē — samaziniet izmēru kvalitāti saglabājot, 100% pārlūkā.",
        h1: "Saspiest PDF Bezmaksas Tiešsaistē — Samaziniet Izmēru",
        status: "live",
    },

    // ─── Latvian (LV) — Edit ────────────────────────────────
    {
        id: "lv-rediget-pdf-tiesaiste",
        tool: "edit",
        lang: "lv",
        keyword: "rediģēt pdf tiešsaistē",
        score: 66,
        scoreColor: "yellow",
        type: "landing",
        url: "/lv/rediget-pdf-tiesaiste",
        file: "src/pages/lv/rediget-pdf-tiesaiste.astro",
        title: "Rediģēt PDF Tiešsaistē — Pievienot Tekstu Bezmaksas | KeepPDF",
        description: "Rediģēt PDF tiešsaistē bezmaksas bez instalēšanas — 100% pārlūkā.",
        h1: "Rediģēt PDF Tiešsaistē Bezmaksas — Bez Instalēšanas",
        status: "live",
    },
];

// Helper functions
export const getPagesByLang = (lang) => keywordPages.filter(p => p.lang === lang);
export const getPagesByTool = (tool) => keywordPages.filter(p => p.tool === tool);
export const getPagesByStatus = (status) => keywordPages.filter(p => p.status === status);
export const getLangsWithPages = () => [...new Set(keywordPages.map(p => p.lang))];
