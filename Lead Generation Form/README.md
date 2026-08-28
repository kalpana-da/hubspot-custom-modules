# HubSpot Lead Generation Form Module

A responsive custom HubSpot CMS Lead Generation Form module using an existing HubSpot Form.

## Module Preview

<p align="center">
  <img
    src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module.png"
    alt="Lead Generation Form Module Preview"
    width="300"
    height="400"
  >
</p>

## Module Files

| File | Purpose |
|---|---|
| `fields.json` | Creates the editable Content and Style fields |
| `meta.json` | Defines module information and availability |
| `module.html` | HubL, HTML, existing HubSpot Form and dynamic styling |
| `module.css` | Layout, spacing and responsive CSS |

### Quick Links

- [OPEN fields.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/fields.json)
- [OPEN meta.json](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/meta.json)
- [OPEN module.html](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/module.html)
- [OPEN module.css](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/module.css)

---

# 1. Create the HubSpot Module

Go to **HubSpot → Content → Design Manager**.

Open your custom module and go to:

```text
custom → modules
```

Create a new module named:

**Lead Generation Form**

Create:

```text
Lead Generation Form/
├── fields.json
├── meta.json
├── module.html
└── module.css
```

---

# 2. Add meta.json

Create `meta.json`.

[**OPEN META.JSON**](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/meta.json)

Copy the code into your module's `meta.json` and save.

---

# 3. Create fields.json

Create `fields.json`.

[**OPEN FIELDS.JSON**](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/fields.json)

Copy the complete code into:

```text
Lead Generation Form → fields.json
```

The fields create the options available in the HubSpot module editor.

## Fields Used in the Module

### Content Fields

| Field Name | Type | Purpose |
|---|---|---|
| Badge Text | Text | Displays the badge text above the heading |
| Heading | Text | Displays the main heading of the form section |
| Description | Rich Text | Displays supporting description below the heading |
| Form | HubSpot Form | Selects the existing HubSpot Form to display |
| Privacy Text | Text | Displays privacy or consultation information below the form |
| Button Text | Text | Defines the submit button text |

### Card Style Fields

| Field Name | Type | Purpose |
|---|---|---|
| Card Background | Color | Controls the background color of the form card |
| Card Width | Number | Controls the maximum width of the card |
| Card Radius | Number | Controls the card corner radius |
| Badge Background | Color | Controls the background color of the badge |

### Typography Style Fields

| Field Name | Type | Purpose |
|---|---|---|
| Badge Font | Font | Controls the badge typography |
| Heading Font | Font | Controls the heading typography |
| Description Font | Font | Controls the description typography |
| Privacy Text Font | Font | Controls the privacy text typography |

### Form Style Fields

| Field Name | Type | Purpose |
|---|---|---|
| Form Font | Font | Controls the typography inside the HubSpot Form |
| Input Background | Color | Controls the background color of input fields |
| Input Text Color | Color | Controls the text color entered in form fields |
| Input Border Color | Color | Controls the border color of form fields |
| Placeholder Color | Color | Controls the placeholder text color |
| Input Radius | Number | Controls the corner radius of input fields and button |
| Button Color | Color | Controls the submit button background color |
| Button Text Color | Color | Controls the submit button text color |

---

# 4. Module Fields Screenshots

<p align="center">
  <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_fileds.png" alt="Content Fields" width="30%">
  <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_style_fileds_1.png" alt="Style Fields 1" width="30%">
  <img src="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_style_fileds_2.png" alt="Style Fields 2" width="30%">
</p>

<p align="center">
  <a href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_fileds.png">Content Fields</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_style_fileds_1.png">Style Fields 1</a>
  &nbsp; | &nbsp;
  <a href="https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/screenshots/form_module_style_fileds_2.png">Style Fields 2</a>
</p>
---

# 6. Add module.html

Create `module.html`.

[**OPEN MODULE.HTML**](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/module.html)

Copy the complete code into:

```text
Lead Generation Form → module.html
```

The file contains the HubL/HTML structure, existing HubSpot Form, dynamic styling and scoped CSS.

The dynamic styles use:

```hubl
{% scope_css %}
```

---

# 7. Add module.css

Create `module.css`.

[**OPEN MODULE.CSS**](https://github.com/kalpana-da/hubspot-custom-modules/blob/main/Lead%20Generation%20Form/module.css)

Copy the complete code into:

```text
Lead Generation Form → module.css
```

It controls module spacing, form spacing, field spacing, desktop layout, two-column fields, mobile stacking and responsive behavior.

---

# 8. Create the HubSpot Form

The custom module uses an **existing HubSpot Form**.

Go to:

**HubSpot → Marketing → Forms**

Create a new form.

Example:

```text
Property Accounting Audit
```

Save the form.

---

# 9. Add Form Fields

Inside the HubSpot Form editor, add the fields required for your form.

Example:

```text
First Name
Last Name
Email
Company Name
Phone Number
Units under Management
```

Example layout:

```text
First Name              Last Name

Email

Company Name

Phone Number

Units under Management
```

Arrange fields using the HubSpot Form editor.

---

# 10. Configure the Form Button

Inside the HubSpot Form editor, configure the native submit button.

Example:

```text
Get My Free Audit ➔
```

Save the form.

> The custom module uses the existing HubSpot Form. It does not create a second form or a second submit button.

---

# 11. Add the Module to a Page

Go to **HubSpot → Website Pages** and open the page editor.

Search for:

**Lead Generation Form**

Drag the module onto the page.

---

# 12. Select the Existing HubSpot Form

Open:

**Content → Form**

Select the HubSpot Form created earlier.

The selected existing form will appear inside the custom module.

---

# 13. Configure Content

Open **Content** and configure:

### Badge Text

Example:

```text
SMARTER PROPERTY ACCOUNTING
```

### Heading

Example:

```text
Simplify Your Property Financial Operations
```

### Description

Example:

```text
See how better accounting processes can reduce manual work,
improve reporting accuracy, and give your team greater
financial visibility.
```

### Form

Select the existing HubSpot Form.

### Privacy Text

Example:

```text
Your information stays private. There’s no commitment or obligation.
```

### Button Text

Example:

```text
Get My Free Audit ➔
```

---

# 14. Configure Card Style

Open:

**Style → Card Style**

Configure:

```text
Card Background
Card Width
Card Radius
Badge Background
```

---

# 15. Configure Typography Style

Open:

**Style → Typography Style**

Configure:

```text
Badge Font
Heading Font
Description Font
Privacy Text Font
```

---

# 16. Configure Form Style

Open:

**Style → Form Style**

Configure:

```text
Form Font
Input Background
Input Text Color
Input Border Color
Placeholder Color
Input Radius
Button Color
Button Text Color
```

---

# 17. Responsive Behavior

### Desktop

Two fields in the same form row can display side by side:

```text
First Name              Last Name
```

### Mobile

Fields stack vertically:

```text
First Name

Last Name

Email

Company Name
```

The responsive CSS is in `module.css`.

---

# 18. Test the Module

Before publishing, check:

- [ ] Badge displays
- [ ] Heading displays
- [ ] Description displays
- [ ] Existing HubSpot Form loads
- [ ] Form fields display
- [ ] Phone field works
- [ ] Dropdown works
- [ ] Submit button works
- [ ] Privacy text displays
- [ ] Card styling works
- [ ] Typography settings work
- [ ] Input styling works
- [ ] Button styling works
- [ ] Desktop layout works
- [ ] Mobile layout works

---

# Final Module Structure

```text
Lead Generation Form/
├── fields.json
├── meta.json
├── module.html
└── module.css
```

[**OPEN LEAD GENERATION FORM ON GITHUB**](https://github.com/kalpana-da/hubspot-custom-modules/tree/main/Lead%20Generation%20Form)

---

# Quick Setup

```text
Create Module
      ↓
Add meta.json
      ↓
Add fields.json
      ↓
Add module.html
      ↓
Add module.css
      ↓
Create HubSpot Form
      ↓
Add Form Fields
      ↓
Configure Form Button
      ↓
Add Module to Page
      ↓
Select Existing Form
      ↓
Configure Content
      ↓
Configure Card Style
      ↓
Configure Typography
      ↓
Configure Form Style
      ↓
Test Desktop + Mobile
    


---

## 👩‍💻 Author

**Kalpana Sharma**  
*HubSpot CMS Developer*

<p>
  <a href="https://github.com/kalpana-da">
    <img src="https://img.shields.io/badge/GitHub-kalpana--da-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/skalpana/">
    <img src="https://img.shields.io/badge/LinkedIn-Kalpana%20Sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://go1digital.com/startup-portfolio/">
    <img src="https://img.shields.io/badge/Portfolio-Go1Digital-FF6B35?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio">
  </a>
</p>
---
---

## ⭐ Support

If you found this repository helpful, please consider giving it a ⭐ on GitHub.

<p>
  <a href="https://github.com/kalpana-da/hubspot-custom-modules">
    <img src="https://img.shields.io/badge/⭐%20Star%20this%20repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Star this repository">
  </a>
</p>


If you found this repository helpful, please consider giving it a ⭐ on GitHub.

[⭐ **Star this repository**](https://github.com/kalpana-da/hubspot-custom-modules)

