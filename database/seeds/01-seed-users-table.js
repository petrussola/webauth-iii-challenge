
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "paco", password: '1234', department: "history"},
        {username: "lola", password: '1234', department: "maths"}
      ]);
    });
};
