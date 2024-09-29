import React, {useState, useRef} from 'react'

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
            <p style={{ color: 'blue' }}>Which one are you?</p>


            <form ref={formRef} onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{ color: 'green' }}>{question.questionText}</p>
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
                <button className="form-btn" type="submit">Submit</button>
            </form>
        </> 
    )
}
 
export default Form