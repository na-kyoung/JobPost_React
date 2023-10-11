import CompanyDelete from "./ComapnyDelete";
import CompanyModify from "./CompanyModify";

const Companies = (props) => {
    return (
        <>
        <tr>
            <td>{props.id}</td>
            <td> <img src={props.logo} width="30px" height="30px" /> </td>
            <td>{props.name}</td>
            <td>{props.num}</td>
            <td>{props.job}</td>
            <td>{props.date}</td>
            <td>
                {/* 수정, 삭제 컴포넌트 호출 */}
                <CompanyModify id={props.id} name={props.name} num={props.num} job={props.job} date={props.date} /> 
                <span style={{margin:'0 2px'}} /> 
                <CompanyDelete id={props.id} /> </td>
        </tr>
        </>
    )
}

export default Companies;