function AllData(){
  const ctx = React.useContext(UserContext);
 return (
   <Card
      bgcolor="success"
      txtcolor="black"
      title="all Entered Data"
      body={<h5>All Data in Store</h5>
    {JSON.stringify(ctx)}
<br/>)
}
    />    
  );  
}
