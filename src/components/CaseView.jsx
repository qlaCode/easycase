import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCaseInList } from "../store/slices/case";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


export default function CaseView() {

    const singleCaseInfos = useSelector((state) => state.case.singleCaseInfos);
    const caseList = JSON.parse(localStorage.getItem("caseList"));
    //const caseList = useSelector((state) => state.case.caseList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { caseId } = useParams();


    const [clickedCaseInfos, setClickedCaseInfos] = useState({ 
        id: '',
        name: '',
        message: '',
        email: ''  
    });
    
    const goEditMode = () => {
        navigate(`/edit/${clickedCaseInfos.id}`)
    }

    const deleteCase = (id) => {
        dispatch(deleteCaseInList(id))
        navigate('/')
    }

useEffect(() => {
    console.log('clickedCaseInfos', JSON.stringify(clickedCaseInfos)), 
    []
})

useEffect(() => {
    const selectedCase = caseList.find((c) => c.id === parseInt(caseId));
    if (selectedCase) {
        setClickedCaseInfos(selectedCase);
    }
}, [caseId, singleCaseInfos]);

return ( 
    <>
        <div>
            <h2 className='title'>Case Information (Case Id: {caseId})</h2>
            <div className='w-fit flex'>
                <button type='button' onClick={goEditMode}  className='btn-primary'><FaEdit />Edit</button> 
                <button type='button' onClick={() => (deleteCase(clickedCaseInfos))}  className='btn-secondary'><FaDeleteLeft />Delete</button> 
            </div>
            <p className='form-label'>Name</p>
            <p className='form-input-ro'>{clickedCaseInfos.name}</p>
            <p className='form-label'>Email</p> <p className='form-input-ro'>{clickedCaseInfos.email}</p>
            <p className='form-label'>Message</p> <p className='form-input-ro'>{clickedCaseInfos.message}</p>
        </div>  
    </>

  )
}
