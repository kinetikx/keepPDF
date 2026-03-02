import { useState, useMemo } from "react";
import { keywordPages } from "../../data/keywordPages";
import { languageRegistry } from "../../i18n/dictionary";

const SCORE_COLORS = {
    green: { bg: "#dcfce7", text: "#16a34a", border: "#86efac" },
    yellow: { bg: "#fef9c3", text: "#ca8a04", border: "#fde047" },
    red: { bg: "#fee2e2", text: "#dc2626", border: "#fca5a5" },
};

const STATUS_STYLES = {
    live: { bg: "#dcfce7", text: "#16a34a", label: "● Live" },
    draft: { bg: "#fef9c3", text: "#ca8a04", label: "◐ Draft" },
    planned: { bg: "#f1f5f9", text: "#64748b", label: "○ Planned" },
};

const TYPE_STYLES = {
    landing: { bg: "#ede9fe", text: "#7c3aed", icon: "🎯", label: "Landing" },
    blog: { bg: "#dbeafe", text: "#2563eb", icon: "📝", label: "Blog" },
};

export default function KeywordPagesDashboard() {
    const [filterLang, setFilterLang] = useState("all");
    const [filterTool, setFilterTool] = useState("all");
    const [filterType, setFilterType] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");
    const [sortBy, setSortBy] = useState("score");

    const langs = useMemo(() => [...new Set(keywordPages.map(p => p.lang))], []);
    const tools = useMemo(() => [...new Set(keywordPages.map(p => p.tool))], []);

    const filtered = useMemo(() => {
        let result = [...keywordPages];
        if (filterLang !== "all") result = result.filter(p => p.lang === filterLang);
        if (filterTool !== "all") result = result.filter(p => p.tool === filterTool);
        if (filterType !== "all") result = result.filter(p => p.type === filterType);
        if (filterStatus !== "all") result = result.filter(p => p.status === filterStatus);

        if (sortBy === "score") result.sort((a, b) => b.score - a.score);
        else if (sortBy === "lang") result.sort((a, b) => a.lang.localeCompare(b.lang));
        else if (sortBy === "keyword") result.sort((a, b) => a.keyword.localeCompare(b.keyword));

        return result;
    }, [filterLang, filterTool, filterType, filterStatus, sortBy]);

    // Group by language
    const grouped = useMemo(() => {
        const groups = {};
        filtered.forEach(p => {
            if (!groups[p.lang]) groups[p.lang] = [];
            groups[p.lang].push(p);
        });
        return groups;
    }, [filtered]);

    // Stats
    const stats = useMemo(() => ({
        total: keywordPages.length,
        live: keywordPages.filter(p => p.status === "live").length,
        draft: keywordPages.filter(p => p.status === "draft").length,
        planned: keywordPages.filter(p => p.status === "planned").length,
        langs: langs.length,
        avgScore: Math.round(keywordPages.reduce((s, p) => s + p.score, 0) / (keywordPages.length || 1)),
    }), [langs]);

    const checkTitleLength = (title) => {
        const len = title.length;
        if (len >= 50 && len <= 60) return { color: "#16a34a", label: `${len} ✓` };
        if (len < 50) return { color: "#ca8a04", label: `${len} (kısa)` };
        return { color: "#dc2626", label: `${len} (uzun)` };
    };

    const checkDescLength = (desc) => {
        const len = desc.length;
        if (len >= 140 && len <= 160) return { color: "#16a34a", label: `${len} ✓` };
        if (len < 140) return { color: "#ca8a04", label: `${len} (kısa)` };
        return { color: "#dc2626", label: `${len} (uzun)` };
    };

    return (
        <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)", color: "white", padding: "32px 0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                        🎯 Keyword Landing Pages
                    </h1>
                    <p style={{ margin: "8px 0 0", opacity: 0.7, fontSize: 15 }}>
                        All keyword-targeted pages across languages — monitor SEO scores, status, and metadata
                    </p>

                    {/* Stats */}
                    <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
                        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 20px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", minWidth: 110 }}>
                            <div style={{ fontSize: 24, fontWeight: 800 }}>{stats.total}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Total Pages</div>
                        </div>
                        <div style={{ background: "rgba(34,197,94,0.15)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(34,197,94,0.2)", minWidth: 110 }}>
                            <div style={{ fontSize: 24, fontWeight: 800, color: "#4ade80" }}>{stats.live}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Live</div>
                        </div>
                        <div style={{ background: "rgba(234,179,8,0.15)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(234,179,8,0.2)", minWidth: 110 }}>
                            <div style={{ fontSize: 24, fontWeight: 800, color: "#facc15" }}>{stats.planned}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Planned</div>
                        </div>
                        <div style={{ background: "rgba(99,102,241,0.15)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(99,102,241,0.2)", minWidth: 110 }}>
                            <div style={{ fontSize: 24, fontWeight: 800, color: "#818cf8" }}>{stats.langs}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Languages</div>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(255,255,255,0.1)", minWidth: 110 }}>
                            <div style={{ fontSize: 24, fontWeight: 800 }}>{stats.avgScore}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Avg Score</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 0" }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <select value={filterLang} onChange={e => setFilterLang(e.target.value)} style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 13, fontWeight: 600, background: "white", cursor: "pointer" }}>
                        <option value="all">🌍 All Languages</option>
                        {langs.map(l => {
                            const meta = languageRegistry[l];
                            return <option key={l} value={l}>{meta?.flag} {meta?.name || l.toUpperCase()} ({keywordPages.filter(p => p.lang === l).length})</option>;
                        })}
                    </select>
                    <select value={filterTool} onChange={e => setFilterTool(e.target.value)} style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 13, fontWeight: 600, background: "white", cursor: "pointer" }}>
                        <option value="all">🔧 All Tools</option>
                        {tools.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                    </select>
                    <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 13, fontWeight: 600, background: "white", cursor: "pointer" }}>
                        <option value="all">📄 All Types</option>
                        <option value="landing">🎯 Landing</option>
                        <option value="blog">📝 Blog</option>
                    </select>
                    <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e2e8f0", fontSize: 13, fontWeight: 600, background: "white", cursor: "pointer" }}>
                        <option value="all">All Status</option>
                        <option value="live">● Live</option>
                        <option value="draft">◐ Draft</option>
                        <option value="planned">○ Planned</option>
                    </select>
                    <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#64748b" }}>
                        <span>Sort:</span>
                        <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, background: "white", cursor: "pointer" }}>
                            <option value="score">Score ↓</option>
                            <option value="lang">Language</option>
                            <option value="keyword">Keyword</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Pages grouped by language */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px 40px" }}>
                {Object.keys(grouped).length === 0 ? (
                    <div style={{ textAlign: "center", padding: 60, color: "#94a3b8" }}>
                        <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                        <p style={{ fontSize: 16, fontWeight: 600 }}>No pages match your filters</p>
                    </div>
                ) : (
                    Object.entries(grouped).map(([lang, pages]) => {
                        const meta = languageRegistry[lang] || {};
                        return (
                            <div key={lang} style={{ marginBottom: 32 }}>
                                {/* Language Header */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                                    <span style={{ fontSize: 28 }}>{meta.flag || "🌐"}</span>
                                    <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1e293b", margin: 0 }}>
                                        {meta.name || lang.toUpperCase()}
                                    </h2>
                                    <span style={{ background: "#e2e8f0", color: "#475569", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
                                        {pages.length} page{pages.length > 1 ? "s" : ""}
                                    </span>
                                </div>

                                {/* Page Cards */}
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {pages.map(page => {
                                        const scoreStyle = SCORE_COLORS[page.scoreColor] || SCORE_COLORS.yellow;
                                        const statusStyle = STATUS_STYLES[page.status] || STATUS_STYLES.planned;
                                        const typeStyle = TYPE_STYLES[page.type] || TYPE_STYLES.landing;
                                        const titleCheck = checkTitleLength(page.title);
                                        const descCheck = checkDescLength(page.description);

                                        return (
                                            <div key={page.id} style={{
                                                background: "white",
                                                borderRadius: 16,
                                                border: "1px solid #e2e8f0",
                                                padding: "16px 20px",
                                                display: "grid",
                                                gridTemplateColumns: "1fr auto",
                                                gap: 16,
                                                alignItems: "center",
                                                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                                                transition: "box-shadow 0.15s",
                                            }}
                                                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"}
                                                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)"}
                                            >
                                                {/* Left: Info */}
                                                <div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                                                        {/* Score Badge */}
                                                        <span style={{
                                                            background: scoreStyle.bg,
                                                            color: scoreStyle.text,
                                                            border: `1px solid ${scoreStyle.border}`,
                                                            fontWeight: 800,
                                                            fontSize: 13,
                                                            padding: "3px 10px",
                                                            borderRadius: 8,
                                                        }}>
                                                            {page.score}
                                                        </span>
                                                        {/* Keyword */}
                                                        <span style={{ fontSize: 16, fontWeight: 700, color: "#1e293b" }}>
                                                            "{page.keyword}"
                                                        </span>
                                                        {/* Type Badge */}
                                                        <span style={{
                                                            background: typeStyle.bg,
                                                            color: typeStyle.text,
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                            padding: "2px 8px",
                                                            borderRadius: 6,
                                                        }}>
                                                            {typeStyle.icon} {typeStyle.label}
                                                        </span>
                                                        {/* Status Badge */}
                                                        <span style={{
                                                            background: statusStyle.bg,
                                                            color: statusStyle.text,
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                            padding: "2px 8px",
                                                            borderRadius: 6,
                                                        }}>
                                                            {statusStyle.label}
                                                        </span>
                                                        {/* Tool */}
                                                        <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>
                                                            🔧 {page.tool}
                                                        </span>
                                                    </div>

                                                    {/* URL */}
                                                    <a href={page.url} target="_blank" rel="noopener" style={{
                                                        fontSize: 13,
                                                        color: "#6366f1",
                                                        textDecoration: "none",
                                                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                                        fontWeight: 500,
                                                    }}>
                                                        {page.url}
                                                    </a>

                                                    {/* SEO Meta */}
                                                    <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
                                                        <div style={{ fontSize: 11, color: "#94a3b8" }}>
                                                            <span style={{ fontWeight: 600 }}>Title:</span>{" "}
                                                            <span style={{ color: titleCheck.color, fontWeight: 600 }}>{titleCheck.label}</span>
                                                            {" "}<span style={{ color: "#cbd5e1" }}>|</span>{" "}
                                                            <span style={{ color: "#64748b" }}>{page.title.substring(0, 50)}...</span>
                                                        </div>
                                                        <div style={{ fontSize: 11, color: "#94a3b8" }}>
                                                            <span style={{ fontWeight: 600 }}>Desc:</span>{" "}
                                                            <span style={{ color: descCheck.color, fontWeight: 600 }}>{descCheck.label}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right: H1 preview */}
                                                <div style={{
                                                    background: "#f8fafc",
                                                    borderRadius: 10,
                                                    padding: "10px 14px",
                                                    maxWidth: 280,
                                                    border: "1px solid #f1f5f9",
                                                }}>
                                                    <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>H1</div>
                                                    <div style={{ fontSize: 12, color: "#334155", fontWeight: 600, lineHeight: 1.4 }}>
                                                        {page.h1}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
