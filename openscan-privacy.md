---
layout: default
title: OpenScan Privacy Policy
description: Privacy policy for OpenScan, the offline-first document scanner - OpenScan collects nothing; scans never leave the phone.
---

# OpenScan Privacy Policy

Last updated: 2026-10-02

**Short version: OpenScan collects nothing. Your scans never leave your phone.**

## What we collect

Nothing. OpenScan's own manifest declares no permissions, and the **built APK
has no `INTERNET` permission**: it cannot open network sockets, so it is
structurally unable to send your documents, analytics, crash reports, or any
other data anywhere.

Google's ML Kit libraries pull in Firebase data-transport telemetry, whose
manifests merge `INTERNET` and `ACCESS_NETWORK_STATE` into every app that
uses them. OpenScan explicitly removes both in its own manifest
(`tools:node="remove"`) — verified on every built APK:

```bash
aapt2 dump badging app-release.apk | grep uses-permission
# uses-permission: name='io.github.alexeygrigorev.openscan.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'
```

That single remaining entry is AndroidX's generated, package-scoped guard for
the app's own broadcast receivers (`protectionLevel: signature`). It grants
no access to the camera, storage, location, or the network — it is a naming
convention, not a capability.

## How it works without permissions

- **Document capture** happens inside Google Play services (the ML Kit
  document scanner module). Play services performs the camera work; OpenScan
  receives the scanned pages as local files and therefore never needs the
  camera permission itself.
- **OCR** uses ML Kit Text Recognition with the bundled model: fully
  on-device, offline, and unlimited.
- **Export and sharing** use the Android system share sheet and file picker,
  which is why no storage permission is needed either.

## Where your data lives

- Scanned pages live in the app's private storage on your device.
- Exported PDFs are produced in the app's cache directory and leave the device
  only when *you* share them via the Android share sheet or save them with
  the system file picker.
- Uninstalling the app removes everything; there is no server copy.

## Data safety form (Google Play)

Answers we submit: **no data collected, no data shared, no data transit;
data deletion — uninstall the app or delete a document in-app.**

## Open source

The entire codebase is public:
<https://github.com/alexeygrigorev/openscan>. Anything this document claims
is verifiable in source — including the single remaining permission line:

```bash
aapt2 dump badging app-release.apk | grep uses-permission
# uses-permission: name='io.github.alexeygrigorev.openscan.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'
```

That is the one AndroidX receiver-guard entry documented above — nothing else.

## Contact

Open an issue at <https://github.com/alexeygrigorev/openscan/issues>.
