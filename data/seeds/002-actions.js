
exports.seed = function (knex) {
  return knex('actions').insert([
    { description: 'ACTION World Domination', notes: 'ACTION dominate the world', completed: 0, project_id: 1 },
    { description: 'ACTION Get Rich Quick', notes: 'ACTION get really rich', completed: 0, project_id: 2 },
    { description: 'ACTION Revenge', notes: 'ACTION get some revenge', completed: 0, project_id: 3 },
    { description: 'ACTION More Instagram Followers', notes: 'ACTION gain more followers on instagram', completed: 0, project_id: 4 },
    { description: 'ACTION Find the Holy Grail', notes: 'ACTION pick the correct cup', completed: 0, project_id: 5 },
    { description: 'ACTION Steal Coworker\'s Identity', notes: 'ACTION steal my coworker\'s indentity', completed: 0, project_id: 6 }
  ]);
};