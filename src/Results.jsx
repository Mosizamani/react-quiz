import PropTypes from 'prop-types'
function Results({ score, handleReset }) {
    const levels = [
        {
            'name': 'Beginner',
            'description': 'You are just starting out. Keep going!',
            'minPoints': 0
        },
        {
            'name': 'Intermediate',
            'description': 'You are on your way. Keep going!',
            'minPoints': 6
        },
        {
            'name': 'Advanced',
            'description': 'You are almost there. Keep going!',
            'minPoints': 11
        },
        {
            'name': 'Expert',
            'description': 'You are a pro. Keep going!',
            'minPoints': 16
        }
    ]

    const calculateLevel = () => {

        return levels(Math.floor(score / 5))
    }

    const level = calculateLevel()
    return (
        <>
            <p>Congrats!</p>
            <h2>You are certified {levels.name}!</h2>
            <p>{levels.description}</p>
            <p>No matter your level, ...</p>
            <button type="submit" onClick={handleReset}>Retake Quiz</button>
        </>
    )
}

Results.propTypes = {
    score: PropTypes.number,
    handleReset: PropTypes.func
}

export default Results