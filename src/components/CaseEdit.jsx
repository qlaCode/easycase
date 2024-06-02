import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCaseInList } from "../store/slices/case";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";


export default function CaseForm() {

    const caseList = useSelector((state) => state.case.caseList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { caseId } = useParams();

    ////////////////////////////////////////////////////////////////////////////////
    // Data ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    const [formData, setFormData] = useState({ 
            id: '',
            name: '',
            email: '',
            message: ''
    });
    
    useEffect(() => {
        const caseToUpdate = caseList.find((c) => c.id === parseInt(caseId));
        if (caseToUpdate) {
            setFormData(caseToUpdate);
        }
    }, [caseList, caseId]);
    
    ////////////////////////////////////////////////////////////////////////////////
    // Button actions //////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((currentState) => ({
            ...currentState,
            [name]: value
        }))
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log('formData on submit', formData)
        dispatch(updateCaseInList(formData))
        goViewMode()
    }

    const goViewMode = () => {
        navigate(`/view/${caseId}`)
    }
    
return ( 
    <>
        <div>
            <h2 className='title'>Edit Case</h2>
            <form action="submit" onSubmit={submitForm} className='flex flex-col'>
                <div className='w-fit flex'>
                    <button type='submit' className='btn-primary'><FaCheck />Save</button>    
                    <button type='button' onClick={goViewMode} className='btn-secondary'>Cancel</button>
                </div>
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
                <label htmlFor="message" className='form-label'>Message{" "}
                    <textarea 
                    className='form-input'
                    rows="5" 
                    name='message' 
                    value={formData.message}
                    onChange={handleInputChange}/>
                </label>
            </form>
        </div>  
    </>

  )
}
