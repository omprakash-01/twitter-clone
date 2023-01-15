import TwitterIcon from '@mui/icons-material/Twitter';
import './Home.css';
import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

function Condtiom() {
    return (
        <div className='home'>
            <TwitterIcon className="twitterIcon" />
            <div className="bt">
                <Link to="login" className='link'><Button variant="outlined" className="buttons" id="bn1" fullWidth>
                    Login
                </Button></Link>
                <Link to="signup" className='link'>
                    <Button variant="outlined" className="buttons" fullWidth>
                        SignUp
                    </Button></Link>

            </div>
        </div>
    )
}
export default Condtiom;
