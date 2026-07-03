import CheckBox from "@mui/material/Checkbox";

interface CheckBoxProps {
    checked ?: boolean;
    onChange ?: () => void;
}

function CustomCheckBox({checked,onChange,} : CheckBoxProps) {
    return (
        <CheckBox checked = {checked} onChange={onChange} />
    );
    
}

export default CustomCheckBox;