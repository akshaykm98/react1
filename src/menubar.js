import "./menubar.css"

export default function menubar() {
  
   
    return (
        <div className="header">
            <div className="headertitles">
                <span className="headertitlessm"> <div> 
                    <label>User Id</label>
                    <input
                    type='text'
                   
                   
                    ></input>
                </div></span>
                <span className="headertitleslg">Blog</span>
            </div>
            <img className="headerimg" src="https://images.pexels.com/photos/6692037/pexels-photo-6692037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
        </div>
    )
}
