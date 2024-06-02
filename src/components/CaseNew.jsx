import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCaseToList, addToCaseIds } from "../store/slices/case";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export default function CaseNew() {

    const caseList = useSelector((state) => state.case.caseList)
    const caseIds = useSelector((state) => state.case.caseIds)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let lastCaseId = caseIds[caseIds.length - 1] 
    let newCaseId = parseInt(lastCaseId) + 1

    const [formData, setFormData] = useState({ 
        id: newCaseId,
        name: '',
        message: '',
        email: ''  
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log('submitted')
        dispatch(addCaseToList(formData))
        dispatch(addToCaseIds(formData))
        goViewMode()
    }


    const goViewMode = () => {
        navigate(`/view/${newCaseId}`)
    }

    useEffect(() => {
        console.log('formData', JSON.stringify(formData)) 
        console.log(caseList.length + 1),
        []
    })

    const cancel = () => {
        navigate(`/`)
    }

return ( 
    <>
        <div>
            <h2 className='title'>Create New Case</h2>
            <form action="submit" onSubmit={submitForm} className='flex flex-col'>
                <label htmlFor="name" className='form-label'>Name{" "}
                    <input 
                    type="text"
                    className='form-input'
                    name='name' 
                    value={formData.name}
                    onChange={handleInputChange}/>
                </label>
                <label htmlFor="Email" className='form-label'>Email{" "}
                    <input 
                    type="email" 
                    className='form-input'
                    name='email' 
                    value={formData.email}
                    onChange={handleInputChange}/>
                </label>
                <div>
                <label htmlFor="message" className='form-label'>Message{" "}
                    <textarea
                    className='form-input' 
                    rows="5" 
                    name='message' 
                    value={formData.message}
                    onChange={handleInputChange}/>
                </label>
                <div className='w-fit flex items-center align-center'>
                    <button type='submit' className='btn-primary mt-2'><FaCheck/>{" "} Create</button> 
                    <button type='button' className='btn-secondary mt-2' onClick={cancel}>Cancel</button>
                </div>
                </div> 
            </form>
        </div>  
    </>

  )
}
