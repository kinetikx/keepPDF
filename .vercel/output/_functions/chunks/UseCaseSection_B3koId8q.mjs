import { jsx, jsxs } from 'react/jsx-runtime';
import { UploadCloud, CheckCircle, ScanLine, FileSpreadsheet, FileCode, Settings2, PenTool, Image, FileText, LayoutTemplate, Minimize2, Files, Scissors } from 'lucide-react';

const howTo = {
    split: {
        en: {
            title: "How to split a PDF",
            subtitle: "Separate one page or a whole set for easy conversion into independent PDF files.",
            steps: [
                "Select the PDF document you want to split or drag and drop it into the upload box.",
                "Choose to extract specific pages, separate by page ranges, or split into equal parts.",
                "Click the split button and download your new optimized PDF files instantly."
            ]
        },
        tr: {
            title: "PDF Nasıl Bölünür",
            subtitle: "Bağımsız PDF dosyalarına kolay dönüştürme için tek bir sayfayı veya tüm seti ayırın.",
            steps: [
                "Bölmek istediğiniz PDF belgesini seçin veya yükleme kutusuna sürükleyip bırakın.",
                "Belirli sayfaları çıkarmayı, sayfa aralıklarına göre ayırmayı veya eşit parçalara bölmeyi seçin.",
                "Böl düğmesine tıklayın ve yeni optimize edilmiş PDF dosyalarınızı anında indirin."
            ]
        },
        sq: {
                  "title": "Si të ndash një PDF",
                  "subtitle": "Ndani një faqe ose një grup të tërë për konvertim të lehtë në skedarë PDF të pavarur.",
                  "steps": [
                            "Zgjidhni dokumentin PDF që dëshironi të ndani ose zvarriteni në kutinë e ngarkimit.",
                            "Zgjidhni të nxirrni faqe specifike, t'i ndani sipas vargjeve të faqeve ose t'i ndani në pjesë të barabarta.",
                            "Klikoni butonin e ndarjes dhe shkarkoni menjëherë skedarët tuaj të rinj PDF të optimizuar."
                  ]
                }
    },
    "merge-pdf": {
        en: {
            title: "How to merge PDF files",
            subtitle: "Combine two or more PDFs into a single, highly organized document.",
            steps: [
                "Upload the PDF files you want to combine over a secure encrypted connection.",
                "Drag and drop the file thumbnails to reorder them exactly how you need them.",
                "Click the merge button and your newly combined PDF will be ready in seconds."
            ]
        },
        tr: {
            title: "PDF Dosyaları Nasıl Birleştirilir",
            subtitle: "İki veya daha fazla PDF'yi tek, son derece organize bir belgede birleştirin.",
            steps: [
                "Birleştirmek istediğiniz PDF dosyalarını güvenli ve şifreli bir bağlantı üzerinden yükleyin.",
                "Dosya küçük resimlerini tam olarak ihtiyacınız olan şekilde yeniden sıralamak için sürükleyip bırakın.",
                "Birleştir düğmesine tıklayın, yeni birleştirilmiş PDF'niz saniyeler içinde hazır olacak."
            ]
        },
        sq: {
                  "title": "Si të bashkosh skedarët PDF",
                  "subtitle": "Kombinoni dy ose më shumë PDF në një dokument të vetëm, shumë të organizuar.",
                  "steps": [
                            "Ngarkoni skedarët PDF që dëshironi të kombinoni përmes një lidhjeje të sigurt të enkriptuar.",
                            "Drag & drop ikonat e skedarëve për t'i rirenditur saktësisht ashtu siç ju duhen.",
                            "Klikoni butonin e bashkimit dhe PDF-ja juaj e sapo kombinuar do të jetë gati në sekonda."
                  ]
                }
    },
    compress: {
        en: {
            title: "How to compress a PDF",
            subtitle: "Reduce file size significantly while retaining the highest possible quality.",
            steps: [
                "Choose the large PDF document you want to shrink from your local drive.",
                "Wait a few seconds while our engine analyzes and applies advanced compression.",
                "Download your lighter, email-ready PDF file without losing visual quality."
            ]
        },
        tr: {
            title: "PDF Nasıl Sıkıştırılır",
            subtitle: "Mümkün olan en yüksek kaliteyi korurken dosya boyutunu önemli ölçüde azaltın.",
            steps: [
                "Küçültmek istediğiniz büyük PDF belgesini yerel sürücünüzden seçin.",
                "Motorumuz dosyayı analiz edip gelişmiş sıkıştırma uygularken birkaç saniye bekleyin.",
                "Görsel kaliteyi kaybetmeden daha hafif, e-posta göndermeye hazır PDF dosyanızı indirin."
            ]
        },
        sq: {
                  "title": "Si të kompresosh një PDF",
                  "subtitle": "Zvogëloni madhësinë e skedarit ndjeshëm duke ruajtur cilësinin më të lartë të mundshme.",
                  "steps": [
                            "Zgjidhni dokumentin e madh PDF që dëshironi të zvogëloni nga diskun tuaj lokal.",
                            "Prisni disa sekonda ndërsa motori ynë analizon dhe aplikon kompresim të avancuar.",
                            "Shkarkoni skedarin tuaj PDF më të lehtë, gati për email, pa humbur cilësinë vizuale."
                  ]
                }
    },
    organize: {
        en: {
            title: "How to organize PDF pages",
            subtitle: "Sort, add, delete, and manage the exact order of pages within your PDF.",
            steps: [
                "Upload your multi-page PDF document to load it into the page visualizer.",
                "Drag and drop pages to reorder them, or hover over pages to delete unwanted ones.",
                "Save and download your newly structured PDF document immediately."
            ]
        },
        tr: {
            title: "PDF Sayfaları Nasıl Düzenlenir",
            subtitle: "PDF'nizdeki sayfaların tam sırasını sıralayın, ekleyin, silin ve yönetin.",
            steps: [
                "Çok sayfalı PDF belgenizi sayfa görselleştiricisine yüklemek için seçin.",
                "Sayfaları yeniden sıralamak için sürükleyip bırakın veya istenmeyenleri silmek için üzerlerine gelin.",
                "Yeni yapılandırılmış PDF belgenizi kaydedin ve hemen indirin."
            ]
        },
        sq: {
                  "title": "Si të organizosh faqet e PDF-së",
                  "subtitle": "Renditni, shtoni, fshini dhe menaxhoni radhën e saktë të faqeve brenda PDF-së tuaj.",
                  "steps": [
                            "Ngarkoni dokumentin tuaj PDF me shumë faqe për ta hapur në vizualizuesin e faqeve.",
                            "Drag & drop faqet për t'i rirenditur, ose kaloni mausin mbi faqe për të fshirë ato të padëshiruara.",
                            "Ruani dhe shkarkoni dokumentin tuaj PDF të sapostrukturuar menjëherë."
                  ]
                }
    },
    "image-to-pdf": {
        en: {
            title: "How to convert JPG to PDF",
            subtitle: "Turn images into a single polished PDF document in just a few clicks.",
            steps: [
                "Select your JPG, PNG, or other image files to start the conversion process.",
                "Adjust margins, page orientation, and reorder the images freely in the preview.",
                "Click convert and securely download your brand-new combined PDF file."
            ]
        },
        tr: {
            title: "JPG'yi PDF'ye Nasıl Dönüştürülür",
            subtitle: "Görüntüleri sadece birkaç tıklamayla tek bir cilalı PDF belgesine dönüştürün.",
            steps: [
                "Dönüştürme işlemini başlatmak için JPG, PNG veya diğer resim dosyalarınızı seçin.",
                "Önizlemede kenar boşluklarını, sayfa yönünü ayarlayın ve resimleri serbestçe yeniden sıralayın.",
                "Dönüştür'e tıklayın ve yepyeni birleştirilmiş PDF dosyanızı güvenle indirin."
            ]
        },
        sq: {
                  "title": "Si të konvertosh JPG në PDF",
                  "subtitle": "Kthejeni imazhet në një dokument të vetëm PDF të lëmuar me vetëm pak klikime.",
                  "steps": [
                            "Zgjidhni skedarët tuaj JPG, PNG ose imazhe të tjera për të filluar procesin e konvertimit.",
                            "Rregulloni margjinat, orientimin e faqes dhe rirenditni imazhet lirisht në parashikim.",
                            "Klikoni konverto dhe shkarkoni në mënyrë të sigurt skedarin tuaj të ri PDF të kombinuar."
                  ]
                }
    },
    "pdf-to-word": {
        en: {
            title: "How to convert PDF to Word",
            subtitle: "Extract text and layouts from documents into fully editable Word files.",
            steps: [
                "Upload your read-only PDF document into the conversion dropzone.",
                "Our robust OCR engine will process the text, fonts, and images carefully.",
                "Download the fully editable DOCX file and start making changes in Microsoft Word."
            ]
        },
        tr: {
            title: "PDF'yi Word'e Nasıl Dönüştürülür",
            subtitle: "Belgelerden metin ve düzenleri tamamen düzenlenebilir Word dosyalarına çıkarın.",
            steps: [
                "Yalnızca okunur PDF belgenizi dönüştürme bırakma alanına yükleyin.",
                "Sağlam OCR motorumuz metni, yazı tiplerini ve görüntüleri dikkatlice işleyecektir.",
                "Tamamen düzenlenebilir DOCX dosyasını indirin ve Microsoft Word'de değişiklik yapmaya başlayın."
            ]
        },
        sq: {
                  "title": "Si të konvertosh PDF në Word",
                  "subtitle": "Nxirrni tekstin dhe faqosjet nga dokumentet në skedarë Word plotësisht të redaktueshëm.",
                  "steps": [
                            "Ngarkoni dokumentin tuaj PDF që është vetëm për lexim në zonën e konvertimit.",
                            "Motori ynë i fuqishëm OCR do të përpunojë tekstin, fontet dhe imazhet me kujdes.",
                            "Shkarkoni skedarin plotësisht të redaktueshëm DOCX dhe filloni të bëni ndryshime në Microsoft Word."
                  ]
                }
    },
    "word-to-pdf": {
        en: {
            title: "How to convert Word to PDF",
            subtitle: "Lock formatting and finalize your text documents into universal PDF format.",
            steps: [
                "Choose the Microsoft Word document (DOC or DOCX) you want to freeze.",
                "The server will process your document to accurately preserve layout and fonts.",
                "Download the PDF file ready for sharing, printing, or secure archiving."
            ]
        },
        tr: {
            title: "Word'ü PDF'ye Nasıl Dönüştürülür",
            subtitle: "Biçimlendirmeyi kilitleyin ve metin belgelerinizi evrensel PDF biçiminde sonlandırın.",
            steps: [
                "Dondurmak istediğiniz Microsoft Word belgesini (DOC veya DOCX) seçin.",
                "Sunucu, düzeni ve yazı tiplerini doğru bir şekilde korumak için belgenizi işleyecektir.",
                "Paylaşmaya, yazdırmaya veya güvenli bir şekilde arşivlemeye hazır PDF dosyasını indirin."
            ]
        },
        sq: {
                  "title": "Si të konvertosh Word në PDF",
                  "subtitle": "Kyçni formatimin dhe finalizoni dokumentet tuaja të tekstit në formatin universal PDF.",
                  "steps": [
                            "Zgjidhni dokumentin Microsoft Word (DOC ose DOCX) që dëshironi të ngrini.",
                            "Serveri do të përpunojë dokumentin tuaj për të ruajtur saktësisht faqosjen dhe fontet.",
                            "Shkarkoni skedarin PDF të gatshëm për ndarje, printim ose arkivim të sigurt."
                  ]
                }
    },
    "pdf-to-image": {
        en: {
            title: "How to extract images from PDF",
            subtitle: "Convert whole pages to JPGs or extract embedded images inside the file.",
            steps: [
                "Upload the PDF document you want to extract visual assets from.",
                "Choose whether to convert entire pages to images or extract individual graphics.",
                "Download a ZIP folder containing all your extracted high-quality JPGs."
            ]
        },
        tr: {
            title: "PDF'den Resim Nasıl Çıkarılır",
            subtitle: "Tüm sayfaları JPG'lere dönüştürün veya dosya içindeki gömülü görüntüleri çıkarın.",
            steps: [
                "Görsel varlıkları çıkarmak istediğiniz PDF belgesini yükleyin.",
                "Tüm sayfaları resimlere dönüştürmeyi mi yoksa tek tek grafikleri çıkarmayı mı seçeceğinize karar verin.",
                "Tüm çıkarılmış yüksek kaliteli JPG'lerinizi içeren bir ZIP klasörünü indirin."
            ]
        },
        sq: {
                  "title": "Si të nxjerrësh imazhet nga PDF",
                  "subtitle": "Konvertoni faqe të tëra në JPG ose nxirrni imazhet e integruara brenda skedarit.",
                  "steps": [
                            "Ngarkoni dokumentin PDF nga i cili dëshironi të nxirrni asetet vizuale.",
                            "Zgjidhni nëse dëshironi të konvertoni faqe të tëra në imazhe ose të nxirrni grafika individuale.",
                            "Shkarkoni një dosje ZIP që përmban të gjitha JPG-të tuaja të nxjerra me cilësi të lartë."
                  ]
                }
    },
    "sign-pdf": {
        en: {
            title: "How to sign a PDF",
            subtitle: "Upload & sign your PDFs easily without printing a single page.",
            steps: [
                "Choose a document and upload it over a secure connection to our server.",
                "Sign your document using your mouse, typing text, inserting an image or drawing on touchscreen.",
                "Save your signature and securely download the signed PDF file."
            ]
        },
        tr: {
            title: "PDF Nasıl İmzalanır",
            subtitle: "Tek bir sayfa yazdırmadan PDF'lerinizi kolayca yükleyin ve imzalayın.",
            steps: [
                "Bir belge seçin ve güvenli bir bağlantı üzerinden sunucumuza yükleyin.",
                "Farenizi kullanarak, metin yazarak, bir resim ekleyerek veya dokunmatik ekranda çizerek belgenizi imzalayın.",
                "İmzanızı kaydedin ve imzalanmış PDF dosyasını güvenli bir şekilde indirin."
            ]
        },
        sq: {
                  "title": "Si të nënshkruash një PDF",
                  "subtitle": "Ngarkoni dhe nënshkruani PDF-të tuaja lehtësisht pa printuar asnjë faqe të vetme.",
                  "steps": [
                            "Zgjidhni një dokument dhe ngarkojeni atë përmes një lidhjeje të sigurt në serverin tonë.",
                            "Nënshkruani dokumentin tuaj duke përdorur mausin, duke shkruar tekst, duke futur një imazh ose duke vizatuar në ekranin me prekje.",
                            "Ruani nënshkrimin tuaj dhe shkarkoni në mënyrë të sigurt skedarin PDF të nënshkruar."
                  ]
                }
    },
    "edit-pdf": {
        en: {
            title: "How to edit a PDF",
            subtitle: "Add text, highlighted areas, shapes, or images directly on your PDF pages.",
            steps: [
                "Select a PDF file and open it in our robust online document editor.",
                "Use the toolbar to insert dynamic text boxes, shapes, or hide sensitive data.",
                "Apply all your visual edits and download the updated PDF immediately."
            ]
        },
        tr: {
            title: "PDF Nasıl Düzenlenir",
            subtitle: "Metin, vurgulanmış alanlar, şekiller veya resimleri doğrudan PDF sayfalarınıza ekleyin.",
            steps: [
                "Bir PDF dosyası seçin ve sağlam çevrimiçi belge düzenleyicimizde açın.",
                "Dinamik metin kutuları, şekiller eklemek veya hassas verileri gizlemek için araç çubuğunu kullanın.",
                "Tüm görsel düzenlemelerinizi uygulayın ve güncellenmiş PDF'yi hemen indirin."
            ]
        },
        sq: {
                  "title": "Si të redaktosh një PDF",
                  "subtitle": "Shtoni tekst, zona të nënvizuara, forma ose imazhe direkt në faqet tuaja PDF.",
                  "steps": [
                            "Zgjidhni një skedar PDF dhe hapeni atë në redaktuesin tonë të fuqishëm të dokumenteve online.",
                            "Përdorni shiritin e mjetit për të futur kuti teksti dinamike, forma ose për të fshehur të dhënat sensitive.",
                            "Aplikoni të gjitha redaktimet tuaja vizuale dhe shkarkoni menjëherë PDF-në e përditësuar."
                  ]
                }
    },
    "pdf-to-txt": {
        en: {
            title: "How to convert PDF to TXT",
            subtitle: "Strip away all formatting and extract pure plain text from your documents.",
            steps: [
                "Upload your text-heavy PDF document to the plain text converter.",
                "Our system will remove the styling, images, and layout blocks.",
                "Download your raw TXT file instantly for extreme simplicity and portability."
            ]
        },
        tr: {
            title: "PDF'yi TXT'ye Nasıl Dönüştürülür",
            subtitle: "Tüm biçimlendirmeyi soyun ve belgelerinizden saf düz metin çıkarın.",
            steps: [
                "Metin ağırlıklı PDF belgenizi düz metin dönüştürücüsüne yükleyin.",
                "Sistemimiz stili, görüntüleri ve düzen bloklarını kaldıracaktır.",
                "Aşırı basitlik ve taşınabilirlik için ham TXT dosyanızı anında indirin."
            ]
        },
        sq: {
                  "title": "Si të konvertosh PDF në TXT",
                  "subtitle": "Hiqni të gjithë formatimin dhe nxirrni tekst të thjeshtë e të pastër nga dokumentet tuaja.",
                  "steps": [
                            "Ngarkoni dokumentin tuaj PDF med shumë tekst në konvertuesin e tekstit të thjeshtë.",
                            "Sistemi ynë do të heqë stilin, imazhet dhe blloqet e faqosjes.",
                            "Shkarkoni skedarin tuaj të papërpunuar TXT menjëherë për thjeshtësi dhe transportueshmëri ekstreme."
                  ]
                }
    },
    "pdf-to-excel": {
        en: {
            title: "How to convert PDF to Excel",
            subtitle: "Extract tables and tabular data perfectly into editable spreadsheets.",
            steps: [
                "Select the PDF containing the charts or tables you want to digitize.",
                "Our advanced algorithms will detect columns, rows, and structured data.",
                "Download the XLSX file and seamlessly open it with Microsoft Excel."
            ]
        },
        tr: {
            title: "PDF'yi Excel'e Nasıl Dönüştürülür",
            subtitle: "Tabloları ve sekmeli verileri mükemmel bir şekilde düzenlenebilir e-tablolara ayıklayın.",
            steps: [
                "Dijitalleştirmek istediğiniz çizelgeleri veya tabloları içeren PDF'yi seçin.",
                "Gelişmiş algoritmalarımız sütunları, satırları ve yapılandırılmış verileri tespit edecektir.",
                "XLSX dosyasını indirin ve Microsoft Excel ile sorunsuz bir şekilde açın."
            ]
        },
        sq: {
                  "title": "Si të konvertosh PDF në Excel",
                  "subtitle": "Nxirrni tabelat dhe të dhënat tabelare në mënyrë perfekte në tabela të redaktueshme.",
                  "steps": [
                            "Zgjidhni PDF-në që përmban grafikët ose tabelat që dëshironi të digjitalizoni.",
                            "Algoritmet tona të avancuara do të zbulogens kolonat, rreshtat dhe të dhënat e strukturuara.",
                            "Shkarkoni skedarin XLSX dhe hapeni atë pa probleme me Microsoft Excel."
                  ]
                }
    },
    "ocr-pdf": {
        en: {
            title: "How to use OCR on a PDF",
            subtitle: "Make text in scanned PDFs and images legally selectable and searchable.",
            steps: [
                "Upload a scanned, flattened, or image-only PDF into the OCR engine.",
                "Choose the detection language and wait while it reads the document.",
                "Download a fully searchable PDF with selectable text layered underneath."
            ]
        },
        tr: {
            title: "Bir PDF'de OCR Nasıl Kullanılır",
            subtitle: "Taranan PDF'lerdeki ve resimlerdeki metni yasal olarak seçilebilir ve aranabilir yapın.",
            steps: [
                "Taranmış, düzleştirilmiş veya yalnızca resimli bir PDF'yi OCR motoruna yükleyin.",
                "Algılama dilini seçin ve belgeyi okurken bekleyin.",
                "Altında seçilebilir metin katmanlanmış tamamen aranabilir bir PDF indirin."
            ]
        },
        sq: {
                  "title": "Si të përdorësh OCR në një PDF",
                  "subtitle": "Bëni tekstin në PDF-të e skanuara dhe imazhet ligjërisht të selektueshëm dhe të kërkueshëm.",
                  "steps": [
                            "Ngarkoni një PDF të skanuar ose që përmban vetëm imazhe në motorin OCR.",
                            "Zgjidhni gjuhën e zbulimit dhe prisni ndërsa ai lexon dokumentin.",
                            "Shkarkoni një PDF plotësisht të kërkueshëm me tekst të selektueshëm të shtresuar poshtë tij."
                  ]
                }
    }
};

const getTheme = (slug) => {
  const themes = {
    split: { color: "text-orange-500", bg: "bg-orange-50", iconBg: "bg-orange-500", ring: "ring-orange-100", blob: "bg-orange-200" },
    "merge-pdf": { color: "text-pink-500", bg: "bg-pink-50", iconBg: "bg-pink-500", ring: "ring-pink-100", blob: "bg-pink-200" },
    compress: { color: "text-red-500", bg: "bg-red-50", iconBg: "bg-red-500", ring: "ring-red-100", blob: "bg-red-200" },
    organize: { color: "text-purple-500", bg: "bg-purple-50", iconBg: "bg-purple-500", ring: "ring-purple-100", blob: "bg-purple-200" },
    "image-to-pdf": { color: "text-blue-500", bg: "bg-blue-50", iconBg: "bg-blue-500", ring: "ring-blue-100", blob: "bg-blue-200" },
    "pdf-to-word": { color: "text-blue-600", bg: "bg-blue-100", iconBg: "bg-blue-600", ring: "ring-blue-200", blob: "bg-blue-300" },
    "word-to-pdf": { color: "text-blue-600", bg: "bg-blue-100", iconBg: "bg-blue-600", ring: "ring-blue-200", blob: "bg-blue-300" },
    "pdf-to-image": { color: "text-pink-500", bg: "bg-pink-50", iconBg: "bg-pink-500", ring: "ring-pink-100", blob: "bg-pink-200" },
    "sign-pdf": { color: "text-purple-600", bg: "bg-purple-100", iconBg: "bg-purple-600", ring: "ring-purple-200", blob: "bg-purple-300" },
    "edit-pdf": { color: "text-cyan-500", bg: "bg-cyan-50", iconBg: "bg-cyan-500", ring: "ring-cyan-100", blob: "bg-cyan-200" },
    "pdf-to-txt": { color: "text-orange-600", bg: "bg-orange-100", iconBg: "bg-orange-600", ring: "ring-orange-200", blob: "bg-orange-300" },
    "pdf-to-excel": { color: "text-green-500", bg: "bg-green-50", iconBg: "bg-green-500", ring: "ring-green-100", blob: "bg-green-200" },
    "ocr-pdf": { color: "text-indigo-500", bg: "bg-indigo-50", iconBg: "bg-indigo-500", ring: "ring-indigo-100", blob: "bg-indigo-200" }
  };
  return themes[slug] || themes["merge-pdf"];
};
const getIcon = (slug, className) => {
  const icons = {
    split: /* @__PURE__ */ jsx(Scissors, { className }),
    "merge-pdf": /* @__PURE__ */ jsx(Files, { className }),
    compress: /* @__PURE__ */ jsx(Minimize2, { className }),
    organize: /* @__PURE__ */ jsx(LayoutTemplate, { className }),
    "image-to-pdf": /* @__PURE__ */ jsx(Image, { className }),
    "pdf-to-word": /* @__PURE__ */ jsx(FileText, { className }),
    "word-to-pdf": /* @__PURE__ */ jsx(FileText, { className }),
    "pdf-to-image": /* @__PURE__ */ jsx(Image, { className }),
    "sign-pdf": /* @__PURE__ */ jsx(PenTool, { className }),
    "edit-pdf": /* @__PURE__ */ jsx(Settings2, { className }),
    "pdf-to-txt": /* @__PURE__ */ jsx(FileCode, { className }),
    "pdf-to-excel": /* @__PURE__ */ jsx(FileSpreadsheet, { className }),
    "ocr-pdf": /* @__PURE__ */ jsx(ScanLine, { className })
  };
  return icons[slug] || /* @__PURE__ */ jsx(CheckCircle, { className });
};
function HowToSection({ slug, lang }) {
  const toolData = howTo[slug];
  if (!toolData || !toolData[lang]) return null;
  const data = toolData[lang];
  const theme = getTheme(slug);
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container-custom max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-16 lg:gap-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 relative flex justify-center items-center", children: [
      /* @__PURE__ */ jsx("div", { className: `absolute w-80 h-80 ${theme.blob} rounded-full blur-3xl opacity-30` }),
      /* @__PURE__ */ jsx("div", { className: `absolute top-10 right-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-20` }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md h-96 flex items-center justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-8 left-0 right-12 bottom-16 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "h-8 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-red-400" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }),
            /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-400" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-32 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(UploadCloud, { className: "w-10 h-10 text-slate-300" }) }),
            /* @__PURE__ */ jsx("div", { className: "w-3/4 h-3 bg-slate-100 rounded-full mb-3" }),
            /* @__PURE__ */ jsx("div", { className: "w-1/2 h-3 bg-slate-100 rounded-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-16 right-4 w-56 h-72 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col items-center justify-center transform rotate-3 hover:rotate-6 hover:-translate-y-2 transition-all duration-500", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 -left-4 bg-red-500 text-white font-black text-sm px-4 py-1.5 rounded-md shadow-lg transform -rotate-6", children: "PDF" }),
          /* @__PURE__ */ jsx("div", { className: "w-32 h-2.5 bg-slate-100 rounded-full mb-4 mt-8" }),
          /* @__PURE__ */ jsx("div", { className: "w-40 h-2.5 bg-slate-100 rounded-full mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "w-36 h-2.5 bg-slate-100 rounded-full mb-8" }),
          /* @__PURE__ */ jsx("div", { className: `w-20 h-20 rounded-2xl ${theme.bg} ring-8 ${theme.ring} flex items-center justify-center shadow-inner`, children: getIcon(slug, `w-10 h-10 ${theme.color}`) })
        ] }),
        /* @__PURE__ */ jsx("svg", { className: `absolute -bottom-4 -left-4 w-12 h-12 ${theme.color} opacity-40`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01M12 4v.01M12 8v.01M12 16v.01M12 20v.01" }) }),
        /* @__PURE__ */ jsx("svg", { className: `absolute top-4 right-0 w-8 h-8 text-amber-400 opacity-60`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m12 3 2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight", children: data.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-500 mb-10 leading-relaxed", children: data.subtitle }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[19px] top-6 bottom-6 w-px border-l-2 border-dotted border-slate-300" }),
        data.steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 relative z-10", children: [
          /* @__PURE__ */ jsx("div", { className: `shrink-0 w-10 h-10 rounded-full ${theme.iconBg} text-white font-bold flex items-center justify-center shadow-md ring-4 ring-white`, children: index + 1 }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-[17px] leading-relaxed font-medium", children: step }) })
        ] }, index))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx("button", { className: `px-8 py-3.5 ${theme.iconBg} text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider`, children: data.title.includes("Nasıl") ? "Hemen Başla" : "Get Started Now" }) })
    ] })
  ] }) }) });
}

const useCases = {
    "pdf-to-image": {
        "tr": {
            "title": "Neden JPG'ye Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Hukuk Büroları İçin",
                    "content": "Dava dosyalarındaki PDF delilleri, sunumlarda veya UYAP sistemlerinde kullanmak üzere yüksek kaliteli görsellere dönüştürün.",
                    "icon": "Scale"
                },
                {
                    "title": "Öğrenciler İçin",
                    "content": "Ders notlarınızı ve sunum slaytlarınızı telefonda daha rahat görüntülemek için resim formatına çevirin.",
                    "icon": "GraduationCap"
                },
                {
                    "title": "Tasarımcılar İçin",
                    "content": "Müşteriden gelen PDF revizelerini Photoshop veya Canva'da kullanmak için JPG katmanlarına ayırın.",
                    "icon": "Palette"
                }
            ]
        },
        "en": {
            "title": "Why Convert to JPG?",
            "cards": [
                {
                    "title": "For Law Firms",
                    "content": "Convert PDF evidence in case files into high-quality images for use in presentations or legal systems.",
                    "icon": "Scale"
                },
                {
                    "title": "For Students",
                    "content": "Convert lecture notes and presentation slides to image format for easier viewing on your phone.",
                    "icon": "GraduationCap"
                },
                {
                    "title": "For Designers",
                    "content": "Separate PDF revisions from clients into JPG layers for use in Photoshop or Canva.",
                    "icon": "Palette"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në JPG?",
            "cards": [
                {
                    "title": "Për Firmat Ligjore",
                    "content": "Konvertoni dëshmitë PDF në skedarët e çështjeve në imazhe med cilësi të lartë për përdorim në prezantime ose sisteme ligjore.",
                    "icon": "Scale"
                },
                {
                    "title": "Për Studentët",
                    "content": "Konvertoni shënimet e leksioneve dhe sllajdet e prezantimit në format imazhi për shikim më të lehtë në telefonin tuaj.",
                    "icon": "GraduationCap"
                },
                {
                    "title": "Për Dizajnerët",
                    "content": "Ndani rishikimet PDF nga klientët në shtresa JPG për përdorim në Photoshop ose Canva.",
                    "icon": "Palette"
                }
            ]
        }
    },
    "merge-pdf": {
        "tr": {
            "title": "Neden PDF Birleştirmelisiniz?",
            "cards": [
                {
                    "title": "Kurumsal Raporlar",
                    "content": "Farklı departmanlardan gelen aylık raporları tek bir profesyonel PDF dosyasında birleştirin.",
                    "icon": "Briefcase"
                },
                {
                    "title": "E-Fatura Arşivleme",
                    "content": "Ay boyunca biriken faturalarınızı muhasebeye göndermeden önce tek dosyada toplayın.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Akademik Çalışmalar",
                    "content": "Tez veya ödev teslimlerinde bölüm bölüm hazırladığınız çalışmaları tek bir dosyada sunun.",
                    "icon": "BookOpen"
                }
            ]
        },
        "en": {
            "title": "Why Merge PDFs?",
            "cards": [
                {
                    "title": "Corporate Reports",
                    "content": "Combine monthly reports from different departments into a single professional PDF file.",
                    "icon": "Briefcase"
                },
                {
                    "title": "E-Invoice Archiving",
                    "content": "Collect your accumulated invoices in a single file before sending them to accounting.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Academic Works",
                    "content": "Present your thesis or assignment work prepared in sections in a single file.",
                    "icon": "BookOpen"
                }
            ]
        },
        "sq": {
            "title": "Pse të Bashkohen PDF-të?",
            "cards": [
                {
                    "title": "Raporte Korporative",
                    "content": "Kombinoni raportet mujore nga departamente të ndryshme në një skedar të vetëm profesional PDF.",
                    "icon": "Briefcase"
                },
                {
                    "title": "Arkivimi i E-Faturave",
                    "content": "Mblidhni faturat tuaja të grumbulluara në një skedar të vetëm përpara se t'i dërgoni në kontabilitet.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Punime Akademike",
                    "content": "Prezantoni punën tuaj të tezës ose detyrës të përgatitur në seksione në një skedar të vetëm.",
                    "icon": "BookOpen"
                }
            ]
        }
    },
    "compress": {
        "tr": {
            "title": "Neden PDF Sıkıştırmalısınız?",
            "cards": [
                {
                    "title": "E-posta Gönderimi",
                    "content": "Büyük PDF dosyalarını e-posta ek sınırlarına (genellikle 25MB) takılmadan paylaşın.",
                    "icon": "Briefcase"
                },
                {
                    "title": "Depolama Tasarrufu",
                    "content": "Bulut depolama alanınızda veya bilgisayarınızda yer açmak için dosya boyutlarını küçültün.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Hızlı Yükleme",
                    "content": "Web sitelerine veya devlet portallarına belge yüklerken zamandan tasarruf edin.",
                    "icon": "Zap"
                }
            ]
        },
        "en": {
            "title": "Why Compress PDFs?",
            "cards": [
                {
                    "title": "Email Attachments",
                    "content": "Share large PDF files without hitting email attachment size limits (usually 25MB).",
                    "icon": "Briefcase"
                },
                {
                    "title": "Save Space",
                    "content": "Reduce file sizes to save space on your cloud storage or local device.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Faster Uploads",
                    "content": "Save time when uploading documents to websites or government portals.",
                    "icon": "Zap"
                }
            ]
        },
        "sq": {
            "title": "Pse të Kompresohen PDF-të?",
            "cards": [
                {
                    "title": "Shtojcat e Email-it",
                    "content": "Ndani skedarë të mëdhenj PDF pa goditur kufijtë e madhësisë së shtojcave të email-it (zakonisht 25MB).",
                    "icon": "Briefcase"
                },
                {
                    "title": "Kurseni Hapësirë",
                    "content": "Zvogëloni madhësitë e skedarëve për to kursyr hapësirë në hapsirën tuaj cloud ose pajisjen lokale.",
                    "icon": "FileDigit"
                },
                {
                    "title": "Ngarkime më të Shpejta",
                    "content": "Kurseni kohë kur ngarkoni dokumente në uebfaqe ose portale qeveritare.",
                    "icon": "Zap"
                }
            ]
        }
    },
    "split": {
        "tr": {
            "title": "Neden PDF Bölmelisiniz?",
            "cards": [
                {
                    "title": "Sayfa Ayıklama",
                    "content": "Uzun bir rapordan sadece ilgili sayfaları çıkararak daha küçük, paylaşılabilir belgeler oluşturun.",
                    "icon": "Scissors"
                },
                {
                    "title": "Bölümlere Ayırma",
                    "content": "Büyük kitapları veya dosyaları yönetilebilir bölümlere (Bölüm 1, Bölüm 2 gibi) ayırın.",
                    "icon": "Layout"
                },
                {
                    "title": "Gizlilik",
                    "content": "Belgenin geri kalanını güvenle paylaşmak için hassas bilgiler içeren sayfaları ayırın.",
                    "icon": "ShieldCheck"
                }
            ]
        },
        "en": {
            "title": "Why Split PDFs?",
            "cards": [
                {
                    "title": "Page Extraction",
                    "content": "Create smaller, sharable documents by extracting only the relevant pages from a long report.",
                    "icon": "Scissors"
                },
                {
                    "title": "Chapter Division",
                    "content": "Divide large books or files into manageable sections (Chapter 1, Chapter 2).",
                    "icon": "Layout"
                },
                {
                    "title": "Privacy",
                    "content": "Separate pages containing sensitive information to safely share the rest of the document.",
                    "icon": "ShieldCheck"
                }
            ]
        },
        "sq": {
            "title": "Pse të Ndahën PDF-të?",
            "cards": [
                {
                    "title": "Nxjerrja e Faqeve",
                    "content": "Krijoni dokumente më të vogla të ndashme duke nxjerrë vetëm faqet përkatëse nga një raport i gjatë.",
                    "icon": "Scissors"
                },
                {
                    "title": "Ndarja në Kapituj",
                    "content": "Ndani librat ose dokumentet e mëdha në seksione të menaxhueshme (Kapitulli 1, Kapitulli 2).",
                    "icon": "Layout"
                },
                {
                    "title": "Privatësia",
                    "content": "Ndani faqet që përmbajnë informacione sensitive për të ndarë në mënyrë të sigurt pjesën e mbetur dhe dokumentit.",
                    "icon": "ShieldCheck"
                }
            ]
        }
    },
    "organize": {
        "tr": {
            "title": "Neden PDF Düzenlemelisiniz?",
            "cards": [
                {
                    "title": "Taramaları Düzelt",
                    "content": "Yanlış sırada taranan belgeleri yeniden sıralayın veya baş aşağı duran sayfaları döndürün.",
                    "icon": "RefreshCw"
                },
                {
                    "title": "Kişisel Portfolyo",
                    "content": "Farklı projeleri birleştirdikten sonra en iyi çalışmanızı en başa taşıyın.",
                    "icon": "Star"
                },
                {
                    "title": "Temizlik",
                    "content": "Boş, gereksiz veya hatalı sayfaları silerek profesyonel bir görünüm sağlayın.",
                    "icon": "Trash2"
                }
            ]
        },
        "en": {
            "title": "Why Organize PDFs?",
            "cards": [
                {
                    "title": "Fix Scans",
                    "content": "Reorder documents scanned in the wrong order or rotate pages that are upside down.",
                    "icon": "RefreshCw"
                },
                {
                    "title": "Personal Portfolio",
                    "content": "Move your best work to the beginning after combining different projects into one file.",
                    "icon": "Star"
                },
                {
                    "title": "Cleanup",
                    "content": "Remove blank, unnecessary, or incorrect pages to ensure a professional look.",
                    "icon": "Trash2"
                }
            ]
        },
        "sq": {
            "title": "Pse të Organizohen PDF-të?",
            "cards": [
                {
                    "title": "Rregullo Skanimet",
                    "content": "Rirenditni dokumentet e skanuara në radhën e gabuar ose rrotulloni faqet që are përmbys.",
                    "icon": "RefreshCw"
                },
                {
                    "title": "Portofoli Personal",
                    "content": "Lëvizni punën tuaj më të mirë në fillim pasi të keni kombinuar projekte të ndryshme në një skedar.",
                    "icon": "Star"
                },
                {
                    "title": "Pastrimi",
                    "content": "Hiqni faqet bosh, të panevojshme ose të gabuara për të siguruar një pamje profesionale.",
                    "icon": "Trash2"
                }
            ]
        }
    },
    "image-to-pdf": {
        "tr": {
            "title": "Neden PDF'e Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Fiş ve Faturalar",
                    "content": "Telefonla çektiğiniz fişlerin fotoğraflarını muhasebe için tek bir PDF dosyasında toplayın.",
                    "icon": "Receipt"
                },
                {
                    "title": "Dijital Arşiv",
                    "content": "Eski fotoğraf albümlerinizi veya belgelerinizi dijitalleştirip düzenli bir PDF kitabı yapın.",
                    "icon": "Archive"
                },
                {
                    "title": "Başvuru Belgeleri",
                    "content": "Kimlik, diploma gibi belgelerin fotoğraflarını resmi başvurular için PDF formatına getirin.",
                    "icon": "FileText"
                }
            ]
        },
        "en": {
            "title": "Why Convert to PDF?",
            "cards": [
                {
                    "title": "Receipts & Invoices",
                    "content": "Compile photos of receipts taken with your phone into a single PDF for accounting.",
                    "icon": "Receipt"
                },
                {
                    "title": "Digital Archive",
                    "content": "Digitize old photo albums or documents into a neat, organized PDF book.",
                    "icon": "Archive"
                },
                {
                    "title": "Application Docs",
                    "content": "Convert photos of ID cards or diplomas into PDF format for official applications.",
                    "icon": "FileText"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në PDF?",
            "cards": [
                {
                    "title": "Faturat & Kuponat",
                    "content": "Mblidhni fotot e faturave të bëra med telefonin tuaj në një PDF të vetëm për kontabilitet.",
                    "icon": "Receipt"
                },
                {
                    "title": "Arkivi Digjital",
                    "content": "Digjitalizoni albumet e vjetra të fotove ose dokumentet në një libër PDF të pastër dhe të organizuar.",
                    "icon": "Archive"
                },
                {
                    "title": "Dokumentet e Aplikimit",
                    "content": "Konvertoni fotot e kartave të identitetit ose diplomave në formatin PDF për aplikime zyrtare.",
                    "icon": "FileText"
                }
            ]
        }
    },
    "pdf-to-word": {
        "tr": {
            "title": "Neden Word'e Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Metni Düzenle",
                    "content": "Statik PDF belgelerini düzenlenebilir Word formatına çevirerek üzerlerinde değişiklik yapın.",
                    "icon": "FileEdit"
                },
                {
                    "title": "Veri Kurtarma",
                    "content": "Orijinal dosyasını kaybettiğiniz belgelerin içeriğini PDF üzerinden geri kazanın.",
                    "icon": "History"
                },
                {
                    "title": "Çeviri Hazırlığı",
                    "content": "PDF belgelerini çeviri araçlarında veya manuel olarak çevirmek için metin tabanlı formata alın.",
                    "icon": "Languages"
                }
            ]
        },
        "en": {
            "title": "Why Convert to Word?",
            "cards": [
                {
                    "title": "Edit Content",
                    "content": "Make changes to static PDF documents by converting them to editable Word format.",
                    "icon": "FileEdit"
                },
                {
                    "title": "Data Recovery",
                    "content": "Recover content from documents where you've lost the original source file via PDF.",
                    "icon": "History"
                },
                {
                    "title": "Translation Prep",
                    "content": "Convert PDFs to text-based formats for translation tools or manual translation.",
                    "icon": "Languages"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në Word?",
            "cards": [
                {
                    "title": "Redakto Përmbajtjen",
                    "content": "Bëni ndryshime në dokumentet statike PDF duke i konvertuar ato në formatin Word të redaktueshëm.",
                    "icon": "FileEdit"
                },
                {
                    "title": "Rikthimi i të Dhënave",
                    "content": "Riktheni përmbajtjen nga dokumentet ku keni humbur skedarin origjinal burimor përmes PDF-së.",
                    "icon": "History"
                },
                {
                    "title": "Përgatitja për Përkthim",
                    "content": "Konvertoni PDF-të në formate të bazuara në tekst për mjetet e përkthimit ose përkthimin manual.",
                    "icon": "Languages"
                }
            ]
        }
    },
    "word-to-pdf": {
        "tr": {
            "title": "Neden PDF'e Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Format Koruma",
                    "content": "Belgenizin yazı tiplerinin ve düzeninin her cihazda aynı görünmesini garanti altına alın.",
                    "icon": "FileCheck"
                },
                {
                    "title": "Profesyonel Sunum",
                    "content": "CV, teklif veya resmi yazılarınızı değiştirilemez, profesyonel bir formatta paylaşın.",
                    "icon": "Award"
                },
                {
                    "title": "Baskı Hazırlığı",
                    "content": "Matbaaya veya çıktıya göndermeden önce belgenizi evrensel baskı standardına çevirin.",
                    "icon": "Printer"
                }
            ]
        },
        "en": {
            "title": "Why Convert to PDF?",
            "cards": [
                {
                    "title": "Preserve Formatting",
                    "content": "Ensure your document's fonts and layout look exactly the same on any device.",
                    "icon": "FileCheck"
                },
                {
                    "title": "Professional Presentation",
                    "content": "Share resumes, proposals, or official letters in an immutable, professional format.",
                    "icon": "Award"
                },
                {
                    "title": "Print Ready",
                    "content": "Convert your document to the universal print standard before sending to press or printer.",
                    "icon": "Printer"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në PDF?",
            "cards": [
                {
                    "title": "Ruaj Formatimin",
                    "content": "Sigurohuni që fontet dhe faqosja e dokumentit tuaj të duken saktësisht njësoj në çdo pajisje.",
                    "icon": "FileCheck"
                },
                {
                    "title": "Prezantim Profesional",
                    "content": "Ndani CV-të, propozimet ose letrat zyrtare në një format të pandryshueshëm dhe profesional.",
                    "icon": "Award"
                },
                {
                    "title": "Gati për Printim",
                    "content": "Konvertoni dokumentin tuaj në standardin universal të printimit përpara se ta dërgoni në shtyp ose printer.",
                    "icon": "Printer"
                }
            ]
        }
    },
    "sign-pdf": {
        "tr": {
            "title": "Neden PDF İmzalamalısınız?",
            "cards": [
                {
                    "title": "Uzaktan Çalışma",
                    "content": "Ofise gitmeden sözleşmeleri ve tutanakları yasal olarak imzalayın.",
                    "icon": "Globe"
                },
                {
                    "title": "Kağıtsız Ofis",
                    "content": "Yazdırma, imzalama ve geri tarama zahmetinden kurtularak zaman kazanın.",
                    "icon": "Leaf"
                },
                {
                    "title": "Onay Süreçleri",
                    "content": "Şirket içi onay gerektiren belgeleri dijital imzalarla hızlıca dolaşıma sokun.",
                    "icon": "UserCheck"
                }
            ]
        },
        "en": {
            "title": "Why Sign PDFs?",
            "cards": [
                {
                    "title": "Remote Work",
                    "content": "Sign contracts and minutes legally without going to the office.",
                    "icon": "Globe"
                },
                {
                    "title": "Paperless",
                    "content": "Save time by avoiding printing, signing, and manual scanning of documents.",
                    "icon": "Leaf"
                },
                {
                    "title": "Approval Flows",
                    "content": "Quickly circulate documents requiring internal approval with digital signatures.",
                    "icon": "UserCheck"
                }
            ]
        },
        "sq": {
            "title": "Pse të Nënshkruhen PDF-të?",
            "cards": [
                {
                    "title": "Puna në Distancë",
                    "content": "Nënshkruani kontratat dhe procesverbalet në mënyrë ligjore pa shkuar në zyrtar.",
                    "icon": "Globe"
                },
                {
                    "title": "Pa Letër",
                    "content": "Kurseni kohë duke shmangur printimin, nënshkrimin dhe skanimin manual të dokumenteve.",
                    "icon": "Leaf"
                },
                {
                    "title": "Rrjedhat e Miratimit",
                    "content": "Qarkulloni shpejt dokumentet që kërkojnë miratim të brendshëm med nënshkrime digjitale.",
                    "icon": "UserCheck"
                }
            ]
        }
    },
    "edit-pdf": {
        "tr": {
            "title": "Neden PDF Düzenlemelisiniz?",
            "cards": [
                {
                    "title": "Form Doldurma",
                    "content": "Yazdırıp taramaya gerek kalmadan dijital formları doğrudan bilgisayarınızda doldurun.",
                    "icon": "CheckSquare"
                },
                {
                    "title": "Not Ekleme",
                    "content": "Ders notlarına veya taslaklara geri bildirim için yorumlar, imzalar ve şekiller ekleyin.",
                    "icon": "MessageSquare"
                },
                {
                    "title": "Hızlı Düzeltme",
                    "content": "Bir PDF'deki küçük hataları kapatın veya anında güncellemek için yeni metin ekleyin.",
                    "icon": "Zap"
                }
            ]
        },
        "en": {
            "title": "Why Edit PDFs?",
            "cards": [
                {
                    "title": "Fill Forms",
                    "content": "Fill out digital forms directly on your computer without printing and scanning.",
                    "icon": "CheckSquare"
                },
                {
                    "title": "Annotate",
                    "content": "Add comments, signatures, and shapes to lecture notes or drafts for feedback.",
                    "icon": "MessageSquare"
                },
                {
                    "title": "Quick Fixes",
                    "content": "Cover up small errors in a PDF or add new text to update it immediately.",
                    "icon": "Zap"
                }
            ]
        },
        "sq": {
            "title": "Pse të Redaktohen PDF-të?",
            "cards": [
                {
                    "title": "Plotëso Format",
                    "content": "Plotësoni format digjitale direkt në kompjuterin tuaj pa i printuar dhe skanuar.",
                    "icon": "CheckSquare"
                },
                {
                    "title": "Shënime (Annotate)",
                    "content": "Shtoni komente, nënshkrime dhe forma në shënimet e leksioneve ose skicat për feedback.",
                    "icon": "MessageSquare"
                },
                {
                    "title": "Rregullime të Shpejta",
                    "content": "Mbuloni gabimet e vogla në një PDF ose shtoni tekst di ri për ta përditësuar atë menjëherë.",
                    "icon": "Zap"
                }
            ]
        }
    },
    "pdf-to-txt": {
        "tr": {
            "title": "Neden TXT'ye Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Saf Metin",
                    "content": "Biçimlendirmeden arınmış, sadece içeriğe odaklanan temiz metin dosyaları elde edin.",
                    "icon": "File"
                },
                {
                    "title": "Kodlama ve Veri",
                    "content": "PDF içeriğini programlama projelerinde veya veri madenciliğinde kullanmak için ayıklayın.",
                    "icon": "Code"
                },
                {
                    "title": "Eski Cihazlar",
                    "content": "PDF görüntüleyicisi olmayan eski cihazlarda veya terminallerde içeriği okuyun.",
                    "icon": "Monitor"
                }
            ]
        },
        "en": {
            "title": "Why Convert to TXT?",
            "cards": [
                {
                    "title": "Plain Text",
                    "content": "Get clean text files stripped of formatting, focusing purely on content.",
                    "icon": "File"
                },
                {
                    "title": "Coding & Data",
                    "content": "Extract PDF content for use in programming projects or data mining.",
                    "icon": "Code"
                },
                {
                    "title": "Legacy Devices",
                    "content": "Read content on older devices or terminals that lack PDF viewers.",
                    "icon": "Monitor"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në TXT?",
            "cards": [
                {
                    "title": "Tekst i Thjeshtë",
                    "content": "Merrni skedarë teksti të pastër të zhveshur nga formatimi, duke u fokusuar pastërtisht në përmbajtje.",
                    "icon": "File"
                },
                {
                    "title": "Kodimi & Të Dhënat",
                    "content": "Nxirrni përmbajtjen e PDF-së për përdorim në projekte programimi ose kërkim të dhënash.",
                    "icon": "Code"
                },
                {
                    "title": "Pajisjet e Vjetra",
                    "content": "Lexoni përmbajtjen në pajisje ose terminale më të vjetra që nuk kanë shikues PDF.",
                    "icon": "Monitor"
                }
            ]
        }
    },
    "pdf-to-excel": {
        "tr": {
            "title": "Neden Excel'e Dönüştürmelisiniz?",
            "cards": [
                {
                    "title": "Finansal Analiz",
                    "content": "Banka ekstrelerinden veya faturalardaki tabloları analiz için Excel'e aktarın.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Veri İşleme",
                    "content": "PDF raporlarındaki statik verileri, formül ve grafiklerle çalışabileceğiniz canlı veriye çevirin.",
                    "icon": "Database"
                },
                {
                    "title": "Stok Listeleri",
                    "content": "Ürün kataloglarındaki veya envanter listelerindeki verileri kolayca düzenleyin.",
                    "icon": "ClipboardList"
                }
            ]
        },
        "en": {
            "title": "Why Convert to Excel?",
            "cards": [
                {
                    "title": "Financial Analysis",
                    "content": "Export tables from bank statements or invoices to Excel for analysis.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Data Processing",
                    "content": "Turn static data from PDF reports into live data you can work with using formulas.",
                    "icon": "Database"
                },
                {
                    "title": "Inventory Lists",
                    "content": "Easily edit and manage data from product catalogs or inventory lists.",
                    "icon": "ClipboardList"
                }
            ]
        },
        "sq": {
            "title": "Pse të Konvertohet në Excel?",
            "cards": [
                {
                    "title": "Analiza Financiare",
                    "content": "Eksportoni tabelat nga deklaratat bankare ose faturat në Excel për analizë.",
                    "icon": "TrendingUp"
                },
                {
                    "title": "Përpunimi i të Dhënave",
                    "content": "Kthejeni të dhënat statike nga raportet PDF në të dhëna të gjalla med të cilat mund të punoni duke përdorur formula.",
                    "icon": "Database"
                },
                {
                    "title": "Listat e Inventarit",
                    "content": "Redaktoni dhe menaxhoni lehtësisht të dhënat nga katalogët e produkteve ose listat e inventarit.",
                    "icon": "ClipboardList"
                }
            ]
        }
    },
    "ocr-pdf": {
        "tr": {
            "title": "Neden OCR Kullanmalısınız?",
            "cards": [
                {
                    "title": "Metin Arama",
                    "content": "Taranmış belgelerinizi (resim formatında) içinde kelime aranabilir PDF'lere dönüştürün.",
                    "icon": "Search"
                },
                {
                    "title": "Dijitalleştirme",
                    "content": "Kağıt arşivlerinizi tamamen dijital, kopyalanabilir ve düzenlenebilir hale getirin.",
                    "icon": "Monitor"
                },
                {
                    "title": "Erişilebilirlik",
                    "content": "Görsel belgeleri metne çevirerek ekran okuyucuların içeriği algılamasını sağlayın.",
                    "icon": "Accessibility"
                }
            ]
        },
        "en": {
            "title": "Why Use OCR?",
            "cards": [
                {
                    "title": "Text Search",
                    "content": "Convert scanned documents (images) into searchable PDFs.",
                    "icon": "Search"
                },
                {
                    "title": "Digitization",
                    "content": "Make paper archives fully digital, copiable, and editable.",
                    "icon": "Monitor"
                },
                {
                    "title": "Accessibility",
                    "content": "Convert visual documents to text so screen readers can process the content.",
                    "icon": "Accessibility"
                }
            ]
        },
        "sq": {
            "title": "Pse të Përdoret OCR?",
            "cards": [
                {
                    "title": "Kërkimi i Tekstit",
                    "content": "Konvertoni dokumentet e skanuara (imazhet) në PDF ku mund të kërkohet tekst.",
                    "icon": "Search"
                },
                {
                    "title": "Digjitalizimi",
                    "content": "Bëni arkivat e letrës plotësisht digjitalë, të kopjueshëm dhe të redaktueshëm.",
                    "icon": "Monitor"
                },
                {
                    "title": "Aksesueshmëria",
                    "content": "Konvertoni dokumentet vizuale në tekst në mënyrë që lexuesit e ekranit të mund të përpunojnë përmbajtjen.",
                    "icon": "Accessibility"
                }
            ]
        }
    }
};

const IconSVGs = {
  Scale: '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22V8"/><path d="m3 3 5 5"/><path d="m21 3-5 5"/><path d="M4.5 16.5c-.76.76-.31 2.2.7 2.82L12 24l6.8-4.68c1.01-.62 1.46-2.06.7-2.82L12 9l-7.5 7.5z"/>',
  GraduationCap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>',
  Palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  Briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  FileDigit: '<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h2v6"/><rect width="4" height="6" x="2" y="12" rx="1"/>',
  BookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  CheckCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
};
const ColorMap = [
  { bg: "bg-indigo-100", text: "text-indigo-600", ring: "ring-indigo-50", blob: "bg-indigo-200", border: "hover:border-indigo-200" },
  { bg: "bg-rose-100", text: "text-rose-600", ring: "ring-rose-50", blob: "bg-rose-200", border: "hover:border-rose-200" },
  { bg: "bg-amber-100", text: "text-amber-600", ring: "ring-amber-50", blob: "bg-amber-200", border: "hover:border-amber-200" }
];
function UseCaseSection({ slug, lang }) {
  const toolData = useCases[slug];
  if (!toolData || !toolData[lang]) return null;
  const data = toolData[lang];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-t border-slate-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-40 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl opacity-60" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl opacity-60" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight", children: data.title }),
        /* @__PURE__ */ jsx("div", { className: "w-24 h-1.5 bg-brand-600 rounded-full mx-auto mb-8 opacity-80" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10", children: data.cards.map((card, index) => {
        const colors = ColorMap[index % ColorMap.length];
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `group relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 ${colors.border} hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `absolute -top-10 -right-10 w-40 h-40 ${colors.blob} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500` }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: `w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-8 ring-8 ${colors.ring} group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: `w-8 h-8 ${colors.text}`,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    viewBox: "0 0 24 24",
                    dangerouslySetInnerHTML: { __html: IconSVGs[card.icon] || IconSVGs.CheckCircle }
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 leading-relaxed text-[17px]", children: card.content })
              ] })
            ]
          },
          index
        );
      }) })
    ] })
  ] });
}

export { HowToSection as H, UseCaseSection as U };
