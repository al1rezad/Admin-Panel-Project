import {atom} from "jotai"
export const authAtom = atom({
    isAuthenticated : false,
    userEmail : null
})
