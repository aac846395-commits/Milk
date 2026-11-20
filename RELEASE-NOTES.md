# Release 3.2.2

Files changed: index.html, README.md (+ CHANGELOG.md, VERSION.txt, TEST-REPORT.md, RELEASE-NOTES.md). sw.js, manifest.json, icons unchanged.
Migration required: none. Data format, backups and encryption key derivation are unchanged.

## Before updating
1. Settings -> Download Backup (.json) and keep it in Drive/WhatsApp.
## Update
2. Replace index.html (and README.md) in the GitHub repo, commit, wait for Pages deploy.
3. Open the app online once, close fully, open again so the new version loads.
## Rollback
Put the previous index.html (v3.2.1) back; data is untouched. If anything looks wrong, Settings -> Restore from Backup.
## Security note
Security question lets anyone who knows/guesses the answer and holds the phone recover the PIN. Use an answer only you know.
