import React from "react";

const Body = () => {
  return (
    <div>
      <div className="border">
        <table>
          <thead>
            <th colSpan="4">GENERAL INFORMATION</th>
          </thead>
          <tbody>
            <tr>
              <td className="right">Date:</td>
              <td>06.01.2021</td>
              <td className="right">Service Technician:</td>
              <td>technicianName</td>
            </tr>
            <tr>
              <td className="right">Manifold Type/Manufacture:</td>
              <td>typeManufacter</td>
              <td className="right">Customer Name:</td>
              <td>customerName</td>
            </tr>
            <tr>
              <td className="right">Company/Location Serviced:</td>
              <td>location</td>
              <td className="right">Customer Contact Name:</td>
              <td>customerContactName</td>
            </tr>
            <tr>
              <td className="right">Quote/Job Number:</td>
              <td>jobNumber</td>
              <td className="right">Customer Contact Number:</td>
              <td>customerContactNumber</td>
            </tr>
            <tr>
              <td className="right">Serial Number</td>
              <td>serialNumber</td>
              <td className="right">Customer Contact Email: </td>
              <td>customerContactEmail</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <th colSpan="4">6 MONTHS SERVICE</th>
          </thead>
          <tbody>
            <tr>
              <td className="left-numbers">1.</td>
              <td>
                Check that a cylinder is connected to the back-up facility
                regulator
              </td>
              <td colSpan="2" className="center">
                answer0
              </td>
            </tr>
            <tr>
              <td className="left-numbers">2.</td>
              <td>
                Check back-up facility regulator and hose for leaks and set
                pressures
              </td>
              <td colSpan="2" className="center">
                answer1
              </td>
            </tr>
            <tr>
              <td className="left-numbers">3.</td>
              <td>Record regulator type</td>
              <td colSpan="2" className="center">
                answer2
              </td>
            </tr>

            <tr>
              <td className="left-numbers">4.</td>
              <td>Record regulator pressure</td>
              <td colSpan="2" className="center">
                answer3
              </td>
            </tr>
            <tr>
              <td className="left-numbers">5.</td>
              <td>
                Check manifold for leaks, correct operation & set pressures
              </td>
              <td colSpan="2" className="center">
                answer4
              </td>
            </tr>
            <tr>
              <td rowSpan="2" className="left-numbers">
                6.
              </td>
              <td rowSpan="2">
                Correctly adjust both left & right sides of first stage
                regulators - Hight (KPa)
              </td>
              <td className="center left-numbers">Left</td>
              <td className="center left-numbers">Right</td>
            </tr>
            <tr>
              <td className="center">answer5</td>
              <td className="center">answer6</td>
            </tr>
            <tr>
              <td rowSpan="2" className="left-numbers">
                7.
              </td>
              <td rowSpan="2">
                Correctly adjust both left & right sides of first stage
                regulators - Low (kPa)
              </td>
              <td className="center left-numbers">Left</td>
              <td className="center left-numbers">Right</td>
            </tr>
            <tr>
              <td className="center">answer7</td>
              <td className="center">answer8</td>
            </tr>
            <tr>
              <td className="left-numbers">8.</td>
              <td>Check for smooth transfer of the changeover handle</td>
              <td colSpan="2" className="center">
                answer9
              </td>
            </tr>
            <tr>
              <td className="left-numbers">9.</td>
              <td>Check for correct operation of manifold</td>
              <td colSpan="2" className="center">
                answer10
              </td>
            </tr>
            <tr>
              <td className="left-numbers">10.</td>
              <td>
                Correctly adjust second stage regulator supply pressure when in
                operation
              </td>
              <td colSpan="2" className="center">
                answer11
              </td>
            </tr>
            <tr>
              <td className="left-numbers">11.</td>
              <td>Record pressure</td>
              <td colSpan="2" className="center">
                answer12
              </td>
            </tr>
            <tr>
              <td className="left-numbers">12.</td>
              <td>Check and adjust change over pressure switch</td>
              <td colSpan="2" className="center">
                answer13
              </td>
            </tr>
            <tr>
              <td className="left-numbers">13.</td>
              <td>Record pressure switch set pressure</td>
              <td colSpan="2" className="center">
                answer14
              </td>
            </tr>
            <tr>
              <td className="left-numbers">14.</td>
              <td>Check and adjust supply fail pressure switch</td>
              <td colSpan="2" className="center">
                answer15
              </td>
            </tr>
            <tr>
              <td className="left-numbers">15.</td>
              <td>Record pressure switch set pressure</td>
              <td colSpan="2" className="center">
                answer16
              </td>
            </tr>
            <tr>
              <td className="left-numbers">16.</td>
              <td>
                Check operation of non-return valves of manifold inlet
                connection(s)
              </td>
              <td colSpan="2" className="center">
                answer17
              </td>
            </tr>
            <tr>
              <td className="left-numbers">17.</td>
              <td>
                Inspect for external leaks on manifold connections, pipework &
                fittings
              </td>
              <td colSpan="2" className="center">
                answer18
              </td>
            </tr>
            <tr>
              <td className="left-numbers">18.</td>
              <td>
                Visually inspect manifold — check for unauthorised
                modifications, damage
              </td>
              <td colSpan="2" className="center">
                answer19
              </td>
            </tr>
            <tr>
              <td className="left-numbers">19.</td>
              <td>Check cylinder restraints installed & in use</td>
              <td colSpan="2" className="center">
                answer20
              </td>
            </tr>
            <tr>
              <td className="left-numbers">20.</td>
              <td>Check each lead with approved 'go/no-go' gauge</td>
              <td colSpan="2" className="center">
                answer21
              </td>
            </tr>
            <tr>
              <td className="left-numbers">21.</td>
              <td>Record date of manufacture for high pressure supply leads</td>
              <td colSpan="2" className="center">
                answer22
              </td>
            </tr>
            <tr>
              <td className="left-numbers">22.</td>
              <td>
                Inspect cylinder/pack extension leads for flexibility, metal
                fatigue & thread damage to cylinder/pack connections
              </td>
              <td colSpan="2" className="center">
                answer23
              </td>
            </tr>
            <tr>
              <td className="left-numbers">23.</td>
              <td>
                Check contents & pressure gauges for leaks, accuracy & operation
              </td>
              <td colSpan="2" className="center">
                answer24
              </td>
            </tr>
            <tr>
              <td className="left-numbers">24.</td>
              <td>Check 3 way valve for correct operation</td>
              <td colSpan="2" className="center">
                answer25
              </td>
            </tr>
            <tr>
              <td className="left-numbers">25.</td>
              <td>Check safety valves are in good condition & tagged</td>
              <td colSpan="2" className="center">
                answer26
              </td>
            </tr>
            <tr>
              <td className="left-numbers">26.</td>
              <td>Record safety valve test date</td>
              <td colSpan="2" className="center">
                answer27
              </td>
            </tr>
            <tr>
              <td className="left-numbers">27.</td>
              <td>Check all cylinders are open & connected</td>
              <td colSpan="2" className="center">
                answer28
              </td>
            </tr>
            <tr>
              <td className="left-numbers">28.</td>
              <td>Check signage correct & legible</td>
              <td colSpan="2" className="center">
                answer29
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <th colSpan="4">12 MONTHS SERVICE</th>
          </thead>
          <tbody>
            <tr>
              <td className="left-numbers">1.</td>
              <td>Service regulators as per manufacturer's instructions</td>
              <td colSpan="2" className="center">
                answer30
              </td>
            </tr>
            <tr>
              <td className="left-numbers">2.</td>
              <td>
                Check safety valves operate at set pressure (replace as
                necessary)
              </td>
              <td colSpan="2" className="center">
                answer31
              </td>
            </tr>
            <tr>
              <td className="left-numbers">3.</td>
              <td>Record set pressure of safety valves</td>
              <td colSpan="2" className="center">
                answer32
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
