// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  

//   return (
//     <>
//     <h1>Expense Tracker</h1>

//     <p>Add a transaction</p>


//         <input type="number" placeholder='Amount' id='no'></input> <br></br>
        
//         <p>Enter Credit or Debit</p>
//         <input type="text" placeholder='Credit or Debit' id='cd'></input>

//         <p>Enter category</p>
//         <input type='text' placeholder='Category' id='cat'></input>
      



//         <br></br>
//          <button onClick={func}>ADD</button>
//         <br></br>

//         <p>Fetch all transactions</p><button>FETCH</button>
//         <br></br>

//         <p>Update transaction</p><button>UPDATE</button>
//         <br></br>

//         <p>Delete transaction</p><button>delete</button>
//         <br></br>
//     </>
//   )
// }


  



// export default App



//App.js

import React, { useState } from 'react';

const ExpenseTracker = () => {
	const [balance, setBalance] = useState(0);
	const [transactions, setTransactions] = useState([]);
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	const addExpense = () => {
		const parsedAmount = parseFloat(amount);

		if (isNaN(parsedAmount) || parsedAmount <= 0) {
			alert('Please enter a valid amount.');
			return;
		}

		// Update balance
		setBalance(
			(prevBalance) => prevBalance + parsedAmount);

		// Add transaction to the list
		setTransactions((prevTransactions) => [
			...prevTransactions,
			{ description, amount: parsedAmount },
		]);

		// Clear form
		setDescription('');
		setAmount('');
	};

	return (
		<div className="container">
			<h1>Expense Tracker</h1>
			<div className="balance">
				<h2>
					Balance: $
					<span id="balance">
						{balance.toFixed(2)}
					</span>
				</h2>
			</div>
			<div className="transactions">
				<h2>Transactions</h2>
				<ul>
					{
						transactions
							.map(
								(transaction, index) => (
									<li key={index}>
										{
											`${transaction.description}: 
											$${transaction.amount.toFixed(2)}`
										}
									</li>
								))
					}
				</ul>
			</div>
			<div className="add-expense">
				<h2>Add Expense</h2>
				<form>
					<label htmlFor="Description">
						Enter Card Type and Category: 
					</label>
					<input
						type="text"
						id="description"
						value={description}
						onChange={
							(e) =>
								setDescription(e.target.value)
						}
						required
					/>
          <br>
          </br>
					<label htmlFor="amount">
						Amount:
					</label>
					<input
						type="number"
						id="amount"
						step="0.01"
						value={amount}
						onChange={
							(e) =>
								setAmount(e.target.value)
						}
						required
					/>
          <br></br>
					<button type="button"
						onClick={addExpense}>
						Add 
					</button>
				</form>
			</div>
		</div>
	);
};

export default ExpenseTracker;