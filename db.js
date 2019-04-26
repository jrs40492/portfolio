const dotenv = require('dotenv');
const firebase = require('firebase/app');
require('firebase/firestore');

dotenv.config();

firebase.initializeApp({
  apiKey: `${process.env.FIRESTORE_API_KEY}`,
  authDomain: `${process.env.FIRESTORE_DOMAIN}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIRESTORE_DOMAIN}.firebaseio.com`,
  projectId: `${process.env.FIRESTORE_DOMAIN}`,
  storageBucket: `${process.env.FIRESTORE_DOMAIN}.appspot.com`,
  messagingSenderId: `${process.env.FIRESTORE_SENDER_ID}`
});

const db = firebase.firestore();

const getSettings = async () => {
  const settings = await db
    .collection('settings')
    .doc('site')
    .get();
  return settings.data();
};

// const getTech = async () => {
//   const techSnapshot = await db.collection('tech').get();

//   const techList = [];
//   techSnapshot.forEach(tech => {
//     techList.push({
//       id: tech.id,
//       data: tech.data()
//     });
//   });
//   return techList;
// };

const getProjects = async () => {
  const projectsSnapshot = await db
    .collection('projects')
    .orderBy('priority')
    .orderBy('startYear', 'desc')
    .orderBy('endYear', 'desc')
    .get();

  const projects = [];
  projectsSnapshot.forEach(project => {
    projects.push({
      id: project.id,
      data: project.data()
    });
  });
  return projects;
};

const loadData = async () => {
  return {
    settings: await getSettings(),
    // tech: await getTech(),
    projects: await getProjects()
  };
};

module.exports = loadData;
