import React, { Component } from "react";
import { Table } from "react-bootstrap";

    class Theme extends Component {
            
        render(){
            return (
            <div id="theme" className="target">
            <div className="container" >
            <h1 className="mb-3 green-heading">Track Details</h1>

            <h5 className="extra-bold-text mt-4">Track 1: Green Energy, Electric Drives and Smart Grid</h5>
            <p>Renewable Energy Sources: Solar Energy: Solar PV performance, Solar cell materials and solar cell power plant, Islanded and hybrid modes and control, Plastic solar cells, Solar Thermal Energy: solar collectors and their performance, solar thermal power plants, challenges. Wind Energy: Wind energy technologies, Wind energy conversion systems, Islanding and Grid integration, Wind Energy -environmental impact, Wind structural designs and models, applications. Tidal energy, Geothermal energy, Nuclear energy, Biomass and biofuels, Waste-to-energy, Fuel cells, Energy integration and storage, Distributed Energy Systems, Micro grids, Distribution System Control, Power Electronics and Drives, Smart grids: Architecture, Sizing, Topologies and control methods for Power system applications. Energy storage methods, Energy conservation and auditing, Energy market, Energy Efficiency: Demand side management, modeling, design and simulation; Electric Vehicles: Charging, Battery Management System, Hybrid Vehicles, Grid Integration of Electric Vehicles.</p>
            
            <h5 className="extra-bold-text mt-4">Track 2: Computing and Security</h5>
            <p>Cloud computing, Energy efficient cloud architectures, Storage and computation management of Big Data, Big Data processing on Cloud, Big Data mining and analytics, Visualization of Big Data on Cloud, Energy efficient IT architecture, Energy efficient resource scheduling and optimization, Energy efficient clustering and computing, Large-scale energy aware data storage and computation, Green data centers, Green IT and Green IS, Energy aware resource usage and consumption, Cognitive Learning, Multi-Cloud Connectivity, Data Analytics, Machine Learning, Cloud Enablement, Business Transformation.
Smart grids and virtual power stations, Energy policy, low power electronics and energy recycling, Green computing case studies, Energy efficiency in the Internet of Things, Data and Information, Quality Control; Computer Vision, Distributed Computing, Software Engineering; Bioinformatics; Semantics Web, Cryptography, Digital Forensics, Mobile Security, Cloud Security, Energy Constrained Network Devices.</p>
            
            <h5 className="extra-bold-text mt-4">Track 3: Sustainable Technologies and Development</h5>
            <p> Science of the total environment for sustainability, Solid Waste Reutilization, Nanomaterials for sustainable energy , Next-generation nuclear power, Remote Sensing for sustainability, Artificial intelligence for sustainability, Energy and carbon neutrality, Economic development, Economy oriented building and infrastructure development, Sustainable infrastructure, Environmental system engineering, Sustainable governance indicators, Biofuels, Bioplastics, Smart Monitoring and Predictive Analytics, Tidal energy.     </p>
            
            <h5 className="extra-bold-text mt-4">Track 4: Artificial Intelligence and Embedded Systems </h5>
            <p>Artificial Intelligence, Machine Learning, Deep Learning, Bio-inspired Optimization based power control modeling, protection and simulation, Monitoring topologies: Community Information Systems, Remote Sensing, Geographic Information System and GPS, Disaster Management, E-Systems, Informatics Hybrid Evolutionary Algorithms, Hybrid Intelligent Systems; Neural Networks, Neuro-Fuzzy Models and Applications, Neuro Informatics Open Source: Challenges and Opportunities, Smart Grid Communication topologies for monitoring and control: Power-line Communications, Antenna and Wave Propagation, Green Communication Management. Smart sensors, VLSI Systems, Nano Electronics, FPGA Development, System on Chip, Embedded Applications, Embedded Memory Architecture, System Automation.</p>
            
            
            <h1 className="mt-5 mb-3 green-heading">Plans for Publication of Proceedings</h1>
            <p>
• The proceedings will be published by Springer and online.<br/>
• All the presented papers will be indexed in a Scopus Journal of Springer.<br/>
• Best paper award will be given for each theme.
</p>
</div>

<div className="container" >
            <h1 className="mt-5 mb-3 green-heading">Important Timelines</h1>
            
            {/* <Table bordered > */}
            
            <Table bordered >
  <tbody>
    <tr>
      
      <td>Invitation for Papers </td>
      <td>25th March 2022</td>
      
      

    </tr>
    <tr>
    <td>Submission of Paper  </td>
      
      <td>30th June 2022</td>
     
      
      
    </tr>
    <tr>
    <td>Notification to Authors    </td>
    <td>10th September 2022</td>
    </tr>

    <tr>
    <td>Final Version of Accepted Submissions   </td>
    <td>10th  October 2022</td>
    </tr>
   
    <tr>
    <td>    Registration and Camera Ready Copy Submission   </td>
    <td>25th October 2022</td>
    </tr>

    <tr>
    <td>Conference Date </td>
    <td >11-12th November 2022</td>
    </tr>
  </tbody>
</Table>


            </div>

            
            </div>
            );
        }          
    }
                
              
              export default Theme;