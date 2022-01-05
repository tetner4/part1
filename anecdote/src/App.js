import React, { useState } from 'react'

const Header = ({title}) => {<h1>{title}</h1>}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const AnecdoteWithMostScores = ({anecdote, score}) => {
  return(
    <div>
      {anecdote} has {score} votes.
    </div>
  );
}

const Winner = ({anecdotes, scores}) => {
  if (scores.reduce((a,b) => a+b, 0) > 0) {
    const winner =  scores.indexOf(Math.max(...scores))
    return (
    <AnecdoteWithMostScores anecdote={anecdotes[winner]} score={scores[winner]} />
    );

  } else{
    return( 
      <div>No votes yet cast.</div>
    );

  }
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0))

  //scores looks like [0,0,0,0,0,0,0]

  const onClick = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand)
  }

  const addVote = () => {
    let copy = [...scores];
    copy[selected] += 1;
    setScores(copy);
  }
  
  return(
    <div>
      <Header title='Anecdote of the Day' />
      <Button onClick={addVote} text='vote'/> 
      <Button onClick={onClick} text='next anecdote'/> 
      <Header title='Anecdote with the Most Votes'/>
      <Winner anecdotes={anecdotes} scores={scores} />
      
    </div>
  );
}

export default App