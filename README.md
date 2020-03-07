# Portfolio

Most developers will probably build their own site to showcase their talents but I decided to add mine to github for anyone to use. Hopefully this website will provide a good starting point for new developers or perhaps backend developers looking to expand.

## Setup & Installation

### Prerequisites

Must have docker set up and running.

```
1. Run "npm install"
2. Set up settings.json file (see schema below)
3. Add projects to projects dir (see schema below)
4. Run `docker-compose -f docker-compose.dev.yml up -d`
5. Navigate to 0.0.0.0:80
```

## Schema

### Settings (settings.js)

- name (String) - Your name
- location (String) - County, State
- email (String) - Your email
- job_title (String) - Desired/Current Job Title
- motto (String) - Your motto
- portfolio (URL) - Your portfolio
- github (URL - optional)
- linkedin (URL - optional)
- stackoverflow (URL - optional)

### Projects > {project}.js

- id (String - optional) - Unique project ID, used for CSS
- title (String)
- description (String)
- image (String) - File name located in public/images
- tech (Array of Strings) - Tech used for the project
- resume (Boolean - optional) - Display on the resume, default is false
- hide (Boolean - optional) - Hide on projects page, default is false
- link (URL - optional) - Link to website
- repo (URL - optional) - Link to repo
- start_year (Number - optional) - Year the project started
- end_year (Number - optional) - Year the project ended
