import { Container, Row, Col } from "react-bootstrap";

const BreadcrumbOne = ({ pageTitle, children, classNameContainer = '' }) => {
  return (
    <div className={`breadcrumb-section bg--grey space-pt--r70 space-pb--r70 ${classNameContainer}`}>
      <Container>
        <Row className="align-items-center">
          {pageTitle ? <Col md={6}>
            <div className="page-title">
              <h1 className="breadcrumb-title">{pageTitle}</h1>
            </div>
          </Col> : null}
          <Col md={6}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;
