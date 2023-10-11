import Button from 'react-bootstrap/Button';

const CompanyDelete = (props) => {
    const deleteCustomer = (id) => {
        console.log('deleteCustomer()');
        const url = 'http://localhost:3000/api/companyDelete';
        fetch(url, {
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                id : id
            })
        })
        .then((res=>{
            if(res.ok){
                alert('해당 내용을 삭제하겠습니까?');
                //삭제 후 리로드
                window.location.reload();
            }
        }))
    }
    return(
        <Button variant="danger" onClick={()=>{
            deleteCustomer(props.id);
        }}> 삭제 </Button>
    )
}

export default CompanyDelete;