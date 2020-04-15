# Portfolio

I originally intended for my portfolio to be a repo that anyone could clone, modify a couple files, and then upload to a server of their choosing. However, after deciding to implement GitLab CI/CD and switch to a dockerized server, the setup became a bit too complex for the setup to be outlined here.

If you do have interest in cloning and using my portfolio design, please feel free to reach out and we can discuss how to get it setup and working.

## Local Setup & Installation

### Prerequisites

Must have docker installed and running.

```
1. Run "npm install"
2. Update settings.json file (see schema below)
3. Add certificates, education, projects, skills, and work to their respective directories (see schemas below for each)
4. Run `docker-compose -f docker-compose.dev.yml up -d` (May need to change the port in the docker-compose.dev.yml file)
5. Navigate to "localhost" 
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

### Certificates > index.js
- name (String) - Certificate name
- company (String) - Certificate issuer

### Education > index.js
- degree (String)
- college (String)
- graduation_year (Int)

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

### Skills > index.js
- languages (Array) - Programming languages you're familiar with
- frameworks (Array) - Frameworks you're familiar with
- databases (Array) - DBs you're familiar with

### Work > {job}.js
- position (String) - Your job title
- company (String) - Company name
- start_year (Int)
- end_year (Int)
- tools (Array) - Tools used while working there
- duties (Array) - List of job duties