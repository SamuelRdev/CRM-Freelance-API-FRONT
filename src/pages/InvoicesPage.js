import { useEffect, useState } from "react";
import invoicesAPI from "../services/invoicesAPI";

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(()=>{
        console.log("UseEffect")
        fetchAllInvoices()
    }, [])

    const fetchAllInvoices = async () => {
        try {
           const data = await invoicesAPI.findAll()
           setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
    <h1>InvoicesPage</h1>
    );
}
 
export default InvoicesPage;