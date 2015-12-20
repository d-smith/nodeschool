var filtermod = require('./mod_filteredls.js')

if(process.argv.length != 4) {
  console.log(process.argv);
  console.log("usage: node filtered_ls_with_mod.js <dir> <ext>")
  return;
}

filtermod(process.argv[2], process.argv[3], function(err, data) {
  if(err != null) {
    console.log(err);
    return;
  }

  data.forEach(function(file){
    console.log(file);
  });
});
