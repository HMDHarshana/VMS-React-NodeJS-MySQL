import React from 'react'

import './adddetails.css';




function AddDetailForm() {
 

  return (
    <div>
        
       <div class="container">
       
        <div class="apply-box">
            <h1>Add Your Organization<span class="title-small"></span></h1>

            <form action="">
                <div class="form-container">
                
                    <div class="form-control">
                        <label for="Organizationname">Organization name</label>
                        <input type="Organizationname" id="Organizationname" name="Organizationname" placeholder="Enter Organization name"></input>
                    </div>
                    <div class="form-control">
                        <label for="Location">Location</label>
                        <select name="Location" id="Location">
                            <option value="">Select Location</option>
                            <option value="Galle">Galle</option>
                            <option value="Colombo">Colombo</option>
                            <option value="Kandy">Kandy</option>
                            <option value="Anuradhpura">Anuradhpura</option>
                        </select>
                    </div>
                    <div class="textarea-control">
                        <label for="About">About Your Organization</label>
                        <textarea name="About" id="About" cols="50" rows="2" placeholder="Enter About Your Organization(Minimum 50 words)"></textarea>
                        
                    </div>
                    <div class="textarea-control">
                        <label for="Description">Description</label>
                        <textarea name="Description" id="Description" cols="50" rows="8" placeholder="More details about Your Organization(Minimum 200 words)"></textarea>
                        
                    </div>
                    
                   
                    <div class="form-control">
                    <div class="textarea-control">
                        <label for="Accomadation">About Accomadation</label>
                        <textarea name="Accomadation" id="Accomadation" cols="50" rows="2" placeholder="Enter About Accomadation"></textarea>
                        
                    </div>
                    </div>
                    <div class="form-control">
                    <div class="textarea-control">
                        <label for="Meal&Food">About Meal&Food</label>
                        <textarea name="Meal&Food" id="Meal&Food" cols="50" rows="2" placeholder="Enter About Meal&Food"></textarea>
                        
                    </div>
                    </div><br></br>
                   
                   
                    <div class="form-control">
                        <label for="upload">Upload Your images</label>
                        <input type="file" id="upload" name="upload"/>
                    </div>
                    <label for="Conatact">Conatact details</label><br></br>
                        
                        <div class="form-control">
                        <label>Website URL</label>
                     <input type="url" id="WebsiteURL" name="Website" placeholder="Enter your website URL" /></div>
                     <div class="form-control">
                     <label>Youtube</label>
                     <input type="url" id="WebsiteURL2" name="Youtube" placeholder="Enter your Youtube URL" /></div>
                     <div class="form-control">
                     <label >Email</label>
                     <input type="email" id="WebsiteURL3" name="Email" placeholder="Enter your Email " /></div>
                     <div class="form-control">
                     <label>ContactNo</label>
                     <input type="text" id="Whatsapp" name="ContactNo" placeholder="Enter your Hotline" />
                     </div>
                    
                   
                </div>
                
                
                <div class="button-container">
                    <button type="submit">Create an account</button>
                </div>
            </form>
            
        </div>
    </div>
     
         
         
    </div>
    
     

  )
}

export default AddDetailForm
