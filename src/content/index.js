module.exports = {
  siteName: 'Trace Camp',
  signupUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfRk91bZs8PW0Cjezdd-qwmuVPqvUG2zUR12SIT9dA2vCzQAw/viewform?usp=sf_link',
  discordLink: 'https://discord.gg/z5qFUKJkwU',
  // detailsUrl:
  //   'https://www.notion.so/Details-of-Trace-Camp-Winter-2020-1fb942fefba842308d36a70046ee33fb',
  featuredProjects: require('./student-projects.js')
    .default,
  contact: {
    name: 'Stephen Russell',
    email: 'stephendonrussell@gmail.com',
    address: ['821 McMillan Rd', 'Clemson, SC 29631'],
  },
  stats: [
    ['100%', 'Online'],
    ['100+', 'Graduates'],
    ['2', 'Annual Camps'],
  ],
};
