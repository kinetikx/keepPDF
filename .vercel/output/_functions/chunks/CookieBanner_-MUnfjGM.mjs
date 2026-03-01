import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Globe, Check, LayoutTemplate, Files, Minimize2, Image, FileText, FileSpreadsheet, PenTool, ScanLine, ChevronDown, X, Menu, Cookie } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const $$Astro = createAstro("https://keeppdf.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang, dict } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-50 border-t border-slate-200"> <div class="container-custom py-12 md:py-16"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"> <!-- Brand Column --> <div class="md:col-span-1 space-y-4"> <a${addAttribute(`/${lang}`, "href")} class="flex items-center gap-2 group"> <img src="/brand-logo.svg" alt="KeepPDF Logo" class="w-8 h-8 rounded-lg"> <span class="text-xl font-bold tracking-tight text-slate-900">
Keep<span class="text-brand-600">PDF</span> </span> </a> <p class="text-slate-500 text-sm leading-relaxed"> ${dict.hero.description} </p> </div> <!-- Product Links --> <div> <h4 class="font-semibold text-slate-900 mb-4">${dict.footer.product}</h4> <ul class="space-y-3 text-sm text-slate-600"> <li><a${addAttribute(`/${lang}/merge-pdf`, "href")} class="hover:text-brand-600 transition-colors">${dict.footer.links.merge}</a></li> <li><a${addAttribute(`/${lang}/compress`, "href")} class="hover:text-brand-600 transition-colors">${dict.footer.links.compress}</a></li> <li><a${addAttribute(`/${lang}/split`, "href")} class="hover:text-brand-600 transition-colors">${dict.footer.links.convert}</a></li> <li><a${addAttribute(`/${lang}/sign-pdf`, "href")} class="hover:text-brand-600 transition-colors">${dict.footer.links.sign}</a></li> </ul> </div> <!-- Company Links --> <div> <h4 class="font-semibold text-slate-900 mb-4">${dict.footer.company}</h4> <ul class="space-y-3 text-sm text-slate-600"> <li><a href="#" class="hover:text-brand-600 transition-colors">${dict.footer.links.about}</a></li> <li><a${addAttribute(`/${lang}/blog`, "href")} class="hover:text-brand-600 transition-colors">${dict.footer.links.blog}</a></li> <li><a href="#" class="hover:text-brand-600 transition-colors">${dict.footer.links.privacy}</a></li> <li><a href="#" class="hover:text-brand-600 transition-colors">${dict.footer.links.terms}</a></li> </ul> </div> <!-- Contact/Social --> <div> <h4 class="font-semibold text-slate-900 mb-4">${dict.footer.connect}</h4> <div class="flex gap-4"> <a href="#" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all"> <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> </a> <a href="#" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all"> <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> </a> <a href="#" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all"> <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> </div> </div> </div> <div class="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} KeepPDF. ${dict.footer.rights}</p> <div class="flex gap-6"> <a href="#" class="hover:text-slate-900 transition-colors">${dict.footer.links.privacyShort}</a> <a href="#" class="hover:text-slate-900 transition-colors">${dict.footer.links.termsShort}</a> <a href="#" class="hover:text-slate-900 transition-colors">${dict.footer.links.cookies}</a> </div> </div> </div> </footer>`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/layout/Footer.astro", void 0);

const en = {
    metadata: {
        title: "KeepPDF | Merge, Split & Compress PDF Files Online - Free",
        description: "Easily merge, split, compress, and convert PDF files for free. Secure, fast, and no installation required. Try KeepPDF tools now.",
        merge: {
            title: "Merge PDF Files Online - Combine PDFs Instantly Free | KeepPDF",
            description: "Combine multiple PDF files into one document for free. No file uploads needed — merge PDFs securely in your browser with instant results.",
            h1: "Merge PDF Files Online for Free"
        },
        split: {
            title: "Split PDF - Extract Pages from PDF Online Free | KeepPDF",
            description: "Split PDF files and extract specific pages or page ranges for free. Fast, secure, and browser-based — no software installation required.",
            h1: "Split PDF & Extract Pages Online"
        },
        compress: {
            title: "Compress PDF - Reduce PDF File Size Online Free | KeepPDF",
            description: "Reduce PDF file size while maintaining quality. Choose basic or strong compression modes. Free, private, and processed entirely in your browser.",
            h1: "Compress PDF Files Online for Free"
        },
        organize: {
            title: "Organize PDF Pages - Reorder, Rotate & Delete | KeepPDF",
            description: "Rearrange, rotate, and delete PDF pages with drag-and-drop ease. Free online PDF page organizer — no upload, fully browser-based.",
            h1: "Organize & Reorder PDF Pages Online"
        },
        pdfToImage: {
            title: "PDF to JPG - Convert PDF Pages to Images Free | KeepPDF",
            description: "Convert PDF pages to high-quality JPG images instantly. Extract every page as a separate image for free, directly in your browser.",
            h1: "Convert PDF to JPG Images Online"
        },
        imageToPdf: {
            title: "JPG to PDF - Convert Images to PDF Online Free | KeepPDF",
            description: "Convert JPG, PNG, and WebP images to PDF documents for free. Adjust orientation and margins — fast, private, and browser-based.",
            h1: "Convert Images to PDF Online for Free"
        },
        pdfToWord: {
            title: "PDF to Word - Convert PDF to DOCX Online Free | KeepPDF",
            description: "Convert PDF files to editable Word documents with high accuracy. Free online PDF to DOCX converter — no registration, no file uploads.",
            h1: "Convert PDF to Word Documents Online"
        },
        wordToPdf: {
            title: "Word to PDF - Convert DOCX to PDF Online Free | KeepPDF",
            description: "Convert Word documents to PDF format instantly. Free DOCX to PDF converter — preserves formatting, no installation or signup required.",
            h1: "Convert Word to PDF Online for Free"
        },
        signPdf: {
            title: "Sign PDF Online - Add Electronic Signature Free | KeepPDF",
            description: "Sign PDF documents electronically for free. Add your signature to any PDF directly in your browser — secure, fast, and no account needed.",
            h1: "Sign PDF Documents Online for Free"
        },
        editPdf: {
            title: "Edit PDF Online - Add Text, Shapes & Highlights | KeepPDF",
            description: "Edit PDF files online for free. Add text, shapes, comments, and highlights to your PDF documents directly in your browser — no software needed.",
            h1: "Edit PDF Files Online for Free"
        },
        pdfToTxt: {
            title: "PDF to TXT - Extract Text from PDF Online Free | KeepPDF",
            description: "Extract text content from PDF files instantly. Free online PDF to plain text converter — processed in your browser, no upload required.",
            h1: "Extract Text from PDF Online"
        },
        pdfToExcel: {
            title: "PDF to Excel - Convert PDF to Spreadsheet Free | KeepPDF",
            description: "Convert PDF tables and data to Excel spreadsheets for free. Accurate PDF to XLSX converter — fast, private, and browser-based conversion.",
            h1: "Convert PDF to Excel Spreadsheets Online"
        },
        ocrPdf: {
            title: "OCR PDF - Recognize Text in PDF Online Free | KeepPDF",
            description: "Recognize and extract text from scanned PDFs using OCR technology. Free online optical character recognition — no installation needed.",
            h1: "OCR PDF - Recognize Text in Scanned PDFs"
        },
        blog: {
            title: "Blog - PDF Tips, Guides & Tutorials | KeepPDF",
            description: "Discover helpful guides, tips, and tutorials about PDF tools. Learn how to merge, split, compress, and convert PDF files like a pro.",
            h1: "KeepPDF Blog"
        }
    },
    hero: {
        title: "Merge PDFs Instantly",
        description: "Secure, privacy-focused PDF tools. Merge, split, compress and more without uploading your files to a server.",
        cta: "Start Merging",
        trustBanner: {
            secureTitle: "100% Private",
            secureDesc: "Files never leave your browser",
            fastTitle: "Instant Speed",
            fastDesc: "No server uploads required",
            freeTitle: "No Limits",
            freeDesc: "Completely free, forever"
        }
    },
    why: {
        title: "Why KeepPDF?",
        description: "KeepPDF offers a complete suite of PDF tools directly in your browser. We prioritize your privacy; files are processed securely and deleted automatically. Whether you need to merge reports for work or compress assignments for school, KeepPDF is fast, free, and easy to use.",
        secure: {
            title: "Secure & Private",
            description: "Files are processed locally in your browser or deleted automatically after processing."
        },
        fast: {
            title: "Lighting Fast",
            description: "Optimized algorithms ensure your documents are processed in seconds, not minutes."
        },
        free: {
            title: "100% Free",
            description: "No hidden fees, no subscriptions, no watermarks. Just pure PDF tools."
        }
    },
    faq: {
        title: "FAQ",
        questions: [
            {
                question: "Is KeepPDF free?",
                answer: "Yes, all our tools including Merge, Split, and Compress are completely free to use."
            },
            {
                question: "Are my files safe?",
                answer: "Absolutely. We use secure processing and do not store your files permanently."
            }
        ]
    },
    tools: {
        merge: {
            title: "Merge PDF",
            description: "Combine multiple PDF files into one."
        },
        split: {
            title: "Split PDF",
            description: "Separate one page or a whole set for easy conversion into independent PDF files.",
            editor: {
                pageCount: "{count} pages found",
                selectAll: "Select All",
                deselect: "Deselect",
                extract: "Extract {count} Pages",
                selectPages: "Select Pages",
                loading: "Loading PDF Pages...",
            }
        },
        compress: {
            title: "Compress PDF",
            description: "Reduce file size while optimizing for maximal PDF quality.",
            editor: {
                success: "Compression Successful!",
                original: "Original",
                compressed: "Compressed",
                reduction: "{percent}% reduction",
                download: "Download PDF",
                compressAnother: "Compress Another File",
                basic: "Basic Compression",
                basicDesc: "Optimizes file structure and removes unused data. Best for documents with text. High quality.",
                strong: "Strong Compression",
                strongDesc: "Rasterizes pages to images. Best for scanned documents or image-heavy PDFs.",
                strongNote: "May reduce text clarity.",
                processing: "Compressing... {percent}%",
                button: "Compress PDF Now",
                error: "Something went wrong during compression. Try a different mode."
            }
        },
        pdfToImage: {
            title: "PDF to JPG",
            description: "Extract images from your PDF or save each page as a separate image."
        },
        imageToPdf: {
            title: "JPG to PDF",
            description: "Adjust the orientation and margins of your images."
        },
        organize: {
            title: "Organize PDF",
            description: "Sort pages of your PDF file however you like. Delete PDF pages or add PDF pages to your document at will.",
            editor: {
                subtitle: "Rearrange pages, rotate, or remove unwanted pages from your PDF.",
                loading: "Loading your PDF...",
                pageCount: "{count} pages",
                rotateLeft: "Left",
                rotateRight: "Right",
                rotateAllLeft: "Rotate All Left",
                rotateAllRight: "Rotate All Right",
                deletePage: "Delete Page",
                save: "Save PDF"
            }
        },
        pdfToWord: {
            title: "PDF to Word",
            description: "Convert your PDF to WORD documents with incredible accuracy.",
            editor: {
                title: "PDF to Word Converter",
                desc: "Convert your specific PDF files to editable Word documents.",
                uploadTitle: "Upload PDF File",
                uploadDesc: "Drag & drop or click to select .pdf file",
                convert: "Convert to Word",
                converting: "Converting...",
                error: "Please select a valid .pdf file",
                conversionError: "Failed to convert file. Please try again."
            }
        },
        wordToPdf: {
            title: "Word to PDF",
            description: "Make DOC and DOCX files easy to read by converting them to PDF.",
            editor: {
                title: "Word to PDF Converter",
                desc: "Convert your DOCX files to PDF instantly.",
                uploadTitle: "Upload Word File",
                uploadDesc: "Drag & drop or click to select .docx file",
                convert: "Convert to PDF",
                converting: "Converting...",
                error: "Please select a valid .docx file",
                conversionError: "Failed to convert file. Please try again."
            }
        },
        sign: {
            title: "Sign PDF",
            description: "Sign yourself or request electronic signatures from others."
        },
        edit: {
            title: "Edit PDF",
            description: "Add text, shapes, comments and highlights to your PDF file."
        },
        pdfToTxt: {
            title: "PDF to TXT",
            description: "Extract text from your PDF file."
        },
        pdfToExcel: {
            title: "PDF to Excel",
            description: "Convert PDF data to Excel spreadsheets."
        },
        ocr: {
            title: "OCR PDF",
            description: "Recognize text in your PDF file."
        }
    },
    nav: {
        organize: "Organize",
        optimize: "Optimize",
        convert: "Convert",
        edit: "Edit",
        pricing: "Pricing",
        login: "Login",
        getStarted: "Get Started"
    },
    footer: {
        product: "Product",
        company: "Company",
        connect: "Connect",
        rights: "All rights reserved.",
        links: {
            merge: "Merge PDF",
            compress: "Compress PDF",
            convert: "Convert PDF",
            sign: "Sign Documents",
            about: "About Us",
            blog: "Blog",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            privacyShort: "Privacy",
            termsShort: "Terms",
            cookies: "Cookies"
        }
    },
    common: {
        comingSoon: "Coming Soon",
        selectedFiles: "Selected Files",
        clearAll: "Clear All",
        dropFiles: "Drop PDF files here",
        browse: "Browse",
        processing: "Processing...",
        download: "Download",
        filesSelected: "{count} file(s) selected",
        reset: "Reset",
        mergeCount: "Merge {count} PDFs",
        limit: "PDF files up to 50MB",
        clickToUpload: "Click to upload or drag & drop",
        uploadImages: "Upload Images",
        dragDropImages: "Drag & drop JPG, PNG, or WebP images here, or click to select files.",
        addImages: "Add Images",
        convertToPdf: "Convert to PDF",
        cookieBanner: {
            text: "This site uses cookies to enhance your experience.",
            accept: "Accept"
        }
    },
    blog: {
        title: "Blog",
        description: "Tips, guides, and insights about PDF tools",
        readMore: "Read More",
        publishedOn: "Published on",
        by: "by",
        tags: "Tags",
        backToBlog: "← Back to Blog",
        noPosts: "No posts yet. Check back soon!",
        minRead: "min read",
        relatedPosts: "Related Posts",
        allPosts: "All Posts",
        categories: {
            all: "All",
            guides: "Guides",
            tips: "Tips",
            general: "General"
        }
    }
};

const tr = {
    metadata: {
        title: "KeepPDF | Online PDF Birleştirme, Bölme ve Küçültme - Ücretsiz",
        description: "PDF dosyalarınızı ücretsiz olarak birleştirin, bölün, küçültün ve dönüştürün. Kurulum gerektirmeyen, güvenli ve hızlı PDF araçlarını hemen deneyin.",
        merge: {
            title: "PDF Birleştirme - PDF Dosyalarını Ücretsiz Birleştir | KeepPDF",
            description: "Birden fazla PDF dosyasını tek bir belgede ücretsiz birleştirin. Dosya yüklemeye gerek yok — tarayıcınızda güvenle ve anında PDF birleştirme.",
            h1: "PDF Dosyalarını Online Ücretsiz Birleştirin"
        },
        split: {
            title: "PDF Bölme - PDF Sayfalarını Ücretsiz Ayır | KeepPDF",
            description: "PDF dosyalarını bölün ve belirli sayfaları veya sayfa aralıklarını ücretsiz ayırın. Hızlı, güvenli ve tarayıcı tabanlı — kurulum gerektirmez.",
            h1: "PDF Böl & Sayfaları Online Ayır"
        },
        compress: {
            title: "PDF Sıkıştırma - PDF Boyutunu Ücretsiz Küçült | KeepPDF",
            description: "Kaliteyi koruyarak PDF dosya boyutunu küçültün. Temel veya güçlü sıkıştırma modları. Ücretsiz, gizli ve tamamen tarayıcınızda işlenir.",
            h1: "PDF Dosyalarını Online Ücretsiz Sıkıştırın"
        },
        organize: {
            title: "PDF Sayfa Düzenleme - Sırala, Döndür ve Sil | KeepPDF",
            description: "PDF sayfalarını sürükle-bırak ile yeniden sıralayın, döndürün ve silin. Ücretsiz online PDF sayfa düzenleyici — yükleme gerektirmez.",
            h1: "PDF Sayfalarını Online Düzenleyin"
        },
        pdfToImage: {
            title: "PDF'den JPG'ye - PDF Sayfalarını Resme Dönüştür | KeepPDF",
            description: "PDF sayfalarını yüksek kaliteli JPG resimlerine anında dönüştürün. Her sayfayı ayrı resim olarak ücretsiz çıkarın, tarayıcınızda.",
            h1: "PDF'yi JPG Resimlerine Online Dönüştürün"
        },
        imageToPdf: {
            title: "JPG'den PDF'e - Resimleri PDF'e Ücretsiz Dönüştür | KeepPDF",
            description: "JPG, PNG ve WebP resimlerini ücretsiz PDF belgelerine dönüştürün. Yön ve kenar boşluklarını ayarlayın — hızlı ve tarayıcı tabanlı.",
            h1: "Resimleri Online Ücretsiz PDF'e Dönüştürün"
        },
        pdfToWord: {
            title: "PDF'den Word'e - PDF'yi DOCX'e Ücretsiz Dönüştür | KeepPDF",
            description: "PDF dosyalarını yüksek doğrulukla düzenlenebilir Word belgelerine dönüştürün. Ücretsiz PDF'den DOCX'e dönüştürücü — kayıt gerektirmez.",
            h1: "PDF'yi Word Belgelerine Online Dönüştürün"
        },
        wordToPdf: {
            title: "Word'den PDF'e - DOCX'yi PDF'e Ücretsiz Dönüştür | KeepPDF",
            description: "Word belgelerini anında PDF formatına dönüştürün. Ücretsiz DOCX-PDF dönüştürücü — biçimlendirmeyi korur, kurulum gerektirmez.",
            h1: "Word'ü Online Ücretsiz PDF'e Dönüştürün"
        },
        signPdf: {
            title: "PDF İmzalama - Ücretsiz Elektronik İmza Ekle | KeepPDF",
            description: "PDF belgelerinizi ücretsiz elektronik olarak imzalayın. Tarayıcınızda herhangi bir PDF'ye imzanızı ekleyin — güvenli ve hesap gerektirmez.",
            h1: "PDF Belgelerini Online Ücretsiz İmzalayın"
        },
        editPdf: {
            title: "PDF Düzenleme - Metin, Şekil ve Vurgu Ekle | KeepPDF",
            description: "PDF dosyalarını online ücretsiz düzenleyin. Belgelerinize metin, şekil, yorum ve vurgular ekleyin — yazılım kurulumu gerektirmez.",
            h1: "PDF Dosyalarını Online Ücretsiz Düzenleyin"
        },
        pdfToTxt: {
            title: "PDF'den TXT'ye - PDF'den Metin Çıkar Ücretsiz | KeepPDF",
            description: "PDF dosyalarından metin içeriğini anında çıkarın. Ücretsiz online PDF'den düz metin dönüştürücü — tarayıcınızda işlenir.",
            h1: "PDF'den Online Metin Çıkarın"
        },
        pdfToExcel: {
            title: "PDF'den Excel'e - PDF'yi Tabloya Ücretsiz Dönüştür | KeepPDF",
            description: "PDF tablolarını ve verilerini ücretsiz Excel tablolarına dönüştürün. Doğru PDF-XLSX dönüştürücü — hızlı ve tarayıcı tabanlı.",
            h1: "PDF'yi Online Excel Tablolarına Dönüştürün"
        },
        ocrPdf: {
            title: "OCR PDF - PDF'deki Metni Ücretsiz Tanı | KeepPDF",
            description: "OCR teknolojisiyle taranmış PDF'lerden metin tanıyın ve çıkarın. Ücretsiz online optik karakter tanıma — kurulum gerektirmez.",
            h1: "OCR PDF - Taranmış PDF'lerdeki Metni Tanıyın"
        },
        blog: {
            title: "Blog - PDF İpuçları, Rehberler ve Eğitimler | KeepPDF",
            description: "PDF araçları hakkında faydalı rehberler, ipuçları ve eğitimler keşfedin. PDF birleştirme, bölme, sıkıştırma ve dönüştürme hakkında her şeyi öğrenin.",
            h1: "KeepPDF Blog"
        }
    },
    hero: {
        title: "PDF'leri Anında Birleştirin",
        description: "Güvenli, gizlilik odaklı PDF araçları. Dosyalarınızı sunucuya yüklemeden birleştirin, bölün, sıkıştırın ve daha fazlasını yapın.",
        cta: "Birleştirmeye Başla",
        trustBanner: {
            secureTitle: "%100 Gizli",
            secureDesc: "Dosyalar tarayıcınızdan çıkmaz",
            fastTitle: "Anında Hız",
            fastDesc: "Sunucu yüklemesi gerekmez",
            freeTitle: "Sınırsız",
            freeDesc: "Tamamen ücretsiz, sonsuza dek"
        }
    },
    why: {
        title: "Neden KeepPDF?",
        description: "KeepPDF, doğrudan tarayıcınızda çalışan kapsamlı PDF araçları sunar. Gizliliğinize önem veriyoruz; dosyalarınız güvenli bir şekilde işlenir. İster iş raporlarını birleştirin, ister okul ödevlerini küçültün; KeepPDF hızlı, ücretsiz ve kullanımı kolaydır.",
        secure: {
            title: "Güvenli ve Gizli",
            description: "Dosyalarınız tarayıcınızda yerel olarak işlenir veya işlemden sonra otomatik olarak silinir."
        },
        fast: {
            title: "Işık Hızında",
            description: "Optimize edilmiş algoritmalar sayesinde belgeleriniz dakikalar değil, saniyeler içinde işlenir."
        },
        free: {
            title: "%100 Ücretsiz",
            description: "Gizli ücret yok, abonelik yok, filigran yok. Sadece saf PDF araçları."
        }
    },
    faq: {
        title: "Sıkça Sorulan Sorular",
        questions: [
            {
                question: "KeepPDF ücretsiz mi?",
                answer: "Evet, Birleştirme, Bölme ve Sıkıştırma dahil tüm araçlarımızı kullanmak tamamen ücretsizdir."
            },
            {
                question: "Dosyalarım güvende mi?",
                answer: "Kesinlikle. Güvenli işleme protokolleri kullanıyoruz ve dosyalarınızı kalıcı olarak saklamıyoruz."
            }
        ]
    },
    tools: {
        merge: {
            title: "PDF Birleştir",
            description: "Birden fazla PDF dosyasını tek bir dosyada birleştirin."
        },
        split: {
            title: "PDF Böl",
            description: "Bağımsız PDF dosyalarına dönüştürmek için bir sayfayı veya bir seti ayırın.",
            editor: {
                pageCount: "{count} sayfa bulundu",
                selectAll: "Tümünü Seç",
                deselect: "Seçimi Kaldır",
                extract: "{count} Sayfayı Ayır",
                selectPages: "Sayfa Seçin",
                loading: "PDF Sayfaları Yükleniyor...",
            }
        },
        compress: {
            title: "PDF Sıkıştır",
            description: "Maksimum PDF kalitesi için optimize ederken dosya boyutunu küçültün.",
            editor: {
                success: "Sıkıştırma Başarılı!",
                original: "Orijinal",
                compressed: "Sıkıştırılmış",
                reduction: "%{percent} küçülme",
                download: "PDF İndir",
                compressAnother: "Başka Dosya Sıkıştır",
                basic: "Temel Sıkıştırma",
                basicDesc: "Dosya yapısını optimize eder ve gereksiz verileri temizler. Metin belgeleri için idealdir. Yüksek kalite.",
                strong: "Güçlü Sıkıştırma",
                strongDesc: "Sayfaları resme dönüştürür. Taranmış belgeler veya resim ağırlıklı PDF'ler için idealdir.",
                strongNote: "Metin netliğini azaltabilir.",
                processing: "Sıkıştırılıyor... %{percent}",
                button: "Şimdi Sıkıştır",
                error: "Sıkıştırma sırasında bir hata oluştu. Farklı bir mod deneyin."
            }
        },
        pdfToImage: {
            title: "PDF'den JPG'e",
            description: "PDF'inizden resimleri çıkarın veya her sayfayı ayrı bir resim olarak kaydedin."
        },
        imageToPdf: {
            title: "JPG'den PDF'e",
            description: "Resimlerinizin yönünü ve kenar boşluklarını ayarlayın."
        },
        organize: {
            title: "Sayfaları Düzenle",
            description: "PDF sayfa sırasını dilediğiniz gibi düzenleyin. Sayfa silin veya ekleyin.",
            editor: {
                subtitle: "PDF'inizdeki sayfaları yeniden sıralayın, döndürün veya istemediğiniz sayfaları silin.",
                loading: "PDF Yükleniyor...",
                pageCount: "{count} sayfa",
                rotateLeft: "Sola",
                rotateRight: "Sağa",
                rotateAllLeft: "Tümünü Sola Döndür",
                rotateAllRight: "Tümünü Sağa Döndür",
                deletePage: "Sayfayı Sil",
                save: "PDF Kaydet"
            }
        },
        pdfToWord: {
            title: "PDF'den Word'e",
            description: "PDF'lerinizi inanılmaz doğrulukla WORD belgelerine dönüştürün.",
            editor: {
                title: "PDF'den Word'e Dönüştürücü",
                desc: "PDF dosyalarınızı düzenlenebilir Word belgelerine dönüştürün.",
                uploadTitle: "PDF Dosyası Yükle",
                uploadDesc: "Sürükleyip bırakın veya .pdf dosyası seçmek için tıklayın",
                convert: "Word'e Dönüştür",
                converting: "Dönüştürülüyor...",
                error: "Lütfen geçerli bir .pdf dosyası seçin",
                conversionError: "Dosya dönüştürülemedi. Lütfen tekrar deneyin."
            }
        },
        wordToPdf: {
            title: "Word'den PDF'e",
            description: "DOC ve DOCX dosyalarını PDF'e dönüştürerek okunabilir hale getirin.",
            editor: {
                title: "Word'den PDF'e Dönüştürücü",
                desc: "DOCX dosyalarınızı anında PDF'e dönüştürün.",
                uploadTitle: "Word Dosyası Yükle",
                uploadDesc: "Sürükleyip bırakın veya .docx dosyası seçmek için tıklayın",
                convert: "PDF'e Dönüştür",
                converting: "Dönüştürülüyor...",
                error: "Lütfen geçerli bir .docx dosyası seçin",
                conversionError: "Dosya dönüştürülemedi. Lütfen tekrar deneyin."
            }
        },
        sign: {
            title: "PDF İmzala",
            description: "Kendiniz imzalayın veya başkalarından elektronik imza isteyin."
        },
        edit: {
            title: "PDF Düzenle",
            description: "PDF dosyanıza metin, şekil, yorum ve vurgular ekleyin."
        },
        pdfToTxt: {
            title: "PDF'den TXT'ye",
            description: "PDF dosyanızdan metin çıkarın."
        },
        pdfToExcel: {
            title: "PDF'den Excel'e",
            description: "PDF verilerini Excel tablolarına dönüştürün."
        },
        ocr: {
            title: "OCR PDF",
            description: "PDF dosyanızdaki metni tanıyın."
        }
    },
    nav: {
        organize: "Organize Et",
        optimize: "Optimize Et",
        convert: "Dönüştür",
        edit: "Düzenle",
        pricing: "Fiyatlandırma",
        login: "Giriş",
        getStarted: "Başla"
    },
    footer: {
        product: "Ürün",
        company: "Şirket",
        connect: "Bağlan",
        rights: "Tüm hakları saklıdır.",
        links: {
            merge: "PDF Birleştir",
            compress: "PDF Sıkıştır",
            convert: "PDF Dönüştür",
            sign: "Belge İmzala",
            about: "Hakkımızda",
            blog: "Blog",
            privacy: "Gizlilik Politikası",
            terms: "Hizmet Şartları",
            privacyShort: "Gizlilik",
            termsShort: "Şartlar",
            cookies: "Çerezler"
        }
    },
    common: {
        comingSoon: "Yakında",
        selectedFiles: "Seçili Dosyalar",
        clearAll: "Hepsini Temizle",
        dropFiles: "PDF dosyalarını buraya bırakın",
        browse: "Gözat",
        processing: "İşleniyor...",
        download: "İndir",
        filesSelected: "{count} dosya seçildi",
        reset: "Sıfırla",
        mergeCount: "{count} PDF'i Birleştir",
        limit: "50MB'a kadar PDF dosyaları",
        clickToUpload: "Yüklemek için tıklayın veya sürükleyip bırakın",
        uploadImages: "Resim Yükle",
        dragDropImages: "JPG, PNG veya WebP resimlerini buraya sürükleyin veya seçmek için tıklayın.",
        addImages: "Resim Ekle",
        convertToPdf: "PDF'e Dönüştür",
        cookieBanner: {
            text: "Bu site deneyiminizi geliştirmek için çerezler kullanır.",
            accept: "Kabul Et"
        }
    },
    blog: {
        title: "Blog",
        description: "PDF araçları hakkında ipuçları, rehberler ve bilgiler",
        readMore: "Devamını Oku",
        publishedOn: "Yayınlanma tarihi",
        by: "yazar",
        tags: "Etiketler",
        backToBlog: "← Blog'a Dön",
        noPosts: "Henüz yazı yok. Yakında tekrar kontrol edin!",
        minRead: "dk okuma",
        relatedPosts: "İlgili Yazılar",
        allPosts: "Tüm Yazılar",
        categories: {
            all: "Tümü",
            guides: "Rehberler",
            tips: "İpuçları",
            general: "Genel",
            rehber: "Rehberler",
            "ipuçları": "İpuçları"
        }
    }
};

const sq = {
    metadata: {
        title: "KeepPDF | Bashko, Ndaj & Kompreso skedarët PDF Online - Falas",
        description: "Bashkoni, ndani, kompresoni dhe konvertoni skedarët PDF lehtësisht dhe falas. Sigurt, shpejt dhe pa pasur nevojë për instalim. Provoni mjetet KeepPDF tani.",
        merge: {
            title: "Bashko skedarët PDF Online - Kombino PDF menjëherë falas | KeepPDF",
            description: "Kombinoni skedarë të shumtë PDF në një dokument të vetëm falas. Nuk ka nevojë për ngarkim skedarësh — bashkoni PDF-të në mënyrë të sigurt në shfletuesin tuaj.",
            h1: "Bashko skedarët PDF Online Falas"
        },
        split: {
            title: "Ndaj PDF - Nxirr faqet nga PDF Online Falas | KeepPDF",
            description: "Ndani skedarët PDF dhe nxirrni faqe specifike ose vargje faqesh falas. Shpejt, sigurt dhe bazuar në shfletues — nuk kërkohet instalim softueri.",
            h1: "Ndaj PDF dhe Nxirr Faqet Online"
        },
        compress: {
            title: "Kompreso PDF - Zvogëlo madhësinë e skedarit PDF Online Falas | KeepPDF",
            description: "Zvogëloni madhësinë e skedarit PDF duke ruajtur cilësinë. Zgjidhni mënyrat e kompresimit bazë ose të fortë. Falas, privat dhe i përpunuar plotësisht në shfletuesin tuaj.",
            h1: "Kompreso skedarët PDF Online Falas"
        },
        organize: {
            title: "Organizo faqet e PDF - Rirendit, Rrotullo & Fshi | KeepPDF",
            description: "Rirregulloni, rrotulloni dhe fshini faqet PDF me lehtësinë drag-and-drop. Organizues online falas i faqeve PDF — pa ngarkim, plotësisht në shfletues.",
            h1: "Organizo dhe Rirendit faqet PDF Online"
        },
        pdfToImage: {
            title: "PDF në JPG - Konverto faqet e PDF në Imazhe Falas | KeepPDF",
            description: "Konvertoni faqet PDF në imazhe JPG me cilësi të lartë menjëherë. Nxirrni çdo faqe si një imazh të veçantë falas, direkt në shfletuesin tuaj.",
            h1: "Konverto PDF në Imazhe JPG Online"
        },
        imageToPdf: {
            title: "JPG në PDF - Konverto Imazhet në PDF Online Falas | KeepPDF",
            description: "Konvertoni imazhet JPG, PNG dhe WebP në dokumente PDF falas. Rregulloni orientimin dhe margjinat — shpejt, privat dhe bazuar në shfletues.",
            h1: "Konverto Imazhet në PDF Online Falas"
        },
        pdfToWord: {
            title: "PDF në Word - Konverto PDF në DOCX Online Falas | KeepPDF",
            description: "Konvertoni skedarët PDF në dokumente Word të redaktueshme med saktësi të lartë. Konvertues online falas PDF në DOCX — pa regjistrim, pa ngarkim skedarësh.",
            h1: "Konverto PDF në Dokumente Word Online"
        },
        wordToPdf: {
            title: "Word në PDF - Konverto DOCX në PDF Online Falas | KeepPDF",
            description: "Konvertoni dokumentet Word në format PDF menjëherë. Konvertues falas DOCX në PDF — ruan formatimin, nuk kërkohet instalim ose regjistrim.",
            h1: "Konverto Word në PDF Online Falas"
        },
        signPdf: {
            title: "Nënshkruaj PDF Online - Shto Nënshkrim Elektronik Falas | KeepPDF",
            description: "Nënshkruani dokumentet PDF në mënyrë elektronike falas. Shtoni nënshkrimin tuaj në çdo PDF direkt në shfletuesin tuaj — sigurt, shpejt dhe pa llogari.",
            h1: "Nënshkruaj Dokumentet PDF Online Falas"
        },
        editPdf: {
            title: "Redakto PDF Online - Shto Tekst, Forma & Nënshkrime | KeepPDF",
            description: "Redaktoni skedarët PDF online falas. Shtoni tekst, forma, komente dhe nënshkrime në dokumentet tuaja PDF direkt në shfletues — nuk kërkohet softuer.",
            h1: "Redakto skedarët PDF Online Falas"
        },
        pdfToTxt: {
            title: "PDF në TXT - Nxirr Tekstin nga PDF Online Falas | KeepPDF",
            description: "Nxirrni përmbajtjen e tekstit nga skedarët PDF menjëherë. Konvertues online falas PDF në tekst të thjeshtë — i përpunuar në shfletues, pa ngarkim.",
            h1: "Nxirr Tekstin nga PDF Online"
        },
        pdfToExcel: {
            title: "PDF në Excel - Konverto PDF në Spreadsheet Falas | KeepPDF",
            description: "Konvertoni tabelat dhe të dhënat e PDF-së në tabela Excel falas. Konvertues i saktë PDF në XLSX — konvertim i shpejtë, privat dhe në shfletues.",
            h1: "Konverto PDF në Tabela Excel Online"
        },
        ocrPdf: {
            title: "OCR PDF - Njih Tekstin në PDF Online Falas | KeepPDF",
            description: "Njihni dhe nxirrni tekstin nga PDF-të e skanuara duke përdorur teknologjinë OCR. Njohje optike e karaktereve online falas — pa nevojë për instalim.",
            h1: "OCR PDF - Njihni Tekstin në PDF-të e Skanuara"
        },
        blog: {
            title: "Blog - Këshilla, Udhëzues & Tutoriale për PDF | KeepPDF",
            description: "Zbuloni udhëzues të dobishëm, këshilla dhe tutoriale rreth mjeteve PDF. Mësoni si të bashkoni, ndani, kompresoni dhe konvertoni PDF si një profesionist.",
            h1: "KeepPDF Blog"
        }
    },
    hero: {
        title: "Bashko PDF-të Menjëherë",
        description: "Mjete PDF të sigurta dhe të fokusuara te privatësia. Bashkoni, ndani, kompresoni dhe më shumë pa i ngarkuar skedarët tuaj në një server.",
        cta: "Fillo Bashkimin",
        trustBanner: {
            secureTitle: "100% Privat",
            secureDesc: "Skedarët nuk dalin kurrë nga shfletuesi",
            fastTitle: "Shpejtësi e Menjëhershme",
            fastDesc: "Nuk kërkohet ngarkim në server",
            freeTitle: "Pa Limite",
            freeDesc: "Plotësisht falas, përgjithmonë"
        }
    },
    why: {
        title: "Pse KeepPDF?",
        description: "KeepPDF ofron një suitë të plotë mjetesh PDF direkt në shfletuesin tuaj. Ne prioritizojmë privatësinë tuaj; skedarët përpunohen në mënyrë të sigurt dhe fshihen automatikisht. Pavarësisht nëse ju duhet të bashkoni raporte për punë apo të kompresoni detyrat për shkollë, KeepPDF është i shpejtë, falas dhe i lehtë për t'u përdorur.",
        secure: {
            title: "I Sigurt & Privat",
            description: "Skedarët përpunohen lokalisht në shfletuesin tuaj ose fshihen automatikisht pas përpunimit."
        },
        fast: {
            title: "I Shpejtë si Rrufeja",
            description: "Algoritmet e optimizuara sigurojnë që dokumentet tuaja të përpunohen në sekonda, jo në minuta."
        },
        free: {
            title: "100% Falas",
            description: "Pa kosto të fshehura, pa pajtime, pa watermark. Vetëm mjete të pastra PDF."
        }
    },
    faq: {
        title: "Pyetjet e Shpeshta",
        questions: [
            {
                question: "A është KeepPDF falas?",
                answer: "Po, të gjitha mjetet tona, përfshirë Bashkimin, Ndarjen dhe Kompresimin, janë plotësisht falas për t'u përdorur."
            },
            {
                question: "A janë skedarët e mi të sigurt?",
                answer: "Absolutisht. Ne përdorim përpunim të sigurt dhe nuk i ruajmë skedarët tuaj përgjithmonë."
            }
        ]
    },
    tools: {
        merge: {
            title: "Bashko PDF",
            description: "Kombinoni skedarë të shumtë PDF në një."
        },
        split: {
            title: "Ndaj PDF",
            description: "Ndani një faqe ose një grup të tërë për konvertim të lehtë në skedarë PDF të pavarur.",
            editor: {
                pageCount: "u gjetën {count} faqe",
                selectAll: "Zgjidh të Gjitha",
                deselect: "Çzgjidh",
                extract: "Nxirr {count} Faqe",
                selectPages: "Zgjidh Faqet",
                loading: "Duke ngarkuar faqet e PDF-së...",
            }
        },
        compress: {
            title: "Kompreso PDF",
            description: "Zvogëloni madhësinë e skedarit duke optimizuar për cilësinë maksimale të PDF-së.",
            editor: {
                success: "Kompresimi i Suksesshëm!",
                original: "Origjinali",
                compressed: "I Kompresuar",
                reduction: "{percent}% zvogëlim",
                download: "Shkarko PDF",
                compressAnother: "Kompreso një Skedar tjetër",
                basic: "Kompresim Bazë",
                basicDesc: "Optimizon strukturën e skedarit dhe heq të dhënat e papërdorura. Më e mira për dokumente me tekst. Cilësi e lartë.",
                strong: "Kompresim i Fortë",
                strongDesc: "I kthen faqet në imazhe. Më e mira për dokumente të skanuara ose PDF me shumë imazhe.",
                strongNote: "Mund të zvogëlojë qartësinë e tekstit.",
                processing: "Duke u kompresuar... {percent}%",
                button: "Kompreso PDF Tani",
                error: "Diçka shkoi keq gjatë kompresimit. Provoni një mënyrë tjetër."
            }
        },
        pdfToImage: {
            title: "PDF në JPG",
            description: "Nxirrni imazhet nga PDF-ja juaj ose ruani çdo faqe si një imazh të veçantë."
        },
        imageToPdf: {
            title: "JPG në PDF",
            description: "Rregulloni orientimin dhe margjinat e imazheve tuaja."
        },
        organize: {
            title: "Organizo PDF",
            description: "Renditni faqet e skedarit tuaj PDF si të dëshironi. Fshini faqe ose shtoni faqe në dokumentin tuaj.",
            editor: {
                subtitle: "Rirregulloni faqet, rrotulloni ose hiqni faqet e padëshiruara nga PDF-ja juaj.",
                loading: "Duke ngarkuar PDF-në tuaj...",
                pageCount: "{count} faqe",
                rotateLeft: "Majtas",
                rotateRight: "Djathtas",
                rotateAllLeft: "Rrotullo të Gjitha Majtas",
                rotateAllRight: "Rrotullo të Gjitha Djathtas",
                deletePage: "Fshi Faqen",
                save: "Ruaj PDF"
            }
        },
        pdfToWord: {
            title: "PDF në Word",
            description: "Konvertoni PDF-në tuaj në dokumente WORD me saktësi të jashtëzakonshme.",
            editor: {
                title: "Konvertues PDF në Word",
                desc: "Konvertoni skedarët tuaj PDF specifike në dokumente Word të redaktueshme.",
                uploadTitle: "Ngarko skedarin PDF",
                uploadDesc: "Drag & drop ose klikoni për të zgjedhur skedarin .pdf",
                convert: "Konverto në Word",
                converting: "Duke u konvertuar...",
                error: "Ju lutem zgjidhni një skedar .pdf të vlefshëm",
                conversionError: "Dështoi konvertimi i skedarit. Ju lutem provoni përsëri."
            }
        },
        wordToPdf: {
            title: "Word në PDF",
            description: "Bëni skedarët DOC dhe DOCX të lehtë për t'u lexuar duke i konvertuar në PDF.",
            editor: {
                title: "Konvertues Word në PDF",
                desc: "Konvertoni skedarët tuaj DOCX në PDF menjëherë.",
                uploadTitle: "Ngarko skedarin Word",
                uploadDesc: "Drag & drop ose klikoni për të zgjedhur skedarin .docx",
                convert: "Konverto në PDF",
                converting: "Duke u konvertuar...",
                error: "Ju lutem zgjidhni një skedar .docx të vlefshëm",
                conversionError: "Dështoi konvertimi i skedarit. Ju lutem provoni përsëri."
            }
        },
        sign: {
            title: "Nënshkruaj PDF",
            description: "Nënshkruani vetë ose kërkoni nënshkrime elektronike nga të tjerët."
        },
        edit: {
            title: "Redakto PDF",
            description: "Shtoni tekst, forma, komente dhe nënshkrime në skedarin tuaj PDF."
        },
        pdfToTxt: {
            title: "PDF në TXT",
            description: "Nxirrni tekstin nga skedari juaj PDF."
        },
        pdfToExcel: {
            title: "PDF në Excel",
            description: "Konvertoni të dhënat e PDF-së në tabela Excel."
        },
        ocr: {
            title: "OCR PDF",
            description: "Njihni tekstin në skedarin tuaj PDF."
        }
    },
    nav: {
        organize: "Organizo",
        optimize: "Optimizo",
        convert: "Konverto",
        edit: "Redakto",
        pricing: "Çmimet",
        login: "Hyr",
        getStarted: "Fillo"
    },
    footer: {
        product: "Produkti",
        company: "Kompania",
        connect: "Lidhu",
        rights: "Të gjitha të drejtat e rezervuara.",
        links: {
            merge: "Bashko PDF",
            compress: "Kompreso PDF",
            convert: "Konverto PDF",
            sign: "Nënshkruaj Dokumente",
            about: "Rreth Nesh",
            blog: "Blog",
            privacy: "Politika e Privatësisë",
            terms: "Kushtet e Shërbimit",
            privacyShort: "Privatësia",
            termsShort: "Kushtet",
            cookies: "Cookies"
        }
    },
    common: {
        comingSoon: "Së shpejti",
        selectedFiles: "Skedarët e Zgjedhur",
        clearAll: "Pastro të Gjitha",
        dropFiles: "Lëshoni skedarët PDF këtu",
        browse: "Shfleto",
        processing: "Duke u përpunuar...",
        download: "Shkarko",
        filesSelected: "{count} skedar(ë) të zgjedhur",
        reset: "Rivendos",
        mergeCount: "Bashko {count} PDF",
        limit: "Skedarë PDF deri në 50MB",
        clickToUpload: "Klikoni për të ngarkuar ose drag & drop",
        uploadImages: "Ngarko Imazhe",
        dragDropImages: "Lëshoni imazhet JPG, PNG, ose WebP këtu, ose klikoni për të zgjedhur skedarët.",
        addImages: "Shto Imazhe",
        convertToPdf: "Konverto në PDF",
        cookieBanner: {
            text: "Ky sit përdor cookies për të përmirësuar përvojën tuaj.",
            accept: "Prano"
        }
    },
    blog: {
        title: "Blog",
        description: "Këshilla, udhëzues dhe informacione rreth mjeteve PDF",
        readMore: "Lexo më shumë",
        publishedOn: "Publikuar më",
        by: "nga",
        tags: "Etiketat",
        backToBlog: "← Kthehu te Blogu",
        noPosts: "Ende nuk ka postime. Kontrolloni përsëri së shpejti!",
        minRead: "min lexim",
        relatedPosts: "Postime të Ngjashme",
        allPosts: "Të gjitha Postimet",
        categories: {
            all: "Të gjitha",
            guides: "Udhëzues",
            tips: "Këshilla",
            general: "Të përgjithshme"
        }
    }
};

const dictionaries = {
    en: en,
    tr: tr,
    sq: sq,
};

const getDictionary = (locale) => dictionaries[locale] || dictionaries.en;
const locales = ['en', 'tr', 'sq'];

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-brand-600 border border-transparent hover:border-brand-100 shadow-sm"
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";

function LanguageSwitcher({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "sq", label: "Shqip", flag: "🇦🇱" }
  ];
  const handleSwitch = (newLang) => {
    if (newLang === lang) {
      setIsOpen(false);
      return;
    }
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    window.location.href = newPath;
    setIsOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all",
        children: [
          /* @__PURE__ */ jsx(Globe, { size: 18 }),
          /* @__PURE__ */ jsx("span", { className: "uppercase", children: lang })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-0 mt-2 w-40 bg-white rounded-xl border border-slate-100 shadow-xl p-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200", children: languages.map((l) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleSwitch(l.code),
        className: `w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${lang === l.code ? "bg-brand-50 text-brand-700 font-medium" : "text-slate-600 hover:bg-slate-50"}`,
        children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg", children: l.flag }),
            " ",
            l.label
          ] }),
          lang === l.code && /* @__PURE__ */ jsx(Check, { size: 14 })
        ]
      },
      l.code
    )) })
  ] });
}

function Navbar({ lang, dict }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const navMenus = [
    {
      title: dict?.nav?.organize || "Organize",
      items: [
        { name: dict?.tools?.split?.title, href: "/split", icon: LayoutTemplate, desc: dict?.tools?.split?.description },
        { name: dict?.tools?.merge?.title, href: "/merge-pdf", icon: Files, desc: dict?.tools?.merge?.description },
        { name: dict?.tools?.organize?.title, href: "/organize", icon: Files, desc: dict?.tools?.organize?.description }
      ]
    },
    {
      title: dict?.nav?.optimize || "Optimize",
      items: [
        { name: dict?.tools?.compress?.title, href: "/compress", icon: Minimize2, desc: dict?.tools?.compress?.description }
      ]
    },
    {
      title: dict?.nav?.convert || "Convert",
      items: [
        { name: dict?.tools?.imageToPdf?.title, href: "/image-to-pdf", icon: Image, desc: dict?.tools?.imageToPdf?.description },
        { name: dict?.tools?.pdfToWord?.title, href: "/pdf-to-word", icon: FileText, desc: dict?.tools?.pdfToWord?.description },
        { name: dict?.tools?.wordToPdf?.title, href: "/word-to-pdf", icon: FileText, desc: dict?.tools?.wordToPdf?.description },
        { name: dict?.tools?.pdfToImage?.title, href: "/pdf-to-image", icon: FileSpreadsheet, desc: dict?.tools?.pdfToImage?.description }
      ]
    },
    {
      title: dict?.nav?.edit || "Edit",
      items: [
        { name: dict?.tools?.edit?.title, href: "/edit-pdf", icon: LayoutTemplate, desc: dict?.tools?.edit?.description, badge: dict?.common?.comingSoon },
        { name: dict?.tools?.sign?.title, href: "/sign-pdf", icon: PenTool, desc: dict?.tools?.sign?.description, badge: dict?.common?.comingSoon },
        { name: dict?.tools?.ocr?.title, href: "/ocr-pdf", icon: ScanLine, desc: dict?.tools?.ocr?.description, badge: dict?.common?.comingSoon }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-custom flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsxs("a", { href: `/${lang}`, className: "flex items-center gap-2 group z-50 relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/brand-logo.svg",
            alt: "KeepPDF Logo",
            className: "w-8 h-8 rounded-lg group-hover:rotate-12 transition-transform"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold tracking-tight text-slate-900", children: [
          "Keep",
          /* @__PURE__ */ jsx("span", { className: "text-brand-600", children: "PDF" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
        navMenus.map((menu) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setHoveredMenu(menu.title),
            onMouseLeave: () => setHoveredMenu(null),
            children: [
              /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all", children: [
                menu.title,
                /* @__PURE__ */ jsx(
                  ChevronDown,
                  {
                    size: 14,
                    className: `transition-transform duration-200 ${hoveredMenu === menu.title ? "rotate-180" : ""}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(AnimatePresence, { children: hoveredMenu === menu.title && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10, scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 5, scale: 0.95 },
                  transition: { duration: 0.15 },
                  className: "absolute top-full text-left left-0 w-64 pt-2",
                  children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl border border-slate-100 shadow-xl p-2 overflow-hidden", children: menu.items.map((item) => /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: `/${lang}${item.href}`,
                      className: "flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors", children: /* @__PURE__ */ jsx(item.icon, { size: 16 }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700 group-hover:text-brand-600", children: item.name }),
                            item.badge && /* @__PURE__ */ jsx("span", { className: "px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wide", children: item.badge })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 font-medium line-clamp-1", children: item.desc })
                        ] })
                      ]
                    },
                    item.name
                  )) })
                }
              ) })
            ]
          },
          menu.title
        )),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all",
            children: dict?.nav?.pricing
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/${lang}/blog`,
            className: "px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-full transition-all",
            children: dict?.blog?.title || "Blog"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pl-2 border-l border-slate-100 ml-2", children: /* @__PURE__ */ jsx(LanguageSwitcher, { lang }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "lg:hidden p-2 text-slate-600",
          onClick: () => setIsOpen(!isOpen),
          children: isOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: "lg:hidden bg-white border-b border-gray-100 overflow-hidden max-h-[90vh] overflow-y-auto",
        children: /* @__PURE__ */ jsxs("div", { className: "container-custom py-6 flex flex-col gap-6", children: [
          navMenus.map((menu) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider px-2", children: menu.title }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1", children: menu.items.map((item) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/${lang}${item.href}`,
                onClick: () => setIsOpen(false),
                className: "flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-slate-400", children: /* @__PURE__ */ jsx(item.icon, { size: 18 }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700", children: item.name }),
                  item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase", children: item.badge })
                ]
              },
              item.name
            )) })
          ] }, menu.title)),
          /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 border-t border-slate-100 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/${lang}/blog`,
                onClick: () => setIsOpen(false),
                className: "flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100",
                children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700", children: dict?.blog?.title || "Blog" })
              }
            ),
            /* @__PURE__ */ jsx(LanguageSwitcher, { lang })
          ] })
        ] })
      }
    ) })
  ] });
}

function CookieBanner({ dict }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-700", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/95 backdrop-blur-md text-slate-100 rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-700/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-slate-800 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(Cookie, { size: 20, className: "text-amber-400" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium pr-4", children: dict.common.cookieBanner.text })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAccept,
        className: "whitespace-nowrap px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5",
        children: dict.common.cookieBanner.accept
      }
    )
  ] }) }) });
}

export { $$Footer as $, Button as B, CookieBanner as C, Navbar as N, cn as c, getDictionary as g, locales as l };
