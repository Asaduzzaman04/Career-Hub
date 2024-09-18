import { create } from "zustand";


const useApply = create((set) => ({
    apply : [],
    addJobsApply : (applied) => set((state)=>{
        if(state.apply.includes(applied)){
            return state
        }else{
            return {apply : [...state.apply, applied]}
        }
    })
}))

export default useApply;