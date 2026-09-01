# Logo Slider HubSpot Custom Module

A responsive **HubSpot CMS custom module** for displaying client or company logos in a horizontal slider with editable content and style controls.

## Module Preview

<p align="center">
  <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_preview.png" alt="Logo Slider Module Preview" width="800">
</p>

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_preview.png">
    <strong>🔍 View Module Preview</strong>
  </a>
</p>

---

## Module Files

| File | Purpose |
|---|---|
| `fields.json` | Creates the editable Content and Style fields |
| `meta.json` | Defines module information and availability |
| `module.html` | HubL/HTML structure and dynamic module markup |
| `module.css` | Responsive module styling |
| `module.js` | Previous/next logo slider functionality |

### Quick Links

- [📄 Open fields.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/fields.json)
- [📄 Open meta.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/meta.json)
- [📄 Open module.html](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/module.html)
- [📄 Open module.css](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/module.css)
- [📄 Open module.js](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/module.js)

---

# 1. Content Fields

The module provides editable content fields from the **HubSpot Content** tab.

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_fields.png">
    <strong>📄 View Content Fields</strong>
  </a>
</p>

## Content Fields Used

| Field Name | HubSpot Field Type | Option / Configuration | Purpose |
|---|---|---|---|
| Heading | Text | Single-line text | Displays the heading above the logo slider |
| Logo Images | Image | Repeater, minimum 4, unlimited maximum | Adds the client/company logos displayed in the slider |

### Logo Image Options

Each logo image supports:

| Option | Configuration |
|---|---|
| Field Type | Image |
| Minimum Items | 4 |
| Maximum Items | Unlimited |
| Responsive | Enabled |
| Resizable | Enabled |
| Alt Text | Supported |
| Loading | Lazy loading |
| Image Size | Automatically handled by the module |

---

# 2. Style Fields

The module's styling controls are grouped under:

```text
Style
└── Style
    ├── Heading Font
    ├── Section Background
    ├── Arrow Color
    ├── Arrow Hover Color
    ├── Arrow Background
    ├── Logo Gap
    ├── Border
    ├── Border Radius
    └── Border Color
```
<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_fields.png">
    <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_fields.png" alt="Logo Slider Content Fields" width="30%">
  </a>
  &nbsp;&nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_style_fields.png">
    <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_style_fields.png" alt="Logo Slider Style Fields" width="30%">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_style_fields.png">
    <strong> View Style Fields</strong>
  </a>
</p>

## Style Fields Used

| Field Name | HubSpot Field Type | Option / Configuration | Purpose |
|---|---|---|---|
| Heading Font | Font | Google font support | Controls heading font family, size, style and color |
| Section Background | Color | Color + opacity | Controls the background of the slider section |
| Arrow Color | Color | Color + opacity | Controls the arrow color |
| Arrow Hover Color | Color | Color + opacity | Controls the arrow hover background color |
| Arrow Background | Color | Color + opacity | Controls the arrow button background |
| Logo Gap | Number | Step: 1, suffix: px | Controls the spacing between logo cards |
| Border | Number | Step: 1, suffix: px | Controls logo card border width |
| Border Radius | Number | Step: 1, suffix: px | Controls logo card corner radius |
| Border Color | Color | Color + opacity | Controls logo card border color |

---

# 3. Default Style Values

| Style Field | Default |
|---|---|
| Heading Font | Geologica, 35px, #000000 |
| Section Background | #CCCCCC |
| Arrow Color | #CCCCCC |
| Arrow Hover Color | #0C5394 |
| Arrow Background | #666666 |
| Logo Gap | 20px |
| Border | 2px |
| Border Radius | 2px |
| Border Color | #CCCCCC |

---

# 4. How to Use

1. Open **HubSpot → Content → Design Manager**.
2. Upload the `logo-slider` module folder.
3. Publish the module.
4. Open a HubSpot website page, landing page, or supported content type.
5. Add the **Logo Slider** module to the page.
6. Open the **Content** tab.
7. Enter the heading.
8. Add or replace the client/company logos.
9. Open the **Style** tab to customize the appearance.
10. Publish the page.

---

# 5. Configure Content

### Heading

Enter the heading you want to display above the logos.

Example:

```text
Our Clients
```

### Logo Images

Add the client/company logos using the **Logo Images** field.

The module requires a minimum of **4 logos** and supports additional logo items.

Each logo can have its own image and alt text.

---

# 6. Configure Style

Open the **Style** tab in the HubSpot editor.

You can customize:

```text
Heading Font
Section Background
Arrow Color
Arrow Hover Color
Arrow Background
Logo Gap
Border
Border Radius
Border Color
```

All of these controls are connected to the module styling.

---

# 7. Slider Navigation

The module includes:

- Previous arrow
- Next arrow
- Horizontal logo scrolling
- Smooth scrolling
- Disabled arrow state when there is no further scroll
- Responsive navigation controls

---

# 8. Responsive

| Device | Logos Displayed |
|---|---:|
| Desktop | 5 |
| Tablet | 4 |
| Mobile | 2 |
| Small Mobile | 2 |

The logo cards and navigation controls automatically resize for smaller screen widths.

---

# 9. Module Structure

```text
logo-slider/
├── module.html
├── module.css
├── module.js
├── fields.json
├── meta.json
├── logo_slider_fields.png
├── logo_slider_style_fields.png
├── logo_slider_preview.png
└── README.md
```

---

# 10. Screenshots


<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_fields.png"><strong>📄 Content Fields</strong></a>
  &nbsp; | &nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_style_fields.png"><strong>🎨 Style Fields</strong></a>
  &nbsp; | &nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/logo-slider/logo_slider_preview.png"><strong>🔍 Module Preview</strong></a>
</p>

# Quick Setup

```text
Add Logo Slider Module
        ↓
Open Content
        ↓
Add Heading
        ↓
Add Client Logos
        ↓
Open Style
        ↓
Customize Colors / Fonts / Spacing
        ↓
Preview
        ↓
Publish
```

---

## 👩‍💻 Author

**Kalpana Sharma**  
*HubSpot CMS Developer / Wordpress Developer*

<p>
  <a target="_blank" href="https://github.com/kalpana-da">
    <img src="https://img.shields.io/badge/GitHub-kalpana--da-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a target="_blank" href="https://www.linkedin.com/in/skalpana/">
    <img src="https://img.shields.io/badge/LinkedIn-Kalpana%20Sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a target="_blank" href="https://go1digital.com/startup-portfolio/">
    <img src="https://img.shields.io/badge/Portfolio-Go1Digital-FF6B35?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio">
  </a>
</p>

---

## ⭐ Support

If you found this repository helpful, please consider giving it a ⭐ on GitHub.

<p>
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules">
    <img src="https://img.shields.io/badge/⭐%20Star%20this%20repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star this repository">
  </a>
</p>
