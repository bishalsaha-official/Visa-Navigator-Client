import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
    const visa = useLoaderData()
    console.log(visa)
    return (
        <div>
            {visa[0].countryName}
        </div>
    );
};

export default VisaDetails;