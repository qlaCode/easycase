import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function CaseCard({ oneCase }) {

  const navigate = useNavigate()
  const caseList = useSelector((state) => state.case.caseList)
  const cardCase = caseList.find((c) => c.id === parseInt(oneCase.id));

  const handleClick = (oneCase) => {  
      navigate(`view/${oneCase.id}`)
  }

  return (
    <>
        <div className='border-solid border-2 border-slate-300 mt-2 mb-2 mr-2 p-2 rounded hover:backdrop-brightness-90' onClick={() => handleClick(oneCase)}>
            <p><b>{cardCase.name}</b></p>
            <p className='text-sm'>{cardCase.message}</p>
        </div>
    </>
  )
}
