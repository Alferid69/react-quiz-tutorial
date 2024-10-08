import { useQuiz } from "../context/QuizContext";

function NextButton(){
  const {dispatch, answer, index, questionsLength} = useQuiz();
  if(answer === null) return;
  if(index < questionsLength -1) return <button className="btn btn-ui" onClick={()=>dispatch({type: 'nextQuestion'})}>Next</button>
  if(index === questionsLength -1) return <button className="btn btn-ui" onClick={()=>dispatch({type: 'finish'})}>Finish</button>
}

export default NextButton;