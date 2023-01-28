import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

function StartButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/songs");
    }

    return (
        <Button backgroundColor="#443737" color="white" _hover={{
            background: "white",
            color: "#443737",
        }} onClick={handleClick}>Let's get cozy</Button>
    )
}

export default StartButton;