const fs = require('fs');

const url = 'https://dywxmadfvkeunyvqxvbm.supabase.co';
const key = 'sb_publishable_snxiWLd5tm5yJ4TOZwEppQ_90Aow-tY';

// 40 SEO-rich, comprehensive articles covering high-volume searches
const posts = [
    // -------------------------------------------------------------
    // TURKISH (tr) - 10 Posts
    // -------------------------------------------------------------
    {
        lang: 'tr',
        slug: 'pdf-sikistirma-nasil-yapilir-ucretsiz-rehber',
        title: 'PDF Sıkıştırma Nasıl Yapılır? (100% Ücretsiz ve Güvenli Rehber)',
        description: 'Büyük boyutlu PDF dosyalarını kaliteden ödün vermeden nasıl küçültebileceğinizi öğrenin. e-Devlet, ÖSYM ve e-posta için ideal boyut ayarları.',
        category: 'Rehberler',
        tags: ['pdf sıkıştırma', 'dosya boyutu küçültme', 'ücretsiz pdf'],
        content: `## PDF Dosya Boyutunu Küçültmek Neden Gereklidir?

Günlük hayatta iş başvuruları, vize evrakları, üniversite kayıtları veya resmi kurum sistemlerine (e-Devlet, ÖSYM, UYAP vb.) belge yüklerken en sık karşılaşılan hata **"Dosya boyutu çok büyük"** uyarısıdır. Yüksek çözünürlüklü taranmış belgeler genellikle 10-20 MB yer kaplar, ancak birçok sistem 1 MB veya 2 MB sınırı koyar.

### PDF Sıkıştırmanın Avantajları
1. **Hızlı Gönderim:** E-postalarda ek dosya sınırı (genellikle 25 MB) aşılmaz.
2. **Depolama Tasarrufu:** Telefonunuzda ve bulut depolama alanınızda daha az yer kaplar.
3. **Sorunsuz Yükleme:** Resmi başvuru formları belgenizi anında kabul eder.

---

## KeepPDF ile 3 Adımda PDF Boyutu Nasıl Küçültülür?

KeepPDF, diğer platformların aksine dosyalarınızı uzak sunuculara göndermez. Sıkıştırma işlemi doğrudan web tarayıcınızda gerçekleşir.

1. **Belgenizi Yükleyin:** [PDF Sıkıştır](/tr/compress) aracına gidin ve dosyanızı sürükleyin.
2. **Sıkıştırma Seviyesini Belirleyin:** Belgenizin metin ve görsel dengesine göre optimize edilmiş sıkıştırma seviyesini seçin.
3. **İndirin:** Birkaç saniye içinde boyutu küçültülmüş belgenizi cihazınıza kaydedin.

### Belge Güvenliği Hakkında
Pek çok kullanıcı "Belgelerim internette saklanıyor mu?" endişesi taşır. KeepPDF'te belgeleriniz hiçbir sunucuya yüklenmez, üçüncü taraflarla paylaşılmaz ve tarayıcınız kapandığında silinir.`
    },
    {
        lang: 'tr',
        slug: 'pdf-birlestirme-coklu-belgeleri-tek-dosya-yapma',
        title: 'Birden Fazla PDF Nasıl Birleştirilir? Tek Dosya Yapma Yöntemi',
        description: 'Ayrı ayrı taranmış sayfaları veya belgeleri tek bir düzenli PDF dosyasında kolayca birleştirin.',
        category: 'Rehberler',
        tags: ['pdf birleştir', 'sayfa birleştirme', 'pdf düzenleme'],
        content: `## Neden PDF'leri Birleştirmeye İhtiyaç Duyarız?

Farklı zamanlarda taranmış evraklar, faturalar veya proje dokümanları çoğu zaman parça parça kaydedilir. Bu dosyaları müşterilere veya resmi kurumlara gönderirken onlarca ayrı ek göndermek profesyonel bir izlenim yaratmaz.

### PDF Birleştirmenin Başlıca Faydaları
- **Düzenli Dokümantasyon:** Tüm sayfalar tek bir sıra halinde okunabilir.
- **Kolay Paylaşım:** Tek bir bağlantı veya dosya göndermek yeterlidir.
- **Baskı Kolaylığı:** Yazıcıya tek seferde tüm evrak gönderilebilir.

---

## PDF Dosyaları Nasıl Sıralanır ve Birleştirilir?

KeepPDF'in [PDF Birleştir](/tr/merge-pdf) aracı ile sayfaların sırasını dilediğiniz gibi kontrol edebilirsiniz:
1. Birleştirmek istediğiniz tüm PDF dosyalarını seçin.
2. Önizleme küçük resimlerini sürükleyip istediğiniz sıraya dizin.
3. "PDF Birleştir" butonuna basarak tek dosyanızı anında indirin.

İşlem tamamen sınırsızdır ve üyelik gerektirmez.`
    },
    {
        lang: 'tr',
        slug: 'pdf-word-donusturme-format-bozulmadan',
        title: 'PDF\'i Word\'e Dönüştürme: Format ve Yazı Tipleri Bozulmadan',
        description: 'PDF belgelerinizi düzenlenebilir Word (DOCX) belgelerine dönüştürün. Tablolar, paragraflar ve fontlar korunur.',
        category: 'Dönüştürücüler',
        tags: ['pdf word dönüştürme', 'pdf to docx', 'düzenlenebilir pdf'],
        content: `## PDF Metinlerini Düzenlemek Neden Zordur?

PDF formatı, belgenin her cihazda aynı görünmesi amacıyla tasarlanmıştır. Bu nedenle doğrudan Word gibi bir kelime işlemcide düzenlemek bazen karmaşık olabilir.

### Formatı Korumak İçin İpuçları
- Yazı tiplerinin kaymaması için profesyonel OCR ve metin çıkarma algoritmaları gereklidir.
- Tabloların satır ve sütun yapısının korunması büyük önem taşır.

KeepPDF'in [PDF to Word](/tr/pdf-to-word) aracı sayesinde karmaşık yazılımlar indirmeden veya ücretli abonelik başlatmadan PDF'lerinizi dakikalar içinde DOCX formatına çevirebilirsiniz.`
    },
    {
        lang: 'tr',
        slug: 'pdf-sayfalarini-ayirma-ve-bolme-rehberi',
        title: 'PDF Sayfalarını Ayırma: İstenmeyen Sayfaları Çıkarma ve Bölme',
        description: 'Büyük bir PDF dosyasından yalnızca ihtiyacınız olan sayfaları nasıl alabileceğinizi ve tek sayfalık parçalara nasıl bölebileceğinizi öğrenin.',
        category: 'Rehberler',
        tags: ['pdf böl', 'sayfa ayırma', 'pdf split'],
        content: `## Yalnızca İhtiyacınız Olan Sayfayı Alın

Bazen 50 sayfalık bir kitap veya sözleşme içerisinden sadece 2 sayfayı göndermeniz gerekir. Belgenin tamamını paylaşmak hem güvenlik açısından risklidir hem de dosya boyutunu gereksiz yere artırır.

### Sayfa Ayırma Seçenekleri
- **Aralık Seçimi:** Örneğin 5 ile 10 arasındaki sayfaları ayrı bir dosya yapma.
- **Tekil Sayfalar:** Yalnızca 1. ve 7. sayfayı çıkarma.
- **Tümünü Bölme:** Her sayfayı bağımsız bir PDF yapma.

[PDF Böl](/tr/split) aracımızla görsel olarak sayfaları seçip saniyeler içinde yeni dosyanızı alabilirsiniz.`
    },
    {
        lang: 'tr',
        slug: 'osym-ve-e-devlet-icin-pdf-kucultme',
        title: 'ÖSYM ve e-Devlet Başvuruları İçin PDF Boyutu Küçültme (1 MB Altı)',
        description: 'Kamu kurumları, KPSS, YKS ve vize başvurularında istenen 1 MB ve altı PDF yükleme gereksinimlerini karşılama yöntemleri.',
        category: 'İpuçları',
        tags: ['ösym pdf', 'e-devlet pdf küçültme', '1mb altı pdf'],
        content: `## Kamu Portallarındaki Boyut Engeli

ÖSYM Aday İşlemleri Sistemi (AİS), e-Devlet kapısı ve konsolosluk vize başvuru portalları sunucu yükünü hafifletmek için genellikle dosya başına **1 MB veya 2 MB** sınırı uygular.

### Hızlı Çözüm:
1. Taranmış belgenizi KeepPDF Sıkıştırma aracına yükleyin.
2. Otomatik optimizasyon belgenizdeki metin netliğini korurken arka plan piksellerini sıkıştırır.
3. 5 MB'lık dosyanız genellikle 300-500 KB seviyesine iner ve başvuru sistemi tarafından anında onaylanır.`
    },
    {
        lang: 'tr',
        slug: 'word-belgesini-pdf-yapma-en-kolay-yol',
        title: 'Word Belgesi PDF\'e Nasıl Çevrilir? (Ücretsiz & Hızlı)',
        description: 'Hazırladığınız Word dosyalarını herkesin açabileceği profesyonel PDF belgelerine dönüştürün.',
        category: 'Dönüştürücüler',
        tags: ['word to pdf', 'word pdf yapma', 'docx to pdf'],
        content: `## Neden Word Yerine PDF Göndermelisiniz?

Bir CV (özgeçmiş), teklif mektubu veya tez teslim ederken DOCX formatında göndermek risklidir; çünkü karşı tarafın kullandığı Word sürümü veya yazı tipi farklıysa sayfa düzeni tamamen kayabilir.

PDF formatı belgenizi dondurur ve hangi cihazda açılırsa açılsın tam olarak sizin tasarladığınız şekilde görünmesini sağlar. [Word to PDF](/tr/word-to-pdf) aracımız ile anında dönüştürün.`
    },
    {
        lang: 'tr',
        slug: 'online-pdf-araclari-guvenli-mi-gizlilik-rehberi',
        title: 'Çevrimiçi PDF Araçları Güvenli mi? Veri Gizliliği Rehberi',
        description: 'İnternetteki ücretsiz PDF araçlarını kullanırken dikkat edilmesi gerekenler ve tarayıcı tabanlı güvenli işlemenin önemi.',
        category: 'Güvenlik',
        tags: ['pdf güvenlik', 'veri gizliliği', 'güvenli pdf'],
        content: `## İnternetteki PDF Araçlarına Güvenebilir misiniz?

Pek çok popüler PDF dönüştürücü, yüklediğiniz dosyaları kendi bulut sunucularına aktarır ve işlem bittikten sonra belirli bir süre saklar. Eğer belgenizde T.C. kimlik numarası, banka dekontu veya şirket sırları varsa bu durum ciddi bir güvenlik açığı oluşturabilir.

### KeepPDF Güvenlik Mimarisi:
KeepPDF modern WebAssembly ve HTML5 teknolojileri sayesinde dosyalarınızı sunucuya göndermeden doğrudan kendi tarayıcınızın belleğinde işler. Bu sayede sıfır veri sızıntısı riski ile %100 gizlilik sağlanır.`
    },
    {
        lang: 'tr',
        slug: 'resimleri-pdf-yapma-jpg-png-to-pdf',
        title: 'Fotoğraf ve Resimleri PDF Yapma (JPG, PNG to PDF)',
        description: 'Telefon veya bilgisayardaki resimlerinizi tek veya çok sayfalı bir PDF belgesi haline getirin.',
        category: 'Rehberler',
        tags: ['jpg to pdf', 'resim pdf yapma', 'png pdf'],
        content: `## Fotoğrafları Belgeye Dönüştürün

Özellikle telefonla çekilmiş kimlik fotokopileri, sözleşmeler ve fişler genellikle JPG veya PNG formatındadır. Bu fotoğrafları tek tek göndermek yerine düzenli bir PDF albümü veya resmi belge haline getirmek çok daha pratiktir.

[Resimden PDF'e](/tr/image-to-pdf) aracımızla birden fazla resmi seçip tek tıkla sıralı bir PDF oluşturabilirsiniz.`
    },
    {
        lang: 'tr',
        slug: 'pdf-sayfa-siralama-ve-duzenleme',
        title: 'PDF Sayfa Sıralaması Nasıl Değiştirilir?',
        description: 'Ters taranmış veya yanlış sırada olan PDF sayfalarını yeniden düzenleme ve döndürme.',
        category: 'İpuçları',
        tags: ['pdf düzenle', 'sayfa sıralama', 'pdf sayfa silme'],
        content: `## Sayfaları Doğru Sıraya Koyun

Büyük tarama işlemlerinde sayfaların karışması veya ters taranması çok yaygındır. Belgeyi baştan taramak yerine KeepPDF sayfa düzenleme araçlarını kullanarak sayfaları döndürebilir, gereksiz sayfaları silebilir ve sıralamayı sürükle-bırak ile düzeltebilirsiniz.`
    },
    {
        lang: 'tr',
        slug: 'mobil-telefonda-pdf-kucultme-ve-birlestirme',
        title: 'Akıllı Telefonda PDF Küçültme ve Birleştirme (iPhone & Android)',
        description: 'Uygulama indirmeden doğrudan mobil tarayıcınızdan PDF dosyalarınızı düzenleyin.',
        category: 'Mobil',
        tags: ['mobil pdf', 'iphone pdf küçültme', 'android pdf'],
        content: `## Uygulama Yüklemeye Son

App Store veya Google Play'deki birçok PDF uygulaması ücretsiz olduğunu iddia edip haftalık yüksek abonelik ücretleri talep eder. KeepPDF tamamen mobil uyumludur; Safari veya Chrome üzerinden girerek hiçbir indirme yapmadan tüm işlemlerinizi halledebilirsiniz.`
    },

    // -------------------------------------------------------------
    // ENGLISH (en) - 10 Posts
    // -------------------------------------------------------------
    {
        lang: 'en',
        slug: 'is-using-free-pdf-converter-safe',
        title: 'Is Using a Free Online PDF Converter Safe? Everything You Need to Know',
        description: 'Understand the privacy and security risks of online PDF tools, cloud uploads vs. client-side processing, and how to keep data safe.',
        category: 'Security',
        tags: ['pdf security', 'safe pdf converter', 'privacy'],
        content: `## The Hidden Privacy Problem with Most Online PDF Converters

Millions of users convert bank statements, tax forms, passports, and business contracts every day using free online tools. But what happens to your file after you click "Upload"?

### Cloud Storage Risks
Most online converters upload your document to remote third-party servers. Even if their terms state files are deleted within hours, temporary cloud storage still presents a vulnerability to data breaches and automated analysis.

### The Client-Side Advantage
KeepPDF operates completely differently. Built with cutting-edge web technologies, our tools process files directly inside your browser sandbox. 
- **Zero Server Uploads:** Your document never leaves your device.
- **Complete Privacy:** Nobody, not even KeepPDF, can view your document contents.
- **GDPR & Privacy Compliant:** Ideal for confidential legal, financial, and personal records.`
    },
    {
        lang: 'en',
        slug: 'how-to-compress-pdf-under-100kb-200kb',
        title: 'How to Compress a PDF to Under 100KB or 200KB Without Losing Quality',
        description: 'Step-by-step tutorial to shrink heavy PDF documents down to 100KB, 200KB or 500KB for visa, passport, and job portals.',
        category: 'Guides',
        tags: ['compress pdf', 'reduce pdf file size', 'pdf under 100kb'],
        content: `## Meeting Strict Portal Upload Restrictions

Government websites, university admission portals, and job applications frequently impose strict file size caps—often demanding files smaller than 200KB or even 100KB.

### Why Do Scanned PDFs Get So Large?
High-DPI scanner settings and embedded full-resolution images inflate a standard single-page document into a 10MB beast.

### How to Compress with KeepPDF
1. Open our [Compress PDF](/en/compress) tool.
2. Select your document.
3. Our intelligent compression algorithm removes redundant metadata and optimizes embedded images while preserving clean vector text.
4. Download your perfectly sized PDF ready for submission.`
    },
    {
        lang: 'en',
        slug: 'how-to-merge-multiple-pdf-files-into-one',
        title: 'How to Merge Multiple PDF Files into One Single Document for Free',
        description: 'Easily combine multiple separate PDFs into one clean, well-ordered document without watermarks or limits.',
        category: 'Guides',
        tags: ['merge pdf', 'combine pdfs', 'pdf tools'],
        content: `## Why Combine PDFs?

Whether sending receipts for an expense report or packaging a multi-part contract, sending five separate files looks cluttered and increases the likelihood that a page gets lost.

### Easy Reordering and Merging
With KeepPDF's [Merge PDF](/en/merge-pdf) tool:
- Drag-and-drop file cards to match your desired sequence.
- Preview thumbnails to ensure pages are oriented correctly.
- Hit merge and obtain your consolidated file in seconds.
- No file number limits, no signups required.`
    },
    {
        lang: 'en',
        slug: 'convert-pdf-to-editable-word-doc-free',
        title: 'How to Convert PDF to Editable Word Document (DOCX) Without Losing Format',
        description: 'Turn read-only PDF files into editable Microsoft Word documents with layouts, tables, and typography intact.',
        category: 'Converters',
        tags: ['pdf to word', 'convert pdf to docx', 'editable pdf'],
        content: `## Need to Edit an Existing PDF?

PDF files are notoriously difficult to edit directly without expensive software. Converting them into DOCX enables seamless editing in Word, Google Docs, or LibreOffice.

KeepPDF's [PDF to Word](/en/pdf-to-word) converter extracts text, structures paragraphs, and maintains table arrangements without distorting fonts or adding promotional watermarks.`
    },
    {
        lang: 'en',
        slug: 'best-free-pdf-tools-no-subscription-limits',
        title: 'Best 100% Free PDF Tools Without Subscriptions, Watermarks or Paywalls',
        description: 'Tired of trial paywalls and 2-document limits? Discover how KeepPDF provides truly unlimited, free PDF productivity.',
        category: 'Productivity',
        tags: ['free pdf tools', 'best pdf editor', 'no watermark'],
        content: `## The Frustration with Freemium PDF Sites

Most popular PDF tools offer "free" services until you need to convert your second file—whereupon they hit you with a $15/month subscription paywall or watermark your pages.

### Why KeepPDF is Free and Always Available
By doing all document processing locally in client browsers rather than maintaining costly server clusters, KeepPDF eliminates heavy server costs. This allows us to provide truly unlimited, free PDF utilities to everyone worldwide.`
    },
    {
        lang: 'en',
        slug: 'how-to-split-extract-pages-from-pdf',
        title: 'How to Split a PDF: Extract Specific Pages in Seconds',
        description: 'Separate individual pages or custom page ranges from a large PDF document effortlessly.',
        category: 'Guides',
        tags: ['split pdf', 'extract pdf pages', 'separate pdf'],
        content: `## Extract Only the Information You Need

Don't share an entire 100-page report when your client only requested section 4. Use our [Split PDF](/en/split) tool to select exactly the page numbers you want and save them as a lightweight, focused PDF.`
    },
    {
        lang: 'en',
        slug: 'convert-images-jpg-png-to-pdf-guide',
        title: 'How to Convert JPG and PNG Images to PDF Online',
        description: 'Turn your photos, receipts, and scans into a single organized PDF booklet.',
        category: 'Converters',
        tags: ['jpg to pdf', 'images to pdf', 'png to pdf'],
        content: `## Consolidate Photos into an Official PDF

Sharing multiple images as loose files often causes compression distortion across messaging apps. Packing them into an orderly PDF ensures high-fidelity viewing and easy printing. Try [Image to PDF](/en/image-to-pdf) today.`
    },
    {
        lang: 'en',
        slug: 'how-to-reduce-pdf-size-for-email-attachments',
        title: 'How to Reduce PDF Size for Email Attachments (Under 25MB)',
        description: 'Fix the "Attachment exceeds maximum size" email error on Gmail, Outlook, and Apple Mail.',
        category: 'Tips',
        tags: ['email pdf size', 'compress email attachment', 'gmail pdf limit'],
        content: `## Bypassing Email Attachment Limits

Gmail and Yahoo enforce a strict 25MB attachment limit, while Outlook caps attachments at 20MB. KeepPDF can reduce a 30MB file down to 3MB in seconds without visibly degrading chart or diagram clarity.`
    },
    {
        lang: 'en',
        slug: 'how-to-edit-pdf-text-and-sign-online',
        title: 'How to Edit PDF Text and Sign Documents in Your Browser',
        description: 'Add digital signatures, fill out forms, and annotate PDF documents without Adobe Acrobat.',
        category: 'Guides',
        tags: ['edit pdf', 'sign pdf', 'free pdf editor'],
        content: `## Quick Document Signing Without Printing

Printing a contract, signing by hand, and scanning it back is tedious. KeepPDF lets you upload your PDF, place an electronic signature, fill required text fields, and download the finished agreement in under two minutes.`
    },
    {
        lang: 'en',
        slug: 'convert-word-doc-to-pdf-best-practices',
        title: 'Why You Should Always Convert Word Docs to PDF Before Sending',
        description: 'Protect your formatting, fonts, and professional appearance by locking your documents into PDF format.',
        category: 'Tips',
        tags: ['word to pdf', 'resume format', 'docx conversion'],
        content: `## Never Send a Resume in Word Format

Recruiters open resumes on varying screen sizes, operating systems, and office suites. If they don't have your exact fonts installed, formatting breaks. Export to PDF with [Word to PDF](/en/word-to-pdf) to ensure pixel-perfect presentation every time.`
    },

    // -------------------------------------------------------------
    // SPANISH (es) - 5 Posts
    // -------------------------------------------------------------
    {
        lang: 'es',
        slug: 'como-comprimir-pdf-sat-tramites-mexico',
        title: 'Cómo Comprimir Archivos PDF para Trámites del SAT y Gobierno',
        description: 'Reduce el tamaño de tus declaraciones, facturas y constancias fiscales para subir al portal del SAT sin errores.',
        category: 'Guías',
        tags: ['sat pdf', 'comprimir pdf sat', 'tramites gobierno'],
        content: `## Requisitos de Tamaño en el Portal del SAT

Al realizar trámites fiscales o presentar declaraciones en el SAT (México), los archivos PDF a menudo son rechazados si superan los límites de 2 MB o 4 MB.

### Solución Inmediata con KeepPDF
Usa nuestra herramienta de [Comprimir PDF](/es/compress) para reducir tus archivos de forma privada en segundos sin comprometer la legibilidad de sellos digitales ni códigos QR.`
    },
    {
        lang: 'es',
        slug: 'como-unir-varios-archivos-pdf-en-uno-solo-gratis',
        title: 'Cómo Unir Varios Archivos PDF en Uno Solo Gratis y Sin Límites',
        description: 'Combina contratos, recibos y documentos en un solo PDF organizado sin marcas de agua.',
        category: 'Guías',
        tags: ['unir pdf', 'juntar pdfs', 'combinar pdf gratis'],
        content: `## Organiza tus Documentos en un Único Archivo

Tener páginas sueltas dificulta el envío de expedientes. Con [Unir PDF](/es/merge-pdf), puedes ordenar tus archivos arrastrando las miniaturas y generar un PDF consolidado en segundos.`
    },
    {
        lang: 'es',
        slug: 'convertir-pdf-a-word-editable-gratis-sin-registro',
        title: 'Convertir PDF a Word Editable Gratis y Sin Registro',
        description: 'Transforma tus documentos PDF en archivos Word (.docx) manteniendo tablas, texto y formato original.',
        category: 'Convertidores',
        tags: ['pdf a word', 'convertir pdf docx', 'editar pdf gratis'],
        content: `## Edita el Contenido de tu PDF Fácilmente

No necesitas pagar suscripciones caras para editar un texto. [PDF a Word](/es/pdf-to-word) extrae fielmente el contenido para que puedas modificarlo en Word o Google Docs.`
    },
    {
        lang: 'es',
        slug: 'es-seguro-usar-convertidores-pdf-online',
        title: '¿Es Seguro Usar Convertidores de PDF en Línea? Privacidad y Consejos',
        description: 'Conoce los riesgos de subir documentos confidenciales a la nube y por qué el procesamiento local es superior.',
        category: 'Seguridad',
        tags: ['seguridad pdf', 'privacidad documentos', 'herramientas seguras'],
        content: `## Protege tus Datos Confidenciales

Muchos sitios web almacenan tus documentos en sus servidores. KeepPDF procesa todo dentro de tu propio navegador web, garantizando que nadie pueda acceder a tu información personal.`
    },
    {
        lang: 'es',
        slug: 'como-dividir-y-extraer-paginas-de-un-pdf',
        title: 'Cómo Dividir un PDF y Extraer Solo las Páginas Necesarias',
        description: 'Separa páginas específicas de un documento PDF extenso con nuestra herramienta gratuita.',
        category: 'Guías',
        tags: ['dividir pdf', 'extraer paginas pdf', 'separar pdf'],
        content: `## Extrae Únicamente lo Importante

Selecciona las páginas que deseas conservar o separa cada hoja en un archivo independiente con [Dividir PDF](/es/split) de forma rápida y sencilla.`
    },

    // -------------------------------------------------------------
    // PORTUGUESE (pt) - 5 Posts
    // -------------------------------------------------------------
    {
        lang: 'pt',
        slug: 'como-comprimir-pdf-para-portal-gov-br',
        title: 'Como Comprimir PDF para o Portal Gov.br e Concursos (Menos de 1MB)',
        description: 'Aprenda a diminuir o tamanho dos seus arquivos PDF para inscrições e cadastros no Gov.br sem perder a qualidade.',
        category: 'Guias',
        tags: ['comprimir pdf gov br', 'diminuir pdf', 'pdf concursos'],
        content: `## Limite de Arquivos no Gov.br e Órgãos Públicos

O portal Gov.br, sistemas de tribunais (PJe) e bancas de concurso frequentemente limitam o envio de documentos a 1 MB ou 2 MB.

### Como Resolver com KeepPDF
Use nossa ferramenta [Comprimir PDF](/pt/compress) para otimizar suas certidões e comprovantes diretamente no navegador, com total privacidade.`
    },
    {
        lang: 'pt',
        slug: 'como-juntar-varios-arquivos-pdf-em-um-so',
        title: 'Como Juntar Vários PDFs em Um Só Arquivo Grátis',
        description: 'Mescle contratos, faturas e relatórios em um único documento PDF organizado.',
        category: 'Guias',
        tags: ['juntar pdf', 'mesclar pdf', 'combinar pdfs'],
        content: `## Documentos Organizados em Poucos Cliques

Com a ferramenta [Juntar PDF](/pt/merge-pdf), selecione seus arquivos, organize a ordem das páginas e faça o download instantâneo sem marcas d'água.`
    },
    {
        lang: 'pt',
        slug: 'converter-pdf-em-word-editavel-gratis',
        title: 'Converter PDF para Word Editável (DOCX) Sem Desformatar',
        description: 'Transforme PDFs em arquivos do Word prontos para edição preservando textos, tabelas e fontes.',
        category: 'Conversores',
        tags: ['pdf para word', 'converter pdf docx', 'editar pdf'],
        content: `## Edite Documentos Sem Complicação

Converta seus arquivos PDF para DOCX com facilidade através do [PDF para Word](/pt/word-to-pdf) e altere textos sem perder o layout original.`
    },
    {
        lang: 'pt',
        slug: 'ferramentas-de-pdf-online-sao-seguras-guia-de-privacidade',
        title: 'Ferramentas de PDF Online São Seguras? Guia de Privacidade',
        description: 'Entenda como proteger documentos confidenciais com ferramentas que processam arquivos direto no navegador.',
        category: 'Segurança',
        tags: ['segurança pdf', 'privacidade online', 'proteção de dados'],
        content: `## Seus Documentos Ficam Salvos na Nuvem?

Diferente de outros sites, o KeepPDF não envia seus arquivos para servidores remotos. Todo o processamento ocorre no seu computador, garantindo sigilo absoluto.`
    },
    {
        lang: 'pt',
        slug: 'como-separar-e-extrair-paginas-de-pdf',
        title: 'Como Separar Páginas de um PDF Facilmente',
        description: 'Extraia apenas as páginas que você precisa de documentos longos de forma rápida e gratuita.',
        category: 'Guias',
        tags: ['separar pdf', 'extrair paginas pdf', 'dividir pdf'],
        content: `## Remova Páginas Desnecessárias

Selecione intervalos ou páginas específicas com nossa ferramenta [Dividir PDF](/pt/split) e crie um novo arquivo limpo e leve.`
    },

    // -------------------------------------------------------------
    // INDONESIAN (id) - 4 Posts
    // -------------------------------------------------------------
    {
        lang: 'id',
        slug: 'cara-kompres-pdf-200kb-cpns-dan-bkn',
        title: 'Cara Kompres PDF 200KB / 300KB untuk Syarat Pendaftaran CPNS & BKN',
        description: 'Panduan lengkap memperkecil ukuran file PDF ijazah, KTP, dan berkas lamaran kerja tanpa buram.',
        category: 'Panduan',
        tags: ['kompres pdf cpns', 'kecilkan pdf 200kb', 'pdf bkn'],
        content: `## Syarat Ukuran Berkas SSCASN & CPNS

Pendaftaran CPNS dan BKN mewajibkan dokumen seperti KTP, Ijazah, dan Transkrip Nilai berukuran maksimal 200KB hingga 500KB.

### Solusi Cepat dengan KeepPDF
Gunakan [Kompres PDF](/id/compress) untuk mengecilkan dokumen Anda secara aman dan gratis langsung dari HP atau laptop Anda.`
    },
    {
        lang: 'id',
        slug: 'cara-menggabungkan-file-pdf-menjadi-satu',
        title: 'Cara Menggabungkan Beberapa File PDF Jadi Satu Dokumen Praktis',
        description: 'Satukan berkas lamaran, kwitansi, dan laporan ke dalam satu file PDF rapi tanpa batas.',
        category: 'Panduan',
        tags: ['gabung pdf', 'satukan file pdf', 'merge pdf gratis'],
        content: `## Kirim Berkas Lebih Rapi

Jangan kirim dokumen terpisah. Satukan semua halaman Anda menggunakan [Gabung PDF](/id/merge-pdf) dengan urutan yang rapi dalam hitungan detik.`
    },
    {
        lang: 'id',
        slug: 'cara-mengubah-pdf-ke-word-gratis-bisa-diedit',
        title: 'Cara Mengubah PDF ke Word Gratis yang Bisa Diedit',
        description: 'Konversi file PDF ke Word (DOCX) tanpa merusak tabel dan susunan paragraf.',
        category: 'Konverter',
        tags: ['pdf ke word', 'ubah pdf docx', 'edit pdf'],
        content: `## Ubah Dokumen Tanpa Mengetik Ulang

Hemat waktu Anda dengan mengonversi berkas PDF menjadi dokumen Word yang dapat disunting lewat [PDF ke Word](/id/pdf-to-word).`
    },
    {
        lang: 'id',
        slug: 'cara-memisahkan-halaman-pdf-online',
        title: 'Cara Memisahkan Halaman PDF Tertentu dengan Mudah',
        description: 'Ambil hanya halaman yang Anda butuhkan dari dokumen PDF tebal secara instan.',
        category: 'Panduan',
        tags: ['pisah pdf', 'ekstrak halaman pdf', 'split pdf'],
        content: `## Ambil Halaman yang Dibutuhkan Saja

Pilih dan simpan halaman penting dari dokumen Anda dengan [Pisah PDF](/id/split) tanpa perlu instalasi aplikasi tambahan.`
    },

    // -------------------------------------------------------------
    // ESTONIAN (et) - 2 Posts
    // -------------------------------------------------------------
    {
        lang: 'et',
        slug: 'kuidas-vahendada-pdf-faili-mahtu-tasuta',
        title: 'Kuidas Vähendada PDF-faili Mahtu Tasuta ja Turvaliselt?',
        description: 'Lihtne juhend suurte PDF-dokumentide tihendamiseks e-posti ja riigiportaalide jaoks.',
        category: 'Juhised',
        tags: ['tihenda pdf', 'vähenda pdf mahtu', 'tasuta pdf'],
        content: `## Liiga Suur PDF-fail?

Kui dokument ei mahu e-kirja manusesse, kasuta meie [Tihenda PDF](/et/compress) tööriista, mis vähendab faili mahtu ilma teksti kvaliteeti kahjustamata.`
    },
    {
        lang: 'et',
        slug: 'kuidas-uhendada-mitu-pdf-faili-uheks',
        title: 'Kuidas Ühendada Mitu PDF-faili Üheks Dokumendiks?',
        description: 'Liitke lepingud ja aruanded kiiresti ja mugavalt üheks korrastatud PDF-failiks.',
        category: 'Juhised',
        tags: ['ühenda pdf', 'liida pdf failid', 'pdf tööriistad'],
        content: `## Korrasta Oma Dokumendid

Lohistage oma failid soovitud järjekorda ja looge ühtne terviklik dokument meie [Ühenda PDF](/et/merge-pdf) abil sekunditega.`
    },

    // -------------------------------------------------------------
    // LATVIAN (lv) - 2 Posts
    // -------------------------------------------------------------
    {
        lang: 'lv',
        slug: 'ka-samazinat-pdf-faila-izmeru-bez-maksas',
        title: 'Kā Samazināt PDF Faila Izmēru Bez Maksas un Droši?',
        description: 'Optimāla PDF failu saspiešana iesniegšanai VID EDS un nosūtīšanai pa e-pastu.',
        category: 'Pamācības',
        tags: ['saspiest pdf', 'samazināt pdf izmēru', 'vid eds pdf'],
        content: `## Sagatavojiet Failus Valsts Iestādēm

VID EDS un citām sistēmām bieži ir stingri failu izmēru ierobežojumi. Izmantojiet mūsu [Saspiest PDF](/lv/compress) rīku, lai ātri samazinātu dokumentu izmēru.`
    },
    {
        lang: 'lv',
        slug: 'ka-apvienot-vairakus-pdf-failus-viena',
        title: 'Kā Apvienot Vairākus PDF Failus Vienā Dokumentā?',
        description: 'Ātra un ērta vairāku PDF dokumentu apvienošana vienā failā bez maksas.',
        category: 'Pamācības',
        tags: ['apvienot pdf', 'savienot pdf failus', 'bezmaksas pdf'],
        content: `## Apvienojiet Rēķinus un Līgumus

Sakārtojiet dokumentu secību un izveidojiet vienotu PDF dokumentu, izmantojot [Apvienot PDF](/lv/merge-pdf).`
    },

    // -------------------------------------------------------------
    // ALBANIAN (sq) - 2 Posts
    // -------------------------------------------------------------
    {
        lang: 'sq',
        slug: 'si-te-zvogeloni-madhesine-e-nje-skedari-pdf',
        title: 'Si të Zvogëloni Madhësinë e një Skedari PDF Falas dhe me Siguri',
        description: 'Udhëzues i thjeshtë për kompresimin e dokumenteve PDF për aplikime dhe email.',
        category: 'Udhëzues',
        tags: ['komprimo pdf', 'zvogelo pdf', 'pdf falas'],
        content: `## Zgjidhja për Skedarët me Madhësi të Madhe

Kur faqet qeveritare ose email-et refuzojnë dokumentin tuaj, përdorni mjetin tonë [Komprimo PDF](/sq/compress) për ta zvogëluar menjëherë pa humbur qartësinë e tekstit.`
    },
    {
        lang: 'sq',
        slug: 'si-te-bashkoni-disa-skedare-pdf-ne-nje-te-vetem',
        title: 'Si të Bashkoni Disa Skedarë PDF në një të Vetëm',
        description: 'Kombinoni fatura, kontrata dhe faqe të ndara në një dokument të vetëm të rregullt.',
        category: 'Udhëzues',
        tags: ['bashko pdf', 'kombino pdf', 'mjetet pdf'],
        content: `## Mbani Dokumentet Tuaja të Organizuara

Përzgjidhni skedarët tuaj, rregulloni radhitjen dhe shkarkoni menjëherë dokumentin e plotë me [Bashko PDF](/sq/merge-pdf).`
    }
];

async function run() {
    console.log(`Starting insertion of ${posts.length} SEO blog posts...`);
    let successCount = 0;

    for (const post of posts) {
        const payload = {
            slug: post.slug,
            lang: post.lang,
            title: post.title,
            description: post.description,
            content: post.content,
            category: post.category,
            tags: post.tags,
            author: 'KeepPDF Team',
            is_published: true,
            published_at: new Date().toISOString()
        };

        try {
            const res = await fetch(`${url}/rest/v1/blog_posts`, {
                method: 'POST',
                headers: {
                    apikey: key,
                    Authorization: `Bearer ${key}`,
                    'Content-Type': 'application/json',
                    Prefer: 'resolution=merge-duplicates,return=minimal'
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                successCount++;
                console.log(`[${successCount}/${posts.length}] Uploaded: (${post.lang}) ${post.title}`);
            } else {
                const err = await res.text();
                console.error(`Error uploading ${post.slug}:`, err);
            }
        } catch (e) {
            console.error(`Exception uploading ${post.slug}:`, e);
        }
    }

    console.log(`\nDone! Successfully uploaded ${successCount} of ${posts.length} blog posts to Supabase.`);
}

run();
