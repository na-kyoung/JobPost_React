import { post } from "axios";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CompanyAdd = () => {
  const fileRef = useRef(null);
  const nameRef = useRef(null);
  const numRef = useRef(null);
  const jobRef = useRef(null);
  const dateRef = useRef(null);
  const [file, setFile] = useState(null);

  const addCompany = () => {
    console.log("addCustomer() ==> ");
    const url = "http://localhost:3000/api/companyUpload";
    const formData = new FormData();

    formData.append("filename", file.name);
    formData.append("file", file);
    formData.append("name", nameRef.current.value);
    formData.append("num", numRef.current.value);
    formData.append("job", jobRef.current.value);
    formData.append("date", dateRef.current.value);

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
    addCompany();
    //추가된 데이터가 메인 화면에서 보이도록 리로드 수행
    window.location.reload();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        채용 공고 추가
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>

          <Modal.Header closeButton>
            <Modal.Title> 채용 공고 </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* file upload */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label> 푀사 로고 </Form.Label>
              <Form.Control
                type="file"
                name="file"
                ref={fileRef}
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
                ref={nameRef}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> 채용 인원</Form.Label>
              <Form.Control
                type="text"
                name="num"
                ref={numRef}
                placeholder="Enter num"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> 직무 </Form.Label>
              <Form.Control
                type="text"
                name="job"
                ref={jobRef}
                placeholder="Enter job"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> 채용기간 </Form.Label>
              <Form.Control
                type="date"
                name="date"
                ref={dateRef}
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
  );
};

export default CompanyAdd;
