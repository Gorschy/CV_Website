import './Bottom.css'
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";


function Bottom() {
    return(
        <div>
            <div className="left-footer">
                <div className="email-and-line">
                
                    <ul className="footer-icon-wrapper">
                    <li>
                        <a>
                            <img src={Github}></img>
                        </a>
                    </li>
                    <li>
                        <div className="vertical-line"></div>
                    </li>
                    <li>
                        <a>
                        <img src={LinkedIn}></img>
                        </a>
                    </li>
                    <li>
                        <div className="vertical-line"></div>
                    </li>
                    </ul>
                </div>
            </div>


                <div className="right-footer">
                <div className="email-wrapper">
                    <div className="email-and-line">
                        <a>Nathan.Gorsch@outlook.com.au</a>
                        <div className="vertical-line"></div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Bottom;
