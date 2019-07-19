
exports.seed = function (knex) {
  return knex('projects').insert([
    { name: 'World Domination', description: 'dominate the world', completed: 0 },
    { name: 'Get Rich Quick', description: 'get really rich', completed: 0 },
    { name: 'Revenge', description: 'get some revenge', completed: 0 },
    { name: 'More Instagram Followers', description: 'gain more followers on instagram', completed: 0 },
    { name: 'Find the Holy Grail', description: 'pick the correct cup', completed: 0 },
    { name: 'Steal Coworker\'s Identity', description: 'steal my coworker\'s indentity', completed: 0 }
  ]);
};