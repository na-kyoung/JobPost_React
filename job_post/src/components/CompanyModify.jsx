import { post } from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CompanyModify = (props) => {
    //상태 변수 선언
    const [name, setName] = useState(props.name);
    const [num, setNum] = useState(props.num);
    const [job, setJob] = useState(props.job);
    const [date, setDate] = useState(props.date);
    const [file, setFile] = useState(null);

    const modifyCompany = () => {
        console.log("modifyCompany() ==> ");
        const url = "http://localhost:3000/api/companyModify";
        const formData = new FormData();
    
        formData.append("filename", file.name);
        formData.append("file", file);
        formData.append("name", name);
        formData.append("num", num);
        formData.append("job", job);
        formData.append("date", date);
        formData.append("id", props.id);
    
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        //url로 formData를 전송
        return post(url, formData, config);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        modifyCompany();
        window.location.reload();
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          수정
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
  
            <Modal.Header closeButton>
              <Modal.Title> 공고 수정 </Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
              {/* file upload */}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File upload</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  onChange={(e) => {
                    return setFile(e.target.files[0]);
                  }}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> 회사명 </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>채용인원 </Form.Label>
                <Form.Control
                  type="text"
                  name="num"
                  value={num}
                  onChange={(e)=>{
                    setNum(e.target.value);
                  }}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> 직무 </Form.Label>
                <Form.Control
                  type="text"
                  name="job"
                  value={job}
                  onChange={(e)=>{
                    setJob(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> 채용기간 </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e)=>{
                    setDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Modal.Body>
  
            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleClose}>
                저장
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                닫기
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
        </>
    )
}

export default CompanyModify;