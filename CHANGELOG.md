# Changelog

## 3.2.2
- Fix: blank-PDF guard now checks real pixels (old size check could not detect a blank A4 page).
- Fix: html2pdf black overlay is removed after a failed render (app no longer stays covered).
- New: security-question recovery for a forgotten PIN (PIN stored AES-GCM-encrypted under a PBKDF2 key from the answer; data encryption itself unchanged; backups unchanged).
- Recovery is cleared when the PIN is changed or removed; 5 wrong answers trigger a delay.
- APP_VERSION 3.2.2 -> service-worker cache chauhan-dairy-v3.2.2 (old cache auto-deleted).
