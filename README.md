# Portfolio

Most developers will probably build their own site to showcase their talents but I decided to add mine to github for anyone to use. Hopefully this website will provide a good starting point for new developers or perhaps backend developers looking to expand.

## Setup & Installation

### Prerequisites

Must have docker set up and running.

```
1. Create .env based on .env.example
2. Set up settings.json file (see schema below)
3. Set up projects.json file (see schema below)
4. docker build -f Dockerfile.dev -t portfolio .
5. docker run -p 4444:8080 -d portfolio
5. Navigate to localhost:4444
```

## Schema

### Projects (projects.json)

- id (String - optional) - Unique project ID, used for CSS
- title (String)
- description (String)
- image (String) - File name located in public/images
- tech (Array of Strings) - Tech used for the project
- resume (Boolean - optional) - Display on the resume, default is false
- hide (Boolean - optional) - Hide on projects page, default is false
- link (String - optional) - Link to website
- repo (String - optional) - Link to repo
- start_year (Number - optional) - Year the project started
- end_year (Number - optional) - Year the project ended

### Settings (settings.json)

- name (String)
- location (String) - County, State
- email (String)
- job_title (String) - Desired/Current Job Title
- motto (String)
- portfolio (String) - Your portfolio
- github (String - optional)
- linkedin (String - optional)
- stackoverflow (String - optional)
