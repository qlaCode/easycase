import { Outlet } from "react-router-dom"; 
import CaseList from "../components/CaseList";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function DefaultLayout(){
    return (
        <>
        <div className='h-screen w-screen flex flex-col'>
            <div className='flex bg-slate-600 text-slate-200 h-16 justify-center items-center text-2xl font-bold'>
                <Header />
            </div>
            <main className='flex bg-gray-200 text-gray-700 p-5 h-full'>          
                <div className='w-1/5 border-r-solid border-r-2 border-slate-300'>
                    <CaseList />
                </div>
                
                <div className='w-4/5 pl-5 text-gray-700 '>
                    <Outlet />
                </div>
            </main>
            <div className='flex bg-slate-600 text-slate-400 h-16 justify-center items-center'>
                <Footer />
            </div>
        </div>
        </>
    )
}

