# Release Checklist — v1.0.0

- [x] Version set to `1.0.0`
- [x] No built-in project route/KMZ/base-axis data
- [x] Blank first-run state
- [x] Multi-route KML/KMZ import with preview + route naming
- [x] Route rename/delete after import
- [x] Generic fronts/features/timeline/gap logic for arbitrary route IDs
- [x] Presentation HTML generated from current snapshot and excludes Sequence/Gap management
- [x] Developer section: مصطفی عرفانی / MOSTAFA5804 / GitHub icon
- [x] Windows Electron wrapper included
- [x] GitHub Actions Windows build workflow included
- [x] No Python required on target Windows computers
- [x] Static/package QA passed

## Before making the repository public

1. Decide whether you want to add a `LICENSE` file. No license is included by default.
2. Create the GitHub repository and upload the contents of this folder.
3. Run `Actions → Build Windows EXE → Run workflow` or push tag `v1.0.0`.
4. Download the generated `.exe` artifact and test it on a clean Windows PC.
5. Optional for wider public distribution: configure Windows code signing to reduce SmartScreen warnings.
