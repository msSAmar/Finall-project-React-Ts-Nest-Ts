import { useState } from 'react'
import { fetchTokenIn } from '../api/user';
import { getUserFromToken } from '../api/token';
import { Button, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/slices/userSlice'


function SignIn() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch();

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        setError(''); // Clear the error message when the password input changes
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
        setError(''); // Clear the error message when the email input changes
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setSubmitted(true);
/////////////////
        fetchTokenIn(email, password)
            .then((data) => setToken(data)).then((data) => console.log(data))
            .then(async () => {
                const user= await getUserFromToken(token,1)
                console.log(user);
                localStorage.setItem('token', token);
                dispatch(signIn({ user:  user}));

                navigate('/', { replace: true });
            })
            .catch((err) => {
                console.log(err)
            });

        // Email validation logic
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setError('Please enter valid details.');
            return;
        }
        // Password validation logic
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,12}$/;
        if (!passwordRegex.test(password)) {
            setError('Please enter valid details.');
            // setError('The password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*#?&). It should be between 6 to 12 characters.');
            return;
        }
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <TextField
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        title="Please enter a valid email address"
                        error={submitted && !email} // Add error prop to indicate required field
                        helperText={submitted && !email && "This is a required field"} // Customize error message appearance
                    />
                </div>
                <div>
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={submitted && !password} // Add error prop to indicate required field
                        helperText={submitted && !password && "This is a required field"} // Customize error message appearance
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                {error && <Typography color="error" variant="body2">{error}</Typography>} {/* Display error message */}
                <div>
                    <Button type="submit" variant="contained" color="primary">Log in</Button>
                </div>
                <div>
                    <Link href="/forgot-password">Forgot your password?</Link>
                </div>
            </form>
        </>
    )
}

export default SignIn


