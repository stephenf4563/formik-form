function Deposit(){

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [balance, setBalance] = React.useState('');
  const ctx = React.useContext(UserContext);
 
  var name1 = ctx.users[0].name;

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,balance);
    if (!validate(name,  'name'))     return;
    if (!validate(balance, 'balance')) return;
    setShow(false);
  }

  function clearForm(){
    setName('');
    setBalance('');
    setShow(true);
  }

  function doDeposit(value){
    if(checkValue(value)){
      setName('');
      setShow(true);
      Deposit();
    }
  }

  function checkValue(value){
    if(value<0){
      setStatus("value cannot be less than zero.")
      return false;
    }
    return true;
  }

  function populateList(){
    return (
      ctx.users.map(user => (
        <option>{user.name}</option>
      ))
    )
  }

  return (
    <Card
    bgcolor="primary"
    header="Deposit"
    body={show ? (
            <>
            Select User<br/>
            <select id="nameList">
              {populateList()}
            </select> 
            <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount" value={balance} onChange={e => doDeposit(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={doDeposit}>Deposit</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Money Successfully Deposited</button>
            </>
          )}
  />
  ) 
}
