import Chip from "@mui/material/Chip";

interface StatusProps {
    status : "open" | "paid" | "due" | "inactive";
}

function Status ({status} : StatusProps) {
    const colorMap ={ 
        open : "primary",
        paid : "success",
        due : "error",
        inactive : "default",
    } as const ;

    return (
        <Chip label={status} color={colorMap[status]} size="small" />
    );
}

export default Status;