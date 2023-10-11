import CompanyDelete from "./ComapnyDelete";
import CompanyModify from "./CompanyModify";
import Card from "react-bootstrap/Card";

const ComapanyCard = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="card_main">
                <Card.Body>
                    <div className="card_main_title">
                        <img src={props.logo} width="30px" height="30px" />
                        <Card.Title> {props.name} </Card.Title>
                    </div>
                    <div className="car_main_sub">
                        {/* <Card.Title> {props.job} </Card.Title> */}
                        <Card.Text> {props.job} </Card.Text>
                        <Card.Text> {props.num}명 </Card.Text>
                        <Card.Text> {props.date} </Card.Text>
                    </div>
                    <div className="card_main_button">
                        <CompanyModify id={props.id} name={props.name} num={props.num} job={props.job} date={props.date} /> 
                        <span style={{margin:'0 2px'}} /> 
                        <CompanyDelete id={props.id} />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ComapanyCard;