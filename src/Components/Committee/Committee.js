import React, { Component } from "react";
import { Table } from "react-bootstrap";

    class Theme extends Component {
        
        render(){
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
                <td className="tdborder"> Dr. R.K. Agarwal<br/>Director General, AKGEC </td> 
                <td className="tdborder">Dr. P.K. Chopra<br/>Director, AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">General Chair</th>
                        <th className="noborder">Conference Chair</th>
                    </tr>
            <tr>
                <td className="tdborder"> Dr. B. K. Panigrahi<br/>Professor, Electrical Engineering Department, Indian Institute of Technology Delhi</td> 
                <td className="tdborder">Dr. Hemant Ahuja<br/>Professor & Head (EN), AKGEC</td>
            </tr>

            </tbody>
        </Table>
            

            

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Organizing Chair</th>
                        {/* <th className="noborder">Patron</th> */}
                    </tr>
            <tr>
                <td className="tdborder threecols">Dr. Sunita Yadav<br/>Professor & Head (CSE), AKGEC</td> 
                <td className="tdborder threecols">Dr. Anu Chaudhary<br/>Professor & Head (IT), AKGEC</td>
                <td className="tdborder threecols">Dr. Neelesh Kumar Gupta<br/>Professor & Head (ECE), AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Steering Committee </th>
                    </tr>
            <tr>
                <td className="tdborder"> Dr. Ashiv Shah<br/>
Professor & Head, AKGEC Skills
<br/><br/>
Dr. Devendra Singh<br/>
Professor & Head (ME), AKGEC</td> 
                <td className="tdborder">Dr. B. K. Sharma<br/>
Professor & Head, AKGEC-MCA<br/>
<br/>
Dr. Rakesh Srivastava<br/>
Professor & Head (CE), AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Organizing Secretary  </th>
                    </tr>
            <tr>
                <td className="tdborder">Dr. Sukhwinder Singh Dhillon<br/>Associate Professor (EN), AKGEC</td> 
                <td className="tdborder"></td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Technical Chair </th>
                    </tr>
            <tr>
                <td className="tdborder">Dr. Pramod Bhatia<br/>Professor and Dean R&D, AKGEC</td> 
                <td className="tdborder">Dr. A.K. Rai<br/>Professor (EN), AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Finance Chair</th>
                    </tr>
            <tr>
                <td className="tdborder">Mr. Ravindra Kumar<br/>Assistant Professor (EN), AKGEC</td> 
                <td className="tdborder">Dr. J.G. Yadav<br/>Associate Professor (EN) , AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Publicity Chair</th>
                    </tr>
            <tr>
                <td className="tdborder">
Mr. Dinanath Prasad<br/>
Assistant  Professor (EN), AKGEC<br/>
<br/>
 Mr. Arjun Baliyan<br/>
Assistant  Professor (EN), AKGEC</td> 
                <td className="tdborder">
Dr. Dibya Bharti <br/>
Assistant Professor(EN) , AKGEC</td>
            </tr>

            </tbody>
        </Table>

            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th className="noborder">Publication Chair</th>
                    </tr>
            <tr>
                <td className="tdborder">
Dr. Sarika Kalra<br/>
Associate Professor (EN), AKGEC</td>
                <td className="tdborder">
Dr. Vani Bhargava<br/>
Associate Professor(EN) , AKGEC</td>
            </tr>

            </tbody>
        </Table>



{/* honorary */}
            <Table borderless className="mb-5 borderbtm" responsive="md">
            <tbody>
            <tr>
            <th colSpan="2">Honorary Advisory Committee</th>
            </tr>

            <tr>
            <th className="snowidth">S&nbsp;No.</th>
            <th className="nametd">Name and Designation</th>
            <th className="afftd">Affiliation</th>
            </tr>

            <tr>
            <td className="snowidth text-center">1</td>
            <td className="nametd">Prof. Ned Mohan</td>
            <td className="afftd">Regents Professor, University of Minnesota, United States</td>
            </tr>

            <tr>
            <td className="snowidth text-center">2</td>
            <td className="nametd">Prof. Ambrish Chandra</td>
            <td className="afftd">Professor, Ecole de Technologie Superieure, University of Quebec, Montreal, Quebec</td>
            </tr>

            <tr>
            <td className="snowidth text-center">3</td>
            <td className="nametd">Prof. Herbert H.C Lu</td>
            <td className="afftd">University of Western Australia </td>
            </tr>

            <tr>
            <td className="snowidth text-center">4</td>
            <td className="nametd">Dr. Parimita Mohanty</td>
            <td className="afftd">Programme Management Officer, UNEP, Bangkok, TERI</td>
            </tr>

            <tr>
            <td className="snowidth text-center">5</td>
            <td className="nametd">Mr. Yogesh Ratra</td>
            <td className="afftd">Sr. Control Systems Design Engineer, Fluor Corporation, Canada </td>
            </tr>

            <tr>
            <td className="snowidth text-center">6</td>
            <td className="nametd">Tzung-Pei Hong</td>
            <td className="afftd">Distinguished Professor, National University of Kaohsiung, Taiwan</td>
            </tr>

            <tr>
            <td className="snowidth text-center">7</td>
            <td className="nametd">Dr. Valentina E.Balas</td>
            <td className="afftd">Professor, Aurel Vlaicu University of Arad, Romania</td>
            </tr>

            <tr>
            <td className="snowidth text-center">8</td>
            <td className="nametd">Hatem Hatef Abdulkadim Altae</td>
            <td className="afftd">Professor, Cihan University, Iraq</td>
            </tr>

            <tr>
            <td className="snowidth text-center">9</td>
            <td className="nametd">Dr. Yu-Chen Hu</td>
            <td className="afftd">Distinguished Professor, Providence University, Shalu, Taiwan</td>
            </tr>

            <tr>
            <td className="snowidth text-center">10</td>
            <td className="nametd">Frede Blaabjerg</td>
            <td className="afftd">Professor, AAU Energy</td>
            </tr>

            <tr>
            <td className="snowidth text-center">11</td>
            <td className="nametd">Muhammad H Rashid</td>
            <td className="afftd">Professor, Florida Polytechnic University</td>
            </tr>

            <tr>
            <td className="snowidth text-center">12</td>
            <td className="nametd">Prasad Enjeti</td>
            <td className="afftd">Professor, Electrical & Computer Engineering
Texas A&M University</td>
            </tr>

            <tr>
            <td className="snowidth text-center">13</td>
            <td className="nametd">Kaushik Rajashekara
</td>
            <td className="afftd">Distinguished Professor of Engineering, University of Houston</td>
            </tr>

            <tr>
            <td className="snowidth text-center">14</td>
            <td className="nametd">Wael R. Abdulmajeed</td>
            <td className="afftd">Postgraduate Studies Coordinator, University of Baghdad</td>
            </tr>

            <tr>
            <td className="snowidth text-center">15</td>
            <td className="nametd">Dr. G Bhuvaneshwari</td>
            <td className="afftd">Professor, Indian Institute of Technology Delhi</td>
            </tr>

            <tr>
            <td className="snowidth text-center">16</td>
            <td className="nametd">Dr. Bhim Singh</td>
            <td className="afftd">Professor, Indian Institute of Technology Delhi</td>
            </tr>

            <tr>
            <td className="snowidth text-center">17</td>
            <td className="nametd">Dr. Pramod Agarwal</td>
            <td className="afftd">Professor, Indian Institute of Technology Roorkee</td>
            </tr>

            <tr>
            <td className="snowidth text-center">18</td>
            <td className="nametd">Dr. R. Balasubramanian</td>
            <td className="afftd">Professor, Indian Institute of Technology Delhi</td>
            </tr>

            <tr>
            <td className="snowidth text-center">19</td>
            <td className="nametd">Seyed M.K. Sadr</td>
            <td className="afftd">Postdoctoral Research Fellow, University of Exeter, United Kingdom</td>
            </tr>


            <tr>
            <td className="snowidth text-center">20</td>
            <td className="nametd">Dr. Shady H.E. Abdul Aleem</td>
            <td className="afftd">Associate Professor, High Valley Institute for Engineering & Technology, Egypt</td>
            </tr>


            <tr>
            <td className="snowidth text-center">21</td>
            <td className="nametd">Dr. Siva Kumar K,</td>
            <td className="afftd">Associate Professor, Department of Electrical Engineering, IIT Hyderabad, Kandi</td>
            </tr>


            <tr>
            <td className="snowidth text-center">22</td>
            <td className="nametd">Dr. Harish Sharma Krishnamoorthy</td>
            <td className="afftd">Assistant Professor, University of Houston</td>
            </tr>


            <tr>
            <td className="snowidth text-center">23</td>
            <td className="nametd">Wael R. Abdulmajeed</td>
            <td className="afftd">Postgraduate Studies Coordinator, University of Baghdad</td>
            </tr>


            <tr>
            <td className="snowidth text-center">24</td>
            <td className="nametd">Garabed Boghossian</td>
            <td className="afftd">Lecturer, Haigazian University, Lebanon</td>
            </tr>


            <tr>
            <td className="snowidth text-center">25</td>
            <td className="nametd">Dr. Shailaditya Verma</td>
            <td className="afftd">Lecturer, Higher Colleges of Technology, Fujairah Women’s College</td>
            </tr>

            <tr>
            <td className="snowidth text-center">26</td>
            <td className="nametd">Dr. Sudipta Ghosh</td>
            <td className="afftd">Khaufa Univ. of Sciences and Tech. Abu Dhabi, United Arab Emirates</td>
</tr>
<tr>
            <td className="snowidth text-center">27</td>
            <td className="nametd">Dr. Ramkrishan Maheshwari</td>
            <td className="afftd">Lektor,  Centre for Industrial Electronics, University of Southern Denmark.</td>
</tr>
<tr>
            <td className="snowidth text-center">28</td>
            <td className="nametd">Dr. Sanjeet Dwivedi</td>
            <td className="afftd">Danfoss Power Electronics A/S, Drive Intelligence Group Gråsten, Denmark</td>
</tr>
<tr>
            <td className="snowidth text-center">29</td>
            <td className="nametd">Dr. O P. Malik</td>
            <td className="afftd">Professor Emeritus, The University of Calgary, Department of Electrical and Computer Engineering</td>
</tr>
<tr>
            <td className="snowidth text-center">30</td>
            <td className="nametd">Dr. M.A. Rahman</td>
            <td className="afftd">Professor, Memorial University of Newfoundland, Engg. and Applied Science.</td>
</tr>
<tr>
            <td className="snowidth text-center">31</td>
            <td className="nametd">Dr. Rajiv K. Verma</td>
            <td className="afftd">Professor, Electrical and Computer Engg., The University of Western Ontario, London, ON, Canada</td>
</tr>
<tr>
            <td className="snowidth text-center">32</td>
            <td className="nametd">Dr. Talochan S. Sidhu</td>
            <td className="afftd">Professor & Chair , Department of Electrical and Computer Engineering, The University of Western Ontario, London, Ontario, Canada</td>
</tr>
<tr>
            <td className="snowidth text-center">33</td>
            <td className="nametd">Dr. Mohan Lal Kolhe</td>
            <td className="afftd">Professor, Smart and Renewable Energy, Faculty of Engineering and Science, University of Agder, Norway</td>
</tr>
<tr>
            <td className="snowidth text-center">34</td>
            <td className="nametd">Mr. Amit Agarwal </td>
            <td className="afftd">Dy. Managing Director Ghaziabad Precision Products Pvt. Ltd., Ghaziabad</td>
</tr>
<tr>
            <td className="snowidth text-center">35</td>
            <td className="nametd">Mr. Vikas Munjal</td>
            <td className="afftd">Technical Program Manager, Google, California, USA</td>
</tr>
<tr>
            <td className="snowidth text-center">36</td>
            <td className="nametd">Mr. Ankur Jain</td>
            <td className="afftd">Analytics Operations Quality, GE Power</td>
</tr>
<tr>
            <td className="snowidth text-center">37</td>
            <td className="nametd">Dr. Urmil Parikh</td>
            <td className="afftd">Global ,Program Manager, Hitachi Energy India Limited</td>
</tr>
<tr>
            <td className="snowidth text-center">38</td>
            <td className="nametd">Mr. Navneet Kumar</td>
            <td className="afftd">DGM(SPM), Reliance Jio, Mumbai </td>
</tr>
<tr>
            <td className="snowidth text-center">39</td>
            <td className="nametd">Mr. Kshitiz Kulshrestha</td>
            <td className="afftd">GM (SPM), Reliance Jio, Mumbai</td>
</tr>
<tr>
            <td className="snowidth text-center">40</td>
            <td className="nametd">Mr. Vikas Marwaha</td>
            <td className="afftd">Sr. Aditional GM, Satluj Jal Vidyut Nigam, Himachal Pradesh</td>
</tr>
<tr>
            <td className="snowidth text-center">41</td>
            <td className="nametd">Mr. Vineet Saini</td>
            <td className="afftd">Scientist , Department of Science and Technology, Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">42</td>
            <td className="nametd">Mr. R.R. Tanwar</td>
            <td className="afftd">Council Member, IEI, Electrical Division</td>
</tr>
<tr>
            <td className="snowidth text-center">43</td>
            <td className="nametd">Mr. Subramanyam Pulipaka</td>
            <td className="afftd">CEO, National Solar Federation of India</td>
</tr>
<tr>
            <td className="snowidth text-center">44</td>
            <td className="nametd">Mr. Rajesh Bhalla</td>
            <td className="afftd">Manager, Larsen & Turbo Limited</td>
</tr>
<tr>
            <td className="snowidth text-center">45</td>
            <td className="nametd">Mr. Aashutosh Sharma</td>
            <td className="afftd">CEO, Voltrans Energy, Noida</td>
</tr>



            </tbody>
        </Table>

{/* honorary tech*/}
            <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                <th colSpan="2">Honorary Technical Committee</th>
            </tr>

            <tr>
            <th className="snowidth">S&nbsp;No.</th>
            <th className="nametd">Name and Designation</th>
            <th className="afftd">Affiliation</th>
            </tr>

            <tr>
            <td className="snowidth text-center">1</td>
            <td className="nametd">Dr. Mohd. Rihan</td>
            <td className="afftd">Professor, EE, AMU Aligarh </td>
            </tr>

            <tr>
            <td className="snowidth text-center">2</td>
            <td className="nametd">Dr. Prerna Gaur</td>
            <td className="afftd">Professor, EE, NSUT, Delhi</td>
            </tr>

            <tr>
            <td className="snowidth text-center">3</td>
            <td className="nametd">Dr. Mohmmad Rizwan</td>
            <td className="afftd">Professor, DTU, Delhi</td>
            </tr>

            {/* <tr>
            <td className="snowidth text-center">4</td>
            <td className="nametd">Dr. Kirti Pal</td>
            <td className="afftd">Associate Professor, GBU, Greater Noida</td>
            </tr>

            <tr>
            <td className="snowidth text-center">5</td>
            <td className="nametd">Dr. Mohmmad Rizwan</td>
            <td className="afftd">Professor, DTU, Delhi</td>
            </tr>
*/}
            <tr>
            <td className="snowidth text-center">4</td>
            <td className="nametd">Dr. Ashish Srivastava</td>
            <td className="afftd">Professor, EE, Manipal University, Jaipur, Rajasthan </td>
            </tr> 

            <tr>
            <td className="snowidth text-center">5</td>
            <td className="nametd">Dr. Sarsingh Gao</td>
            <td className="afftd">Professor, NERIST, Arunachal Pradesh</td>
            </tr>

            <tr>
            <td className="snowidth text-center">6</td>
            <td className="nametd">Dr. J.S. Lather</td>
            <td className="afftd">Professor, NIT, Kurukshetra</td>
            </tr>

            <tr>
            <td className="snowidth text-center">7</td>
            <td className="nametd">Dr. Shailesh Tiwari</td>
            <td className="afftd">Director, KEC, Ghaziabad, U.P.</td>
            </tr>

            <tr>
            <td className="snowidth text-center">8</td>
            <td className="nametd">Dr. Ajay Shekhar Pandey</td>
            <td className="afftd">Professor, EE, KNIT Sultanpur</td>
            </tr>

            <tr>
            <td className="snowidth text-center">9</td>
            <td className="nametd">Dr. Majid Jamil</td>
            <td className="afftd">Professor, Jamia Millia Islamia</td>
            </tr>

            <tr>
            <td className="snowidth text-center">10</td>
            <td className="nametd">Dr. Asheesh Kumar Singh</td>
            <td className="afftd">MNNIT, Allahabad (Pryagraj)</td>
            </tr>

            <tr>
            <td className="snowidth text-center">11</td>
            <td className="nametd">Dr. Sanjeev Singh Chauhan</td>
            <td className="afftd">Professor, EE, Maulana Azad National Institute of Technology, Bhopal</td>
            </tr>

            <tr>
            <td className="snowidth text-center">12</td>
            <td className="nametd">Dr. Sanjay Gairola</td>
            <td className="afftd">Professor, EE, Govind Ballabh Pant Institute of Engineering & Technology, Ghurdauri, Uttrakhand</td>
            </tr>

            <tr>
            <td className="snowidth text-center">13</td>
            <td className="nametd">Dr. Mohit Bansal</td>
            <td className="afftd">Professor and Head, EEE, GL Bajaj, Greater Noida</td>
            </tr>

            <tr>
            <td className="snowidth text-center">14</td>
            <td className="nametd">Dr. Manish Saraswat</td>
            <td className="afftd">Professor and head, ME, Lloyd College, Greater Noida</td>
            </tr>

            <tr>
            <td className="snowidth text-center">15</td>
            <td className="nametd">Dr. Tariqul Islam</td>
            <td className="afftd">Professor, Jamia Milia Islamia, Delhi </td>
            </tr>

            <tr>
            <td className="snowidth text-center">16</td>
            <td className="nametd">Dr. R. P. Maheshwari</td>
            <td className="afftd">Ex-Professor, Indian Institute of Technology Roorkee </td>
            </tr>

            <tr>
            <td className="snowidth text-center">17</td>
            <td className="nametd">Dr. Arvind Kumar Sharma</td>
            <td className="afftd">Professor, KIET, Ghaziabad, U.P</td>
            </tr>

            <tr>
            <td className="snowidth text-center">18</td>
            <td className="nametd">Dr. Monika Jain</td>
            <td className="afftd">Professor & Head, ITS, Greater Noida</td>
            </tr>

            <tr>
            <td className="snowidth text-center">19</td>
            <td className="nametd">Mr. Meenu Singhal</td>
            <td className="afftd">Vice President, Schneider Electric</td>
            </tr>


            <tr>
            <td className="snowidth text-center">20</td>
            <td className="nametd">Dr. Anish Gupta</td>
            <td className="afftd">Assistant Director, Chandigarh University</td>
            </tr>


            <tr>
            <td className="snowidth text-center">21</td>
            <td className="nametd">Dr. Vikas Bhadoria</td>
            <td className="afftd">Associate Professor, ABESEC</td>
            </tr>


            <tr>
            <td className="snowidth text-center">22</td>
            <td className="nametd">Dr. Vivek Shrivastava</td>
            <td className="afftd">Associate Professor, NIT Delhi</td>
            </tr>


            <tr>
            <td className="snowidth text-center">23</td>
            <td className="nametd">Dr. Aseem Chandel</td>
            <td className="afftd">Associate Professor, Govt. Engineering College, Mainpuri, UP</td>
            </tr>


            <tr>
            <td className="snowidth text-center">24</td>
            <td className="nametd">Dr. Jay Singh</td>
            <td className="afftd">Associate Professor, G.L. Bajaj Greater Noida</td>
            </tr>


            <tr>
            <td className="snowidth text-center">25</td>
            <td className="nametd">Dr. Kirti Pal</td>
            <td className="afftd">Associate Professor, GBU, Greater Noida</td>
            </tr>


            <tr>
            <td className="snowidth text-center">26</td>
            <td className="nametd">Dr. Ashish Malik
</td>
            <td className="afftd">Director, Axis Group of Colleges, Kanpur, U.P</td>
            </tr>


            <tr>
            <td className="snowidth text-center">27</td>
            <td className="nametd">Dr. Pawan Kumar</td>
            <td className="afftd">Assistant Professor, Thapar Institute of Engineering & Technology, Patiala</td>
            </tr>


            <tr>
            <td className="snowidth text-center">28</td>
            <td className="nametd">Dr. Sachin Singh</td>
            <td className="afftd">Assistant Professor, Institute of Engineering & Technology, Lucknow, U.P</td>
            </tr>


            <tr>
            <td className="snowidth text-center">29</td>
            <td className="nametd">Dr. Arun Kumar Verma</td>
            <td className="afftd">Assistant Professor, EE, MNIT, Jaipur</td>
            </tr>


            <tr>
            <td className="snowidth text-center">30</td>
            <td className="nametd">Dr. Preeti </td>
            <td className="afftd">Assistant Professor, Vishwakarma Skill University 
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">31</td>
            <td className="nametd">Dr Pratul Arvind</td>
            <td className="afftd">Associate Professor, Department of Electrical Engineering ADGITM, New Delhi
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">32</td>
            <td className="nametd">Dr K. P. Singh</td>
            <td className="afftd">National Power Training Institute (NPTI), Faridabad
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">33</td>
            <td className="nametd">Dr. Arun Sharma</td>
            <td className="afftd">Head & Professor in Department of Artificial Intelligence and Data Science, Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">34</td>
            <td className="nametd">Dr. G.N. Tiwari</td>
            <td className="afftd">Professor, IIT, Delhi
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">35</td>
            <td className="nametd">Dr. M.A. Ansari</td>
            <td className="afftd">Professor, Gautam Budha Univesity, Gr. Noida
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">36</td>
            <td className="nametd">Dr. Sanjeeba Bisoyi</td>
            <td className="afftd">Associate Professor, JSS Academy of Technical Education, Noida
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">37</td>
            <td className="nametd">Dr. Rajesh Kumar</td>
            <td className="afftd">Associate Professor, North Eastern Regional Institute of Science and Technology, Nirjuli, Itanagar, Arunachal Pradesh, India
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">38</td>
            <td className="nametd">Dr. Jiwanjot Singh</td>
            <td className="afftd">Assistant Professor, NIT Silchar.
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">39</td>
            <td className="nametd">Dr. Amit Kumar</td>
            <td className="afftd">Associate Professor, IIT Delhi.
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">40</td>
            <td className="nametd">Dr. Sreejith S. </td>
            <td className="afftd">Assistant Professor, NIT Silchar
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">41</td>
            <td className="nametd">Dr. Vijayakumar K. </td>
            <td className="afftd">Assistant Professor, IIITDM Kancheepuram (Under MhRD), Kandigai, Chennai
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">42</td>
            <td className="nametd">Dr. Pardeep Kumar </td>
            <td className="afftd">Assistant Professor, NIT Kurukshetra
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">43</td>
            <td className="nametd">Dr. Hasmat Malik </td>
            <td className="afftd">Professor, BEARS, NUS Campus, Singapore
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">44</td>
            <td className="nametd">Dr. Narendra Kumar</td>
            <td className="afftd">Professor, Delhi Technological University, Delhi
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">45</td>
            <td className="nametd">Dr. Anuradha Tomar </td>
            <td className="afftd">Associate Professor, NSUT, Delhi
            </td>
            </tr>

            <tr>
            <td className="snowidth text-center">46</td>
            <td className="nametd">Dr. Manpreet Singh Manna</td>
            <td className="afftd">Associate Professor, EIE Department, Ex Director  AICTE, MHRD, New Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">47</td>
            <td className="nametd">Dr. Manmohan Singh</td>
            <td className="afftd">Associate Professor, EIE Department, SLIET, Longowal</td>
</tr>
<tr>
            <td className="snowidth text-center">48</td>
            <td className="nametd">Dr. Kanwardeep Singh</td>
            <td className="afftd">Professor & Head, Electrical Engineering Department, GNDEC, Ludhiana</td>
</tr>
<tr>
            <td className="snowidth text-center">49</td>
            <td className="nametd">Dr. Preetinder Singh</td>
            <td className="afftd">Associate Professor, Electrical Engineering Department, GNDEC, Ludhiana</td>
</tr>
<tr>
            <td className="snowidth text-center">50</td>
            <td className="nametd">Dr. Gagandeep Singh Sodhi</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, GNDEC, Ludhiana</td>
</tr>
<tr>
            <td className="snowidth text-center">51</td>
            <td className="nametd">Dr. Anupma Marwaha</td>
            <td className="afftd">Professor, Electrical and Electronics Engineering, SLIET, Longowal</td>
</tr>
<tr>
            <td className="snowidth text-center">52</td>
            <td className="nametd">Dr. Surinder Singh</td>
            <td className="afftd">Professor, Electrical and Electronics Engineering, SLIET, Longowal</td>
</tr>
<tr>
            <td className="snowidth text-center">53</td>
            <td className="nametd">Dr. Akshay Girdhar</td>
            <td className="afftd">Professor, Electrical Engineering Department, GNDEC, Ludhiana</td>
</tr>
<tr>
            <td className="snowidth text-center">54</td>
            <td className="nametd">Dr. Manpreet Singh</td>
            <td className="afftd">Associate Professor, Electrical Engineering Department, GNDEC, Ludhiana</td>
</tr>
<tr>
            <td className="snowidth text-center">55</td>
            <td className="nametd">Dr. R. P. Gupta</td>
            <td className="afftd">Birla Institute of Technology, Sindri</td>
</tr>
<tr>
            <td className="snowidth text-center">56</td>
            <td className="nametd">Dr. Mala De</td>
            <td className="afftd">National Institute of Technology Patna</td>
</tr>
<tr>
            <td className="snowidth text-center">57</td>
            <td className="nametd">Dr. K.K. Prajapati</td>
            <td className="afftd">RTU Kota, Rajasthan</td>
</tr>
<tr>
            <td className="snowidth text-center">58</td>
            <td className="nametd">Dr. Narendra Kumar</td>
            <td className="afftd">Professor, DTU, Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">59</td>
            <td className="nametd">Dr. Manoj Kumar Duhan</td>
            <td className="afftd">Professor, DCRUST Murthal, Communication systems</td>
</tr>
<tr>
            <td className="snowidth text-center">60</td>
            <td className="nametd">Dr. O.P. Verma</td>
            <td className="afftd">Professor, Electronics and Communication Engineering, DTU Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">61</td>
            <td className="nametd">Dr. Manish Kumar Saini</td>
            <td className="afftd">DCRUST Murthal</td>
</tr>
<tr>
            <td className="snowidth text-center">62</td>
            <td className="nametd">Dr. A. N. Tiwari</td>
            <td className="afftd">Professor, Electrical Engineering Department, MMMUT, Gorakhpur</td>
</tr>
<tr>
            <td className="snowidth text-center">63</td>
            <td className="nametd">Dr. S. P. Srivastava</td>
            <td className="afftd">Professor (Retired), EED, IIT Roorkee</td>
</tr>
<tr>
            <td className="snowidth text-center">64</td>
            <td className="nametd">Prof. N. D. Kaushika</td>
            <td className="afftd">IIT Delhi, Solar Thermal and Photovoltaics</td>
</tr>
<tr>
            <td className="snowidth text-center">65</td>
            <td className="nametd">Dr. D. K. Khatod</td>
            <td className="afftd">Professor, IIT Roorkee</td>
</tr>
<tr>
            <td className="snowidth text-center">66</td>
            <td className="nametd">Dr. Amit Jain</td>
            <td className="afftd">Associate Professor, Electrical Engineering Department,  IIT Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">67</td>
            <td className="nametd">Dr. Ajay Shekhar Pandey</td>
            <td className="afftd">Professor, Electrical Engineering Department, KNIT Sultanpur</td>
</tr>
<tr>
            <td className="snowidth text-center">68</td>
            <td className="nametd">Dr. Ashish Malik</td>
            <td className="afftd">Director, Axis colleges, Kanpur</td>
</tr>
<tr>
            <td className="snowidth text-center">69</td>
            <td className="nametd">Dr. Monika Gupta</td>
            <td className="afftd">ITS, Greater Noida</td>
</tr>
<tr>
            <td className="snowidth text-center">70</td>
            <td className="nametd">Dr. Nilanjan Sen Roy</td>
            <td className="afftd">Professor, Department of Electrical Engineering, IIT Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">71</td>
            <td className="nametd">Dr. Jay Singh</td>
            <td className="afftd">Associate Professor, GL Bajaj Institute of Technology and Management, Greater Noida</td>
</tr>
<tr>
            <td className="snowidth text-center">72</td>
            <td className="nametd">Dr. R.K. Nema</td>
            <td className="afftd">Professor & HoD Electrical, MANIT Bhopal</td>
</tr>
<tr>
            <td className="snowidth text-center">73</td>
            <td className="nametd">Dr. T. Visalakshi</td>
            <td className="afftd">Professor, Department of Civil Engineering at Ecole Centrale School of Engineering, Mahindra University</td>
</tr>
<tr>
            <td className="snowidth text-center">74</td>
            <td className="nametd">Dr. Tarun Varshney</td>
            <td className="afftd">Professor & Head of the Department, Electrical Electronics and Communication Engineering (EECE),  Sharda University, Greater Noida</td>
</tr>
<tr>
            <td className="snowidth text-center">75</td>
            <td className="nametd">Dr. A.K. Tandon</td>
            <td className="afftd">Former professor DTU, Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">76</td>
            <td className="nametd">Dr. Rajendra Kumar Shukla</td>
            <td className="afftd">Professor and Head, Mechanical Engineering, Department, Medicaps University Indore</td>
</tr>
<tr>
            <td className="snowidth text-center">77</td>
            <td className="nametd">Dr. Sachin Sharma</td>
            <td className="afftd">Associate Professor, Graphic Era University, Dehradun</td>
</tr>
<tr>
            <td className="snowidth text-center">78</td>
            <td className="nametd">Dr. Kuldeep Sahay</td>
            <td className="afftd">Professor, Electrical Engineering Department IET, Lucknow</td>
</tr>
<tr>
            <td className="snowidth text-center">79</td>
            <td className="nametd">Dr. Rishi Asthana</td>
            <td className="afftd">Professor & Director, Goel Group of Institutions, Lucknow</td>
</tr>
<tr>
            <td className="snowidth text-center">80</td>
            <td className="nametd">Dr. Apurva Anand</td>
            <td className="afftd">BBDIT University, Lucknow</td>
</tr>
<tr>
            <td className="snowidth text-center">81</td>
            <td className="nametd">Dr. Nidhi Singh</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, Gautam Buddha University, Greater Noida</td>
</tr>
<tr>
            <td className="snowidth text-center">82</td>
            <td className="nametd">Dr. Vijay Anant Athavale</td>
            <td className="afftd">Principal, WIT, Solapur</td>
</tr>
<tr>
            <td className="snowidth text-center">83</td>
            <td className="nametd">Dr. Shailendra Jain</td>
            <td className="afftd">Professor & Director, SLIET Longowal</td>
</tr>
<tr>
            <td className="snowidth text-center">84</td>
            <td className="nametd">Dr. Surjit Singh</td>
            <td className="afftd">Assistant Professor, Thapar Institute of Engg and Technology, Patiala</td>
</tr>
<tr>
            <td className="snowidth text-center">85</td>
            <td className="nametd">Dr. S. N. Sharma</td>
            <td className="afftd">Professor at SVNIT, Surat</td>
</tr>
<tr>
            <td className="snowidth text-center">86</td>
            <td className="nametd">Dr. K. S. Verma, </td>
            <td className="afftd">Professor, Electrical Engineering Department, KNIT Sultanpur</td>
</tr>
<tr>
            <td className="snowidth text-center">87</td>
            <td className="nametd">Dr. Rachna Garg,</td>
            <td className="afftd">Professor, Electrical Engineering Department, DTU, Delhi</td>
</tr>
<tr>
            <td className="snowidth text-center">88</td>
            <td className="nametd">Dr. S. N. Sharma</td>
            <td className="afftd">Professor, Electrical Engineering, at SVNIT, Surat</td>
</tr>
<tr>
            <td className="snowidth text-center">89</td>
            <td className="nametd"> Dr. Harkamalpreet Singh</td>
            <td className="afftd">Assistant Professor, Punjabi University, Patiala</td>
</tr>
<tr>
            <td className="snowidth text-center">90</td>
            <td className="nametd">Dr. Gyan Ranjan Biswal</td>
            <td className="afftd">Associate Professor & Head, Electrical and Electronics Engineering, Veer Surendra Sai University of Technology (VSSUT) Odisha </td>
</tr>
<tr>
            <td className="snowidth text-center">91</td>
            <td className="nametd">Dr. Nilesh Chothani</td>
            <td className="afftd">Adani Institute of Infrastructure, Associate Professor, Electrical Engineering</td>
</tr>
<tr>
            <td className="snowidth text-center">92</td>
            <td className="nametd">Dr. Yogesh M.Makwana</td>
            <td className="afftd">Assistant Professor, Government Engineering College, Dahod</td>
</tr>
<tr>
            <td className="snowidth text-center">93</td>
            <td className="nametd">Dr. Kunal Bhatt</td>
            <td className="afftd">Assistant Professor, Electrical Engineering, L.D. College of Engineering, Ahmedabad</td>
</tr>
<tr>
            <td className="snowidth text-center">94</td>
            <td className="nametd">Dr. Vishal Gaur</td>
            <td className="afftd">Postdoctoral Research Associate, Indian Institute of Technology Kanpur</td>
</tr>
<tr>
            <td className="snowidth text-center">95</td>
            <td className="nametd">Dr. Praghnesh Bhatt</td>
            <td className="afftd">Associate Professor, Electrical Department, School of Technology, Pandit Deendayal Petroleum University (PDPU), Gandhinagar </td>
</tr>
<tr>
            <td className="snowidth text-center">96</td>
            <td className="nametd">Dr. Het Bhalja</td>
            <td className="afftd">Department of Electrical Engineering Indian Institute of Technology Roorkee, India</td>
</tr>
<tr>
            <td className="snowidth text-center">97</td>
            <td className="nametd">Dr. Vivek Pandya</td>
            <td className="afftd">Associate Professor Electrical Engineering Department Pandit Deendayal Petroleum University</td>
</tr>
<tr>
            <td className="snowidth text-center">98</td>
            <td className="nametd">Dr. Subrahmanyam Murala</td>
            <td className="afftd">Associate Professor Department of Electrical Engineering, IIT Ropar</td>
</tr>
<tr>
            <td className="snowidth text-center">99</td>
            <td className="nametd">Dr. Mala De</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, NIT Patna </td>
</tr>
<tr>
            <td className="snowidth text-center">100</td>
            <td className="nametd">Dr. Ambarisha Mishra</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, NIT Patna</td>
</tr>
<tr>
            <td className="snowidth text-center">101</td>
            <td className="nametd">Dr. Soumitri Jena</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, Thapar University, Patiala</td>
</tr>
<tr>
            <td className="snowidth text-center">102</td>
            <td className="nametd">Mr.Vskv Harish</td>
            <td className="afftd">Assistant Professor, Electrical Engineering Department, NSUT, Delhi</td>
</tr>




            </tbody>
        </Table>

        <Table borderless className="mb-5 borderbtm">
            <tbody>
            <tr>
                        <th>Organizing Committee</th>
            </tr>

            <tr>
            <td className="tdborder">Mr. Ritesh Sharma</td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Atul Sood</td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
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
            </tr>

            <tr>
            <td className="tdborder">Mr. Parveen Kumar Dhull</td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
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
            </tr>

            <tr>
            <td className="tdborder">Ms. Nupur Mittal</td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Mahesh Sharma </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Ms. Anubha Gupta</td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Mahendra Dutt Dwivedi </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Neeraj Gupta </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Harsh Mohan Sharma </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Shani Kumar  </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            <tr>
            <td className="tdborder">Mr. Ritesh Yadav </td>
            <td className="tdborder">Assistant Professor</td>
            </tr>

            </tbody>
        </Table>

            </div>
            </div>
            );
        }          
    }
                
              
export default Theme;