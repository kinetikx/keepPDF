/**
 * Localized Slugs — Cultural SEO Mapping
 * 
 * Bu dosya her araç için kültürel SEO odaklı slug ve metadata mapping'i içerir.
 * Şu an route yapısı sabit olduğu için (merge-pdf.astro, split.astro vb.)
 * bu veriler config/referans olarak saklanıyor.
 * 
 * İleriki catch-all route migrasyonu için getStaticPaths'te kullanılabilir.
 */

export const localizedSlugs = {
    "merge-pdf": {
        en: {
            slug: "merge-pdf",
            title: "Merge PDF Files Online - Combine PDFs Instantly Free | KeepPDF",
            description: "Combine multiple PDF files into one document for free. No file uploads needed — merge PDFs securely in your browser with instant results.",
            h1: "Merge PDF Files Online for Free"
        },
        tr: {
            slug: "pdf-birlestir-ucretsiz",
            title: "PDF Birleştir - PDF Dosyalarını Ücretsiz Birleştir | KeepPDF",
            description: "Birden fazla PDF dosyasını tek bir belge olarak ücretsiz birleştirin. Dosya yükleme gerekmez — PDF'lerinizi tarayıcınızda güvenle birleştirin.",
            h1: "PDF Dosyalarını Ücretsiz Birleştir — Sunucuya Yüklemeden"
        },
        sq: {
            slug: "bashko-pdf-falas",
            title: "Bashko PDF Online — Kombino PDF Falas pa Regjistrim | KeepPDF",
            description: "Kombinoni skedarë të shumtë PDF në një dokument të vetëm falas. Nuk ka nevojë për ngarkim — bashkoni PDF-të në shfletuesin tuaj.",
            h1: "Bashko Skedarët PDF Online Falas — Pa Ngarkuar në Server"
        },
        et: {
            slug: "uhenda-pdf-tasuta-veebis",
            title: "Ühenda PDF-failid veebis — Kombineeri PDF-e koheselt tasuta | KeepPDF",
            description: "Kombineerige mitu PDF-faili üheks dokumendiks tasuta. Faile ei laadita serverisse — ühendage PDF-e turvaliselt oma brauseris.",
            h1: "Ühenda PDF-failid veebis tasuta — ilma üleslaadimiseta"
        },
        lv: {
            slug: "apvienot-pdf-bez-maksas",
            title: "Apvienot PDF failus tiešsaistē — Kombinēt PDF bez maksas | KeepPDF",
            description: "Kombinējiet vairākus PDF failus vienā dokumentā bezmaksas. Nav nepieciešama augšupielāde — apvienojiet PDF droši pārlūkprogrammā.",
            h1: "Apvienojiet PDF failus tiešsaistē bezmaksas — bez augšupielādes serverī"
        }
    },
    "split": {
        en: {
            slug: "split",
            title: "Split PDF - Extract Pages from PDF Online Free | KeepPDF",
            description: "Split PDF files and extract specific pages or page ranges for free. Fast, secure, and browser-based.",
            h1: "Split PDF & Extract Pages Online"
        },
        tr: {
            slug: "pdf-bol-ucretsiz",
            title: "PDF Böl — PDF Sayfalarını Ücretsiz Ayır | KeepPDF",
            description: "PDF dosyalarını bölün ve belirli sayfaları ücretsiz çıkarın. Hızlı, güvenli ve tarayıcı tabanlı.",
            h1: "PDF'yi Ücretsiz Böl — Sunucuya Yüklemeden"
        },
        sq: {
            slug: "ndaj-pdf-online-falas",
            title: "Ndaj PDF Online — Nxirr Faqet nga PDF Falas | KeepPDF",
            description: "Ndani skedarët PDF dhe nxirrni faqe specifike falas. Shpejt, sigurt dhe në shfletues.",
            h1: "Ndaj PDF dhe Nxirr Faqet Falas — Pa Ngarkuar në Server"
        },
        et: {
            slug: "tukeldage-pdf-tasuta",
            title: "Tükelda PDF — Eralda lehekülgi PDF-ist veebis tasuta | KeepPDF",
            description: "Tükeldage PDF-faile ja eraldage konkreetseid lehekülgi tasuta. Kiire, turvaline ja brauseripõhine.",
            h1: "Tükelda PDF ja eralda lehekülgi veebis tasuta"
        },
        lv: {
            slug: "sadalit-pdf-tiessaiste",
            title: "Sadalīt PDF — Izvilkt lapas no PDF tiešsaistē bezmaksas | KeepPDF",
            description: "Sadaliet PDF failus un izvelciet konkrētas lapas bezmaksas. Ātri, droši un pārlūkprogrammā.",
            h1: "Sadaliet PDF un izvelciet lapas tiešsaistē bezmaksas"
        }
    },
    "compress": {
        en: {
            slug: "compress",
            title: "Compress PDF - Reduce PDF File Size Online Free | KeepPDF",
            description: "Reduce PDF file size while maintaining quality. Free, private, and processed entirely in your browser.",
            h1: "Compress PDF Files Online for Free"
        },
        tr: {
            slug: "pdf-sikistir-ucretsiz",
            title: "PDF Sıkıştır — PDF Boyutunu Ücretsiz Küçült | KeepPDF",
            description: "Kaliteyi koruyarak PDF dosya boyutunu küçültün. Ücretsiz, gizli ve tamamen tarayıcınızda işlenir.",
            h1: "PDF'yi Ücretsiz Sıkıştır — Sunucuya Yüklemeden"
        },
        sq: {
            slug: "kompreso-pdf-pa-regjistrim",
            title: "Kompreso PDF — Zvogëlo Madhësinë e PDF Falas | KeepPDF",
            description: "Zvogëloni madhësinë e PDF duke ruajtur cilësinë. Falas, privat dhe plotësisht në shfletues.",
            h1: "Kompreso PDF Falas — Pa Regjistrim, Pa Ngarkuar në Server"
        },
        et: {
            slug: "tihenda-pdf-tasuta",
            title: "Tihenda PDF — Vähenda PDF-faili suurust veebis tasuta | KeepPDF",
            description: "Vähendage PDF-faili suurust kvaliteeti säilitades. Tasuta, privaatne ja täielikult brauseris.",
            h1: "Tihenda PDF-faile veebis tasuta — ilma üleslaadimiseta"
        },
        lv: {
            slug: "saspiest-pdf-bezmaksas",
            title: "Saspiest PDF — Samazināt PDF faila izmēru tiešsaistē bezmaksas | KeepPDF",
            description: "Samaziniet PDF faila izmēru, saglabājot kvalitāti. Bezmaksas, privāts un pilnībā pārlūkprogrammā.",
            h1: "Saspiediet PDF failus tiešsaistē bezmaksas — bez augšupielādes"
        }
    },
    "edit-pdf": {
        en: {
            slug: "edit-pdf",
            title: "Edit PDF Online - Add Text, Shapes & Highlights | KeepPDF",
            description: "Edit PDF files online for free. Add text, shapes, comments directly in your browser.",
            h1: "Edit PDF Files Online for Free"
        },
        tr: {
            slug: "pdf-duzenle-ucretsiz",
            title: "PDF Düzenle — Metin, Şekil ve Not Ekle Ücretsiz | KeepPDF",
            description: "PDF dosyalarını ücretsiz düzenleyin. Metin, şekil ve yorum ekleyin — doğrudan tarayıcınızda.",
            h1: "PDF'yi Ücretsiz Düzenle — Sunucuya Yüklemeden"
        },
        sq: {
            slug: "redakto-pdf-ne-shfletues",
            title: "Redakto PDF — Shto Tekst, Forma & Komente Falas | KeepPDF",
            description: "Redaktoni skedarët PDF online falas. Shtoni tekst, forma direkt në shfletues.",
            h1: "Redakto PDF Falas në Shfletues — Pa Ngarkuar në Server"
        },
        et: {
            slug: "muuda-pdf-veebis-tasuta",
            title: "Redigeeri PDF-i veebis — Lisa teksti, kujundeid & esiletõsteid | KeepPDF",
            description: "Redigeerige PDF-faile veebis tasuta. Lisage teksti, kujundeid otse brauseris.",
            h1: "Redigeeri PDF-faile veebis tasuta — ilma üleslaadimiseta"
        },
        lv: {
            slug: "rediget-pdf-tiessaiste",
            title: "Rediģēt PDF tiešsaistē — Pievienot tekstu, formas & izcelšanu | KeepPDF",
            description: "Rediģējiet PDF failus tiešsaistē bezmaksas. Pievienojiet tekstu, formas tieši pārlūkprogrammā.",
            h1: "Rediģējiet PDF failus tiešsaistē bezmaksas — bez augšupielādes"
        }
    }
};
