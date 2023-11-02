import { useState } from 'react'
import { fetchTokenUp } from '../api/user';
import { getUserFromToken } from '../api/token';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './form.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {signUp} from '../features/slices/userSlice';
import { fetchLevelTest } from '../api/levelTest';

function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch()


    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const user = {
            lastName: lastName,
            firstName: firstName,
            phone: phone,
            email: email,
            password: password,
            
        }
        //////////////הרשמה ושמירה של האוביקט בריאקט רידקס
        fetchTokenUp(user)
            .then((data) => setToken(data))
            .then(() => {
                /////////העברה לקומפוננטת ראוטינג
                dispatch(signUp({user:user}))
                navigate('/LevelTest', { replace: true });
            })
            .catch((err) => {
                console.log(err);
            });  
    }
    return (
        <><div id="background">
            <form onSubmit={submit}>
                <div >
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGridLastName"
                            placeholder="Levi"
                            name="lastName"
                            pattern="^[a-zA-Z\u0590-\u05FF -]+$" value={lastName}
                            minLength={2} maxLength={15}
                            title='השם משפחה חייב להכיל בין 2-15 אותיות בלבד'
                            onChange={e => setLastName(e.target.value)} required
                        />
                        <label htmlFor="floatingInputGridLastName">שם משפחה | Last Name</label>
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGridFirstName"
                            placeholder="Rivka"
                            name="firstName"
                            pattern="^[a-zA-Z\u0590-\u05FF -]+$" value={firstName}
                            minLength={2} maxLength={15}
                            title='השם פרטי חייב להכיל בין 2-15 אותיות בלבד'
                            onChange={e => setFirstName(e.target.value)} required
                        />
                        <label htmlFor="floatingInputGridFirstName">שם פרטי | First Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="tel" className="form-control" id="floatingInputGridPhone"
                            placeholder="052-1234567"
                            name="phone"
                            pattern="05?[0-9]-?[0-9]{7}" value={phone}
                            title="אנא הזן מספר סלולרי תקין"
                            onChange={e => setPhone(e.target.value)} required
                        />
                        <label htmlFor="floatingInputGridPhone">מספר נייד | Phone Number</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputGridEmail"
                            placeholder="name@example.com"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            value={email}
                            title="אנא הזן כתובת מייל תקינה"
                            onChange={e => setEmail(e.target.value)} required
                        />
                        <label htmlFor="floatingInputGridEmail">אימייל | Email</label>
                    </div>

                    <div className="form-floating">
                        <input type={showPassword ? 'text' : 'password'} className="form-control" id="floatingInputGridPassword"
                            placeholder="********"
                            name="password"
                            pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$'
                            value={password}
                            title="הסיסמה חייבת להכיל לפחות אות קטנה אחת, אות גדולה אחת, תו אחד ומספר אחד, 6-12 תווים."
                            onChange={handlePasswordChange} required
                        />
                        <span onClick={handleTogglePasswordVisibility}>
                            {showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16" >
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>}
                        </span>
                        <label htmlFor="floatingInputGridPassword">סיסמה | Password</label>
                    </div>
                </div>
                <div>
                    <Button variant="danger" type="submit">
                        כניסה
                    </Button>
                    <br />
                    <a href="SignIn">יש לך כבר חשבון? | ?You already have an account</a>
                </div>
            </form>
        </div>
        </>
    )
}

export default SignUp
