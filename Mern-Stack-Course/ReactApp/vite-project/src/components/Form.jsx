import React, { useState } from 'react'
import './form.css';
function Form() {
    const style = {
        backgroundImage: `url("https://4kwallpapers.com/images/walls/thumbs_3t/8324.png")`
      };
      const formStyle = {
        backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_3t/8324.png)',
        backgroundReapeat: 'no-repeat',
        backgroundSize:'cover',
        boxShadow: '1px 1px 30px 5px azure'
      }
      
      

      // const [name, setName] = useState("")
    
      // const [age, setAge] = useState("")
    
      // const [gender, setGender] = useState("")
   

      // const [dob, setDOB] = useState("")
   
      // const [country, setCountry] = useState("")
    
      // const [skills, setSkills] = useState([])
    //   const handleSkills = (e) =>
    //   {
    //     const value = e.target.value;
    // // Check if the skill is already selected
    //     setSkills(prevSkills =>
    //         prevSkills.includes(value)
    //                 ? prevSkills.filter(skill => skill !== value) // Remove if already selected
    //                 : [...prevSkills, value] // Add if not already selected
    //         );
    //   }

      const [file, setFile] = useState(null);

      // Handle file selection
      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]; // Get the first file from the file list
        setFile(selectedFile); // Update the state with the selected file
      }; 

      //const [formData, setFormData] = useState("")
      const handleFormData = (e) =>
      {
        e.preventDefault(); 
        //setFormData(e.target.value);
        const enteredData = document.getElementById("enteredData");     
        enteredData.style.display = 'grid'

      }

      const [formTempData,setFormTempData] = useState({
        name: "",
        age: "",
        gender: "",
        dob: "",
        country: "",
        skills: []
      })

      const handleFormTempData = (e) => {
        const { name, value } = e.target;
        setFormTempData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSkills = (e) => {
        const { value, checked } = e.target;
        setFormTempData(prevData => ({
          ...prevData,
          skills: checked
            ? [...prevData.skills, value] // Add the skill if checked
            : prevData.skills.filter(skill => skill !== value) // Remove the skill if unchecked
        }));
      };


  return (
    <div>
      <div 
      id="3rdClass" 
      style={style}>

    <h1 style={{color: 'azure'}}>3rd Class</h1>

     <p class="para"> This is a hiring portal ,enter your details here.</p>   
      <div 
      style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'}}
      >  
       
     
      <form class="heading heading2" id="form" style={formStyle} onSubmit={handleFormData}>
        <table>
        <tr>
            <td>
                <label for="name">Full Name : </label>
            </td>
            <td>
                <input type="text" value={formTempData.name} placeholder="Enter your full name" name="name" id="_name" onChange={handleFormTempData}/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="age">Age : </label>
            </td>
            <td>
                <input type="number" value={formTempData.age} onChange={handleFormTempData} placeholder="Enter your age" name="age" id="_age"  />
            </td>
        </tr>
        <tr>
            <td>
                <label>Gender : </label><br/>
            </td>
            <td>                
            <input type="radio" name="gender" id="_gender" value="Male" onChange={handleFormTempData} checked={formTempData.gender === "Male"} />
            <label for="gender" >Male</label>
            <br/>           
            <input type="radio" name="gender" id="_gender" value="Female"  onChange={handleFormTempData} checked={formTempData.gender === "Female"}/>
            <label for="gender" >Female</label>    
            </td>
        </tr>
        <tr>
            <td>
                <label for="dob" >Date of birth : </label>
            </td>
            <td>
                <input type="date" name="dob" id="_dob" value={formTempData.dob} onChange={handleFormTempData}  />
            </td>               
        </tr>
        <tr>
            <td>
                <label for="country">Country : </label>
            </td>
            <td>
                <select name="country" id="_country"  value={formTempData.country} onChange={handleFormTempData}                  
                >
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option  value="US">US</option>
                <option value="UK">UK</option>
            </select>
            </td>
        </tr>
        <tr>
            <td>
                <label for="Skills">Skills : </label><br/>
            </td>
            <td>            
                <input type="checkbox" name="Skills[]" value="JavaScript" id="_Skills[]" checked={formTempData.skills.includes("JavaScript")} onChange={handleSkills} style={{color: 'azure'}}/><label for="Skills" >JavaScript </label><br/>
                <input type="checkbox" name="Skills[]" value="Csharp"   id="_Skills[]" checked={formTempData.skills.includes("Csharp")} onChange={handleSkills} style={{color: 'azure'}}/><label for="Skills" >C# </label><br/>
                <input type="checkbox" name="Skills[]" value="React"    id="_Skills[]" checked={formTempData.skills.includes("React")} onChange={handleSkills} style={{color: 'azure'}}/><label for="Skills" >React </label><br/>
                <input type="checkbox" name="Skills[]" value="Tailwind" id="_Skills[]" checked={formTempData.skills.includes("Tailwind")} onChange={handleSkills} style={{color: 'azure'}}/><label for="Skills" >Tailwind </label><br/>
            </td>
        </tr>
        <tr>
            <td>
                <label for="cv">Upload your CV : </label>
            </td>
            <td>
                <input type="file" name="cv" id="_cv" onChange={handleFileChange}
                />
            </td>
        </tr>
        <tr>  
        
            <td colspan="2" style={{textAlign: 'center'}}>
                <input type="submit" value="Submit"/>
            </td>
        </tr>
    </table>
      </form>

    </div>
      </div>

      

      <div id="enteredData" style={{display: 'none'}}>
        <h1>Form Data</h1>
            <p>Name : {formTempData.name}</p>
            <p>Age : {formTempData.age}</p>
            <p>Gender : {formTempData.gender}</p>
            <p>DOB : {formTempData.dob}</p>
            <p>Country : {formTempData.country}</p>
            <p>Skills : {formTempData.skills}</p>
            <p><strong>Selected file:</strong> {file}</p>
            <p><strong>File size:</strong> {file} bytes</p>
            <p><strong>File type:</strong> {file}</p>
        </div>
    </div>
  )
}

export default Form
