# Expanding Cards

An interactive travel photo gallery built with HTML, CSS, and vanilla JavaScript. Select a photo card to expand it and reveal its caption.

## Features

- Five travel photo cards with one selected at a time.
- Horizontal cards on wider screens; vertical cards at widths of 600px or less.
- All five cards remain available on mobile.
- Native buttons support mouse, touch, Tab, Enter, and Space.
- Visible keyboard focus and selection state exposed through `aria-pressed`.
- White captions over a dark gradient for improved readability.
- Respects the device's `prefers-reduced-motion` setting.
- No package installation, build step, API key, or backend required.

## Run locally

1. Download this repository using **Code → Download ZIP**, then extract it. Alternatively:

   ```sh
   git clone https://github.com/Shariatypour/Expanding-Cards.git
   cd Expanding-Cards
   ```

2. Open `index.html` in your browser. Keep the `css`, `js`, and `assets` folders beside it so styles, scripts, and images load correctly.
3. Optionally, open the folder in VS Code and serve `index.html` with the Live Server extension.

These instructions run whichever branch you downloaded or cloned. While improvements are under review, select the `improve/keyboard-accessibility` branch before downloading, or check out that branch after cloning.

## Controls

| Input | Action |
| --- | --- |
| Click or tap | Select and expand a card |
| Tab / Shift + Tab | Move focus between cards |
| Enter / Space | Select the focused card |

Moving keyboard focus does not change the selected card until it is activated.

## Project structure

```text
Expanding-Cards/
├── index.html          # Page structure and accessible card buttons
├── css/style.css       # Layout, captions, focus, and motion preferences
├── js/script.js        # Card selection and aria-pressed synchronization
└── assets/img/         # Five gallery photos
```

## How it works

The `.active` class gives the selected card more space in the flex layout and reveals its caption. JavaScript updates that class and `aria-pressed` together so the visible selection and accessibility state agree.

On smaller screens, `flex-direction: column` changes expansion from horizontal to vertical. The same selection handler works for both layouts.

## Manual checks

- Select each card and confirm that only one stays expanded.
- Use Tab and Shift + Tab to check visible focus, then select with Enter and Space.
- At 390px width, check that all five cards can be selected without horizontal scrolling.
- At 1280px width, check that the cards form a horizontal row.
- Enable reduced motion in your device settings and confirm that selection changes without transitions.

## Project status

This is a learning project being developed into a portfolio piece. The accessibility and presentation improvements are tracked in [pull request #1](https://github.com/Shariatypour/Expanding-Cards/pull/1). A public live demo has not been set up yet.
