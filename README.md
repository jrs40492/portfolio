# Jacob R Swanson

Most developers will probably build their own site to showcase their talents but I decided to add mine to github for anyone to use. Hopefully this website will provide a good starting point for new developers or perhaps backend developers looking to expand.

### Setup & Installation

```
1. Run "npm install"
2. Create .env based on .env.example
3. Set up Firebase (see scheme below)
4. Run "grunt dev"
5. Navigate to <localhost:3000>
```

## Firebase Schema

### projects > [document name]

- accentColor (String)
- description (String)
- image (String)
- imageFallback (String)
- order (Number)
- tech (Array)
- title (String)
- link (String)
- sourceLink (String)

### settings > site

- email (String)
- githubUrl (String)
- jobTitle (String)
- linkedinUrl (String)
- name (String)
- tagLine (String)
- twitterUrl (String)
- websiteUrl (String)

### tech > [document name]

- list (Array)
- order (Number)
- title (String)

### TODO

- Add full user accessibility
- Add resume setup/layout to firebase

### Ideas

- Add a blog
