---
layout: default
title: OpenScan Privacy Policy
description: Privacy policy for OpenScan, the offline-first document scanner - by default OpenScan collects nothing; scans never leave the phone unless you turn on the optional feedback upload.
---

# OpenScan Privacy Policy

Last updated: 2026-10-03

**Short version: by default OpenScan collects nothing and your scans never
leave your phone. There is exactly one optional upload feature — off by
default — that does nothing unless you turn it on yourself.**

## What we collect by default

Nothing. OpenScan ships **no analytics, no crash reporting, and no account**,
and contains no third-party tracking SDKs of its own. With the feedback
switch (below) off, the app makes no network requests and works fully
offline.

## The optional feedback upload

Settings contains a single switch — *"Send pictures to our servers so we can
use them to improve our application"* — which is **off by default**. If and
only if you turn it on:

- every page you scan afterwards is uploaded once, in the background, to our
  storage (Amazon S3, region eu-west-1, reached over HTTPS) and automatically
  deleted after at most 30 days;
- the upload carries no account identifier — just the image, the app version,
  and whether automatic edge detection succeeded;
- uploads are fire-and-forget: a failed upload is dropped, never queued,
  never retried, and never blocks or interrupts scanning;
- turning the switch off again stops all future uploads immediately.

## Permissions

- **Document capture** happens inside Google Play services (the ML Kit
  document scanner module). Play services performs the camera work; OpenScan
  receives the scanned pages as local files and therefore never needs the
  camera permission itself.
- **OCR** uses ML Kit Text Recognition with the bundled model: fully
  on-device, offline, and unlimited.
- **Export and sharing** use the Android system share sheet and file picker,
  which is why no storage permission is needed either.
- **`INTERNET`** backs exactly one thing: the optional feedback upload above.
  It is what lets the app reach our storage when — and only when — you
  enable the switch. Nothing else in the app uses the network.
- Google's transitive libraries (Firebase data transport telemetry pulled in
  by ML Kit) merge `ACCESS_NETWORK_STATE` into every app that uses them.
  OpenScan explicitly removes it (`tools:node="remove"`).

## Where your data lives

- Scanned pages live in the app's private storage on your device.
- Exported PDFs are produced in the app's cache directory and leave the device
  only when *you* share them via the Android share sheet or save them with
  the system file picker — or, if you enabled the feedback switch, when a
  scan page is uploaded once as described above.
- Uninstalling the app removes everything on the device; uploaded feedback
  pages age out of our storage within 30 days.

## Data safety form (Google Play)

Answers we submit: **data collected — photos (optional, only after you
enable the feedback switch); data shared — no (uploads go only to the
developer's own storage for product improvement, never to third parties);
data encrypted in transit — yes; deletion — uploaded pages auto-delete
within 30 days, on-device data is removed by uninstalling the app or
deleting a document in-app.**

## Open source

The entire codebase is public:
<https://github.com/alexeygrigorev/openscan>. Anything this document claims
is verifiable in source — including the merged permission set:

```bash
aapt2 dump badging app-release.apk | grep uses-permission
# uses-permission: name='android.permission.INTERNET'
# uses-permission: name='io.github.alexeygrigorev.openscan.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'
```

`INTERNET` is the feedback upload documented above; the second entry is
AndroidX's generated, package-scoped receiver guard
(`protectionLevel: signature`) — a naming convention, not a capability.

## Contact

Open an issue at <https://github.com/alexeygrigorev/openscan/issues>.
