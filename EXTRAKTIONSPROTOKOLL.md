# 📦 KI-Extraktionsprotokoll

**Ziel:** Alle Daten (Chats, Projekte, Einstellungen, hochgeladene Dateien) aus allen
genutzten KI-Diensten exportieren und **lokal** in einer einheitlichen Struktur ablegen.

**Stand:** Juli 2026 — Export-Wege ändern sich gelegentlich; wenn ein Menüpunkt nicht
mehr existiert, in den Einstellungen nach „Export“, „Daten“ oder „Privacy/Datenschutz“ suchen.

---

## 1. 🗂️ Lokale Ablagestruktur (einmalig anlegen)

```
KI-Archiv/
├── ChatGPT/
│   └── 2026-07-08_export/        ← pro Export ein Ordner mit Datum
├── Claude/
├── Gemini/
├── Copilot/
├── Perplexity/
├── Grok/
├── Sonstige/
└── INVENTAR.md                   ← Checkliste (siehe Abschnitt 4)
```

**Namenskonvention:** `JJJJ-MM-TT_export` — so bleibt die Historie sortierbar und
alte Exporte werden nie überschrieben.

Schnell anlegen (Terminal):

```bash
mkdir -p KI-Archiv/{ChatGPT,Claude,Gemini,Copilot,Perplexity,Grok,Sonstige}
```

---

## 2. 🔁 Ablauf pro Dienst (immer gleich)

1. **Export anfordern** (Weg siehe Abschnitt 3)
2. **E-Mail abwarten** — die meisten Dienste schicken einen Download-Link
   (⚠️ Links sind oft nur **24 Stunden** gültig → zeitnah herunterladen!)
3. **ZIP herunterladen** und in den passenden Ordner mit Datum verschieben
4. **Prüfen:** ZIP öffnen — sind die Chats wirklich drin? Stichprobe machen.
5. **Eintragen** in `INVENTAR.md` (Datum, Umfang, Format)
6. **ZIP behalten** (Original) + optional entpackte Kopie daneben

---

## 3. 🤖 Export-Anleitungen pro KI-Dienst

### ChatGPT (OpenAI)
- **Weg:** chatgpt.com → Profilbild → **Einstellungen → Datenkontrollen → Daten exportieren**
- **Lieferung:** E-Mail mit Download-Link (Link **24 h gültig**)
- **Inhalt:** `conversations.json` (alle Chats), `chat.html` (lesbare Version),
  `user.json`, Feedback, generierte/hochgeladene Bilder
- **Achtung:** Gelöschte Chats sind nicht enthalten. „Memory“-Einträge ggf. separat
  unter *Einstellungen → Personalisierung → Memory* abfotografieren/kopieren.

### Claude (Anthropic)
- **Weg:** claude.ai → **Einstellungen → Datenschutz → Daten exportieren**
- **Lieferung:** E-Mail mit Download-Link
- **Inhalt:** Chats als JSON (`conversations.json`), Nutzerdaten, Projekte
- **Claude Code (lokal!):** Sitzungen liegen bereits auf deinem Rechner unter
  `~/.claude/projects/` (JSONL-Dateien) — diesen Ordner einfach ins Archiv kopieren:
  ```bash
  cp -r ~/.claude/projects KI-Archiv/Claude/2026-07-08_claude-code-sessions
  ```

### Gemini (Google)
- **Weg:** [takeout.google.com](https://takeout.google.com) → alles abwählen →
  nur **„Gemini“** (bzw. „My Activity → Gemini Apps“) auswählen → Export erstellen
- **Lieferung:** E-Mail mit Link zu ZIP (kann je nach Größe dauern)
- **Inhalt:** Chat-Verläufe als HTML/JSON
- **Achtung:** Takeout deckt auch andere Google-Dienste ab — praktisch, um bei der
  Gelegenheit z. B. auch Google-Drive-Inhalte mitzusichern.

### Microsoft Copilot
- **Weg:** [account.microsoft.com/privacy](https://account.microsoft.com/privacy) →
  **Datenschutz-Dashboard → Aktivitätsverlauf / Copilot-Aktivität** → herunterladen
- **Inhalt:** Copilot-Chatverläufe (Umfang je nach Konto-Typ; Firmenkonto = Admin fragen)
- **GitHub Copilot:** Chat-Verläufe in der IDE sind i. d. R. **nicht exportierbar** —
  wichtige Antworten manuell als Markdown speichern.

### Perplexity
- **Weg:** perplexity.ai → **Einstellungen → Konto → Daten exportieren**
  (falls nicht vorhanden: Anfrage an support@perplexity.ai — Recht auf Datenkopie per DSGVO Art. 15/20)
- **Inhalt:** Threads/Suchverläufe

### Grok (xAI)
- **Weg (grok.com):** **Einstellungen → Datenkontrollen → Daten herunterladen**
- **Weg (Grok in X/Twitter):** X → **Einstellungen → Dein Konto → Archiv deiner Daten
  herunterladen** (enthält auch Grok-Verläufe)

### Weitere Dienste (Kurzform)
| Dienst | Weg |
|---|---|
| **Meta AI** | meta.ai → Einstellungen → Daten & Datenschutz → Informationen herunterladen |
| **Mistral / Le Chat** | Einstellungen prüfen; sonst DSGVO-Anfrage an den Support |
| **DeepSeek** | Einstellungen → Daten → Export; sonst Support-Anfrage |
| **Midjourney** | midjourney.com → eigene Galerie; Bilder per Massendownload sichern |

**Generell gilt (EU/DSGVO):** Jeder Dienst **muss** dir auf Anfrage eine Kopie deiner
Daten geben (Art. 15 & 20 DSGVO). Wenn es keinen Export-Button gibt → formlose E-Mail
an den Support: *„Ich beantrage eine Kopie meiner personenbezogenen Daten gemäß
Art. 20 DSGVO in einem maschinenlesbaren Format.“*

---

## 4. ✅ Inventar-Checkliste (Vorlage für `INVENTAR.md`)

```markdown
# KI-Archiv — Inventar

| Dienst     | Export angefordert | Heruntergeladen | Geprüft | Format | Notizen |
|------------|--------------------|-----------------|---------|--------|---------|
| ChatGPT    | ☐                  | ☐               | ☐       | JSON   |         |
| Claude     | ☐                  | ☐               | ☐       | JSON   |         |
| Claude Code| ☐ (lokal kopieren) | ☐               | ☐       | JSONL  |         |
| Gemini     | ☐                  | ☐               | ☐       | HTML   |         |
| Copilot    | ☐                  | ☐               | ☐       |        |         |
| Perplexity | ☐                  | ☐               | ☐       |        |         |
| Grok       | ☐                  | ☐               | ☐       |        |         |
```

---

## 5. 🔐 Aufbewahrung & Pflege

- **Backup:** Das `KI-Archiv/` zusätzlich auf eine externe Platte oder einen
  USB-Stick spiegeln (3-2-1-Regel: 3 Kopien, 2 Medien, 1 extern).
- **Verschlüsseln**, wenn persönliche Inhalte drin sind — z. B. den Ordner in einen
  verschlüsselten Container legen (VeraCrypt, Cryptomator) oder ZIP mit Passwort.
- **Nicht** unverschlüsselt in eine fremde Cloud hochladen — der Sinn des Archivs
  ist ja gerade die lokale Hoheit über die Daten.
- **Rhythmus:** Export alle **3–6 Monate** wiederholen; alte Exporte behalten
  (Dienste löschen alte Chats manchmal serverseitig).
- **Prüfsummen (optional):** `shasum -a 256 *.zip > checksums.txt` im Export-Ordner,
  um spätere Beschädigungen zu erkennen.
