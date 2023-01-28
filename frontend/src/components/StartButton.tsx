import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function StartButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/songs");
    }

    return (
        <Button onClick={handleClick}>Let's Go</Button>
    )
}

export default StartButton;