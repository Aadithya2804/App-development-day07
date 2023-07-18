import './product.css';




function Product(){
    return(
        <div className="entire">
         <div className="productcontainer">
              <div className='prod1'>
                <div id="prod1img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKG-lkfw9Gr3slWW2XOPdVC5zKsoANQPFhjg&usqp=CAU" height="200" width="250"></img>
                </div>
                <div id="prod1content">
                        <br></br>
                        Upto 60% off Sports Products
                        <br></br>
                        <button id="btn1">GETSTARTED</button> 
                        </div>
                {/* <button>GETSTART</button>         */}

              </div>
              <div className='prod2'>
                <div id="prod2img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-By3TOfjfFj-FFjqcvuJnXoPoRAML8epcmg&usqp=CAU" height="200" width="250"></img>
                </div>
                <div id="prod2content">
                        <br></br>
                        Both running and jogging are forms of aerobic exercise.
A beginner to exercise should start with brisk walking, progress
 to jogging and work up to running.

                    <br></br>
                    <button id="btn2">GET STARTED</button>
                        </div>
              </div>
              <div className='prod3'>
                <div id="prod3img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGpdVoX0MRsfog_uKuYjjridnYc_TpV-WxQ&usqp=CAU" height="200" width="250"></img>
                </div>
                <div id="prod3content">
                        <br></br>
                        A gym is a club, building, or large room, usually containing special equipment, where people go to do physical exercise and get fit.
                        <button id="btn3"> GET STARTED</button>
                        
                        </div>
              </div>
         </div>
        </div>
    )
}

export default Product;
