
import cover from './transport.jpg';
import './LoginPage.css'; 
const LoginPage = () => {
  
 
  return (
    <div className="background-container">
      <div className="content-box">
        <div className="login-page">
          <div className="image-container">
            <img src={cover} alt="Cover" className="cover-image" />
          </div>
        
        
          <div className="text-container">
            <h1 className='head'>KEC BUS MANAGEMENT</h1>
            <h3 className="heading">Login</h3>
            <p className="subtext">Welcome Back! Please enter your details.</p>
            <input type="email" placeholder="Email" className="em" />
            <input type="password" placeholder="Password" className="em" />

            <button className='b'>LogIn</button>
            <button className='b'>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
