# Peach 2026 — Project Charter

## Mission

Peach 2026 is an open-source, not-for-profit Linux distribution that imagines the Apple II line continuing past the IIGS into the present day. It ships as a Debian-based VirtualBox appliance that boots into a modern OS that faithfully emulates Peach I, II, II+, //e, or IIGS — phosphor green, system beeps, disk-drive chatter and all — powered by **PeachSquared**, our fork of the open-source GSSquared emulator.

This is a preservation and homage project, not a commercial one. It exists so the character of the Apple II era stays usable and explorable on modern hardware, without needing a museum piece to do it.

## Audience

- **Retrocomputing hobbyists** who want an authentic machine without sourcing real hardware.
- **Educators** teaching early personal-computing history, 6502/65C02 assembly, or BASIC.
- **Preservationists** interested in keeping period software, documentation, and behavior alive and correctly emulated.

Peach 2026 is not aimed at general Linux desktop users looking for a daily driver, and it assumes its audience already has (or wants to build) some familiarity with the machines it emulates.

## What "1.0" Means

A 1.0 release is the point at which someone can import one file into VirtualBox and get a working, authentic Peach experience with nothing further to configure. Concretely, that means:

- An official `.ova` appliance imports cleanly into VirtualBox on Windows, macOS, and Linux hosts, with sane default RAM/VRAM/CPU per machine profile.
- PeachSquared runs all five machine profiles — Peach I, II, II+, //e, IIGS — at verified emulation accuracy against a regression suite.
- The boot sequence, sound theme, and desktop theming are in place — the "look, feel, and sound" bar is met, not just the emulation layer.
- A curated launch library of public-domain/freeware software ships with per-title license records, browsable through a disk-image launcher.
- The apt repository, package signing, and an installable ISO (for anyone building their own VM) are all working end to end.
- A quick-start guide gets a new user from "downloaded the file" to "booted into a machine profile" with no outside help.
- GSSquared's license is confirmed upstream (not just assumed) before PeachSquared is redistributed publicly.

Everything not on this list — legitimate ROM sourcing, arm64 support, real-hardware transfer tooling, a deeper software library — is real, tracked work, just not a 1.0 blocker.

## Non-Goals

- **Not a bare-metal distro**, at least for 1.0 — Peach 2026 targets VirtualBox exclusively; a bare-metal install path is out of scope the project produces 1.0.
- **Not an Apple /// project** — the machine roster is fixed at I, II, II+, //e, and IIGS.
- **Not a silent GSSquared fork** — PeachSquared exists to package and extend, not to diverge; substantial enhancements are meant to be upstreamed back to GSSquared.
- **Not a resolver of ROM copyright** — Peach 2026 ships without bundled ROMs and defers legitimate ROM licensing to a post-1.0 investigation rather than blocking on it.
- **Not a trademark risk** — no direct use of Apple's name, marks, or artwork anywhere in the project; references to Apple II history stay oblique.
- **Not a commercial venture** — no monetization, ever, is planned for this project.

## Guiding Principles

- **Authenticity over convenience** where the two conflict — the whole point is the real behavior, sound, and feel of the original machines.
- **Upstream first** — improvements to the emulation core belong in GSSquared, with PeachSquared following as a downstream fork, not the other way around.
- **Legal caution over speed** — licensing questions (GSSquared's, ROMs', Peach's own code) get resolved before they become blockers, not after something ships on an assumption.
