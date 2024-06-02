import { useDispatch, useSelector } from 'react-redux'
import CaseCard from './CaseCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { loadLocalStorage } from '../store/slices/case'

export default function CaseList() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const OpenCaseForm = () => {
    navigate('/newCase')
  }
  
  useEffect(() => {
    const storedCaseList = JSON.parse(localStorage.getItem("caseList"));
    if (storedCaseList && storedCaseList.length > 0) {
        dispatch(loadLocalStorage(storedCaseList));
    }
}, [dispatch]);
  
  const caseList = useSelector((state) => state.case.caseList)

  return (
    <div>
      <div className='flex justify-between pr-1'>
        <h2 className='title'>Case List</h2>
        <button onClick={OpenCaseForm} className='btn-primary'>New Case</button>
      </div>
        <input 
          type="text"
          className='flex [width:calc(100%-0.5rem)] mr-2 text-sm font-normal text-slate-500 bg-slate-100 focus:bg-white p-2 rounded-md'
          name='name' 
          placeholder='Search a case'
        />
      {caseList.map((oneCase) => (
        <CaseCard key={oneCase.id} oneCase={oneCase}/>
      ))}
    </div>
  )
}
