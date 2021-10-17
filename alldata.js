function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={ <>
        <h5>All Data in Store</h5>
        {JSON.stringify(ctx)}<br/>
        </>
      }
  />
  )
}
