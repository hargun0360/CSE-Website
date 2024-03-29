import React, { Component } from "react";
import { Table } from "react-bootstrap";
import ItemCard from './Item';

class Theme extends Component {
    state = {
        data: [
            ["1", "Harish", "IIT"],
            ["177", "77", "88"],
        ],
    }

    render() {

        const itemcards = this.state.data.map(itemcard => {
            return <ItemCard num={itemcard[0]} name={itemcard[1]} institute={itemcard[2]} />
        })


        return (
            <div id="theme" className="target">
                <div className="container" >
                    <h1 className="mb-3 green-heading">Committee </h1>


                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Chair Person/ Chief Patron</th>
                                <th className="noborder">Patron</th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Prof. Pradeep Kumar Mishra<br />Vice Chancellor, Dr. A.P.J. Abdul Kalam
                                    Technical University, Lucknow, India </td>
                                <td className="tdborder">Dr. R. K. Agarwal <br /> Director General, Ajay Kumar Garg Engineering College,
                                    Ghaziabad, India</td>
                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">General Chair</th>
                                {/* <th className="noborder">Technical Chair</th> */}
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Sunita Yadav<br />HoD (CSE), AKGEC, Ghaziabad</td>
                                {/* <td className="tdborder">Dr. Rajesh Prasad <br />AKGEC, Ghaziabad, India</td> */}
                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Conference Convener </th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Rajesh Prasad<br />
                                    Department of CSE. AKGEC, Ghaziabad
                                </td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Workshop Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Sachin Kumar,<br />
                                    Department of CSE. AKGEC, Ghaziabad
                                </td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Finance Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Shashank Sahu,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table>



                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Program Chairs</th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Sonam Gupta<br />
                                    AKGEC, Ghaziabad, India
                                </td>
                                <td className="tdborder">Dr. Charu Agarwal<br />
                                    AKGEC, Ghaziabad, India<br />
                                </td>
                            </tr>

                        </tbody>
                    </Table> */}

                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Publicity Chair </th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Sachin Kumar,
                                    AKGEC, Ghaziabad, India
                                </td>

                            </tr>

                        </tbody>
                    </Table> */}

                    {/* <Table >
                        <thead>
                            <th className="noborder" >Publicity Co-Chair  </th>
                        </thead>
                        <tbody className="tableNew">

                            <tr>
                                <td>Mr. Anuj Kumar Dwivedi<br />AKGEC, Ghaziabad, India</td>
                                <td>Mr. Santosh Kumar Upadhyay<br />AKGEC, Ghaziabad, India</td>
                            </tr>

                        </tbody>
                    </Table> */}

                    {/* <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Technical Chair </th>
                    </tr>
            <tr>
                <td className="tdborder">Dr. Pramod Bhatia<br/>Professor and Dean R&D, AKGEC</td> 
                <td className="tdborder">Dr. A.K. Rai<br/>Professor (EN), AKGEC</td>
            </tr>

            </tbody>
        </Table> */}


                    {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Finance Co-Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. B. N. Pandey, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                    <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Sponsorship Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Inderjeet Kaur,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Technical Program Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Sonam Gupta,<br /> Department of CSE. AKGEC, Ghaziabad</td>

                            </tr>

                        </tbody>
                    </Table>

                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Publication Chair </th>
                            </tr>
                            <tr>
                                <td className="tdborder"> Dr. Charu Agarwal,<br />
                                    Department of CSE. AKGEC, Ghaziabad
                                </td>

                            </tr>

                        </tbody>
                    </Table>


                    {/* <Table borderless className="mb-3 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Sponsorship Co-Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Pronab Kumar Adhikari, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Workshop Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Dr. Pratima Singh, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}

                    {/* <Table >
                        <thead>
                            <th className="noborder">Workshop Co-Chairs</th>
                        </thead>
                        <tbody className="tableNew">


                            <tr>
                                <td>Ms. Jaishree Jain<br />AKGEC, Ghaziabad, India</td>
                                <td>Mr. Pradeep Gupta<br />AKGEC, Ghaziabad, India</td>
                            </tr>


                        </tbody>
                    </Table> */}


                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Local Organizing Chair</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Akhilesh Verma, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table>
                    <Table >
                        <thead>
                            <th className="noborder">Local Organizing Co-Chairs</th>
                        </thead>
                        <tbody className="tableNew">


                            <tr>
                                <td>Ms. Nishu Bansal<br />AKGEC, Ghaziabad, India</td>
                                <td>Ms. Shiva Tyagi<br />AKGEC, Ghaziabad, India</td>
                            </tr>


                        </tbody>
                    </Table> */}

                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th className="noborder">Conference Secretaries</th>
                            </tr>
                            <tr>
                                <td className="tdborder">Mr. Ashish Kumar, AKGEC, Ghaziabad, India</td>

                            </tr>

                        </tbody>
                    </Table> */}


                    {/* <Table>
                        <thead>
                            <th>Editorial Chair </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Sunita Yadav<br />AKGEC, Ghaziabad, India</td>
                                <td>Dr. Dilip Sharma<br />GLA University, Mathura, India</td>
                                <td>Dr. Rajesh Prasad<br />AKGEC, Ghaziabad, India</td>
                            </tr>
                            <tr>
                                <td>Dr. Sonam Gupta<br />AKGEC, Ghaziabad, India</td>
                                <td>Dr. Charu Agarwal<br />AKGEC, Ghaziabad, India</td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table> */}

                    <Table>
                        <thead>
                            <th> &nbsp;Track Chair </th>
                        </thead>
                        <tbody className="tableNew">
                            <tr>
                                <td>Dr. Pratima Singh<br />Department of CSE. AKGEC, Ghaziabad</td>
                                <td>Mr. Akhilesh Verma<br />Department of CSE. AKGEC, Ghaziabad</td>
                                <td>Mr. Anuj Kumar Dwivedi<br />Department of CSE. AKGEC, Ghaziabad</td>
                            </tr>
                        </tbody>
                    </Table>



                    {/* honorary */}
                    <Table borderless className="mb-5 borderbtm" responsive="md">
                        <tbody>
                            <tr>
                                <th colSpan="2">Advisory Committee</th>
                            </tr>

                            <tr>
                                <th className="snowidth">S&nbsp;No.</th>
                                <th className="nametd">Name and Designation</th>
                                <th className="afftd">Affiliation</th>
                            </tr>

                            <tr>
                                <td className="snowidth text-center">1</td>
                                <td className="nametd">Dr. Prabhakar Tiwari</td>
                                <td className="afftd">Chair, Conference Committee, IEEE UP Section</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">2</td>
                                <td className="nametd">Prof. Asheesh Kumar</td>
                                <td className="afftd">Mentor, Conference Committee, IEEE UP Section</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">3</td>
                                <td className="nametd">Dr. Dilip Sharma</td>
                                <td className="afftd">GLA University, Mathura, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">4</td>
                                <td className="nametd">Dr. Daniel Okunbor</td>
                                <td className="afftd">Fayetteville Stare University, North Carolina</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">5</td>
                                <td className="nametd">Dr. Shyam Nair</td>
                                <td className="afftd">National Commission on Higher Education Liberia</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">6</td>
                                <td className="nametd">Dr. Bhimsingh Bohara</td>
                                <td className="afftd">BlueCrest Ghana</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">7</td>
                                <td className="nametd">Dr. Shyam Nair</td>
                                <td className="afftd">BlueCrest University Liberia</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">8</td>
                                <td className="nametd">Dr. Alessio</td>
                                <td className="afftd">Università del Piemonte Orientale</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">9</td>
                                <td className="nametd">Dr. Daniel Okunbor</td>
                                <td className="afftd">Fayetteville Stare University, North Carolina</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">10</td>
                                <td className="nametd">Dr Vibhash Yadav</td>
                                <td className="afftd">Rajkiya Engineering College, Banda. UP</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">11</td>
                                <td className="nametd">Dr. Amos DAVID</td>
                                <td className="afftd">Lorraine University, France</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">12</td>
                                <td className="nametd">Dr. Ashish Khare</td>
                                <td className="afftd">University of Allahabad</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">13</td>
                                <td className="nametd">Dr.Suneeta Agarwal</td>
                                <td className="afftd">Moti Lal Nehru National Institute of Technology Allahabad,
                                    Prayagraj, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">14</td>
                                <td className="nametd">Prof Phool Singh</td>
                                <td className="afftd">Central University of Haryana, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">15</td>
                                <td className="nametd">Dr. Rung-Ching Chen</td>
                                <td className="afftd">Chaoyang University of Technology, Taiwan</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">16</td>
                                <td className="nametd">Dr. Chuan-Ming Liu</td>
                                <td className="afftd">National Taipei University of Technology, Taiwan</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">17</td>
                                <td className="nametd">Dr. Mridul Kumar Gupta</td>
                                <td className="afftd">Chaudhary Charan Singh University, Meerut, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">18</td>
                                <td className="nametd">Dr. Supriya P.Panda</td>
                                <td className="afftd">Manav Rachna International Institute of Research and Studies,
                                    India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">19</td>
                                <td className="nametd">Dr. Parvinder Singh</td>
                                <td className="afftd">Deenbandhu Chhotu Ram University of Science and
                                    Technology Murthal, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">20</td>
                                <td className="nametd">Dr. Om Prakash Sangwan</td>
                                <td className="afftd">Guru Jambheshwar University of Science &amp; Technology, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">21</td>
                                <td className="nametd">Dr. Prabha Sharma</td>
                                <td className="afftd">The North Cap University, Sector 23,Gurugram, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">22</td>
                                <td className="nametd">Prof. P. K. Kapur</td>
                                <td className="afftd">Amity Center for Interdisciplinary Research, Amity University,
                                    Noida, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">23</td>
                                <td className="nametd">Dr. Ali Kashif Bashir</td>
                                <td className="afftd">Manchester Metropolitan University, UK</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">24</td>
                                <td className="nametd">Dr. Moroz Miroslaw</td>
                                <td className="afftd">Wroclaw University of Economics and Business, Poland</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">25</td>
                                <td className="nametd">Prof. Lehel Csató</td>
                                <td className="afftd">Babeș-Bolyai University of Cluj-Napoca, Romania</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">26</td>
                                <td className="nametd">Dr. Anil Bansal</td>
                                <td className="afftd">Director,  Digital Engineering, LTIMindtree, Bengaluru</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">27</td>
                                <td className="nametd">Dr Naresh Kumar</td>
                                <td className="afftd">G L Bajaj institute of technology and management</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">28</td>
                                <td className="nametd">Mr. Arun Kumar</td>
                                <td className="afftd">Senior Manager, Ciena India Pvt Ltd, Plot No. 14, Sec-32, Gurgaon</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">29</td>
                                <td className="nametd">Ms. Ruchi Kansal</td>
                                <td className="afftd">Managing Director, Accenture, Tower C, 1st, DLF Phase 2, Sector 25, Gurugram</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">30</td>
                                <td className="nametd">Prof.. Ashish Seth</td>
                                <td className="afftd">Inha University in Tashkent</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">31</td>
                                <td className="nametd">Prof. Deepak Garg</td>
                                <td className="afftd">Bennett University, Greater Noida, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">32</td>
                                <td className="nametd">Prof. Satendra Sharma</td>
                                <td className="afftd">Yobe State University Damaturu Nigeria</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">33</td>
                                <td className="nametd">Dr Jyotsna Singh</td>
                                <td className="afftd">Chairperson, Computer Engineering, STME	NMIMS Chandigarh, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">34</td>
                                <td className="nametd">Prof. Divakar Yadav</td>
                                <td className="afftd">Indira Gandhi National Open University, New Delhi</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">35</td>
                                <td className="nametd">Mr. Ravi Parkash Jangra</td>
                                <td className="afftd">Senior Director Product Development, Oracle India Pvt Ltd Bangalore</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">36</td>
                                <td className="nametd">Prof. Vijay Vir Singh</td>
                                <td className="afftd">Yusuf Maitama Sule University, Kano, Nigeria</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">37</td>
                                <td className="nametd">Dr. Ekpe Okorafor</td>
                                <td className="afftd">African University of Science and Technology, Nigeria</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">38</td>
                                <td className="nametd">Dr Ravindra Nath</td>
                                <td className="afftd">CSJM University Kanpur, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">39</td>
                                <td className="nametd">Prof. Amit Agarwal</td>
                                <td className="afftd">Manchester Metropolitan University, UKDr. APJ Abdul Kalam Institute of Technology, Tanakpur</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">40</td>
                                <td className="nametd">Dr. Arun Sharma</td>
                                <td className="afftd">Indira Gandhi Delhi Technical University for Women, Delhi, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">41</td>
                                <td className="nametd">Prof. Sanjay Misra</td>
                                <td className="afftd">Ostfold University, Norway</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">42</td>
                                <td className="nametd">Dr M P Mishra</td>
                                <td className="afftd">SOCIS IGNOU New Delhi, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">43</td>
                                <td className="nametd">Dr Rakesh Kumar</td>
                                <td className="afftd">Madan Mohan Malaviya University of Technology Gorakhpur UP, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">44</td>
                                <td className="nametd">Dr. Virender Ranga</td>
                                <td className="afftd">Department of Information Technology, Delhi Technological University, Delhi</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">45</td>
                                <td className="nametd">Dr. Sanjay Kumar Sharma</td>
                                <td className="afftd">Banasthali Vidyapith, India</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">46</td>
                                <td className="nametd">Prof. Vincenzo Piuri</td>
                                <td className="afftd">University of Milan, Italy</td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">47</td>
                                <td className="nametd">Prof. Zhongfei (Mark) Zhang</td>
                                <td className="afftd">Binghamton University, USA</td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* honorary tech*/}
                    <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th colSpan="2">Technical Program Committee</th>
                            </tr>

                            <tr>
                                <th className="snowidth">S&nbsp;No.</th>
                                <th className="nametd">Name and Designation</th>
                                <th className="afftd">Affiliation</th>
                            </tr>

                            <tr>
                                <td className="snowidth text-center">1</td>
                                <td className="nametd">Dr. Shashi Bhushan</td>
                                <td className="afftd">Amity University Punjab, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">2</td>
                                <td className="nametd">Dr. Manoj Kumar</td>
                                <td className="afftd">University of Wollongong in Dubai
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">3</td>
                                <td className="nametd">Dr. Sujith Jayaprakash</td>
                                <td className="afftd">BlueCrest University College, Ghana
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">4</td>
                                <td className="nametd">Dr. Suman</td>
                                <td className="afftd">Bhagwan Parshuram Institute of Technology,
                                    Delhi
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">5</td>
                                <td className="nametd">Dr. Abhilasha Singh</td>
                                <td className="afftd">SRM Institute of Science and Technology,
                                    Delhi-NCR Campus, Ghaziabad
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">6</td>
                                <td className="nametd">Dr. Bhawna Suri</td>
                                <td className="afftd">Bhagwan Parshuram Institute of Technology,
                                    Delhi
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">7</td>
                                <td className="nametd">Dr. Sherin Zafar</td>
                                <td className="afftd">Jamia Hamdard, Delhi
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">8</td>
                                <td className="nametd">Prof(Dr)Laxmi Ahuja</td>
                                <td className="afftd">Amity University, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">9</td>
                                <td className="nametd">Dr. Praveen Kumar</td>
                                <td className="afftd">Amity University Tashkent Uzbekistan
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">10</td>
                                <td className="nametd">Dr.Seema Rawat</td>
                                <td className="afftd">Amity University Tashkent, Uzbekistan
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">11</td>
                                <td className="nametd">Dr. Rana Majumdar</td>
                                <td className="afftd">Sister Nivedita University
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">12</td>
                                <td className="nametd">Dr. Francisca Nonyelum Ogwueleka</td>
                                <td className="afftd">University of Abuja, Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">13</td>
                                <td className="nametd">Dr. Olumide Owolabi</td>
                                <td className="afftd">University of Abuja, Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">14</td>
                                <td className="nametd">Dr. Kirti Seth</td>
                                <td className="afftd">Inha University Tashkeny
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">15</td>
                                <td className="nametd">Dr. Sanjeev Kumar</td>
                                <td className="afftd">United University
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">16</td>
                                <td className="nametd">Dr. Suleiman Salihu Jauro</td>
                                <td className="afftd">Gombe State University Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">17</td>
                                <td className="nametd">Dr. Valentina Emilia Balas</td>
                                <td className="afftd">Aurel Vlaicu University of Arad, Romania
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">18</td>
                                <td className="nametd">Dr. Utkarsh Goel</td>
                                <td className="afftd">IIIT Allahabad, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">19</td>
                                <td className="nametd">Dr. Abhay Kumar Agarwal</td>
                                <td className="afftd">Kamla Nehru Institute of Technology,
                                    Sultanpur
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">20</td>
                                <td className="nametd">Dr Hashim Ibrahim Bisallah</td>
                                <td className="afftd">Kampala International University, Uganda
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">21</td>
                                <td className="nametd">Dr. Sandeep Singh</td>
                                <td className="afftd">Dept. of CSE, The NorthCap University,
                                    Gurugram
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">22</td>
                                <td className="nametd">Dr. Vikash Yadav</td>
                                <td className="afftd">Board of Technical Education, Uttar Pradesh,
                                    India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">23</td>
                                <td className="nametd">Dr. Alhassan Adamu</td>
                                <td className="afftd">Kano University of Science and Technology,
                                    Wudil
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">24</td>
                                <td className="nametd">Dr.Gurseen Rakhra</td>
                                <td className="afftd">Manav Rachna International Institute of
                                    Research and Studies, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">25</td>
                                <td className="nametd">Dr. H. M. Singh</td>
                                <td className="afftd">SHUATS, Prayagraj, Uttar Pradesh
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">26</td>
                                <td className="nametd">Dr Sunil Kumar</td>
                                <td className="afftd">Manipal University Jaipur
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">27</td>
                                <td className="nametd">Dr. Benatiallah Ali</td>
                                <td className="afftd">Laboratory Leesi Adrar University, Algeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">28</td>
                                <td className="nametd">Dr. Bireshwar Dass Mazumdar</td>
                                <td className="afftd">United University Prayagraj
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">29</td>
                                <td className="nametd">Dr. Radha Raman Chandan </td>
                                <td className="afftd">School of Management Sciences(SMS),
                                    Varanasi
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">30</td>
                                <td className="nametd">Dr Manmohan Mishra</td>
                                <td className="afftd">United Institute of Management, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">31</td>
                                <td className="nametd">Dr. Praveen Kumar Shukla</td>
                                <td className="afftd">Department of Computer Science &amp;
                                    Engineering, Babu Banarasi Das University,
                                    Lucknow, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">32</td>
                                <td className="nametd">Dr Muhammed Kabir Ahmed</td>
                                <td className="afftd">Department of Computer Science Gombe Sate
                                    University
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">33</td>
                                <td className="nametd">Dr. Yogesh Kumar Gupta</td>
                                <td className="afftd">Banasthali Vidyapith, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">34</td>
                                <td className="nametd">Dr. Neeraj Chugh</td>
                                <td className="afftd">University of Petroleum and Energy Studies,
                                    Dehradun, Uttarakhand
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">35</td>
                                <td className="nametd">Dr. Arun Kumar Yadav</td>
                                <td className="afftd">NIT Hamirpur, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">36</td>
                                <td className="nametd">Dr. Chintan Kr Mandal</td>
                                <td className="afftd">Jadavpur University, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">37</td>
                                <td className="nametd">Dr. Dac-Nhuong Le</td>
                                <td className="afftd">Haiphong University, Vietnam
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">38</td>
                                <td className="nametd">Dr. Piyush Mahendru</td>
                                <td className="afftd">Manav Rachna University, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">39</td>
                                <td className="nametd">Dr. Audu Musa Mabu</td>
                                <td className="afftd">Yobe State University, Damaturu. Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">40</td>
                                <td className="nametd">Dr. P. Raghu Vamsi</td>
                                <td className="afftd">Jaypee Institute of Information Technology,
                                    Noida, India.
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">41</td>
                                <td className="nametd">Dr. Avdhesh Gupta</td>
                                <td className="afftd">Ajay Kumar Garg Engineering College,
                                    Ghaziabad
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">42</td>
                                <td className="nametd">Dr. Mustapha Ismail</td>
                                <td className="afftd">Gombe State University, Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">43</td>
                                <td className="nametd">Dr. Obunadike Georgina Nkolika</td>
                                <td className="afftd">Federal University Dutsinma, Katsina State
                                    Nigeria
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">44</td>
                                <td className="nametd">Dr. Gaurav Khanna</td>
                                <td className="afftd">Jaypee Institute of Information Technology,
                                    Noida, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">45</td>
                                <td className="nametd">Dr. Rajesh Kumar</td>
                                <td className="afftd">University of Allahabad
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">46</td>
                                <td className="nametd">Dr. Arjun Singh</td>
                                <td className="afftd">Manipal University Jaipur, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">47</td>
                                <td className="nametd">Dr. Sunita Tiwari</td>
                                <td className="afftd">G B Pant DSEU Okhla-1 Campus, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">48</td>
                                <td className="nametd">Dr. Ashutosh Kumar Tripathi</td>
                                <td className="afftd">United University, Prayagraj, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">49</td>
                                <td className="nametd">Dr. B D Mazumdar</td>
                                <td className="afftd">United University, Prayagraj, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">50</td>
                                <td className="nametd">Dr. Prashant Shukla</td>
                                <td className="afftd">United University, Prayagraj, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">51</td>
                                <td className="nametd">Dr. Manoj Kumar Pal</td>
                                <td className="afftd">United University, Prayagraj, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">52</td>
                                <td className="nametd">Dr.Shadab Irfan </td>
                                <td className="afftd">United University, Prayagraj, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">53</td>
                                <td className="nametd">Dr. Mukund Pratap Singh</td>
                                <td className="afftd">Bennett University, Greater Noida
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">54</td>
                                <td className="nametd">Dr. Naveen Kumar</td>
                                <td className="afftd">Thapar University, Punjab, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">55</td>
                                <td className="nametd">Dr. Rahul Bhandari</td>
                                <td className="afftd">Chandigarh University, Punjab, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">56</td>
                                <td className="nametd">Dr. Shabir Ali </td>
                                <td className="afftd">Bharati Vidyapeeth Deemed to be University, Department of Engineering and Technology Navi, Mumbai
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">57</td>
                                <td className="nametd">Dr. Tribhuvan Singh </td>
                                <td className="afftd">Siksha O Anusandhan (Deemed to be University), Bhubaneswar, Odisha, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">58</td>
                                <td className="nametd">Dr. Rakesh Ahuja</td>
                                <td className="afftd">Chitkara University, Punjab, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">59</td>
                                <td className="nametd">Dr. Vijendra Pratap Singh</td>
                                <td className="afftd">Mahatma Gandhi Kashi Vidyapith, Varanasi, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">60</td>
                                <td className="nametd">Dr. Rajwant Singh Rao </td>
                                <td className="afftd">Guru Ghasidas Vishwavidyalaya Bilaspur Chhattisgarh, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">61</td>
                                <td className="nametd">Dr. Rohit Kumar Sachan</td>
                                <td className="afftd">Bennett University Greater Noida
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">62</td>
                                <td className="nametd">Dr. Ashish Kumar Mishra</td>
                                <td className="afftd">Rajkiya Engineering College Ambedkar Nagar Uttar Pradesh India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">63</td>
                                <td className="nametd">Dr. Shivendu Mishra</td>
                                <td className="afftd">Rajkiya Engineering College Ambedkar Nagar, India
                                </td>
                            </tr>
                            <tr>
                                <td className="snowidth text-center">64</td>
                                <td className="nametd">Dr. Prince Rajpoot </td>
                                <td className="afftd">Rajkiya Engineering College Ambedkar Nagar, India
                                </td>
                            </tr>

                        </tbody>
                    </Table>

                    {/* <Table borderless className="mb-5 borderbtm">
                        <tbody>
                            <tr>
                                <th>Organizing Committee</th>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Ritesh Sharma</td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                    {/* <tr>
            <td className="tdborder">Mr. Atul Sood</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                    {/* <tr>
                                <td className="tdborder">Ms. Nidhi Maurya </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Ms. Nav Jyoti Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Gaurav Srivastava </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                    {/* <tr>
            <td className="tdborder">Mr. Parveen Kumar Dhull</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                    {/* <tr>
            <td className="tdborder">Mr. Deepak Narang </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Rahul Dixit </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Ankit Dixit </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                    {/* <tr>
                                <td className="tdborder">Ms. Nupur Mittal</td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Mahesh Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                    {/* <tr>
            <td className="tdborder">Ms. Anubha Gupta</td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}
                    {/* 
                            <tr>
                                <td className="tdborder">Mr. Mahendra Dutt Dwivedi </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                    {/* <tr>
            <td className="tdborder">Mr. Neeraj Gupta </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                    {/* <tr>
                                <td className="tdborder">Mr. Harsh Mohan Sharma </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr>

                            <tr>
                                <td className="tdborder">Mr. Shani Kumar  </td>
                                <td className="tdborder">Assistant Professor</td>
                            </tr> */}

                    {/* <tr>
            <td className="tdborder">Mr. Ritesh Yadav </td>
            <td className="tdborder">Assistant Professor</td>
            </tr> */}

                    {/* </tbody>
                    </Table> */}

                </div>
            </div>
        );
    }
}


export default Theme;