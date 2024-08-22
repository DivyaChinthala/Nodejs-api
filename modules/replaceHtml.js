module.exports = function replaceHtml(template, todo) {
  let output = template.replaceAll("{{ID}}", todo.id);
  output = output.replace("{{Title}}", todo.title);
  output = output.replace("{{Completed}}", todo.completed);
  return output;
};
