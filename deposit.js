function Deposit(){

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [balance, setBalance] = React.useState(0);

  
  const ctx = React.useContext(UserContext);
  var selected = 'Steve';
  var tempVal=0;
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

  function doDeposit(){
    if(checkValue(tempVal)){
      console.log(selected);
      for(var i = 0; i < ctx.users.length; i++) {
        if(selected === ctx.users[i].name){
          ctx.users[i].balance = ctx.users[i].balance+tempVal;
          setStatus("balance " + ctx.users[i].balance);
        }
      }
      setName('');
      setShow(true);
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

  function updateSelected(nameVal){
    selected = nameVal;
    for(var i = 0; i < ctx.users.length; i++) {
      if(selected === ctx.users[i].name){
        setStatus("balance " + ctx.users[i].balance);
      }
    }
  }

  function updateValue(val){
    tempVal = parseInt(val);
  }

  return (
    <Card
    bgcolor="primary"
    header="Deposit"
    body={show ? (
            <>
            Select User<br/>
            <select id="nameList" onChange={e => updateSelected(e.currentTarget.value)}>
              {populateList()}
            </select> 
            <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount" onChange={e => updateValue(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={doDeposit}>Deposit</button>
            <label>{status}</label>
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
