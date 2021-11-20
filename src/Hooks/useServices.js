import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("../../public/servicesData.json")
            .then(res => res.json())
            .then(data => setServices(data))
            .then(data => console.log(data))
    }, [])
    return [services]
}
export default useServices;