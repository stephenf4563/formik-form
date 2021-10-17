function load(){
  ctx.users.name;
}
function Withdrawl(){
const [show, setShow]         = React.useState(true);
const [status, setStatus]     = React.useState('');
const [name, setName]         = React.useState('');
const [balance, setBalance] = React.useState('');
const ctx = React.useContext(UserContext);

function load(){
  console.log(ctx.users.name);
}

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
  ctx.users.push({name,balance});
  setShow(false);
}

function clearForm(){
  setName('');
  setBalance('');
  setShow(true);
}

function doWithdrawl(){
  setName('');
  ctx.balance+= balance;
  setShow(true);
}

return (
  <Card
  bgcolor="primary"
  header="Withdrawl"
  body={show ? (
          <>
          Select User
          <br/>
          <select>
          <option>Position1</option>
          <option>Position2</option>
          </select> 
          <input type="number" className="form-control" id="withdrawlAmount" placeholder="Enter Amount" value={balance} onChange={e => setBalance(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={doWithdrawl}>Deposit</button>
          <button type="submit" className="btn btn-light" onClick={load}>load</button>
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
