import react from "react";

export default function Checker() {
    return (
        <>
            <br />
            <p className="text-center font-weight-bold"> ..Here is Your Health Checker.. <br />Just Ask</p>
            <div className="d-flex justify-content-center" >
                <iframe src="https://healthcare-bot-6udv7zgs2ytas.azurewebsites.net" width="90%" height="480"
                    title="description"></iframe>
            </div>
            <br />
            <br />
        </>
    );
}