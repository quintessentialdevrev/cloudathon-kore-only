import React from 'react'
import BlueBtn from '../components/blueBtn'


function Admin() {
  return (
    <div className='admin-master-master'>
        <div className='admin-master'>

            <div className='admin-left'>
                <div>
                    <input className='admin-left-input' type = "file" text = "upload"></input>
                </div>
                

            </div>

            <div className='admin-right'>
                <p>Add Book Name</p>
                <input className='admin-right-text-input' type = "text" placeholder = "Eg: The Invisible Mane"></input>
                <p>Add Author Name</p>
                <input className='admin-right-text-input' type = "text" placeholder = "Eg: HG Wells"></input>
                <h3>Select Genre</h3>
                <div className='checkbox-master'>
                    <div className='checkbox-left checkbox-div'>
                        <input type="checkbox" id="finance" name="finance" value="finance"/>
                        <label for="finance">Finance</label><br/>
                        <input type="checkbox" id="fantasy" name="fantasy" value="fantasy"/>
                        <label for="fantasy">Fantasy</label><br/>
                        <input type="checkbox" id="adventure" name="adventure" value="adventure"/>
                        <label for="adventure">Adventure</label><br/>
                        <input type="checkbox" id="fiction" name="fiction" value="fiction"/>
                        <label for="fiction">Fiction</label><br/>
                        <input type="checkbox" id="philipsophy" name="philipsophy" value="philipsophy"/>
                        <label for="philipsophy">Philipsophy</label><br/>
                        <input type="checkbox" id="cooking" name="cooking" value="cooking"/>
                        <label for="cooking">Cooking</label><br/>
                    </div>
                    <div className='checkbox-right checkbox-div'>
                        <input type="checkbox" id="finance" name="finance" value="finance"/>
                        <label for="finance">Finance</label><br/>
                        <input type="checkbox" id="fantasy" name="fantasy" value="fantasy"/>
                        <label for="fantasy">Fantasy</label><br/>
                        <input type="checkbox" id="adventure" name="adventure" value="adventure"/>
                        <label for="adventure">Adventure</label><br/>
                        <input type="checkbox" id="fiction" name="fiction" value="fiction"/>
                        <label for="fiction">Fiction</label><br/>
                        <input type="checkbox" id="philipsophy" name="philipsophy" value="philipsophy"/>
                        <label for="philipsophy">Philipsophy</label><br/>
                        <input type="checkbox" id="cooking" name="cooking" value="cooking"/>
                        <label for="cooking">Cooking</label><br/>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        <div className='bottom-most-div'>
            <BlueBtn className = "Addbook" text = "Add Book"/>
        </div>
        
    </div>
  )
}

export default Admin