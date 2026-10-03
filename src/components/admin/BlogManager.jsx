import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { 
    Plus, 
    Edit3, 
    Trash2, 
    ExternalLink, 
    Save, 
    Eye, 
    Sparkles, 
    CheckCircle2, 
    AlertCircle, 
    Globe, 
    RefreshCw,
    Search,
    FileText
} from 'lucide-react';

const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'et', name: 'Eesti', flag: '🇪🇪' },
    { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
];

const categories = ['Guides', 'Tips', 'Legal', 'Portals', 'Education', 'General'];

function slugify(text) {
    const trMap = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u' };
    let slug = text.toLowerCase();
    for (const key in trMap) {
        slug = slug.replaceAll(key, trMap[key]);
    }
    return slug
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

export default function BlogManager() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [activeView, setActiveView] = useState('list'); // 'list' | 'editor'
    const [selectedLang, setSelectedLang] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [previewMode, setPreviewMode] = useState(false);

    // Form state
    const [currentPostId, setCurrentPostId] = useState(null);
    const [formLang, setFormLang] = useState('tr');
    const [formTitle, setFormTitle] = useState('');
    const [formSlug, setFormSlug] = useState('');
    const [formDescription, setFormDescription] = useState('');
    const [formCategory, setFormCategory] = useState('Guides');
    const [formTags, setFormTags] = useState('');
    const [formCoverImage, setFormCoverImage] = useState('');
    const [formContent, setFormContent] = useState('');
    const [formIsPublished, setFormIsPublished] = useState(true);
    const [saving, setSaving] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                if (error.code === '42P01' || error.message.includes('does not exist')) {
                    setError('Tablo bulunamadı! Lütfen Supabase SQL Editor üzerinden `blog_posts` tablosunu oluşturun.');
                } else {
                    setError(error.message);
                }
            } else {
                setPosts(data || []);
            }
        } catch (err) {
            setError(err.message || 'Veritabanı bağlantı hatası');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setFormTitle(title);
        if (!currentPostId) {
            setFormSlug(slugify(title));
        }
    };

    const handleNewPost = () => {
        setCurrentPostId(null);
        setFormLang('tr');
        setFormTitle('');
        setFormSlug('');
        setFormDescription('');
        setFormCategory('Guides');
        setFormTags('');
        setFormCoverImage('');
        setFormContent(`## Giriş\n\nBuraya makalenizin giriş paragrafını yazın.\n\n### Önemli Noktalar\n\n- Madde 1\n- Madde 2\n\nSonuç olarak KeepPDF ile işlemlerinizi kolayca yapabilirsiniz.`);
        setFormIsPublished(true);
        setActiveView('editor');
        setPreviewMode(false);
    };

    const handleEditPost = (post) => {
        setCurrentPostId(post.id);
        setFormLang(post.lang || 'tr');
        setFormTitle(post.title || '');
        setFormSlug(post.slug || '');
        setFormDescription(post.description || '');
        setFormCategory(post.category || 'Guides');
        setFormTags(Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags || ''));
        setFormCoverImage(post.cover_image || '');
        setFormContent(post.content || '');
        setFormIsPublished(post.is_published !== false);
        setActiveView('editor');
        setPreviewMode(false);
    };

    const handleSavePost = async (e) => {
        e.preventDefault();
        if (!formTitle.trim() || !formSlug.trim() || !formContent.trim()) {
            alert('Lütfen Başlık, URL (Slug) ve İçerik alanlarını doldurun.');
            return;
        }

        setSaving(true);
        setError(null);

        const tagsArray = formTags
            .split(',')
            .map(t => t.trim())
            .filter(Boolean);

        const postPayload = {
            lang: formLang,
            slug: formSlug.trim(),
            title: formTitle.trim(),
            description: formDescription.trim(),
            category: formCategory,
            tags: tagsArray,
            cover_image: formCoverImage.trim() || null,
            content: formContent,
            is_published: formIsPublished,
            updated_at: new Date().toISOString()
        };

        if (currentPostId) {
            postPayload.id = currentPostId;
        }

        try {
            const { error: upsertErr } = await supabase
                .from('blog_posts')
                .upsert(postPayload, { onConflict: 'lang,slug' });

            if (upsertErr) throw upsertErr;

            setSuccessMessage(`🎉 Yazı başarıyla ${formIsPublished ? 'yayınlandı' : 'taslak olarak kaydedildi'}! Anında canlıda.`);
            setTimeout(() => setSuccessMessage(null), 5000);

            await fetchPosts();
            setActiveView('list');
        } catch (err) {
            setError('Kaydetme hatası: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    const handleDeletePost = async (id, title) => {
        if (!confirm(`"${title}" başlıklı yazıyı silmek istediğinizden emin misiniz?`)) return;

        try {
            const { error } = await supabase
                .from('blog_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setPosts(posts.filter(p => p.id !== id));
        } catch (err) {
            alert('Silinemedi: ' + err.message);
        }
    };

    const filteredPosts = posts.filter(post => {
        const matchesLang = selectedLang === 'all' || post.lang === selectedLang;
        const matchesQuery = !searchQuery || 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.slug.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLang && matchesQuery;
    });

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                        <Sparkles className="text-indigo-600" size={24} />
                        Canlı Blog Yöneticisi (Supabase)
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Yazı ekleyin veya düzenleyin. Git push veya Vercel build beklemeden <strong>0. saniyede anında canlıya</strong> geçer.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {activeView === 'editor' ? (
                        <button
                            type="button"
                            onClick={() => setActiveView('list')}
                            className="px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                        >
                            ← Yazı Listesine Dön
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleNewPost}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-md shadow-indigo-200 transition-all cursor-pointer"
                        >
                            <Plus size={18} />
                            Yeni Yazı Ekle
                        </button>
                    )}
                </div>
            </div>

            {/* Notification messages */}
            {successMessage && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span>{successMessage}</span>
                </div>
            )}

            {error && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <AlertCircle size={18} className="text-rose-600 flex-shrink-0" />
                        <span>{error}</span>
                    </div>
                    <button 
                        onClick={fetchPosts}
                        className="text-xs font-bold text-rose-700 underline hover:text-rose-900"
                    >
                        Yeniden Dene
                    </button>
                </div>
            )}

            {/* View: Post List */}
            {activeView === 'list' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Filters & Search Bar */}
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                            <button
                                type="button"
                                onClick={() => setSelectedLang('all')}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                                    selectedLang === 'all'
                                        ? 'bg-indigo-600 text-white shadow-sm'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                }`}
                            >
                                Tüm Diller ({posts.length})
                            </button>
                            {languages.map(l => (
                                <button
                                    key={l.code}
                                    type="button"
                                    onClick={() => setSelectedLang(l.code)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                                        selectedLang === l.code
                                            ? 'bg-indigo-600 text-white shadow-sm'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                    }`}
                                >
                                    <span>{l.flag}</span>
                                    <span>{l.name}</span>
                                    <span className="opacity-70 text-[10px]">
                                        ({posts.filter(p => p.lang === l.code).length})
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="relative min-w-[220px]">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Yazılarda ara..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Posts Table */}
                    {loading ? (
                        <div className="py-20 text-center text-slate-400 text-sm">
                            <RefreshCw className="animate-spin mx-auto mb-2 text-indigo-500" size={24} />
                            Veritabanından yazılar yükleniyor...
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="py-16 text-center">
                            <FileText size={40} className="mx-auto text-slate-300 mb-3" />
                            <h3 className="text-base font-bold text-slate-700">Henüz Veritabanında Yazı Yok</h3>
                            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-4">
                                Yukarıdaki "Yeni Yazı Ekle" butonuna tıklayarak ilk makalenizi oluşturabilir ve anında yayınlayabilirsiniz.
                            </p>
                            <button
                                type="button"
                                onClick={handleNewPost}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                            >
                                <Plus size={14} /> İlk Yazıyı Oluştur
                            </button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold text-xs uppercase tracking-wider">
                                        <th className="p-3.5 pl-6">Dil</th>
                                        <th className="p-3.5">Başlık & URL</th>
                                        <th className="p-3.5">Kategori</th>
                                        <th className="p-3.5">Durum</th>
                                        <th className="p-3.5">Tarih</th>
                                        <th className="p-3.5 pr-6 text-right">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredPosts.map(post => {
                                        const langObj = languages.find(l => l.code === post.lang) || { flag: '🌐', name: post.lang };
                                        return (
                                            <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                                                <td className="p-3.5 pl-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-bold">
                                                        <span>{langObj.flag}</span>
                                                        <span className="uppercase text-[11px]">{post.lang}</span>
                                                    </span>
                                                </td>
                                                <td className="p-3.5">
                                                    <p className="font-bold text-slate-900 line-clamp-1">{post.title}</p>
                                                    <p className="text-xs text-slate-400 font-mono mt-0.5">/{post.lang}/blog/{post.slug}</p>
                                                </td>
                                                <td className="p-3.5">
                                                    <span className="text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full font-medium">
                                                        {post.category || 'Guides'}
                                                    </span>
                                                </td>
                                                <td className="p-3.5">
                                                    {post.is_published !== false ? (
                                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Yayında (Canlı)
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                            Taslak
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-3.5 text-xs text-slate-400">
                                                    {new Date(post.created_at || Date.now()).toLocaleDateString('tr-TR')}
                                                </td>
                                                <td className="p-3.5 pr-6 text-right">
                                                    <div className="flex items-center justify-end gap-1.5">
                                                        <a
                                                            href={`/${post.lang}/blog/${post.slug}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                            title="Sitede Görüntüle"
                                                        >
                                                            <ExternalLink size={15} />
                                                        </a>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleEditPost(post)}
                                                            className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                                                            title="Düzenle"
                                                        >
                                                            <Edit3 size={15} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeletePost(post.id, post.title)}
                                                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                                                            title="Sil"
                                                        >
                                                            <Trash2 size={15} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            {/* View: Post Editor Form */}
            {activeView === 'editor' && (
                <form onSubmit={handleSavePost} className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Language selector */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                    Hedef Dil
                                </label>
                                <select
                                    value={formLang}
                                    onChange={e => setFormLang(e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-indigo-500"
                                >
                                    {languages.map(l => (
                                        <option key={l.code} value={l.code}>
                                            {l.flag} {l.name} ({l.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Category selector */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                    Kategori
                                </label>
                                <select
                                    value={formCategory}
                                    onChange={e => setFormCategory(e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-indigo-500"
                                >
                                    {categories.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Status toggle */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                    Yayın Durumu
                                </label>
                                <select
                                    value={formIsPublished ? 'published' : 'draft'}
                                    onChange={e => setFormIsPublished(e.target.value === 'published')}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:outline-none focus:border-indigo-500"
                                >
                                    <option value="published">🟢 Yayında (Canlı)</option>
                                    <option value="draft">🟡 Taslak (Gizli)</option>
                                </select>
                            </div>

                            {/* Tags input */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                    Etiketler (Virgülle ayırın)
                                </label>
                                <input
                                    type="text"
                                    placeholder="pdf, compress, 200kb"
                                    value={formTags}
                                    onChange={e => setFormTags(e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Title input */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                Makale Başlığı (H1)
                            </label>
                            <input
                                type="text"
                                placeholder="Örn: PDF Dosyası Nasıl 200KB Altına İndirilir?"
                                value={formTitle}
                                onChange={handleTitleChange}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-base font-bold text-slate-900 focus:outline-none focus:border-indigo-500"
                                required
                            />
                        </div>

                        {/* Slug URL */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                URL Yolu (Slug)
                            </label>
                            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-500 font-mono">
                                <span>https://keep-pdf.online/{formLang}/blog/</span>
                                <input
                                    type="text"
                                    value={formSlug}
                                    onChange={e => setFormSlug(slugify(e.target.value))}
                                    className="flex-grow bg-transparent text-slate-900 font-bold focus:outline-none ml-1"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description input */}
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                                Meta Açıklaması (Arama motorları ve kart özeti)
                            </label>
                            <textarea
                                rows={2}
                                placeholder="Google sonuçlarında ve kartlarda görünecek kısa ve çekici özet (140-160 karakter)..."
                                value={formDescription}
                                onChange={e => setFormDescription(e.target.value)}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* Content editor with toolbar */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                    Makale İçeriği (Markdown)
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setPreviewMode(!previewMode)}
                                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                                >
                                    <Eye size={13} />
                                    {previewMode ? 'Editöre Dön' : 'Önizlemeyi Göster'}
                                </button>
                            </div>

                            {/* Quick Markdown formatting bar */}
                            <div className="flex flex-wrap gap-1 p-2 bg-slate-100 border border-slate-200 rounded-t-xl text-xs font-semibold text-slate-700">
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + '\n## Yeni Başlık\n')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 cursor-pointer"
                                >
                                    H2
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + '\n### Alt Başlık\n')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 cursor-pointer"
                                >
                                    H3
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + ' **kalın metin** ')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold cursor-pointer"
                                >
                                    B
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + ' *italik metin* ')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 italic cursor-pointer"
                                >
                                    I
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + '\n- Madde 1\n- Madde 2\n')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 cursor-pointer"
                                >
                                    • Liste
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormContent(prev => prev + ' [Bağlantı Metni](https://keep-pdf.online) ')}
                                    className="px-2 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 cursor-pointer"
                                >
                                    🔗 Link
                                </button>
                            </div>

                            {previewMode ? (
                                <div className="p-6 bg-slate-50 border border-t-0 border-slate-200 rounded-b-xl min-h-[350px] prose prose-slate max-w-none">
                                    <h1 className="text-2xl font-bold mb-4">{formTitle || 'Başlık Yok'}</h1>
                                    <div className="whitespace-pre-wrap text-slate-800 text-sm leading-relaxed">
                                        {formContent}
                                    </div>
                                </div>
                            ) : (
                                <textarea
                                    rows={14}
                                    value={formContent}
                                    onChange={e => setFormContent(e.target.value)}
                                    placeholder="Makale içeriğinizi buraya yazın..."
                                    className="w-full p-4 bg-slate-50 border border-t-0 border-slate-200 rounded-b-xl text-sm font-mono focus:outline-none focus:border-indigo-500 leading-relaxed"
                                    required
                                />
                            )}
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setActiveView('list')}
                            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-200 transition-all cursor-pointer disabled:opacity-50"
                        >
                            <Save size={16} />
                            {saving ? 'Kaydediliyor...' : currentPostId ? 'Güncellemeleri Kaydet (Anında Canlı)' : 'Yazıyı Yayınla (Anında Canlı)'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
