---
title: "Privacy Policy"
# meta title
meta_title: "Privacy Policy"
# meta description
description: "Privacy Policy for VisaPilot Chrome Extension"
# save as draft
draft: false
---

**Privacy Policy for VisaPilot Chrome Extension**

**Effective date:** April 24, 2026

### 1. Scope

This Privacy Policy applies to the **VisaPilot Chrome Extension**.
It describes what data the extension handles, how data is used, and user controls.

### 2. Data We Handle

#### A. Data stored locally on your device

VisaPilot stores the following in `chrome.storage.local`:

- extension settings (for example language, AI provider mode, and preferences)
- OpenAI API token if you choose OpenAI provider mode
- profiles and trip context
- memory items you choose to save for reuse
- local chat/session state and active context pointers
- anonymous service token/device identifier used for backend trial access

#### B. Data processed from supported pages

On supported visa/arrival-card websites, VisaPilot may read:

- page URL and page title
- form field metadata (labels, selectors, field types, options, required flags)
- page notices/rules relevant to form filling
- user-selected text and active-field references
- filled form values only when you trigger save/extract actions

VisaPilot is designed to avoid hidden fields and does not read password field values for save/extract actions.

#### C. Data transmitted for AI assistance

When AI assistance is used (for example Recognize/Ask/Apply), VisaPilot may transmit relevant request data, including your question and page context, to:

- the configured VisaPilot backend/BFF service
- OpenAI API directly if you select OpenAI provider mode

If OpenAI provider mode is selected, your OpenAI API token is used only to call OpenAI on your behalf.

### 3. Why We Use Data

We use data to:

- understand form structure and provide guidance
- generate user-confirmed fill suggestions
- maintain profile/trip context and reusable memory
- improve reliability, security, and abuse prevention

VisaPilot does **not** auto-submit official forms.

### 4. Data Sharing

We do **not** sell personal data.
We share data only as needed to provide AI functionality and related service operations, including:

- backend/BFF infrastructure providers (if backend mode is used)
- OpenAI (if backend mode or OpenAI direct mode invokes OpenAI)

### 5. Data Retention

- local extension data remains on your device until you delete it in settings or uninstall the extension
- backend/service logs, rate-limit records, and AI-processed request data are retained according to the configured service operator policies and applicable legal/security requirements
- if you use OpenAI direct mode, retention is governed by OpenAI policies

### 6. User Controls

You can:

- edit or delete stored memory/profile/trip data in extension settings
- switch AI provider mode
- remove your OpenAI token from extension settings
- uninstall the extension to remove local extension data

### 7. Data Categories (Chrome Web Store Alignment)

Depending on how you use supported forms, VisaPilot may handle:

- personal information
- financial/payment-related form data if present in form content you process
- personal communications (question text you submit)
- web history limited to supported page URLs/titles used for assistance
- website content (form/page text and metadata needed for assistance)

VisaPilot does **not** intentionally collect:

- password values
- precise geolocation coordinates

Depending on the form you choose to process, sensitive categories may appear in page content and be handled only for assistance purposes.

### 8. Security

We use reasonable technical and organizational measures to protect data.
No method of transmission or storage is 100% secure.

### 9. Children

VisaPilot is not directed to children under 13.

### 10. Changes to This Policy

We may update this policy from time to time.
Updates are posted at this URL with a revised effective date.

### 11. Contact

For privacy questions, contact: https://visa-pilot.github.io/contact
