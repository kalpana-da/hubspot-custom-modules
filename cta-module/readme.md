# CTA HubSpot Custom Module

A responsive **HubSpot CMS custom module** for creating a clean Call-to-Action section with editable content, button, typography, colors, and border controls.

## Module Preview

<p align="center">
  <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cte_module_preview.png" alt="CTA Module Preview" width="800">
</p>

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cte_module_preview.png">
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
| `module.js` | Module JavaScript functionality |

### Quick Links

- [📄 Open fields.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/fields.json)
- [📄 Open meta.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/meta.json)
- [📄 Open module.html](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/module.html)
- [📄 Open module.css](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/module.css)
- [📄 Open module.js](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/module.js)

---

# 1. Content Fields

The module provides editable content fields from the **HubSpot Content** tab.

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_fields.png">
    <strong>📄 View Content Fields</strong>
  </a>
</p>

## Content Fields Used

| Field Name | HubSpot Field Type | Option / Configuration | Purpose |
|---|---|---|---|
| Heading | Text | Single-line text | Displays the main CTA heading |
| Description | Rich Text | Rich text editor | Displays the CTA description |
| Button Text | Text | Single-line text | Defines the CTA button label |
| Button Link | Link | External, Content, File, Email, Blog, Phone Number and Payment | Defines the CTA button destination |

---

# 2. Style Fields

The module's styling controls are grouped under:

```text
Style
└── CTA STYLE
    ├── Heading Font
    ├── Description Font
    ├── Button Text Font
    ├── Button Background
    ├── Button Background Hover
    ├── Section Background
    ├── Border Color
    ├── Section Border
    └── Button Border Radius
```

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_fields.png">
    <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_fields.png" alt="CTA Content Fields" width="30%">
  </a>
  &nbsp;&nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_style_fields.png">
    <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_style_fields.png" alt="CTA Style Fields" width="30%">
  </a>
  &nbsp;&nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cte_module_preview.png">
    <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cte_module_preview.png" alt="CTA Module Preview" width="30%">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_style_fields.png">
    <strong>🎨 View Style Fields</strong>
  </a>
</p>

## Style Fields Used

| Field Name | HubSpot Field Type | Option / Configuration | Purpose |
|---|---|---|---|
| Heading Font | Font | Font family, size, style and color | Controls heading typography |
| Description Font | Font | Font family, size, style and color | Controls description typography |
| Button Text Font | Font | Font family, size, style and color | Controls button text typography |
| Button Background | Color | Color + opacity | Controls button background color |
| Button Background Hover | Color | Color + opacity | Controls button hover background color |
| Section Background | Color | Color + opacity | Controls CTA section background |
| Border Color | Color | Color + opacity | Controls section border color |
| Section Border | Number | Step: 1, suffix: px | Controls section border width |
| Button Border Radius | Number | Step: 1, suffix: px | Controls button corner radius |

---

# 3. Default Style Values

| Style Field | Default |
|---|---|
| Heading Font | Geologica, 35px, #073763 |
| Description Font | Geologica, 25px, #CC0201 |
| Button Text Font | Geologica, 16px, #073763 |
| Button Background | #0600FF |
| Button Background Hover | #FF0000 |
| Section Background | #D0E0E3 |
| Border Color | #666666 |
| Section Border | 1px |
| Button Border Radius | 5px |

---

# 4. How to Use

1. Open **HubSpot → Content → Design Manager**.
2. Upload the `CTA Module` folder.
3. Publish the module.
4. Open a HubSpot website page or landing page.
5. Add the **CTA Module** to the page.
6. Open the **Content** tab.
7. Enter the heading.
8. Enter the description.
9. Enter the button text.
10. Select or enter the button link.
11. Open the **Style** tab to customize the appearance.
12. Preview and publish the page.

---

# 5. Configure Content

### Heading

Enter the heading you want to display in the CTA section.

Example:

```text
Ready to grow your business?
```

### Description

Enter the supporting CTA description.

Example:

```text
Build a better digital experience for your customers
```

### Button Text

Enter the text displayed on the CTA button.

Example:

```text
Get Started
```

### Button Link

Select the destination for the CTA button.

The link field supports the configured HubSpot link types.

---

# 6. Configure Style

Open the **Style** tab in the HubSpot editor.

You can customize:

```text
Heading Font
Description Font
Button Text Font
Button Background
Button Background Hover
Section Background
Border Color
Section Border
Button Border Radius
```

All of these controls are connected to the module styling.

---

# 7. CTA Button

The module includes:

- Editable button text
- Editable button link
- Custom button typography
- Custom button background color
- Custom button hover background color
- Custom button border radius
- Responsive button layout

---

# 8. Responsive

| Device | Layout |
|---|---|
| Desktop | Centered CTA section |
| Tablet | Responsive centered layout |
| Mobile | Responsive stacked content |
| Small Mobile | Responsive CTA content and button |

The CTA content and button automatically adapt to smaller screen widths.

---

# 9. Module Structure

```text
CTA Module/
├── module.html
├── module.css
├── module.js
├── fields.json
├── meta.json
├── cta_module_fields.png
├── cta_module_style_fields.png
├── cta_module_preview.png
└── README.md
```

---

# 10. Screenshots

<p align="center">
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cta_module_fields.png"><strong>📄 Content Fields</strong></a>
  &nbsp; | &nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/CTE_Module_style_fields.png"><strong>🎨 Style Fields</strong></a>
  &nbsp; | &nbsp;
  <a target="_blank" href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/cta-module/cta_module_preview.png"><strong>🔍 Module Preview</strong></a>
</p>

# Quick Setup

```text
Add CTA Module
        ↓
Open Content
        ↓
Add Heading
        ↓
Add Description
        ↓
Add Button Text
        ↓
Add Button Link
        ↓
Open Style
        ↓
Customize Fonts / Colors / Border
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
  <a target="_blank" href="https://github.com/example/cta-module">
    <img src="https://img.shields.io/badge/⭐%20Star%20this%20repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star this repository">
  </a>
</p>
