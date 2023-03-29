import React from "react";
import './Timeline.css'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Timeline = () => {  

  return (    
    <div>
        <br /> <br />

        <MDBContainer fluid className="py-5">
            <MDBRow>
                <MDBCol lg="12">
                <div className="horizontal-timeline">
                    <MDBTypography listInLine className="items">
                    <li className="items-list">
                        <div className="px-4">
                        <div className="badge bg-info">Informações pessoais</div>
                        <h5 className="pt-2">Event One</h5>
                        {/* <p className="text-muted">
                            It will be as simple as occidental in fact it will be
                            Occidental Cambridge friend
                        </p> */}
                        <div>
                            {/* <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn> */}
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="badge bg-success">Endereço</div>
                        <h5 className="pt-2">Event Two</h5>
                        {/* <p className="text-muted">
                            Everyone realizes why a new common language one could refuse
                            translators.
                        </p> */}
                        <div>
                            {/* <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn> */}
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="badge bg-danger">Pagamento</div>
                        <h5 className="pt-2">Event Three</h5>
                        {/* <p className="text-muted">
                            If several languages coalesce the grammar of the resulting
                            simple and regular
                        </p> */}
                        <div>
                            {/* <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn> */}
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="badge bg-warning">Confirmação de dados</div>
                        <h5 className="pt-2">Event Four</h5>
                        {/* <p className="text-muted">
                            Languages only differ in their pronunciation and their most
                            common words.
                        </p> */}
                        <div>
                            {/* <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn> */}
                        </div>
                        </div>
                    </li>
                    </MDBTypography>
                </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  )
}

export default Timeline

/*
import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer fluid className="py-5">
      <MDBRow>
        <MDBCol lg="12">
          <div className="horizontal-timeline">
            <MDBTypography listInLine className="items">
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-info">2 June</div>
                  <h5 className="pt-2">Event One</h5>
                  <p className="text-muted">
                    It will be as simple as occidental in fact it will be
                    Occidental Cambridge friend
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-success">5 June</div>
                  <h5 className="pt-2">Event Two</h5>
                  <p className="text-muted">
                    Everyone realizes why a new common language one could refuse
                    translators.
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-danger">7 June</div>
                  <h5 className="pt-2">Event Three</h5>
                  <p className="text-muted">
                    If several languages coalesce the grammar of the resulting
                    simple and regular
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-warning">8 June</div>
                  <h5 className="pt-2">Event Four</h5>
                  <p className="text-muted">
                    Languages only differ in their pronunciation and their most
                    common words.
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
*/