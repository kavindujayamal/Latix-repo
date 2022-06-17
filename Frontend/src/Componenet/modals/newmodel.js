import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Modal} from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
// import "react-tabs/style/react-tabs.css";
import "./model.css";
import "./styles.css";

export function ModelPRIVACY(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="heading"> PRIVACY</h3>
        </Modal.Title>
        <div className="close clickbtn" onClick={props.onHide}> <MdOutlineClose /></div>
      </Modal.Header>
      <Modal.Body>
        <div className="App">
          <Tabs>
            <TabList>
              <Tab>
                <p>DATA USAGE</p>
              </Tab>
              <Tab>
                <p>COOKIES</p>
              </Tab>
              <Tab>
                <p>OTHER PROVISIONS </p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="panel-content">
                <h2>DATA USAGE </h2>
                  <p>
                    In this Privacy Policy, we do not keep any of your personal
                    data and information.
                  </p>
                  <p>Data we may collect when you use our Service: </p>
                  <p>
                    {" "}
                    - Data as nicknames are solely collected when you log in to
                    play a match. Storage validity is the strictly necessary
                    amount of time in which the lobby is active, and after that,
                    all data is discarded.
                  </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>COOKIES</h2>
                <p>
                  LATIX uses "cookies" to keep the game and user details. These
                  cookies are essential to help your device download or transmit
                  information and help you to browse through the Services.{" "}
                </p>
                <p>
                  Here are some examples of how we use strictly necessary
                  cookies:{" "}
                </p>
                <p> - Keep the session active</p>
                <p> - Allow you to browse the Services easily</p>
                <p>
                  The user can choose to configure their web browser to refuse
                  cookies, or to alert you when they are being sent. If you do,
                  please note that some parts of the website may not function
                  properly. If you want to know more and how to use information,
                  we ask that you consult the links of the companies mentioned
                  above.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>OTHER PROVISIONS </h2>
                <p>
                  Our services are specifically directed at children. If you are
                  a user under the age of 5, you are not recommended to use our
                  Services.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="clickbtn" onClick={props.onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function ModelTerm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="heading">TERMS OF SERVICE</h3>
        </Modal.Title>
        <div className="close clickbtn" onClick={props.onHide}> <MdOutlineClose /></div>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-tab">
          <Tabs>
            <TabList>
              <Tab>
                <p>DATA USAGE </p>
              </Tab>
              <Tab>
                <p>LICENSE </p>
              </Tab>
              <Tab>
                <p>LIMITATIONS </p>
              </Tab>
              <Tab>
                <p>USER CONDUCT</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="panel-content">
                <h2>DATA USAGE</h2>
                <p>
                  By accessing the LATIX website, you agree to be bound by these
                  terms of service, all applicable laws, and regulations and
                  agree that you are responsible for complying with them.{" "}
                </p>
                <p>
                  If you disagree, you are prohibited from accessing the game.{" "}
                </p>
                <p>
                  The materials contained in LATIX are protected by applicable
                  copyright.{" "}
                </p>
                <p>
                  We reserve the right to change the Terms and Conditions and
                  Privacy Policies at any time.{" "}
                </p>
                <p>
                  Your continued use of the game after posting changes to this
                  policy will be considered as your acceptance of those changes.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>LICENSES </h2>
                <p>
                  Permission is granted to temporarily download a copy of the
                  materials from LATIX for personal non-commercial transient
                  viewing. This is the granting of a license, not a transfer of
                  title, and under this license, you cannot:{" "}
                </p>
                <p>
                  {" "}
                  - Try to decompile or reverse engineer any software contained
                  in the LATIX game.{" "}
                </p>
                <p>
                  {" "}
                  - Remove any copyright or other proprietary notations from the
                  materials.
                </p>
                <p>
                  {" "}
                  - Transfer the materials to another person or "mirror" the
                  materials on any other server.{" "}
                </p>
                <p>
                  This license must automatically terminate if you violate any
                  of these restrictions. Therefore, you can be banned from the
                  website at any time. When you finish viewing these materials
                  or terminate this license, you must destroy all materials in
                  your possession, whether in electronic or printed format.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>LIMITATIONS</h2>
                <p>
                  In no circumstance shall LATIX be liable for any damages. Even
                  if the LATIX or an authorized representative of the game has
                  been notified orally or in writing about the possibility of
                  such damage. Including, but not limited to:{" "}
                </p>
                <p> - damage due to loss of data </p>
                <p>
                  {" "}
                  - damage due to the interruption of temporary or permanent
                  maintenance of the services, or due to the technical problems
                </p>
                <p>
                  {" "}
                  - damage resulting from the use or inability to use the
                  materials in our game
                </p>
                <p>
                  We do not accept any responsibility for external links sent to
                  third parties. The inclusion of these links does not mean that
                  we approve the material or content of these websites. We are
                  not responsible for any loss, damage, or inconvenience you may
                  experience while playing LATIX.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>USER CONDUCT</h2>
                <p>
                  You must treat all users with respect and accomplish all
                  updated terms, conditions, and policies connected to the
                  LATIX. Respect other users of the game. Inappropriate language
                  and inappropriate behavior are prohibited. We are not
                  responsible for user-generated content nicknames. Users are
                  responsible for their actions and any consequences that may
                  result from there.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="clickbtn" onClick={props.onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export function ContactUs(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="heading"> ABOUT US</h3>
        </Modal.Title>
        <div className="close clickbtn" onClick={props.onHide}>
          <MdOutlineClose />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="contact-body">
        <h4>LATIX approach to fun game-based learning means kids no longer have to choose between homework and playtime.</h4>
          <h4>General Information</h4>
          <h2>Write us at</h2>
          <h2><a href="HELLO@LATIX.ZYX">HELLO@LATIX.xyz</a></h2>
          <h5>Back-end By Dasun Sennath, Iresh Madushan</h5>
          <h5>Front-end By Pasan pulathisi, Kavindu Jayamal</h5>
          <h5>Animations & UI by Krishan Kanishka</h5>
          <h4>Copyright (©) 2022</h4>
          <h4>All Rights Reserved.</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="clickbtn" onClick={props.onHide}>
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);
//   const [modalterm, setModalterm] = React.useState(false);
//   const [modalcon, setModalcon] = React.useState(false);
//   return (
//     <>
//       <div className="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </div>

//       <ModelNew show={modalShow} onHide={() => setModalShow(false)} />

//       <div className="primary" onClick={() => setModalterm(true)}>
//         term and comdition
//       </div>
//       <ModelTerm show={modalterm} onHide={() => setModalterm(false)} />

//       <div className="primary" onClick={() => setModalcon(true)}>
//         ContactUs
//       </div>
//       <ContactUs show={modalcon} onHide={() => setModalcon(false)} />
//       {/* <ModelTerm show={modalcon} onHide={() =>  setModalcon(false)} />  */}
//     </>
//   );
// }
// function App() {
//   const [modalpry, setModalpry] = React.useState(false);
//   const [modalterm, setModalterm] = React.useState(false);
//   return (
//     <>
//       <div className="model-link" onClick={() => setModalpry(true)}>
//         Launch vertically centered modal
//       </div>

//       <ModelPRIVACY show={modalpry} onHide={() => setModalpry(false)} />

//       <div className="model-link" onClick={() => setModalterm(true)}>
//         term and comdition
//       </div>

//       <ModelTerm show={modalterm} onHide={() => setModalterm(false)} />
//     </>
//   );
// }

// export default App;
