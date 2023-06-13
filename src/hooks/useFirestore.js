import { useEffect, useState } from "react"
import { db } from "~/firebase/config"
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore"

const useFirestore = (coll, cond) => {
    const [documents, setDocuments] = useState([])
    useEffect(() => {
        let colRef = collection(db, coll)

        if (cond) {
            if (!cond.compareValue) {
                return
            }

            colRef = query(colRef, where(cond.fieldName, cond.operator, cond.compareValue), orderBy("createdAt"))
        }

        const unsub = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setDocuments(data)
        })

        return unsub
    }, [coll, cond])

    return documents
}

export default useFirestore