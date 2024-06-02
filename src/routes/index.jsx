import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import CaseEdit from "../components/CaseEdit";
import CaseView from "../components/CaseView";
import CaseNew from "../components/CaseNew";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>
                    <Route path='/' element={'Please Select a Case or create a new one'} />
                    {/* <Route path='/' element={<CaseForm/>} /> */}
                    <Route path='/edit/:caseId' element={<CaseEdit/>} />
                    <Route path='/view/:caseId' element={<CaseView/>} />
                    <Route path='/newCase' element={<CaseNew/>} />
                </Route>
                <Route path='*' element={<h1>404 it is so wrong in here</h1>} />
            </Routes>
        </BrowserRouter>
    )
}