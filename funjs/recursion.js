function getDependencies(tree, deps) {
  deps = deps || []
  var dependencies = (tree && tree.dependencies) || [];
  Object.keys(dependencies).forEach(function(dep){
      var key = dep + '@' + tree.dependencies[dep].version
      if (deps.indexOf(key) === -1) deps.push(key)
      getDependencies(tree.dependencies[dep], deps)
    })

  return deps.sort();
}

module.exports = getDependencies;
