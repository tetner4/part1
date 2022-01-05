const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.excercises, 0)

    return (
        <p>Total number of excercises = {total}</p>
    )
}

export default Total 