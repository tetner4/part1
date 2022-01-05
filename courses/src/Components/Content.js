import Part from './Part'

const Content = ({parts}) => {
    return (
      <div>
       {parts.map((part, i) => 
        <Part key={i} part={part.name} excercises={part.exercises} />
       )}
       
      </div>
    )
  }

export default Content
  