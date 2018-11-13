#!/usr/bin/env node

const opn = require('opn');
const cfonts = require('cfonts');
const inquirer = require('inquirer');

const actions = {
  GitHub() {
    opn('https://github.com/vigzmv');
  },
  LinkedIn() {
    opn('https://vigneshm.com/work');
  },
  Twitter() {
    opn('https://twitter.com/vigzmv');
  },
  Codementor() {
    opn('https://www.codementor.io/vigzmv');
  },
  Website() {
    opn('https://vigneshm.com');
  },
  Projects() {
    opn('https://vigneshm.com/projects');
  },
  Blog() {
    opn('http://blog.vigneshm.com/');
  },
  Close() {
    process.exit(1);
  },
};

cfonts.say('Vignesh M', {
  font: 'chrome',
  colors: ['red', 'yellow', 'red'],
});

console.log(`Heyaa! I am Vignesh, @vigzmv on the web.
I am a Fullstack JavaScript & Python Developer.
I work at Novelship and lead the Engineering Team.
I am a JavaScript mentor at codementor.
I build excellent modern web applications that scale.
I like to work with startups on cool projects.
I am Mentor, Speaker & A Hackathons Hacker.
`);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Explore more about me?',
      choices: [
        'GitHub',
        'LinkedIn',
        'Twitter',
        'Codementor',
        'Projects',
        'Website',
        'Blog',
        'Close',
      ],
    },
  ])
  .then((answers) => {
    actions[answers.choice]();
    process.exit(1);
  });
