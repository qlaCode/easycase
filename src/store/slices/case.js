import { createSlice } from "@reduxjs/toolkit";

const caseSlice = createSlice({
    name: 'case',
    initialState: {
        caseList: [
/*             {
                id : 1,
                name : 'Case Num 1',
                message : 'Message 1',
                email : 'email@super.com'
            },
            {
                id : 2,
                name : 'Case Num 2HEY',
                message : 'Message 2',
                email : 'email2@super.com'
            } */
        ], 
        singleCaseInfos: {
            id : '',
            name : '',
            message : '',
            email : ''
        },
        caseIds: []
    },
    reducers: {
        addCaseToList: (state, action) => {
            let newCaseId = 0
            if(state.caseIds.length === 0){
                newCaseId = 1
            } else {
                let lastCaseId = state.caseIds[state.caseIds.length - 1] 
                newCaseId = parseInt(lastCaseId) + 1
            }
            action.payload.id = parseInt(newCaseId)
            state.caseIds.push(newCaseId)
            state.caseList.push(action.payload)
            localStorage.setItem("caseList", JSON.stringify(state.caseList))
        },
        addToCaseIds: (state, action) => {
            const sentCaseId = action.payload.id;
            state.caseIds.push(sentCaseId)
        },
        updateCaseInList: (state, action) => {
            const sentCaseId = action.payload.id;
            const caseToUpdate = state.caseList.find(caseToUpdate => caseToUpdate.id === sentCaseId)
            if (caseToUpdate) {
                caseToUpdate.id = action.payload.id
                caseToUpdate.name = action.payload.name
                caseToUpdate.message = action.payload.message
                caseToUpdate.email = action.payload.email
            }
            localStorage.setItem("caseList", JSON.stringify(state.caseList))
        },
        loadLocalStorage: (state, action) => {
            const storedData = action.payload;
            state.caseIds = action.payload.map(item => item.id);
            state.caseList = storedData;
        },
        deleteCaseInList: (state, action) => {
            const sentCaseID = action.payload.id;
            state.caseList = state.caseList.filter(caseToDelete => caseToDelete.id !== sentCaseID)
            localStorage.setItem("caseList", JSON.stringify(state.caseList))
        }
    }
})

export const { addCaseToList, deleteCaseInList, updateCaseInList, addToCaseIds, loadLocalStorage } = caseSlice.actions;
export default caseSlice.reducer;