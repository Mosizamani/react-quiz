

function Form({question, onSubmit}) {
    const [score, setScore] = useState(0)
    const formRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(score)
        formRef.current.reset()
    }

    return (
        <>
            <p>Which one are you?</p>
            <p>Take the quiz to figure out!</p>

            <form ref={formRef} onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <p>{question.questiontext}</p>
                {question.answers.map((answer, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name="answers"
                            value={answer.points}
                            onChange={(event) => setScore(Number(event.target.value))}
                        />
                        {answer.answer}
                    </label>
                ))}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
 