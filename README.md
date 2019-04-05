# Portfolio

Most developers will probably build their own site to showcase their talents but I decided to add mine to github for anyone to use. Hopefully this website will provide a good starting point for new developers or perhaps backend developers looking to expand.

### Setup & Installation

```
1. Run "npm install"
2. Create .env based on .env.example
3. Set up Firebase (see schema below)
4. Run "grunt dev"
5. Navigate to localhost:3000
```

## Firebase Schema

### projects > [project name]

- title (String)
- description (String)
- link (String) - Link to website
- sourceLink (String) - Link to source code/repo
- tech (Array)
- order (Number)
- retired (Boolean) - Will hide links

### settings > site

- name (String) - Your name
- email (String) - Your email
- jobTitle (String) - Desired/Current Job Title
- tagLine (String) - Your motto
- githubUrl (String)
- linkedinUrl (String)
- websiteUrl (String) - Your portfolio
- stackoverflowUrl (String)

### TODO

- Add full user accessibility
- Add resume setup/layout to firebase

### Ideas

- Add a blog
