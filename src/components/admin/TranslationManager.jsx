import { useState, useMemo } from "react";
import { en } from "../../i18n/en";
import { tr } from "../../i18n/tr";
import { useCases } from "../../data/useCases";
import { howTo } from "../../data/howTo";

const SECTIONS = {
    metadata: { label: "🏷️ Metadata (SEO)", desc: "Per-page SEO: title, description & H1 for every page" },
    hero: { label: "🦸 Hero Section", desc: "Main landing page hero" },
    why: { label: "💡 Why KeepPDF", desc: "Feature highlights section" },
    faq: { label: "❓ FAQ", desc: "Frequently asked questions" },
    tools: { label: "🔧 Tools", desc: "PDF tool names, descriptions and editor UI" },
    nav: { label: "🧭 Navigation", desc: "Navbar menu labels" },
    footer: { label: "📄 Footer", desc: "Footer sections and links" },
    common: { label: "🌐 Common", desc: "Shared UI text (buttons, labels, etc.)" },
    useCases: { label: "🎯 Tool Use Cases", desc: "Why Should You Use This Tool (Cards)" },
    howTo: { label: "📖 How To Steps", desc: "Step by step instructions for tools" },
    blog: { label: "📝 Blog", desc: "Blog page UI labels and categories" },
};

function flattenObj(obj, prefix = "") {
    const result = [];
    for (const key of Object.keys(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        const val = obj[key];
        if (val === null || val === undefined) {
            result.push({ key: fullKey, value: "" });
        } else if (Array.isArray(val)) {
            val.forEach((item, idx) => {
                if (typeof item === "object") {
                    result.push(...flattenObj(item, `${fullKey}[${idx}]`));
                } else {
                    result.push({ key: `${fullKey}[${idx}]`, value: String(item) });
                }
            });
        } else if (typeof val === "object") {
            result.push(...flattenObj(val, fullKey));
        } else {
            result.push({ key: fullKey, value: String(val) });
        }
    }
    return result;
}

function getNestedValue(obj, path) {
    const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
    let current = obj;
    for (const part of parts) {
        if (current === undefined || current === null) return "";
        current = current[part];
    }
    return current === undefined || current === null ? "" : String(current);
}

function getSection(key) {
    return key.split(".")[0].replace(/\[\d+\]/, "");
}

export default function TranslationManager() {
    const [search, setSearch] = useState("");
    const [activeSection, setActiveSection] = useState("all");
    const [showMissing, setShowMissing] = useState(false);
    const [copiedKey, setCopiedKey] = useState(null);

    const allKeys = useMemo(() => {
        const combinedEn = { ...en, useCases: {}, howTo: {} };
        const combinedTr = { ...tr, useCases: {}, howTo: {} };

        for (const [toolSlug, toolData] of Object.entries(useCases)) {
            if (toolData.en) combinedEn.useCases[toolSlug] = toolData.en;
            if (toolData.tr) combinedTr.useCases[toolSlug] = toolData.tr;
        }

        for (const [toolSlug, toolData] of Object.entries(howTo)) {
            if (toolData.en) combinedEn.howTo[toolSlug] = toolData.en;
            if (toolData.tr) combinedTr.howTo[toolSlug] = toolData.tr;
        }

        const flat = flattenObj(combinedEn);
        return flat.map((item) => ({
            key: item.key,
            en: item.value,
            tr: getNestedValue(combinedTr, item.key),
            section: getSection(item.key),
        }));
    }, []);

    const sections = useMemo(() => {
        const s = new Set(allKeys.map((k) => k.section));
        return Array.from(s);
    }, [allKeys]);

    const filtered = useMemo(() => {
        return allKeys.filter((item) => {
            if (activeSection !== "all" && item.section !== activeSection) return false;
            if (showMissing && item.tr && item.tr.length > 0) return false;
            if (search) {
                const q = search.toLowerCase();
                return (
                    item.key.toLowerCase().includes(q) ||
                    item.en.toLowerCase().includes(q) ||
                    item.tr.toLowerCase().includes(q)
                );
            }
            return true;
        });
    }, [allKeys, activeSection, search, showMissing]);

    const stats = useMemo(() => {
        const total = allKeys.length;
        const translated = allKeys.filter((k) => k.tr && k.tr.length > 0).length;
        const missing = total - translated;
        return { total, translated, missing };
    }, [allKeys]);

    const copyKey = (key) => {
        navigator.clipboard.writeText(key);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const exportJSON = () => {
        const grouped = {};
        allKeys.forEach((item) => {
            grouped[item.key] = { en: item.en, tr: item.tr };
        });
        const blob = new Blob([JSON.stringify(grouped, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "translations.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)", color: "white", padding: "32px 0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                <a href="/en" style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, textDecoration: "none" }}>← Back to Site</a>
                            </div>
                            <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                                🌍 Translation Manager
                            </h1>
                            <p style={{ margin: "8px 0 0", opacity: 0.7, fontSize: 15 }}>
                                All text strings used across KeepPDF — organized for easy translation
                            </p>
                        </div>
                        <button onClick={exportJSON} style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "10px 20px", borderRadius: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8 }}>
                            📥 Export JSON
                        </button>
                    </div>
                    {/* Stats */}
                    <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
                        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 20px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", minWidth: 140 }}>
                            <div style={{ fontSize: 24, fontWeight: 800 }}>{stats.total}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Total Keys</div>
                        </div>
                        <div style={{ background: "rgba(34,197,94,0.15)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(34,197,94,0.2)", minWidth: 140 }}>
                            <div style={{ fontSize: 24, fontWeight: 800, color: "#4ade80" }}>{stats.translated}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Translated (TR)</div>
                        </div>
                        <div style={{ background: "rgba(239,68,68,0.15)", borderRadius: 12, padding: "14px 20px", border: "1px solid rgba(239,68,68,0.2)", minWidth: 140 }}>
                            <div style={{ fontSize: 24, fontWeight: 800, color: "#f87171" }}>{stats.missing}</div>
                            <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 500 }}>Missing</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 24px 0" }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ flex: 1, minWidth: 280, position: "relative" }}>
                        <input
                            type="text"
                            placeholder="Search keys, EN or TR text..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ width: "100%", padding: "12px 16px 12px 44px", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 14, outline: "none", background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
                        />
                        <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 18 }}>🔍</span>
                    </div>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: showMissing ? "#fef2f2" : "white", border: `1px solid ${showMissing ? "#fecaca" : "#e2e8f0"}`, cursor: "pointer", fontSize: 13, fontWeight: 500, color: showMissing ? "#dc2626" : "#64748b", userSelect: "none" }}>
                        <input type="checkbox" checked={showMissing} onChange={(e) => setShowMissing(e.target.checked)} style={{ accentColor: "#dc2626" }} />
                        Missing only
                    </label>
                    <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>
                        {filtered.length} / {stats.total} keys
                    </span>
                </div>
            </div>

            {/* Section Tabs */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px 0" }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button
                        onClick={() => setActiveSection("all")}
                        style={{ padding: "8px 16px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: activeSection === "all" ? "#4f46e5" : "white", color: activeSection === "all" ? "white" : "#64748b", boxShadow: activeSection === "all" ? "0 4px 12px rgba(79,70,229,0.3)" : "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.15s" }}
                    >
                        All ({stats.total})
                    </button>
                    {sections.map((sec) => {
                        const info = SECTIONS[sec] || { label: sec };
                        const count = allKeys.filter((k) => k.section === sec).length;
                        return (
                            <button
                                key={sec}
                                onClick={() => setActiveSection(sec)}
                                style={{ padding: "8px 16px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: activeSection === sec ? "#4f46e5" : "white", color: activeSection === sec ? "white" : "#64748b", boxShadow: activeSection === sec ? "0 4px 12px rgba(79,70,229,0.3)" : "0 1px 3px rgba(0,0,0,0.05)", transition: "all 0.15s" }}
                            >
                                {info.label || sec} ({count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Table */}
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px 40px" }}>
                <div style={{ background: "white", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                    {/* Table Header */}
                    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 1fr 50px", gap: 0, padding: "14px 20px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        <div>Key</div>
                        <div>🇬🇧 English</div>
                        <div>🇹🇷 Turkish</div>
                        <div></div>
                    </div>
                    {/* Rows */}
                    {filtered.length === 0 ? (
                        <div style={{ padding: 48, textAlign: "center", color: "#94a3b8" }}>
                            <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                            <p style={{ fontWeight: 600 }}>No matching keys found</p>
                            <p style={{ fontSize: 13 }}>Try adjusting your search or filters</p>
                        </div>
                    ) : (
                        filtered.map((item, idx) => {
                            const isLong = item.en.length > 80;
                            const isMissing = !item.tr || item.tr.length === 0;
                            return (
                                <div
                                    key={item.key}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "280px 1fr 1fr 50px",
                                        gap: 0,
                                        padding: "14px 20px",
                                        borderBottom: idx < filtered.length - 1 ? "1px solid #f1f5f9" : "none",
                                        alignItems: isLong ? "flex-start" : "center",
                                        transition: "background 0.1s",
                                        background: isMissing ? "#fffbeb" : "transparent",
                                    }}
                                    onMouseEnter={(e) => { if (!isMissing) e.currentTarget.style.background = "#f8fafc"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = isMissing ? "#fffbeb" : "transparent"; }}
                                >
                                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                        <code style={{ fontSize: 12, color: "#6366f1", fontWeight: 600, wordBreak: "break-all", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", lineHeight: 1.4 }}>
                                            {item.key}
                                        </code>
                                        <span style={{ fontSize: 10, color: "#cbd5e1", fontWeight: 500 }}>
                                            {(SECTIONS[item.section]?.label || item.section).replace(/[^\w\s]/g, "").trim()}
                                        </span>
                                    </div>
                                    <div style={{ padding: "0 12px", fontSize: 13, color: "#334155", lineHeight: 1.5 }}>
                                        {item.en}
                                    </div>
                                    <div style={{ padding: "0 12px", fontSize: 13, lineHeight: 1.5, color: isMissing ? "#dc2626" : "#334155" }}>
                                        {isMissing ? (
                                            <span style={{ background: "#fee2e2", color: "#dc2626", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>
                                                ⚠ NOT TRANSLATED
                                            </span>
                                        ) : item.tr}
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <button
                                            onClick={() => copyKey(item.key)}
                                            title="Copy key path"
                                            style={{ width: 32, height: 32, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, background: copiedKey === item.key ? "#dcfce7" : "transparent", color: copiedKey === item.key ? "#16a34a" : "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}
                                        >
                                            {copiedKey === item.key ? "✓" : "📋"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
