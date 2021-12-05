import { useEffect, useState } from "react";

const useTestimonial = () => {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('./testemonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return [testimonial];

}
export default useTestimonial;