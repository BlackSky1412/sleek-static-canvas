
# JSON-Driven Portfolio Website

A clean, modern, and fully customizable portfolio website that loads all content from a single JSON file. Perfect for developers who want to showcase their work without constantly editing HTML.

## Features

- **JSON-Driven Content**: All content is loaded from a single JSON file
- **Responsive Design**: Looks great on all devices
- **Modern Aesthetics**: Clean design with neutral tones and subtle animations
- **Easy to Customize**: Just edit the JSON file to update your portfolio
- **Section-Based Layout**: Including hero, skills, projects, and contact sections

## How to Customize Your Portfolio

To customize your portfolio, simply edit the `src/data/portfolio.json` file. Here's how to modify each section:

### Profile Section

```json
"profile": {
  "name": "Your Name",
  "role": "Your Job Title",
  "avatar": "/src/assets/your-avatar.jpg",
  "bio": "Your short bio goes here..."
}
```

### Career Goals

```json
"careerGoals": {
  "title": "Career Goals",
  "description": "A paragraph describing your career aspirations...",
  "goals": [
    "Goal 1",
    "Goal 2",
    "Goal 3",
    "Goal 4"
  ]
}
```

### Skills

```json
"skills": {
  "title": "Skills",
  "description": "Description of your skills...",
  "technical": [
    { "name": "Skill Name", "level": 85 },
    { "name": "Another Skill", "level": 90 }
  ],
  "soft": [
    "Soft Skill 1",
    "Soft Skill 2"
  ]
}
```

For technical skills, the "level" property should be a number from 0-100 representing your proficiency.

### Projects

```json
"projects": {
  "title": "Projects",
  "description": "Description of your projects section...",
  "items": [
    {
      "title": "Project Title",
      "description": "Project description...",
      "technologies": ["Tech 1", "Tech 2"],
      "role": "Your role in the project",
      "github": "https://github.com/yourusername/project",
      "image": "/src/assets/projects/project-image.jpg"
    }
  ]
}
```

Add as many projects as you want by adding more objects to the "items" array.

### Contact Information

```json
"contact": {
  "title": "Contact",
  "description": "Contact section description...",
  "email": "your.email@example.com",
  "socials": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/in/yourusername",
      "icon": "linkedin"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername",
      "icon": "github"
    }
  ]
}
```

## Adding Custom Images

1. Place your avatar image in `/src/assets/` 
2. Place project images in `/src/assets/projects/`
3. Update the corresponding paths in the JSON file

## Customizing Colors and Fonts

To change colors or fonts, edit the `src/index.css` file. The main color variables are:

- `--portfolio-background`: Background color
- `--portfolio-foreground`: Text color
- `--portfolio-primary`: Primary color (deep blue by default)
- `--portfolio-accent`: Accent color (teal by default)
- `--portfolio-muted`: Background for alternate sections

## Deployment

This project can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.

## License

This project is open source and available under the MIT License.
