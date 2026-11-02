function greet(user) {
  const name = user.name.trim();
  return `Welcome back, ${name}!`;
}

module.exports = { greet };
