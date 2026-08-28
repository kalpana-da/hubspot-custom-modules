# Team Members Module

A reusable **Team Members Module** built for **HubSpot CMS** using **HubL, HTML5, and CSS3**.

This module allows content editors to add and manage unlimited team members using a **Repeater Field**, making it ideal for About Us, Leadership, and Company Team pages.

---

## 📸 Preview

> Add a screenshot here after uploading your module preview.

![Team Members Preview](team_members_preview.png)

---

## ✨ Features

- Responsive Team Members Grid
- Repeater Field for Unlimited Team Members
- Team Member Photo
- Name
- Designation
- Rich Text Description
- Mobile Responsive
- Easy to Customize

---

## 📂 Folder Structure

```text
team-members-module/
│
├── README.md
├── module.html
├── module.css
└── fields.json
```

### File Description

| File | Description |
|------|-------------|
| `README.md` | Project documentation and setup guide |
| `module.html` | HubL template containing the module markup and dynamic content |
| `module.css` | Styling for the Team Members module |
| `fields.json` | Defines all editable fields available in the HubSpot page editor |

---

# 🚀 Installation & Setup

## Step 1 – Create a Custom Module

1. Log in to your HubSpot account.
2. Navigate to **Content → Design Manager**.
3. Click **File → New File**.
4. Select **Module**.
5. Choose **Custom Module**.
6. Name the module **Team Members Module**.
7. Click **Create**.

---

## Step 2 – Create Module Fields

Create the following fields inside the Module Editor.

| Field Name | Type |
|------------|------|
| Section Title | Text |
| Team Members | Repeater (Group) |
| Photo | Image |
| Name | Text |
| Designation | Text |
| Description | Rich Text |

> **Tip:** The Repeater field allows editors to add unlimited team members without modifying the code.

---

## Step 3 – Add the Code

Replace the generated files with the code from this repository.

- `module.html`
- `module.css`
- `fields.json`

Save and publish the module.

---

## Step 4 – Use the Module

1. Open a HubSpot Page or Template.
2. Drag the **Team Members Module** onto the page.
3. Enter the Section Title.
4. Click **Add Team Member**.
5. Upload the team member's photo.
6. Enter:
   - Name
   - Designation
   - Description
7. Repeat for additional team members.
8. Publish the page.

---

## 📋 Expected Output

The module displays:

- Responsive Team Members Grid
- Team Member Photo
- Name
- Designation
- Description
- Unlimited Team Members using a Repeater Field

---

## 💼 Use Cases

This module is suitable for:

- About Us Page
- Meet Our Team Page
- Leadership Section
- Agency Website
- Startup Website
- Company Profile
- Employee Directory

---

## 🛠 Technologies Used

- HubSpot CMS
- HubL
- HTML5
- CSS3
- Responsive Web Design

---

## 📚 Skills Demonstrated

- HubSpot CMS Module Development
- HubL Templating
- Repeater Fields
- Dynamic Content
- HubL `for` Loop
- Conditional Rendering (`if`)
- `resize_image_url()`
- Responsive Grid Layout
- Clean Module Structure

---

## 👩‍💻 Author

**Kalpana Sharma**

**LinkedIn:**  
https://www.linkedin.com/in/skalpana/

**Portfolio:**  
https://go1digital.com/startup-portfolio/

---

## ⭐ Support

If you found this project useful, consider giving this repository a ⭐ on GitHub.
