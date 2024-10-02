import React from 'react'

import './adddetails.css';




function AddProject() {
 

  return (
    <div>
<h3>Add Your Project<span class="title-small"></span></h3><br/>
                <div class="form-control">
                        <label for="Projectname">Project name</label>
                        <input type="Projectname" id="Projectname" name="Projectname" placeholder="Enter Project name"></input>
                    </div>
                    <div class="form-control">
                        <label for="Position">Availalable Position</label>
                        <input type="Position" id="Position" name="Positione"placeholder=" Available Position"></input>
                    </div>
                    <div class="form-control">
                        <label for="Timeperiod">Time period</label>
                        <select name="Timeperiod" id="Timeperiod">
                            <option value="">Select Time period</option>
                            <option value="LongTerm">Long Term(More than 3 months)</option>
                            <option value="ShortTerm">Short Term(Less than 3 months)</option>
                           
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="Type">Type</label>
                        <select name="Type" id="Type">
                            <option value="">Select Type</option>
                            <option value="Education">Education</option>
                            <option value="Health">Health</option>
                            <option value="Environment">Environment</option>
                            <option value="Community">Community</option>
                        </select>
                    </div>
                    <div className="form-control">
              <label htmlFor="Timetable">Timetable</label>
              <table className="editable-table">
                <tbody>
                  {Array.from({ length: 7 }).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                      {Array.from({ length: 8 }).map((_, colIndex) => (
                        <td key={colIndex} contentEditable></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table></div>


    </div>)}

    export default AddProject