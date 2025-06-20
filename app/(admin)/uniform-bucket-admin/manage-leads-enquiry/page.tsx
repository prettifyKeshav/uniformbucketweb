'use client'
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-fixedcolumns';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-fixedcolumns-dt/css/fixedColumns.dataTables.css';
import DataTable from "@/backendcomponents/DataTable";
import { useRouter } from "next/navigation";
export default function ManageVisitorEnquiry() {
  const router = useRouter();
  useEffect(() => {
      const checkLoginStatus = async () => {
          try {
              const response = await axios.get("http://localhost:5050/check-login", {
                  withCredentials: true,
              });
              if (!response.data.loggedIn) {
                  router.push("/uniform-bucket-admin/login");
              }
          } catch (error) {
              console.error("Login check failed:", error);
          }
      };
      checkLoginStatus();
  }, [router]);
  const tableRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [leadData, setLeadData] = useState([]);
  const columns = [
  <div className="inline-flex items-center gap-2">
    <p>Leads</p>
  </div>,, 'Subject', 'Lead Source', 'Lead Quality', 'Priority', 'Lead Status', 'Owner', 'Project', 'Sub Source', 'Created On', 'Updated On'];
const data = [
  [<div className="wrp">
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
  [<div className="wrp">
      <input
        type="checkbox"
        className="form-control"
        name=""
        id=""
      />
      <div className="inf">
        <p>
          <span>Aditya</span>
        </p>
        <p data-copy="adityashukla.prettifycreative@gmail.com">
          adityashukla.prettifycreative@gmail.com
        </p>
        <p
          style={{ display: "inline-block" }}
          data-copy={+919998887771 }
        >
          +919998887771 
        </p>
      </div>
      <span className="noti-dupli notification-dot protip">
        2
      </span>
    </div>, 'phone_no_?:9811788940;phone_number:+919811788940;', 'Facebook', 'None', 'None', <div className="badge green light p-14" data-dialog="zNneKS4">New</div>, 'Dolatram', 'M3M SKY LOFT', 'FB-Residential Project In Gurgaon1', '7/07/2024 19:32:09', '18/07/2024 11:01:00'],
];
  useEffect(() => {
    axios.get('http://localhost:5050/all_leads')
      .then(res => {
        console.log('Fetched leads:', res.data); // for debugging
        setLeadData(res.data || []);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
      const isDesktop = window.innerWidth > 991;
      const table = $(tableRef.current).DataTable({
        searching: false,
        ordering: false,
        info: false,
        paging: false,
        scrollX: true,
        scrollY: 300,
        destroy: true,
        ...(isDesktop ? { fixedColumns: { start: 1 } } : {}),
      });
  
      return () => table.destroy();
  }, []);
  return (
      <main>
        <div className="manage-leads-sec">
          <div className="filter-wrap">
            <div className="colA">
              <div className="col flex-100">
                <h6 className="mb-10">Manage Leads Enquiry</h6>
              </div>
              <div className="col flex-20 ksuksg" data-select2-id="26">
                {/* <SelectBox
                  options={options}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  menuPortalTarget={document.body} 
                /> */}
                <select name="" id="" className="form-control small full select2-hidden-accessible">
                  <option value="0" data-select2-id="4">
                    Select an option
                  </option>
                  <option value="Broker">Broker</option>
                  <option value="Call">Call</option>
                  <option value="Facebook">Facebook</option>
                  <option value="IVR">IVR</option>
                  <option value="Other">Other</option>
                  <option value="Website">Website</option>
                  <option value="Whats App">Whats App</option>
                </select> 
              </div>
              <div className="col uudpex flex-10">
                <select
                  name="ctl00$ContentPlaceHolder1$DDLeadType"
                  id="DDLeadType"
                  className="form-control small full select2-hidden-accessible"
                  data-select2-id="DDLeadType"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <option value="0" data-select2-id="4">
                    Source
                  </option>
                  <option value="Broker">Broker</option>
                  <option value="Call">Call</option>
                  <option value="Facebook">Facebook</option>
                  <option value="IVR">IVR</option>
                  <option value="Other">Other</option>
                  <option value="Website">Website</option>
                  <option value="Whats App">Whats App</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="3"
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-DDLeadType-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-DDLeadType-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Source"
                      >
                        Source
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        {/* <b role="presentation"></b> */}
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div className="col flex-15">
                <select
                  name="ctl00$ContentPlaceHolder1$DdLeadProject"
                  id="DdLeadProject"
                  className="form-control small full select2-hidden-accessible"
                  data-select2-id="DdLeadProject"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <option value="0" data-select2-id="6">
                    Project
                  </option>
                  <option value="7">ELEGANT FARMHOUSE</option>
                  <option value="6">ELEGANT FARMHOUSE LIVING</option>
                  <option value="2">PRAANA LIVE</option>
                  <option value="8">PRAANA VEDIC CITY ELEVATE DIGITAL</option>
                  <option value="5">VEDIC CITY PRETTIFY</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="5"
                  style={{ width: "156.906px" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-DdLeadProject-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-DdLeadProject-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Project"
                      >
                        Project
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        {/* <b role="presentation"></b> */}
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div className="col flex-15 hide_user_For">
                <select
                  name="ctl00$ContentPlaceHolder1$DDLeadAssigned"
                  id="DDLeadAssigned"
                  className="form-control small full select2-hidden-accessible"
                  data-select2-id="DDLeadAssigned"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <option value="0" data-select2-id="8">
                    Lead Assigned
                  </option>
                  <option value="10">AJAY KUMAR</option>
                  <option value="16">AMIN KHAN</option>
                  <option value="18">AMOL YADAV</option>
                  <option value="13">ANJALI SINGH</option>
                  <option value="19">ASHISH YADAV</option>
                  <option value="2">HARSHPRATEEK SINGH</option>
                  <option value="17">JAYA MEHROTRA</option>
                  <option value="12">KAPIL SOLANKI</option>
                  <option value="15">RAHUL PRASAD</option>
                  <option value="20">RASHIKA YADAV</option>
                  <option value="14">RAVI KUMAR</option>
                  <option value="21">SOURABH KAPOOR</option>
                  <option value="27">SUKANYA</option>
                  <option value="8">SUMIT SETHI</option>
                  <option value="11">URVASHI</option>
                </select>
                <span
                  className="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="7"
                  style={{ width: "156.906px" }}
                >
                  <span className="selection">
                    <span
                      className="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-DDLeadAssigned-container"
                    >
                      <span
                        className="select2-selection__rendered"
                        id="select2-DDLeadAssigned-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Lead Assigned"
                      >
                        Lead Assigned
                      </span>
                      <span
                        className="select2-selection__arrow"
                        role="presentation"
                      >
                        {/* <b role="presentation"></b> */}
                      </span>
                    </span>
                  </span>
                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div className="col flex-15">
                <input
                  name="ctl00$ContentPlaceHolder1$txtSearchKeyword"
                  type="text"
                  id="txtSearchKeyword"
                  className="form-control small search autosuggest full"
                  placeholder="Search Keyword"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="colB">
              <div data-dropdown="">
                <button className="btn small">
                  <svg
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--lucide"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    data-icon="lucide:plus"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7v14"
                    ></path>
                  </svg>{" "}
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrap">
          <div className="team-lead-table-wrap">
            {/* <table ref={tableRef} className="display" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              {leadData.length > 0 ? (
                <tbody className="blogs-container">
                  {leadData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="wrp">
                          <div className="inf">
                            <p><span>{item.FullName}</span></p>
                            <p data-copy={item.EmailID}>{item.EmailID}</p>
                            <p style={{ display: "inline-block" }} data-copy={item.PhoneNo}>{item.PhoneNo}</p>
                          </div>
                        </div>
                      </td>                      
                      <td>{item.EnquiryType}</td>
                      <td>Message</td>
                      <td>{item.PostedDate}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>No leads found.</td>
                  </tr>
                </tbody>
              )}

            </table> */}
            <DataTable columns={columns} data={data} />
            <div className="bottom-filter">
              <ul>
                <li>
                  <a href="">
                    <i className="iconify" data-icon="jam:arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="">1</a>
                </li>
                <li>
                  <a className="active" href="">
                    2
                  </a>
                </li>
                <li>
                  <a href="">3</a>
                </li>
                <li>
                  <a href="">4</a>
                </li>
                <li>
                  <a href="">5</a>
                </li>
                <li>
                  <a href="">6</a>
                </li>
                <li>
                  <a href="">
                    <i className="iconify" data-icon="jam:arrow-right" />
                  </a>
                </li>
              </ul>
              <p className="no-of-results">120 Results</p>
            </div>
          </div>
        </div>
      </main>
  );
}
