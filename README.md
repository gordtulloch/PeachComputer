# Peach 2026

An open-source, not-for-profit Linux distribution that imagines the Apple II line continuing past the IIGS — culminating in **Peach 2026**, a Debian-based distro with the look, feel, and sound of the original hardware preserved through emulation.

## What this is

Peach 2026 boots straight into any of a fixed roster of machine profiles — **Peach I, II, II+, //e, and IIGS** (the Apple /// is intentionally out of scope) — using **PeachSquared**, our fork of the open-source GSSquared emulator. The whole thing ships as a **VirtualBox appliance** (`.ova`): import it, boot it, and you're at a green-phosphor prompt with period-correct beeps and disk-drive chatter — no bare-metal install, no dual-boot.

This is a hobbyist preservation project, not a commercial one. "Peach" is used because it isn't Apple: references to Apple's own history stay oblique (period terminology, "//e Edition" naming) rather than direct.

## Status

Early planning stage. Nothing here boots yet — the repo currently holds the project's build checklist as a static site.

## Repo layout

```
site/            Static website: the phase-by-phase build checklist
  index.html
  css/style.css
  js/app.js
```

Open [`site/index.html`](site/index.html) directly in a browser, or serve the folder locally:

```
cd site
python -m http.server 8000
```

Then visit `http://localhost:8000`. The site has no external dependencies (no CDNs, no web fonts) — everything it needs ships in the repo.

## Brand & legal notes

- **Naming:** "Peach" appears to carry no active trademark conflict for computer hardware/software, but that should be revisited if the project ever grows past hobbyist distribution.
- **ROMs:** 1.0 ships without bundled ROMs. Users source their own for now; a legitimate, Apple-friendly licensing path is a post-1.0 investigation, not a launch blocker.
- **PeachSquared:** GSSquared currently has no license specified upstream. Peach 2026 is proceeding on an *assumed* GPLv3 basis, but this needs to be confirmed with GSSquared's author before the fork ships — an unlicensed repo is all-rights-reserved by default.

See the [build checklist](site/index.html) (Phase 01 and Phase 03) for the live tracking of these items.

## License

Not yet decided for Peach 2026's own code and art — see Phase 01 of the build checklist. Whatever is chosen will need to be compatible with PeachSquared's upstream license and Debian's DFSG.
