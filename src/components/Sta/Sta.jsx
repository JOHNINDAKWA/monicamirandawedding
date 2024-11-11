import './Sta.css'

const Sta = () => {
  return (
    <div className='sta'>

        <div className="sta-container">
            <div className="sta-img">
                <img src="https://static.showit.co/400/4COA9XDBQ6qIBm8NpQYQfA/210288/08_25_23_taylor_and_kirill_intimate_wedding_in_arlington_heights_monicamirandaphotography_27_of_47.jpg" alt="" />

            </div>

            <div className="sta-content">
                <h3>Don&apos;t miss a thing</h3>

                <h1>join the list</h1>
                <hr />

                <p>Get in the know. <br />
                Sign up with your email address to receive <br />
                news and updates about what we&apos;ve been up to</p>


                <form action="">
                    <input type="text" placeholder='NAME' />
                    <input type="text" placeholder='EMAIL' />
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Sta
