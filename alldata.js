function AllData(){
  const ctx = React.useContext(UserContext);

  function beautifyData() {
    var prettyString="";

    var users = ctx.users;
    for(var i = 0; i < users.length; i++) {
        prettyString+=users[i].name +"\n"
        prettyString+=users[i].email +"\n"
        prettyString+=users[i].password +"\n"
        prettyString+=users[i].balance +"\n"
    }

    return prettyString;
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={ <>
        <h5>All Data in Store</h5>
        {beautifyData()}<br/>
        </>
      }
  />
  )
}
