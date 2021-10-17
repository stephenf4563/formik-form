function AllData(){
  const ctx = React.useContext(UserContext);
  return (
     <Card
  bgcolor="primary"
  header="Alldata"
  body={show (
   <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  )}
  />
  )
}
