# Alexey Grigorev - Personal Profile Page

A Jekyll-based static website for Alexey Grigorev's developer profile.

## Technologies

- Jekyll (static site generator)
- HTML/CSS/JavaScript
- GitHub Pages compatible

## Local Development

### Prerequisites

- Ruby 2.7+ installed
- Bundler gem installed (`gem install bundler`)

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
bundle install

# Start the development server
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

### Building for Production

```sh
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Deployment

This site can be deployed to GitHub Pages or any static hosting service.

### GitHub Pages

1. Push to the `main` branch
2. Go to Settings > Pages
3. Select "Deploy from a branch" and choose your branch
4. The site will be available at `https://<username>.github.io/<repo-name>`

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── assets/
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── public/              # Static assets (favicon, etc.)
├── index.html           # Main page
├── Gemfile              # Ruby dependencies
└── README.md
```
