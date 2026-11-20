# Test report 3.2.2

Executed in headless Chrome (real WebCrypto/localStorage/IndexedDB), 23 checks, all PASSED:
blank detector (white / text / zero canvas); PIN encryption of stored data; recovery saved and PIN not stored in plain text;
wrong answer rejected, right answer (case/space-insensitive) recovers PIN; lock screen flow wrong then right answer;
all customers/entries/payments intact after recovery; new PIN set without old PIN after recovery; recovery cleared on PIN change;
old PIN rejected, new PIN unlocks with data intact; short answer and wrong PIN rejected in Settings; Remove PIN clears recovery and keeps data.

NOT tested (html2pdf library could not be downloaded in the test environment): real PDF generation of bill / statement / payment PDF,
the overlay cleanup after a real render failure, Android download behaviour, offline mode, service-worker update.
Please test on the phone: payment with auto-PDF ON, 10-day bill PDF, airplane-mode payment, and the forgot-PIN flow.
