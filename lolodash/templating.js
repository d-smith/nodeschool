var _ = require("lodash");

var worker = function(userRec) {
    return _.template('Hello <%=user%> (logins: <%=logins%>)')(
      {user:userRec.name,logins:userRec.login.length}
    );
};

module.exports = worker;
